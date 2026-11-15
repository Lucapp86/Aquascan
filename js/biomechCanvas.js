/**
 * AquaMetrics Pro - Biomechanical Canvas & Video Overlay Tools
 * Provides Goniometer (Angle calculation), Hydrodynamic Grids, Drawing Tools & Image Export
 */

export class BiomechCanvas {
  constructor(canvasElement, videoElement, label = 'User') {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.video = videoElement;
    this.label = label;

    this.currentTool = 'none'; // 'goniometer', 'line', 'arrow', 'freehand', 'grid', 'none'
    this.drawColor = '#00e5ff';
    this.lineWidth = 3;

    // Angle measurement points (A -> Vertex B -> C)
    this.anglePoints = [];
    this.storedAngles = []; // Array of { points: [A, B, C], angle: deg, idealRange: [min, max] }

    // Shapes and paths
    this.paths = []; // { type: 'freehand'|'line'|'arrow', points: [], color, width }
    this.isDrawing = false;
    this.showGrid = false;
    this.gridPitchAngle = 0; // Inclinazione corporea

    // Callback when angle is measured
    this.onAngleMeasured = null;

    this.initEvents();
  }

  resizeToVideo() {
    if (!this.video) return;
    const rect = this.video.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
      this.render();
    }
  }

  setTool(tool) {
    this.currentTool = tool;
    this.canvas.classList.toggle('interactive', tool !== 'none');
    if (tool === 'goniometer') {
      this.anglePoints = [];
    }
    this.render();
  }

  setColor(color) {
    this.drawColor = color;
  }

  toggleGrid(forceState = null) {
    this.showGrid = forceState !== null ? forceState : !this.showGrid;
    this.render();
    return this.showGrid;
  }

  clear() {
    this.anglePoints = [];
    this.storedAngles = [];
    this.paths = [];
    this.render();
  }

  undo() {
    if (this.anglePoints.length > 0) {
      this.anglePoints.pop();
    } else if (this.storedAngles.length > 0) {
      this.storedAngles.pop();
    } else if (this.paths.length > 0) {
      this.paths.pop();
    }
    this.render();
  }

  initEvents() {
    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const handlePointerDown = (e) => {
      if (this.currentTool === 'none') return;
      e.preventDefault();
      const pos = getPos(e);

      if (this.currentTool === 'goniometer') {
        this.anglePoints.push(pos);
        if (this.anglePoints.length === 3) {
          const deg = this.calculateAngle(this.anglePoints[0], this.anglePoints[1], this.anglePoints[2]);
          this.storedAngles.push({
            points: [...this.anglePoints],
            angle: Math.round(deg)
          });
          if (this.onAngleMeasured) {
            this.onAngleMeasured(Math.round(deg), this.label);
          }
          this.anglePoints = [];
        }
        this.render();
      } else if (this.currentTool === 'freehand') {
        this.isDrawing = true;
        this.paths.push({
          type: 'freehand',
          color: this.drawColor,
          width: this.lineWidth,
          points: [pos]
        });
      } else if (this.currentTool === 'line' || this.currentTool === 'arrow') {
        this.isDrawing = true;
        this.paths.push({
          type: this.currentTool,
          color: this.drawColor,
          width: this.lineWidth,
          start: pos,
          end: pos
        });
      }
    };

    const handlePointerMove = (e) => {
      if (!this.isDrawing) return;
      const pos = getPos(e);
      const currentPath = this.paths[this.paths.length - 1];

      if (!currentPath) return;

      if (currentPath.type === 'freehand') {
        currentPath.points.push(pos);
      } else if (currentPath.type === 'line' || currentPath.type === 'arrow') {
        currentPath.end = pos;
      }
      this.render();
    };

    const handlePointerUp = () => {
      this.isDrawing = false;
    };

    this.canvas.addEventListener('mousedown', handlePointerDown);
    this.canvas.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    this.canvas.addEventListener('touchstart', handlePointerDown, { passive: false });
    this.canvas.addEventListener('touchmove', handlePointerMove, { passive: false });
    window.addEventListener('touchend', handlePointerUp);
  }

  calculateAngle(pA, pB, pC) {
    // Vertex is B: angle between BA and BC
    const vBA = { x: pA.x - pB.x, y: pA.y - pB.y };
    const vBC = { x: pC.x - pB.x, y: pC.y - pB.y };

    const dot = vBA.x * vBC.x + vBA.y * vBC.y;
    const magBA = Math.sqrt(vBA.x * vBA.x + vBA.y * vBA.y);
    const magBC = Math.sqrt(vBC.x * vBC.x + vBC.y * vBC.y);

    if (magBA === 0 || magBC === 0) return 0;
    const cosTheta = Math.max(-1, Math.min(1, dot / (magBA * magBC)));
    return (Math.acos(cosTheta) * 180) / Math.PI;
  }

  render() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    // 1. Hydrodynamic Waterline & Grid
    if (this.showGrid) {
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 6]);

      // Water surface baseline (usually at 25% height)
      const waterlineY = h * 0.25;
      ctx.strokeStyle = '#00e5ff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, waterlineY);
      ctx.lineTo(w, waterlineY);
      ctx.stroke();

      // Label "Waterline"
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillStyle = '#00e5ff';
      ctx.fillText('LINEA ACQUA (0°)', 10, waterlineY - 6);

      // Horizontal grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      for (let y = waterlineY + 50; y < h; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Vertical grid lines
      for (let x = 50; x < w; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      ctx.restore();
    }

    // 2. Custom Drawings (Paths, Lines, Arrows)
    for (const p of this.paths) {
      ctx.save();
      ctx.strokeStyle = p.color;
      ctx.fillStyle = p.color;
      ctx.lineWidth = p.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (p.type === 'freehand' && p.points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(p.points[0].x, p.points[0].y);
        for (let i = 1; i < p.points.length; i++) {
          ctx.lineTo(p.points[i].x, p.points[i].y);
        }
        ctx.stroke();
      } else if (p.type === 'line') {
        ctx.beginPath();
        ctx.moveTo(p.start.x, p.start.y);
        ctx.lineTo(p.end.x, p.end.y);
        ctx.stroke();
      } else if (p.type === 'arrow') {
        this.drawArrow(ctx, p.start.x, p.start.y, p.end.x, p.end.y, p.width);
      }
      ctx.restore();
    }

    // 3. Stored Angles
    for (const item of this.storedAngles) {
      this.drawAngleGraphic(ctx, item.points[0], item.points[1], item.points[2], item.angle);
    }

    // 4. In-progress Angle measurement
    if (this.anglePoints.length > 0) {
      ctx.save();
      ctx.strokeStyle = '#f59e0b';
      ctx.fillStyle = '#f59e0b';
      ctx.lineWidth = 2;

      this.anglePoints.forEach((p, idx) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = '12px Inter, sans-serif';
        const labels = ['A (Spalla)', 'B (Gomito)', 'C (Polso)'];
        ctx.fillText(labels[idx] || `P${idx + 1}`, p.x + 10, p.y - 5);
      });

      if (this.anglePoints.length === 2) {
        ctx.beginPath();
        ctx.moveTo(this.anglePoints[0].x, this.anglePoints[0].y);
        ctx.lineTo(this.anglePoints[1].x, this.anglePoints[1].y);
        ctx.stroke();
      }
      ctx.restore();
    }
  }

  drawArrow(ctx, fromX, fromY, toX, toY, width) {
    const headlen = 14;
    const angle = Math.atan2(toY - fromY, toX - fromX);
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
  }

  drawAngleGraphic(ctx, pA, pB, pC, angleDeg) {
    ctx.save();

    // Color code based on ideal swimming angle:
    // 100°-120° = Green (Ideal EVF Catch)
    // 90°-100° or 120°-135° = Amber
    // <90° (Dropped elbow) or >140° = Red / Caution
    let badgeColor = '#10b981'; // green
    if (angleDeg < 95) badgeColor = '#f43f5e'; // red
    else if (angleDeg > 130) badgeColor = '#f59e0b'; // amber

    // Lines AB and BC
    ctx.strokeStyle = badgeColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(pA.x, pA.y);
    ctx.lineTo(pB.x, pB.y);
    ctx.lineTo(pC.x, pC.y);
    ctx.stroke();

    // Vertex marker
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(pB.x, pB.y, 5, 0, Math.PI * 2);
    ctx.fill();

    // Arc at vertex
    const r = 28;
    const angleA = Math.atan2(pA.y - pB.y, pA.x - pB.x);
    const angleC = Math.atan2(pC.y - pB.y, pC.x - pB.x);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(pB.x, pB.y, r, angleA, angleC, false);
    ctx.stroke();

    // Degree badge text background
    const text = `${angleDeg}°`;
    ctx.font = 'bold 14px JetBrains Mono, monospace';
    const textWidth = ctx.measureText(text).width;
    const badgeX = pB.x - textWidth / 2 - 8;
    const badgeY = pB.y - 32;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
    ctx.fillRect(badgeX, badgeY, textWidth + 16, 22);
    ctx.strokeStyle = badgeColor;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(badgeX, badgeY, textWidth + 16, 22);

    // Text
    ctx.fillStyle = badgeColor;
    ctx.fillText(text, badgeX + 8, badgeY + 16);

    ctx.restore();
  }
}

/**
 * High-Resolution Comparison Snapshot Export
 */
export async function exportDualComparisonSnapshot({
  videoUser,
  canvasUser,
  videoPro,
  canvasPro,
  meta = {}
}) {
  const exportCanvas = document.createElement('canvas');
  const expCtx = exportCanvas.getContext('2d');

  const width = 1920;
  const height = 1080;
  exportCanvas.width = width;
  exportCanvas.height = height;

  // Background
  expCtx.fillStyle = '#0a0f18';
  expCtx.fillRect(0, 0, width, height);

  // Header
  expCtx.fillStyle = '#121c2d';
  expCtx.fillRect(0, 0, width, 90);

  expCtx.font = 'bold 28px Inter, sans-serif';
  expCtx.fillStyle = '#00e5ff';
  expCtx.fillText('AQUAMETRICS PRO', 40, 52);

  expCtx.font = '16px Inter, sans-serif';
  expCtx.fillStyle = '#94a3b8';
  expCtx.fillText(`Analisi Biomeccanica Comparativa  •  Stile: ${meta.styleName || 'Stile Libero'}  •  Data: ${new Date().toLocaleDateString('it-IT')}`, 320, 52);

  // Split videos layout
  const paneWidth = (width - 120) / 2;
  const paneHeight = height - 200;
  const topY = 130;

  // Draw User Video + Canvas on Left
  const leftX = 40;
  expCtx.fillStyle = '#020408';
  expCtx.fillRect(leftX, topY, paneWidth, paneHeight);
  if (videoUser && videoUser.videoWidth) {
    expCtx.drawImage(videoUser, leftX, topY, paneWidth, paneHeight);
  }
  if (canvasUser) {
    expCtx.drawImage(canvasUser, leftX, topY, paneWidth, paneHeight);
  }

  // Label Left
  expCtx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  expCtx.fillRect(leftX + 20, topY + 20, 220, 36);
  expCtx.font = 'bold 16px Inter, sans-serif';
  expCtx.fillStyle = '#00e5ff';
  expCtx.fillText('ATLETA UTENTE', leftX + 35, topY + 44);

  // Draw Pro Video + Canvas on Right
  const rightX = leftX + paneWidth + 40;
  expCtx.fillStyle = '#020408';
  expCtx.fillRect(rightX, topY, paneWidth, paneHeight);
  if (videoPro && videoPro.videoWidth) {
    expCtx.drawImage(videoPro, rightX, topY, paneWidth, paneHeight);
  }
  if (canvasPro) {
    expCtx.drawImage(canvasPro, rightX, topY, paneWidth, paneHeight);
  }

  // Label Right
  expCtx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  expCtx.fillRect(rightX + 20, topY + 20, 280, 36);
  expCtx.font = 'bold 16px Inter, sans-serif';
  expCtx.fillStyle = '#10b981';
  expCtx.fillText(`PRO: ${meta.proAthlete || 'Benchmark Élite'}`, rightX + 35, topY + 44);

  // Footer notes & metrics
  expCtx.fillStyle = '#121c2d';
  expCtx.fillRect(0, height - 70, width, 70);

  expCtx.font = '14px JetBrains Mono, monospace';
  expCtx.fillStyle = '#e2e8f0';
  expCtx.fillText(`Target EVF: 100°-120° | Angolo Misurato: ${meta.measuredAngle ? meta.measuredAngle + '°' : 'N/D'} | Cadenza: ${meta.spm || '--'} SPM`, 40, height - 28);

  // Trigger Download
  const link = document.createElement('a');
  link.download = `aquametrics_confronto_${Date.now()}.png`;
  link.href = exportCanvas.toDataURL('image/png');
  link.click();
}
