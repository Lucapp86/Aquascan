/**
 * AquaMetrics Pro - Standalone Bundle
 * Self-contained, works with both file:// protocol (direct double-click) and http:// / GitHub Pages!
 */

(function () {
  'use strict';

  // ==========================================
  // 1. PRO LIBRARY & BIOMECHANICAL BENCHMARKS
  // ==========================================
  const PRO_LIBRARY = {
    freestyle: {
      id: 'freestyle',
      name: 'Stile Libero (Crawl)',
      athlete: 'Michael Phelps / David Popovici',
      tempoSPM: '38 - 46 SPM (Medio-Fondo) / 52 - 62 SPM (Sprint)',
      userVideo: 'assets/sample-swim.webm',
      proVideo: 'assets/phelps-pro.webm',
      fallbackUserUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ed/Mary%27s_Swim_Boot_Camp_-_Kari%27s_underwater_freestyle.webm/Mary%27s_Swim_Boot_Camp_-_Kari%27s_underwater_freestyle.webm.480p.vp9.webm',
      fallbackProUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/9/91/MP_Michael_Phelps_-_Chronos_Competition_Swim_Goggle_footage.webm/MP_Michael_Phelps_-_Chronos_Competition_Swim_Goggle_footage.webm.480p.vp9.webm',
      description: 'Trazione a gomito alto (EVF), rollio controllato di 35°-45° e battuta di gambe propulsiva costante.',
      phases: [
        {
          name: 'Ingresso e Scivolamento (Entry & Glide)',
          targetAngle: '160° - 175° (braccio quasi esteso)',
          keyPoint: 'La mano entra sulla linea prolungata della spalla, dita leggermente inclinate verso il basso. Non incrociare mai la linea mediana.',
          idealParams: { elbowAngle: 165, bodyRoll: 40, headPosition: 'Allineata con colonna, sguardo verso il fondo a 45°' }
        },
        {
          name: 'Presa d\'Acqua (Early Vertical Forearm - EVF)',
          targetAngle: '100° - 120° (gomito alto)',
          keyPoint: 'L\'avambraccio e la mano ruotano verso il basso creando una "pala" verticale prima che il gomito arretri.',
          idealParams: { elbowAngle: 110, bodyRoll: 35, headPosition: 'Fissa, zero sollevamento' }
        },
        {
          name: 'Trazione (Pull)',
          targetAngle: '90° - 105° (massima spinta)',
          keyPoint: 'Gomito sempre più alto della mano; la mano spinge l\'acqua all\'indietro mantenendo pressione costante sui polpastrelli.',
          idealParams: { elbowAngle: 95, bodyRoll: 20, headPosition: 'Stabile' }
        },
        {
          name: 'Spinta Finale (Push Phase)',
          targetAngle: '150° - 165° (accelerazione alla coscia)',
          keyPoint: 'Massima accelerazione del braccio fino all\'uscita del pollice a contatto con la coscia. Non anticipare l\'uscita.',
          idealParams: { elbowAngle: 160, bodyRoll: 45, headPosition: 'Inizio rollio per eventuale respirazione' }
        },
        {
          name: 'Recupero (Recovery)',
          targetAngle: '70° - 90° (gomito alto rilassato)',
          keyPoint: 'Gomito conduce il movimento verso l\'alto e in avanti; mano rilassata e vicina alla superficie dell\'acqua.',
          idealParams: { elbowAngle: 80, bodyRoll: 45, headPosition: 'Testa ruotata sul profilo dell\'onda (1 occhialino in acqua)' }
        }
      ],
      commonErrors: [
        {
          fault: 'Gomito Caduto (Dropped Elbow)',
          consequence: 'L\'acqua scivola sotto il braccio senza presa; perdita del 40% di propulsione.',
          drill: 'Sculling a gomito alto con boccaglio + Bracciata con palette corte senza cinghietto sul polso'
        },
        {
          fault: 'Incrocio della linea mediana (Crossover)',
          consequence: 'Genera serpeggiamento del bacino e aumenta la resistenza frontale.',
          drill: 'Esercizio "Binari del treno" (mani che entrano larghe all\'altezza delle spalle) con pull-buoy'
        },
        {
          fault: 'Sollevamento della testa per respirare',
          consequence: 'Il bacino e le gambe affondano immediatamente aumentando la superficie di attrito.',
          drill: 'Esercizio "Un occhialino dentro e uno fuori" a bordo vasca o con tavoletta laterale'
        },
        {
          fault: 'Mancata spinta finale (uscita anticipata al bacino)',
          consequence: 'Perdita della fase più potente e propulsiva della bracciata.',
          drill: 'Esercizio "Sfioramento coscia con il pollice" a ogni bracciata'
        }
      ]
    },

    backstroke: {
      id: 'backstroke',
      name: 'Dorso (Backstroke)',
      athlete: 'Thomas Ceccon / Ryan Murphy',
      tempoSPM: '36 - 44 SPM',
      userVideo: 'assets/sample-swim.webm',
      proVideo: 'assets/sample-backstroke.webm',
      fallbackUserUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1a/Backstroke_Underwater.webm/Backstroke_Underwater.webm.480p.vp9.webm',
      fallbackProUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1a/Backstroke_Underwater.webm/Backstroke_Underwater.webm.480p.vp9.webm',
      description: 'Asse orizzontale impeccabile, rollio costante di 40°-45° su entrambi i lati, flessione del gomito subacqueo a 90°.',
      phases: [
        {
          name: 'Ingresso della Mano',
          targetAngle: '170° - 180°',
          keyPoint: 'Mignolo entra per primo a ore 11 (braccio sinistro) o ore 1 (braccio destro). Braccio disteso.',
          idealParams: { elbowAngle: 175, bodyRoll: 45, headPosition: 'Fissa a guardare il soffitto, mento staccato dallo sterno' }
        },
        {
          name: 'Presa e Trazione (Catch & Pull)',
          targetAngle: '90° - 100° (gomito piegato lateralmente)',
          keyPoint: 'Il gomito si flette a 90° puntando verso il fondo della vasca. La mano spinge l\'acqua verso i piedi.',
          idealParams: { elbowAngle: 90, bodyRoll: 40, headPosition: 'Ferma, naso dritto' }
        },
        {
          name: 'Spinta e Uscita (Push & Finish)',
          targetAngle: '160° - 170°',
          keyPoint: 'Spinta energica verso il basso e verso i piedi; il pollice esce per primo dall\'acqua.',
          idealParams: { elbowAngle: 165, bodyRoll: 45, headPosition: 'Nessuna oscillazione laterale' }
        },
        {
          name: 'Recupero Aereo',
          targetAngle: '180° (braccio teso perpendicolare)',
          keyPoint: 'Braccio disteso e rilassato che compie un arco verticale perfetto, la spalla esce dall\'acqua grazie al rollio.',
          idealParams: { elbowAngle: 180, bodyRoll: 45, headPosition: 'Stabile' }
        }
      ],
      commonErrors: [
        {
          fault: 'Braccio teso durante la trazione subacquea',
          consequence: 'Sforzo articolare sulla spalla ed effetto leva inefficiente.',
          drill: 'Nuotata solo trazione con pull-buoy concentrandosi sul piegare il gomito a 90°'
        },
        {
          fault: 'Bacino basso "seduto" in acqua',
          consequence: 'Frenata idrodinamica massiccia causata dalla flessione eccessiva dell\'anca.',
          drill: 'Battuta di gambe sul dorso con tavoletta sulla pancia o braccia lungo i fianchi'
        }
      ]
    },

    breaststroke: {
      id: 'breaststroke',
      name: 'Rana (Breaststroke)',
      athlete: 'Adam Peaty (Record Mondiale)',
      tempoSPM: '32 - 42 SPM',
      userVideo: 'assets/sample-swim.webm',
      proVideo: 'assets/peaty-pro.webm',
      fallbackUserUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ed/Mary%27s_Swim_Boot_Camp_-_Kari%27s_underwater_freestyle.webm/Mary%27s_Swim_Boot_Camp_-_Kari%27s_underwater_freestyle.webm.480p.vp9.webm',
      fallbackProUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/6/66/Adam_Peaty_wins_100m_Breaststroke_silver_in_Glasgow.webm/Adam_Peaty_wins_100m_Breaststroke_silver_in_Glasgow.webm.480p.vp9.webm',
      description: 'Alternanza esplosiva tra massima trazione a cuore, sollevamento rapido del tronco e scivolamento idrodinamico a freccia.',
      phases: [
        {
          name: 'Scivolamento Idrodinamico (Streamline)',
          targetAngle: '180° (braccia e gambe tese)',
          keyPoint: 'Corpo teso a siluro, testa incassata tra le braccia, sguardo verso il fondo. Minima resistenza frontale.',
          idealParams: { elbowAngle: 180, bodyRoll: 0, headPosition: 'Occhi sul fondo, braccia incollate alle orecchie' }
        },
        {
          name: 'Presa Esterna (Outsweep)',
          targetAngle: '140° - 150°',
          keyPoint: 'Mani che si allargano a circa 45° con palmi rivolti all\'esterno senza superare la linea delle spalle.',
          idealParams: { elbowAngle: 145, bodyRoll: 0, headPosition: 'Inizio sollevamento naturale' }
        },
        {
          name: 'Trazione a Cuore (Insweep)',
          targetAngle: '80° - 90° (gomiti stretti)',
          keyPoint: 'Fase più potente: mani e avambracci si chiudono energicamente sotto il mento; gomiti sempre avanti al tronco.',
          idealParams: { elbowAngle: 85, bodyRoll: 0, headPosition: 'Testa sale per la respirazione' }
        },
        {
          name: 'Lancio delle Braccia & Gambata (Recovery & Kick)',
          targetAngle: '170° - 180° (estensione esplosiva)',
          keyPoint: 'Le mani "sparano" in avanti a freccia mentre i piedi eseguono la frustata a forbice convergente.',
          idealParams: { elbowAngle: 175, bodyRoll: 0, headPosition: 'Rientro immediato prima dello scivolamento' }
        }
      ],
      commonErrors: [
        {
          fault: 'Braccia che tirano troppo indietro (superando le spalle)',
          consequence: 'Grave rallentamento della fase di recupero e violazione del regolamento di gara.',
          drill: 'Esercizio rana con trazione corta mantenendo sempre i gomiti visibili nel campo visivo'
        },
        {
          fault: 'Gambata a forbice asimmetrica o ginocchia troppo aperte',
          consequence: 'Aumento enorme della resistenza dell\'acqua e spinta disuguale.',
          drill: 'Gambe a rana sul dorso con ginocchia tenute sommerse'
        }
      ]
    },

    butterfly: {
      id: 'butterfly',
      name: 'Farfalla / Delfino (Butterfly)',
      athlete: 'Léon Marchand / Caeleb Dressel',
      tempoSPM: '42 - 54 SPM',
      userVideo: 'assets/sample-swim.webm',
      proVideo: 'assets/butterfly-pro.webm',
      fallbackUserUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/e/ed/Mary%27s_Swim_Boot_Camp_-_Kari%27s_underwater_freestyle.webm/Mary%27s_Swim_Boot_Camp_-_Kari%27s_underwater_freestyle.webm.480p.vp9.webm',
      fallbackProUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/6/67/Butterfly_stroke_from_underwater.webm/Butterfly_stroke_from_underwater.webm.480p.vp9.webm',
      description: 'Doppia battuta propulsiva per ciclo, onda corporea originata dal petto e recupero a braccia decontratte radente l\'acqua.',
      phases: [
        {
          name: 'Ingresso e Prima Battuta',
          targetAngle: '160° - 170°',
          keyPoint: 'Mani entrano alla larghezza delle spalle con palmi all\'infuori, accompagnate dalla prima battuta di gambe verso il basso.',
          idealParams: { elbowAngle: 165, bodyRoll: 0, headPosition: 'Testa anticipa l\'ingresso delle braccia' }
        },
        {
          name: 'Trazione a Clessidra (Pull)',
          targetAngle: '90° - 100° (gomiti alti)',
          keyPoint: 'Avambracci verticali (EVF); le mani disegnano una traiettoria verso la linea mediana del corpo.',
          idealParams: { elbowAngle: 95, bodyRoll: 0, headPosition: 'Guarda avanti-basso' }
        },
        {
          name: 'Spinta e Seconda Battuta (Push & 2nd Kick)',
          targetAngle: '150° - 165° (uscita esplosiva)',
          keyPoint: 'Spinta oltre i fianchi con contemporanea seconda battuta di gambe che proietta il corpo in avanti.',
          idealParams: { elbowAngle: 160, bodyRoll: 0, headPosition: 'Mento a filo d\'acqua durante la respirazione' }
        },
        {
          name: 'Recupero Circolare Radente',
          targetAngle: '175° - 180°',
          keyPoint: 'Braccia quasi tese ma decontratte, lanciate in avanti a pelo d\'acqua sfruttando l\'inerzia della spinta.',
          idealParams: { elbowAngle: 175, bodyRoll: 0, headPosition: 'La testa rientra prima che le mani tocchino l\'acqua' }
        }
      ],
      commonErrors: [
        {
          fault: 'Respirazione troppo alta (collo iperesteso)',
          consequence: 'Grave affossamento delle anche e delle gambe, blocco dell\'avanzamento.',
          drill: 'Delfino senza respirazione (solo apnea 15m) + Respirazione laterale a stile'
        },
        {
          fault: 'Gambe senza coordinazione (battuta unica invece di doppia)',
          consequence: 'Perdita del momento d\'inerzia tra l\'ingresso e l\'uscita.',
          drill: 'Ondulazioni subacquee con braccia distese in streamline'
        }
      ]
    }
  };

  // ==========================================
  // 2. BIOMECHANICAL CANVAS & GONIOMETER
  // ==========================================
  class BiomechCanvas {
    constructor(canvasElement, videoElement, label = 'User') {
      this.canvas = canvasElement;
      this.ctx = canvasElement.getContext('2d');
      this.video = videoElement;
      this.label = label;

      this.currentTool = 'none';
      this.drawColor = '#00e5ff';
      this.lineWidth = 3;

      this.anglePoints = [];
      this.storedAngles = [];
      this.paths = [];
      this.isDrawing = false;
      this.showGrid = false;
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

      // Grid
      if (this.showGrid) {
        ctx.save();
        ctx.strokeStyle = '#00e5ff';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 6]);

        const waterlineY = h * 0.25;
        ctx.beginPath();
        ctx.moveTo(0, waterlineY);
        ctx.lineTo(w, waterlineY);
        ctx.stroke();

        ctx.font = '10px JetBrains Mono, monospace';
        ctx.fillStyle = '#00e5ff';
        ctx.fillText('LINEA ACQUA (0°)', 10, waterlineY - 6);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        for (let y = waterlineY + 50; y < h; y += 50) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
        for (let x = 50; x < w; x += 50) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Drawings
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

      // Stored Angles
      for (const item of this.storedAngles) {
        this.drawAngleGraphic(ctx, item.points[0], item.points[1], item.points[2], item.angle);
      }

      // In-progress Angle
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
      let badgeColor = '#10b981';
      if (angleDeg < 95) badgeColor = '#f43f5e';
      else if (angleDeg > 130) badgeColor = '#f59e0b';

      ctx.strokeStyle = badgeColor;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(pA.x, pA.y);
      ctx.lineTo(pB.x, pB.y);
      ctx.lineTo(pC.x, pC.y);
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(pB.x, pB.y, 5, 0, Math.PI * 2);
      ctx.fill();

      const r = 28;
      const angleA = Math.atan2(pA.y - pB.y, pA.x - pB.x);
      const angleC = Math.atan2(pC.y - pB.y, pC.x - pB.x);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(pB.x, pB.y, r, angleA, angleC, false);
      ctx.stroke();

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

      ctx.fillStyle = badgeColor;
      ctx.fillText(text, badgeX + 8, badgeY + 16);
      ctx.restore();
    }
  }

  // ==========================================
  // 3. VIDEO SYNC ENGINE
  // ==========================================
  class VideoSyncEngine {
    constructor({ videoUser, videoPro, containerUser, containerPro, ghostContainer }) {
      this.videoUser = videoUser;
      this.videoPro = videoPro;
      this.containerUser = containerUser;
      this.containerPro = containerPro;
      this.ghostContainer = ghostContainer;

      this.isPlaying = false;
      this.playbackRate = 0.5;
      this.isLinked = true;
      this.syncOffset = 0;

      this.loopEnabled = false;
      this.loopStart = 0;
      this.loopEnd = 0;

      this.displayMode = 'side-by-side';
      this.ghostOpacity = 0.5;

      this.transforms = {
        user: { flipH: false, rotate: 0 },
        pro: { flipH: false, rotate: 0 }
      };

      this.rafId = null;
      this.onTimeUpdate = null;
      this.onStateChange = null;

      this.initVideoListeners();
    }

    initVideoListeners() {
      this.videoUser.playbackRate = this.playbackRate;
      this.videoPro.playbackRate = this.playbackRate;

      const onPlay = () => {
        this.isPlaying = true;
        this.startSyncLoop();
        if (this.onStateChange) this.onStateChange({ isPlaying: true });
      };

      const onPause = () => {
        this.isPlaying = false;
        this.stopSyncLoop();
        if (this.onStateChange) this.onStateChange({ isPlaying: false });
      };

      this.videoUser.addEventListener('play', onPlay);
      this.videoUser.addEventListener('pause', onPause);
      this.videoPro.addEventListener('play', onPlay);
      this.videoPro.addEventListener('pause', onPause);

      this.videoUser.addEventListener('timeupdate', () => {
        if (this.onTimeUpdate) {
          this.onTimeUpdate({
            userTime: this.videoUser.currentTime || 0,
            userDuration: isFinite(this.videoUser.duration) ? this.videoUser.duration : 14,
            proTime: this.videoPro.currentTime || 0,
            proDuration: isFinite(this.videoPro.duration) ? this.videoPro.duration : 14
          });
        }
      });
    }

    startSyncLoop() {
      this.stopSyncLoop();
      const loop = () => {
        if (this.isPlaying) {
          if (this.loopEnabled && this.loopEnd > this.loopStart) {
            if (this.videoUser.currentTime >= this.loopEnd) {
              this.videoUser.currentTime = this.loopStart;
              if (this.isLinked) {
                this.videoPro.currentTime = Math.max(0, this.loopStart + this.syncOffset);
              }
            }
          }

          if (this.isLinked && !this.videoUser.paused) {
            const expectedProTime = this.videoUser.currentTime + this.syncOffset;
            const drift = Math.abs(this.videoPro.currentTime - expectedProTime);
            if (drift > 0.09) {
              this.videoPro.currentTime = Math.max(0, expectedProTime);
            }
          }
          this.rafId = requestAnimationFrame(loop);
        }
      };
      this.rafId = requestAnimationFrame(loop);
    }

    stopSyncLoop() {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
    }

    async togglePlay() {
      if (this.isPlaying) {
        this.pause();
      } else {
        await this.play();
      }
    }

    async play() {
      this.videoUser.playbackRate = this.playbackRate;
      this.videoPro.playbackRate = this.playbackRate;

      try {
        const p1 = this.videoUser.play ? this.videoUser.play().catch(() => {}) : Promise.resolve();
        const p2 = this.videoPro.play ? this.videoPro.play().catch(() => {}) : Promise.resolve();
        await Promise.all([p1, p2]);
        this.isPlaying = true;
        this.startSyncLoop();
      } catch (err) {
        console.warn('Play error:', err);
      }
    }

    pause() {
      if (this.videoUser.pause) this.videoUser.pause();
      if (this.videoPro.pause) this.videoPro.pause();
      this.isPlaying = false;
      this.stopSyncLoop();
    }

    setSpeed(rate) {
      this.playbackRate = rate;
      this.videoUser.playbackRate = rate;
      this.videoPro.playbackRate = rate;
      if (this.onStateChange) this.onStateChange({ playbackRate: rate });
    }

    seekUser(timeSeconds) {
      this.videoUser.currentTime = timeSeconds;
      if (this.isLinked) {
        const targetPro = Math.max(0, timeSeconds + this.syncOffset);
        if (this.videoPro.duration && targetPro <= this.videoPro.duration) {
          this.videoPro.currentTime = targetPro;
        }
      }
    }

    stepFrame(deltaFrames) {
      this.pause();
      const dt = deltaFrames * (1 / 30);
      this.videoUser.currentTime = Math.max(0, (this.videoUser.currentTime || 0) + dt);
      if (this.isLinked) {
        this.videoPro.currentTime = Math.max(0, this.videoUser.currentTime + this.syncOffset);
      }
    }

    lockCurrentAsSyncPoint() {
      this.syncOffset = (this.videoPro.currentTime || 0) - (this.videoUser.currentTime || 0);
      this.isLinked = true;
      return this.syncOffset;
    }

    toggleLink() {
      this.isLinked = !this.isLinked;
      if (this.isLinked) {
        this.syncOffset = (this.videoPro.currentTime || 0) - (this.videoUser.currentTime || 0);
      }
      return this.isLinked;
    }

    setLoopPoints(start, end) {
      this.loopStart = start;
      this.loopEnd = end;
      this.loopEnabled = true;
    }

    clearLoop() {
      this.loopEnabled = false;
      this.loopStart = 0;
      this.loopEnd = 0;
    }

    toggleFlip(target = 'user') {
      this.transforms[target].flipH = !this.transforms[target].flipH;
      this.applyTransform(target);
      return this.transforms[target].flipH;
    }

    rotate(target = 'user') {
      this.transforms[target].rotate = (this.transforms[target].rotate + 90) % 360;
      this.applyTransform(target);
      return this.transforms[target].rotate;
    }

    applyTransform(target) {
      const video = target === 'user' ? this.videoUser : this.videoPro;
      const t = this.transforms[target];
      const flip = t.flipH ? 'scaleX(-1)' : '';
      const rotate = `rotate(${t.rotate}deg)`;
      video.style.transform = `${flip} ${rotate}`;
    }

    setDisplayMode(mode) {
      this.displayMode = mode;
      const grid = document.getElementById('videoSplitGrid');
      if (!grid) return;

      if (mode === 'side-by-side') {
        grid.className = 'grid grid-cols-1 lg:grid-cols-2 gap-3 flex-1 min-h-[380px] sm:min-h-[460px] relative';
        this.containerUser.classList.remove('hidden');
        this.containerPro.classList.remove('hidden');
        this.ghostContainer.classList.add('hidden');
      } else if (mode === 'stacked') {
        grid.className = 'grid grid-cols-1 gap-3 flex-1 min-h-[380px] sm:min-h-[460px] relative';
        this.containerUser.classList.remove('hidden');
        this.containerPro.classList.remove('hidden');
        this.ghostContainer.classList.add('hidden');
      } else if (mode === 'ghost') {
        grid.className = 'grid grid-cols-1 flex-1 min-h-[380px] sm:min-h-[460px] relative';
        this.containerUser.classList.add('hidden');
        this.containerPro.classList.add('hidden');
        this.ghostContainer.classList.remove('hidden');
        this.updateGhostView();
      }
    }

    setGhostOpacity(val) {
      this.ghostOpacity = val;
      const ghostVideo = document.getElementById('ghostVideoPro');
      if (ghostVideo) {
        ghostVideo.style.opacity = val;
      }
    }

    updateGhostView() {
      const ghostUser = document.getElementById('ghostVideoUser');
      const ghostPro = document.getElementById('ghostVideoPro');
      if (ghostUser && ghostPro) {
        ghostUser.src = this.videoUser.src;
        ghostPro.src = this.videoPro.src;
        ghostUser.currentTime = this.videoUser.currentTime || 0;
        ghostPro.currentTime = this.videoPro.currentTime || 0;
      }
    }
  }

  // ==========================================
  // 4. STROKE RATE CALCULATOR
  // ==========================================
  class StrokeRateCalculator {
    constructor({ onUpdate } = {}) {
      this.taps = [];
      this.maxTaps = 4;
      this.onUpdate = onUpdate;
      this.audioCtx = null;
    }

    tap() {
      const now = performance.now();
      if (this.taps.length > 0 && (now - this.taps[this.taps.length - 1]) > 4000) {
        this.taps = [];
      }
      this.taps.push(now);
      if (this.taps.length > this.maxTaps) {
        this.taps.shift();
      }
      this.playClick();
      return this.calculate();
    }

    reset() {
      this.taps = [];
      if (this.onUpdate) {
        this.onUpdate({ spm: null, cycleTime: null, classification: '--' });
      }
    }

    calculate() {
      if (this.taps.length < 2) {
        const res = { spm: null, cycleTime: null, tapCount: this.taps.length, classification: 'Tocca ancora...' };
        if (this.onUpdate) this.onUpdate(res);
        return res;
      }

      const intervals = [];
      for (let i = 1; i < this.taps.length; i++) {
        intervals.push(this.taps[i] - this.taps[i - 1]);
      }
      const avgIntervalMs = intervals.reduce((a, b) => a + b, 0) / intervals.length;
      const intervalSec = avgIntervalMs / 1000;
      const spm = Math.round(60 / intervalSec);
      const cycleTime = (intervalSec * 2).toFixed(2);

      let classification = 'Normale';
      let badgeClass = 'badge-cyan';
      if (spm > 50) {
        classification = 'Cadenza da Sprint (50m - 100m)';
        badgeClass = 'badge-rose';
      } else if (spm >= 38) {
        classification = 'Ritmo Gara Ottimale (200m - 400m)';
        badgeClass = 'badge-emerald';
      } else if (spm >= 30) {
        classification = 'Fondo / Scivolamento (800m+)';
        badgeClass = 'badge-cyan';
      } else {
        classification = 'Cadenza Bassa / Stop prolungato';
        badgeClass = 'badge-amber';
      }

      const result = { spm, cycleTime, tapCount: this.taps.length, classification, badgeClass };
      if (this.onUpdate) this.onUpdate(result);
      return result;
    }

    playClick() {
      try {
        if (!this.audioCtx) {
          this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.audioCtx.state === 'suspended') {
          this.audioCtx.resume();
        }
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, this.audioCtx.currentTime);
        gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.08);
      } catch {}
    }
  }

  // ==========================================
  // 5. AI COACH ENGINE
  // ==========================================
  class AiCoachEngine {
    constructor() {
      this.apiKey = localStorage.getItem('aquametrics_gemini_key') || '';
    }

    setApiKey(key) {
      this.apiKey = key.trim();
      if (this.apiKey) {
        localStorage.setItem('aquametrics_gemini_key', this.apiKey);
      } else {
        localStorage.removeItem('aquametrics_gemini_key');
      }
    }

    getApiKey() {
      return this.apiKey;
    }

    generateOfflineReport({ styleKey = 'freestyle', measuredAngle = null, spm = null, activePhaseIndex = 1 }) {
      const styleData = PRO_LIBRARY[styleKey] || PRO_LIBRARY.freestyle;
      const currentPhase = styleData.phases[activePhaseIndex] || styleData.phases[1];

      let angleAnalysis = null;
      let score = 7.5;
      let mainFaults = [];
      let drills = [];

      if (measuredAngle !== null) {
        if (styleKey === 'freestyle') {
          if (measuredAngle < 95) {
            score = 5.5;
            angleAnalysis = {
              status: 'critical',
              title: 'Gomito Caduto (Dropped Elbow)',
              detail: `L'angolo misurato di ${measuredAngle}° è inferiore al target ideale (100°-120°). Il gomito arretra prima dell'avambraccio, disperdendo circa il 35% della massa d'acqua propulsiva.`,
              lossPercentage: '35%'
            };
            mainFaults.push('Mancata creazione della pala verticale (EVF) nella presa');
            mainFaults.push('Trazione condotta dal gomito invece che dalla mano e avambraccio');
            drills.push('Sculling subacqueo con boccaglio frontale (focus sulla posizione del gomito alto)');
            drills.push('Nuotata con palette senza cinghietto al polso (cadono se il gomito crolla)');
            drills.push('Bracciata a pugno chiuso per sviluppare sensibilità di presa');
          } else if (measuredAngle > 130) {
            score = 6.5;
            angleAnalysis = {
              status: 'warning',
              title: 'Braccio Eccessivamente Disteso',
              detail: `L'angolo di ${measuredAngle}° evidenzia una trazione a braccio troppo lungo, che sovraccarica la spalla e ritarda la fase di spinta.`,
              lossPercentage: '15-20%'
            };
            mainFaults.push('Leva meccanica eccessivamente rigida');
            drills.push('Esercizio "Trazione a gomito piegato" con pull-buoy');
            drills.push('Lavoro di trazione con elastici a bordo vasca');
          } else {
            score = 9.2;
            angleAnalysis = {
              status: 'success',
              title: 'Presa d\'Acqua Ottimale (EVF Élite)',
              detail: `Angolo di ${measuredAngle}° perfetto! L'avambraccio è perpendicolare alla direzione di avanzamento, garantendo massima spinta propulsiva.`,
              lossPercentage: '0%'
            };
          }
        }
      } else {
        mainFaults.push(styleData.commonErrors[0].fault);
        drills.push(styleData.commonErrors[0].drill);
        drills.push(styleData.commonErrors[1].drill);
      }

      return {
        styleName: styleData.name,
        benchmarkAthlete: styleData.athlete,
        phaseName: currentPhase.name,
        targetAngle: currentPhase.targetAngle,
        measuredAngle: measuredAngle ? `${measuredAngle}°` : 'Non rilevato (Usa il Goniometro)',
        score: score.toFixed(1),
        angleAnalysis,
        phasesDetail: styleData.phases,
        mainFaults: mainFaults.length > 0 ? mainFaults : ['Nessun errore critico rilevato'],
        drills: drills.length > 0 ? drills : [styleData.commonErrors[0].drill],
        cadenceAnalysis: spm ? `Frequenza: ${spm} SPM` : 'Cadenza non misurata'
      };
    }

    async analyzeWithGemini({ userVideo, proVideo, styleKey = 'freestyle', measuredAngle = null, spm = null }) {
      if (!this.apiKey) {
        throw new Error('Chiave API Google Gemini non configurata. Inseriscila nelle impostazioni (è gratuita!).');
      }

      const userFrameB64 = this.captureFrameAsBase64(userVideo);
      const proFrameB64 = this.captureFrameAsBase64(proVideo);
      const styleData = PRO_LIBRARY[styleKey] || PRO_LIBRARY.freestyle;

      const systemPrompt = `Sei un Allenatore Federale di Nuoto Olimpico ed esperto di biomeccanica e idrodinamica.
Analizza questi due fotogrammi comparativi:
1. FOTOGRAMMA 1: Atleta Utente (ripreso da smartphone).
2. FOTOGRAMMA 2: Nuotatore Professionista Élite (${styleData.athlete}) nello stile ${styleData.name}.

Dati aggiuntivi:
- Angolo al gomito/braccio misurato: ${measuredAngle ? measuredAngle + '°' : 'Non disponibile'}
- Cadenza stimata: ${spm ? spm + ' SPM' : 'Non misurata'}

Fornisci una perizia biomeccanica strutturata esattamente così:
# 🏊 Report Tecnico di Video-Analisi Biomeccanica
### 1. Confronto Diretto di Fase (Assetto & Posizione)
- **Assetto del corpo e galleggiamento:** [Confronta linea orizzontale, altezza del bacino e posizione testa]
- **Presa d'acqua (Catch) & EVF:** [Confronta gomito e verticalità dell'avambraccio]
- **Trazione e traiettoria della mano:** [Differenze propulsive]

### 2. Errori Tecnici Identificati
- **Difetto Prioritario 1:** [Descrizione e impatto]
- **Difetto Secondario 2:** [Descrizione]

### 3. Protocollo di Correzione in Vasca (3 Esercizi Specifici)
1. **[Esercizio 1]:** [Serie e spiegazione]
2. **[Esercizio 2]:** [Serie e spiegazione]
3. **[Esercizio 3]:** [Serie e spiegazione]

### 4. Pagella Biomeccanica
- **Efficienza Idrodinamica (Streamline):** [Voto /10]
- **Propulsione della Bracciata:** [Voto /10]
- **Voto Tecnico Complessivo:** [Voto /10]`;

      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${this.apiKey}`;
      const parts = [
        { text: systemPrompt },
        { inline_data: { mime_type: 'image/jpeg', data: userFrameB64.split(',')[1] } }
      ];
      if (proFrameB64) {
        parts.push({ inline_data: { mime_type: 'image/jpeg', data: proFrameB64.split(',')[1] } });
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts }], generationConfig: { temperature: 0.2, maxOutputTokens: 2048 } })
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(`Errore API Gemini (${response.status}): ${errJson.error?.message || response.statusText}`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error('Nessun testo generato dal modello AI.');
      return text;
    }

    captureFrameAsBase64(videoElement) {
      const canvas = document.createElement('canvas');
      canvas.width = 640;
      canvas.height = 360;
      const ctx = canvas.getContext('2d');
      if (videoElement && videoElement.videoWidth) {
        ctx.drawImage(videoElement, 0, 0, 640, 360);
      } else {
        ctx.fillStyle = '#0a0f18';
        ctx.fillRect(0, 0, 640, 360);
      }
      return canvas.toDataURL('image/jpeg', 0.85);
    }
  }

  // ==========================================
  // 6. HIGH-RESOLUTION SNAPSHOT EXPORT
  // ==========================================
  async function exportDualComparisonSnapshot({ videoUser, canvasUser, videoPro, canvasPro, meta = {} }) {
    const exportCanvas = document.createElement('canvas');
    const expCtx = exportCanvas.getContext('2d');
    const width = 1920;
    const height = 1080;
    exportCanvas.width = width;
    exportCanvas.height = height;

    expCtx.fillStyle = '#0a0f18';
    expCtx.fillRect(0, 0, width, height);

    expCtx.fillStyle = '#121c2d';
    expCtx.fillRect(0, 0, width, 90);

    expCtx.font = 'bold 28px Inter, sans-serif';
    expCtx.fillStyle = '#00e5ff';
    expCtx.fillText('AQUAMETRICS PRO', 40, 52);

    expCtx.font = '16px Inter, sans-serif';
    expCtx.fillStyle = '#94a3b8';
    expCtx.fillText(`Analisi Biomeccanica Comparativa  •  Stile: ${meta.styleName || 'Stile Libero'}  •  Data: ${new Date().toLocaleDateString('it-IT')}`, 320, 52);

    const paneWidth = (width - 120) / 2;
    const paneHeight = height - 200;
    const topY = 130;

    const leftX = 40;
    expCtx.fillStyle = '#020408';
    expCtx.fillRect(leftX, topY, paneWidth, paneHeight);
    if (videoUser && videoUser.videoWidth) {
      expCtx.drawImage(videoUser, leftX, topY, paneWidth, paneHeight);
    }
    if (canvasUser) {
      expCtx.drawImage(canvasUser, leftX, topY, paneWidth, paneHeight);
    }

    expCtx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    expCtx.fillRect(leftX + 20, topY + 20, 220, 36);
    expCtx.font = 'bold 16px Inter, sans-serif';
    expCtx.fillStyle = '#00e5ff';
    expCtx.fillText('ATLETA UTENTE', leftX + 35, topY + 44);

    const rightX = leftX + paneWidth + 40;
    expCtx.fillStyle = '#020408';
    expCtx.fillRect(rightX, topY, paneWidth, paneHeight);
    if (videoPro && videoPro.videoWidth) {
      expCtx.drawImage(videoPro, rightX, topY, paneWidth, paneHeight);
    }
    if (canvasPro) {
      expCtx.drawImage(canvasPro, rightX, topY, paneWidth, paneHeight);
    }

    expCtx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    expCtx.fillRect(rightX + 20, topY + 20, 280, 36);
    expCtx.font = 'bold 16px Inter, sans-serif';
    expCtx.fillStyle = '#10b981';
    expCtx.fillText(`PRO: ${meta.proAthlete || 'Benchmark Élite'}`, rightX + 35, topY + 44);

    expCtx.fillStyle = '#121c2d';
    expCtx.fillRect(0, height - 70, width, 70);
    expCtx.font = '14px JetBrains Mono, monospace';
    expCtx.fillStyle = '#e2e8f0';
    expCtx.fillText(`Target EVF: 100°-120° | Angolo Misurato: ${meta.measuredAngle ? meta.measuredAngle + '°' : 'N/D'} | Cadenza: ${meta.spm || '--'} SPM`, 40, height - 28);

    const link = document.createElement('a');
    link.download = `aquametrics_confronto_${Date.now()}.png`;
    link.href = exportCanvas.toDataURL('image/png');
    link.click();
  }

  // ==========================================
  // 7. AQUAMETRICS APP CONTROLLER
  // ==========================================
  class AquaMetricsApp {
    constructor() {
      this.currentStyle = 'freestyle';
      this.activePhaseIndex = 1;
      this.measuredAngle = null;

      this.initElements();
      this.initEngines();
      this.initEventListeners();
      this.initKeyboardShortcuts();
      this.loadDemoVideos();
      this.updateCoachPanel();

      if (window.lucide) {
        window.lucide.createIcons();
      }
    }

    initElements() {
      this.videoUser = document.getElementById('videoUser');
      this.videoPro = document.getElementById('videoPro');
      this.canvasUser = document.getElementById('canvasUser');
      this.canvasPro = document.getElementById('canvasPro');
      this.containerUser = document.getElementById('containerUser');
      this.containerPro = document.getElementById('containerPro');
      this.ghostContainer = document.getElementById('ghostContainer');
      this.userPlaceholder = document.getElementById('userPlaceholder');

      this.btnPlayPause = document.getElementById('btnPlayPause');
      this.playIcon = document.getElementById('playIcon');
      this.btnPrevFrame = document.getElementById('btnPrevFrame');
      this.btnNextFrame = document.getElementById('btnNextFrame');
      this.timelineSlider = document.getElementById('timelineSlider');
      this.currentTimelineTime = document.getElementById('currentTimelineTime');
      this.totalTimelineDuration = document.getElementById('totalTimelineDuration');
      this.btnLockSync = document.getElementById('btnLockSync');
      this.btnToggleLink = document.getElementById('btnToggleLink');
      this.syncStatusText = document.getElementById('syncStatusText');
      this.btnToggleLoop = document.getElementById('btnToggleLoop');

      this.toolGoniometer = document.getElementById('toolGoniometer');
      this.toolGrid = document.getElementById('toolGrid');
      this.toolDraw = document.getElementById('toolDraw');
      this.toolArrow = document.getElementById('toolArrow');
      this.toolUndo = document.getElementById('toolUndo');
      this.toolClear = document.getElementById('toolClear');

      this.cadenceBadge = document.getElementById('cadenceBadge');
      this.cycleTimeBadge = document.getElementById('cycleTimeBadge');
      this.btnTapCadence = document.getElementById('btnTapCadence');
      this.measuredAngleBadge = document.getElementById('measuredAngleBadge');
      this.targetAngleBadge = document.getElementById('targetAngleBadge');
      this.proAthleteName = document.getElementById('proAthleteName');

      this.coachDrawer = document.getElementById('coachDrawer');
      this.btnToggleCoachDrawer = document.getElementById('btnToggleCoachDrawer');
      this.btnCloseCoachDrawer = document.getElementById('btnCloseCoachDrawer');
      this.modalAiReport = document.getElementById('modalAiReport');
      this.modalSettings = document.getElementById('modalSettings');
      this.modalFilmingGuide = document.getElementById('modalFilmingGuide');
      this.btnExportSnapshot = document.getElementById('btnExportSnapshot');
      this.btnRunGeminiAnalysis = document.getElementById('btnRunGeminiAnalysis');
    }

    initEngines() {
      this.syncEngine = new VideoSyncEngine({
        videoUser: this.videoUser,
        videoPro: this.videoPro,
        containerUser: this.containerUser,
        containerPro: this.containerPro,
        ghostContainer: this.ghostContainer
      });

      this.syncEngine.onTimeUpdate = ({ userTime, userDuration, proTime }) => {
        this.updateTimelineUI(userTime, userDuration, proTime);
      };

      this.syncEngine.onStateChange = ({ isPlaying }) => {
        this.updatePlayPauseIcon(isPlaying);
      };

      this.biomechUser = new BiomechCanvas(this.canvasUser, this.videoUser, 'Utente');
      this.biomechPro = new BiomechCanvas(this.canvasPro, this.videoPro, 'Pro');

      const handleAngle = (deg) => {
        this.measuredAngle = deg;
        this.updateAngleBadge(deg);
        this.updateCoachPanel();
      };
      this.biomechUser.onAngleMeasured = handleAngle;
      this.biomechPro.onAngleMeasured = handleAngle;

      const resizeObserver = new ResizeObserver(() => {
        this.biomechUser.resizeToVideo();
        this.biomechPro.resizeToVideo();
      });
      resizeObserver.observe(this.videoUser);
      resizeObserver.observe(this.videoPro);

      this.strokeCalculator = new StrokeRateCalculator({
        onUpdate: (data) => {
          if (data.spm) {
            this.cadenceBadge.textContent = `${data.spm} SPM`;
            this.cadenceBadge.className = `px-2 py-0.5 rounded font-bold ${data.badgeClass || 'badge-cyan'}`;
            this.cycleTimeBadge.textContent = `Ciclo: ${data.cycleTime}s (${data.classification})`;
          } else {
            this.cadenceBadge.textContent = '-- SPM';
            this.cycleTimeBadge.textContent = data.classification || 'Ciclo: --s';
          }
        }
      });

      this.aiCoach = new AiCoachEngine();
    }

    loadDemoVideos(customProVideo = null) {
      const style = PRO_LIBRARY[this.currentStyle] || PRO_LIBRARY.freestyle;

      this.videoUser.muted = true;
      this.videoPro.muted = true;

      // 1. Left Video: Subject / User to analyze
      if (!this.userUploadedCustomVideo) {
        const userSrc = style.userVideo || style.fallbackUserUrl;
        this.videoUser.src = userSrc;
        this.videoUser.load();
      }

      // 2. Right Video: Actual World Champion Professional Benchmark!
      const proSrc = customProVideo || style.proVideo || style.fallbackProUrl;
      this.videoPro.src = proSrc;
      this.videoPro.load();

      // Update right athlete name badge
      if (this.proAthleteName) {
        this.proAthleteName.textContent = style.athlete;
      }

      // Hide placeholder
      if (this.userPlaceholder) {
        this.userPlaceholder.classList.add('hidden');
      }

      // Add fallback handlers
      this.videoUser.onerror = () => {
        if (this.videoUser.src !== style.fallbackUserUrl) {
          console.log('Fallback to remote video for user...');
          this.videoUser.src = style.fallbackUserUrl;
          this.videoUser.load();
        }
      };
      this.videoPro.onerror = () => {
        if (this.videoPro.src !== style.fallbackProUrl) {
          console.log('Fallback to remote video for pro...');
          this.videoPro.src = style.fallbackProUrl;
          this.videoPro.load();
        }
      };

      // Play on user click or loaded
      const tryAutoPlay = () => {
        this.syncEngine.play().catch(() => {});
      };

      this.videoUser.addEventListener('loadeddata', tryAutoPlay, { once: true });
      this.videoPro.addEventListener('loadeddata', tryAutoPlay, { once: true });

      // Start playing right away
      setTimeout(() => {
        this.syncEngine.play().catch(() => {});
      }, 300);
    }

    initEventListeners() {
      // Play / Pause Button
      this.btnPlayPause.addEventListener('click', () => {
        this.syncEngine.togglePlay();
      });

      // Clicking directly on the video stages toggles play/pause!
      this.containerUser.addEventListener('click', (e) => {
        if (this.biomechUser.currentTool === 'none' && !e.target.closest('button') && !e.target.closest('label')) {
          this.syncEngine.togglePlay();
        }
      });
      this.containerPro.addEventListener('click', (e) => {
        if (this.biomechPro.currentTool === 'none' && !e.target.closest('button') && !e.target.closest('select')) {
          this.syncEngine.togglePlay();
        }
      });

      this.btnPrevFrame.addEventListener('click', () => this.syncEngine.stepFrame(-1));
      this.btnNextFrame.addEventListener('click', () => this.syncEngine.stepFrame(1));

      // Speed Buttons
      document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active', 'bg-cyan-500/20', 'text-[#00e5ff]', 'font-bold'));
          btn.classList.add('active', 'bg-cyan-500/20', 'text-[#00e5ff]', 'font-bold');
          const speed = parseFloat(btn.getAttribute('data-speed'));
          this.syncEngine.setSpeed(speed);
        });
      });

      // Timeline Scrubber
      this.timelineSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        const duration = this.videoUser.duration || 14;
        const targetTime = (val / 100) * duration;
        this.syncEngine.seekUser(targetTime);
      });

      // Sync Lock
      this.btnLockSync.addEventListener('click', () => {
        const offset = this.syncEngine.lockCurrentAsSyncPoint();
        this.syncStatusText.textContent = `Sincronia Allineata (Δ ${offset.toFixed(2)}s)`;
        this.showToast(`Sincronizzazione agganciata (Offset: ${offset.toFixed(2)}s)`);
      });

      // Link Toggle
      this.btnToggleLink.addEventListener('click', () => {
        const isLinked = this.syncEngine.toggleLink();
        const linkIcon = document.getElementById('linkIcon');
        if (isLinked) {
          this.btnToggleLink.className = 'p-2 rounded-lg text-cyan-400 hover:bg-slate-800 border border-cyan-500/30 transition-colors';
          if (linkIcon) linkIcon.setAttribute('data-lucide', 'link');
          this.syncStatusText.textContent = 'Sincronia Attiva';
        } else {
          this.btnToggleLink.className = 'p-2 rounded-lg text-slate-500 hover:bg-slate-800 border border-white/10 transition-colors';
          if (linkIcon) linkIcon.setAttribute('data-lucide', 'unlink');
          this.syncStatusText.textContent = 'Sincronia Disattivata';
        }
        if (window.lucide) window.lucide.createIcons();
      });

      // Loop Toggle
      this.btnToggleLoop.addEventListener('click', () => {
        if (!this.syncEngine.loopEnabled) {
          const cur = this.videoUser.currentTime || 0;
          const dur = this.videoUser.duration || 14;
          const start = Math.max(0, cur - 0.2);
          const end = Math.min(dur, cur + 2.5);
          this.syncEngine.setLoopPoints(start, end);
          this.btnToggleLoop.classList.add('active');
          this.showToast(`Loop attivo: ${start.toFixed(1)}s - ${end.toFixed(1)}s`);
        } else {
          this.syncEngine.clearLoop();
          this.btnToggleLoop.classList.remove('active');
          this.showToast('Loop disattivato');
        }
      });

      // View Modes
      document.getElementById('viewSideBySide').addEventListener('click', (e) => this.switchViewMode('side-by-side', e.currentTarget));
      document.getElementById('viewStacked').addEventListener('click', (e) => this.switchViewMode('stacked', e.currentTarget));
      document.getElementById('viewGhost').addEventListener('click', (e) => this.switchViewMode('ghost', e.currentTarget));

      const ghostSlider = document.getElementById('ghostOpacitySlider');
      if (ghostSlider) {
        ghostSlider.addEventListener('input', (e) => {
          this.syncEngine.setGhostOpacity(parseFloat(e.target.value));
        });
      }

      // Biomechanical Tools
      this.toolGoniometer.addEventListener('click', () => this.setActiveTool('goniometer', this.toolGoniometer));
      this.toolGrid.addEventListener('click', () => {
        const active = this.biomechUser.toggleGrid();
        this.biomechPro.toggleGrid(active);
        this.toolGrid.classList.toggle('active', active);
      });
      this.toolDraw.addEventListener('click', () => this.setActiveTool('freehand', this.toolDraw));
      this.toolArrow.addEventListener('click', () => this.setActiveTool('arrow', this.toolArrow));
      this.toolUndo.addEventListener('click', () => {
        this.biomechUser.undo();
        this.biomechPro.undo();
      });
      this.toolClear.addEventListener('click', () => {
        this.biomechUser.clear();
        this.biomechPro.clear();
        this.measuredAngle = null;
        this.updateAngleBadge(null);
        this.updateCoachPanel();
      });

      // Video Upload
      const inputVideo = document.getElementById('inputVideoUser');
      inputVideo.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const url = URL.createObjectURL(file);
          this.videoUser.src = url;
          this.videoUser.load();
          this.userPlaceholder.classList.add('hidden');
          this.showToast(`Video caricato: ${file.name}`);
          setTimeout(() => {
            this.syncEngine.play().catch(() => {});
          }, 300);
        }
      });

      // Explicit Demo Button
      const btnLoad = document.getElementById('btnLoadUserDemo');
      if (btnLoad) {
        btnLoad.addEventListener('click', (e) => {
          e.stopPropagation();
          this.loadDemoVideos();
          this.syncEngine.play().catch(() => {});
          this.showToast('Video demo avviato!');
        });
      }

      if (this.userPlaceholder) {
        this.userPlaceholder.addEventListener('click', (e) => {
          if (!e.target.closest('label')) {
            this.loadDemoVideos();
            this.syncEngine.play().catch(() => {});
            this.showToast('Video demo avviato!');
          }
        });
      }

      // Flip & Rotate
      document.getElementById('btnFlipUser').addEventListener('click', () => this.syncEngine.toggleFlip('user'));
      document.getElementById('btnRotateUser').addEventListener('click', () => this.syncEngine.rotate('user'));
      document.getElementById('btnFlipPro').addEventListener('click', () => this.syncEngine.toggleFlip('pro'));
      document.getElementById('btnRotatePro').addEventListener('click', () => this.syncEngine.rotate('pro'));

      // Style Tabs
      document.querySelectorAll('.style-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.style-tab').forEach(t => {
            t.classList.remove('bg-cyan-500', 'text-slate-900');
            t.classList.add('text-slate-300');
          });
          tab.classList.add('bg-cyan-500', 'text-slate-900');
          tab.classList.remove('text-slate-300');

          this.currentStyle = tab.getAttribute('data-style');
          this.onStyleChanged(this.currentStyle);
        });
      });

      // Pro Preset Selector
      const selectPro = document.getElementById('selectProPreset');
      selectPro.addEventListener('change', (e) => {
        const val = e.target.value;
        let targetProVideo = null;

        if (val === 'freestyle-phelps') {
          this.proAthleteName.textContent = 'Michael Phelps (Stile Libero)';
          this.currentStyle = 'freestyle';
          targetProVideo = 'assets/phelps-pro.webm';
        } else if (val === 'freestyle-evf') {
          this.proAthleteName.textContent = 'David Popovici (EVF Gomito Alto)';
          this.currentStyle = 'freestyle';
          targetProVideo = 'assets/phelps-pro.webm';
        } else if (val === 'backstroke-ceccon') {
          this.proAthleteName.textContent = 'Thomas Ceccon (Dorso 90°)';
          this.currentStyle = 'backstroke';
          targetProVideo = 'assets/sample-backstroke.webm';
        } else if (val === 'breaststroke-peaty') {
          this.proAthleteName.textContent = 'Adam Peaty (Rana Élite)';
          this.currentStyle = 'breaststroke';
          targetProVideo = 'assets/peaty-pro.webm';
        } else if (val === 'butterfly-marchand') {
          this.proAthleteName.textContent = 'Léon Marchand (Farfalla Subacquea)';
          this.currentStyle = 'butterfly';
          targetProVideo = 'assets/butterfly-pro.webm';
        }

        // Highlight matching top style tab
        document.querySelectorAll('.style-tab').forEach(t => {
          const match = t.getAttribute('data-style') === this.currentStyle;
          t.classList.toggle('bg-cyan-500', match);
          t.classList.toggle('text-slate-900', match);
          t.classList.toggle('text-slate-300', !match);
        });

        this.loadDemoVideos(targetProVideo);
        this.updateCoachPanel();
      });

      // Cadence Tap
      this.btnTapCadence.addEventListener('click', () => {
        this.strokeCalculator.tap();
      });

      // Phase selection cards in drawer
      document.querySelectorAll('.phase-card').forEach(card => {
        card.addEventListener('click', () => {
          document.querySelectorAll('.phase-card').forEach(c => {
            c.classList.remove('bg-cyan-950/40', 'border-cyan-500/40');
            c.classList.add('bg-slate-900/80', 'border-white/5');
          });
          card.classList.add('bg-cyan-950/40', 'border-cyan-500/40');
          card.classList.remove('bg-slate-900/80', 'border-white/5');

          this.activePhaseIndex = parseInt(card.getAttribute('data-phase-idx'), 10);
          this.updateCoachPanel();
        });
      });

      // Drawer Toggles
      this.btnToggleCoachDrawer.addEventListener('click', () => {
        this.coachDrawer.classList.toggle('hidden');
      });
      this.btnCloseCoachDrawer.addEventListener('click', () => {
        this.coachDrawer.classList.add('hidden');
      });

      // Snapshot Export
      this.btnExportSnapshot.addEventListener('click', async () => {
        const styleData = PRO_LIBRARY[this.currentStyle] || PRO_LIBRARY.freestyle;
        await exportDualComparisonSnapshot({
          videoUser: this.videoUser,
          canvasUser: this.canvasUser,
          videoPro: this.videoPro,
          canvasPro: this.canvasPro,
          meta: {
            styleName: styleData.name,
            proAthlete: styleData.athlete,
            measuredAngle: this.measuredAngle,
            spm: this.cadenceBadge.textContent.replace(' SPM', '')
          }
        });
        this.showToast('Istantanea ad alta risoluzione salvata!');
      });

      // Settings Modal
      document.getElementById('btnOpenSettings').addEventListener('click', () => {
        const input = document.getElementById('inputApiKey');
        input.value = this.aiCoach.getApiKey();
        this.modalSettings.classList.remove('hidden');
      });
      document.getElementById('btnCloseSettings').addEventListener('click', () => {
        this.modalSettings.classList.add('hidden');
      });
      document.getElementById('btnSaveSettings').addEventListener('click', () => {
        const key = document.getElementById('inputApiKey').value;
        this.aiCoach.setApiKey(key);
        this.modalSettings.classList.add('hidden');
        this.showToast('Impostazioni salvate con successo!');
      });

      // Filming Guide Modal
      document.getElementById('btnOpenFilmingGuide').addEventListener('click', () => {
        this.modalFilmingGuide.classList.remove('hidden');
      });
      document.getElementById('btnCloseFilmingGuide').addEventListener('click', () => {
        this.modalFilmingGuide.classList.add('hidden');
      });
      document.getElementById('btnCloseFilmingGuideBottom').addEventListener('click', () => {
        this.modalFilmingGuide.classList.add('hidden');
      });

      // AI Analysis
      this.btnRunGeminiAnalysis.addEventListener('click', async () => {
        if (!this.aiCoach.getApiKey()) {
          this.modalSettings.classList.remove('hidden');
          this.showToast('Inserisci prima la tua chiave API Google Gemini (gratuita) nelle impostazioni.');
          return;
        }

        this.modalAiReport.classList.remove('hidden');
        const container = document.getElementById('aiReportContent');
        container.innerHTML = `
          <div class="flex flex-col items-center justify-center py-12 text-slate-400">
            <div class="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p class="text-xs font-mono">Elaborazione biomeccanica in corso con Google Gemini Vision...</p>
            <p class="text-[11px] text-slate-500 mt-1">Confronto fotogrammi, analisi assetto e stesura esercizi</p>
          </div>
        `;

        try {
          const reportMd = await this.aiCoach.analyzeWithGemini({
            userVideo: this.videoUser,
            proVideo: this.videoPro,
            styleKey: this.currentStyle,
            measuredAngle: this.measuredAngle,
            spm: this.cadenceBadge.textContent.replace(' SPM', '')
          });

          if (window.marked) {
            container.innerHTML = window.marked.parse(reportMd);
          } else {
            container.textContent = reportMd;
          }
        } catch (err) {
          container.innerHTML = `
            <div class="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-200">
              <h4 class="font-bold text-sm text-rose-400 mb-1">Errore durante l'analisi</h4>
              <p class="text-xs">${err.message}</p>
            </div>
          `;
        }
      });

      document.getElementById('btnCloseAiModal').addEventListener('click', () => {
        this.modalAiReport.classList.add('hidden');
      });
      document.getElementById('btnCloseAiModalBottom').addEventListener('click', () => {
        this.modalAiReport.classList.add('hidden');
      });
      document.getElementById('btnCopyReport').addEventListener('click', () => {
        const text = document.getElementById('aiReportContent').innerText;
        navigator.clipboard.writeText(text);
        this.showToast('Report copiato negli appunti!');
      });
    }

    initKeyboardShortcuts() {
      window.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

        if (e.code === 'Space') {
          e.preventDefault();
          this.syncEngine.togglePlay();
        } else if (e.code === 'ArrowLeft') {
          e.preventDefault();
          this.syncEngine.stepFrame(-1);
        } else if (e.code === 'ArrowRight') {
          e.preventDefault();
          this.syncEngine.stepFrame(1);
        } else if (e.key === 'g' || e.key === 'G') {
          this.setActiveTool('goniometer', this.toolGoniometer);
        } else if (e.key === 's' || e.key === 'S') {
          this.syncEngine.lockCurrentAsSyncPoint();
          this.showToast('Sync agganciata!');
        }
      });
    }

    onStyleChanged(styleKey) {
      const styleData = PRO_LIBRARY[styleKey] || PRO_LIBRARY.freestyle;
      this.proAthleteName.textContent = styleData.athlete;
      this.targetAngleBadge.textContent = styleData.phases[1].targetAngle;

      const selectPro = document.getElementById('selectProPreset');
      if (selectPro) {
        if (styleKey === 'freestyle') selectPro.value = 'freestyle-phelps';
        else if (styleKey === 'backstroke') selectPro.value = 'backstroke-ceccon';
        else if (styleKey === 'breaststroke') selectPro.value = 'breaststroke-peaty';
        else if (styleKey === 'butterfly') selectPro.value = 'butterfly-marchand';
      }

      this.loadDemoVideos();
      this.updateCoachPanel();
    }

    updateTimelineUI(userTime, userDuration, proTime) {
      const format = (sec) => {
        if (isNaN(sec)) return '00:00.0';
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        const ms = Math.floor((sec % 1) * 10);
        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}.${ms}`;
      };

      document.getElementById('userTimeBadge').textContent = format(userTime);
      document.getElementById('proTimeBadge').textContent = format(proTime);
      this.currentTimelineTime.textContent = format(userTime);

      if (userDuration > 0 && isFinite(userDuration)) {
        this.totalTimelineDuration.textContent = format(userDuration);
        this.timelineSlider.value = (userTime / userDuration) * 100;
      }
    }

    updatePlayPauseIcon(isPlaying) {
      if (this.playIcon) {
        this.playIcon.setAttribute('data-lucide', isPlaying ? 'pause' : 'play');
        if (window.lucide) window.lucide.createIcons();
      }
    }

    switchViewMode(mode, triggerBtn) {
      document.querySelectorAll('.view-btn').forEach(b => {
        b.classList.remove('active', 'text-cyan-400', 'font-semibold');
        b.classList.add('text-slate-400');
      });
      triggerBtn.classList.add('active', 'text-cyan-400', 'font-semibold');
      triggerBtn.classList.remove('text-slate-400');

      this.syncEngine.setDisplayMode(mode);
      setTimeout(() => {
        this.biomechUser.resizeToVideo();
        this.biomechPro.resizeToVideo();
      }, 150);
    }

    setActiveTool(toolName, btnElement) {
      const isActive = btnElement.classList.contains('active');
      document.querySelectorAll('.btn-tool').forEach(b => b.classList.remove('active'));

      if (isActive) {
        this.biomechUser.setTool('none');
        this.biomechPro.setTool('none');
      } else {
        btnElement.classList.add('active');
        this.biomechUser.setTool(toolName);
        this.biomechPro.setTool(toolName);
        if (toolName === 'goniometer') {
          this.showToast('Goniometro attivo: tocca Spalla -> Gomito -> Polso');
        }
      }
    }

    updateAngleBadge(deg) {
      if (deg === null) {
        this.measuredAngleBadge.textContent = 'Usa il goniometro';
        this.measuredAngleBadge.className = 'px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-900 border border-white/10 text-slate-300';
        return;
      }

      let badgeClass = 'border-emerald-500/40 text-emerald-400 bg-emerald-950/60';
      let statusText = 'Ottimale (EVF)';
      if (deg < 95) {
        badgeClass = 'border-rose-500/40 text-rose-400 bg-rose-950/60';
        statusText = 'Gomito Caduto!';
      } else if (deg > 130) {
        badgeClass = 'border-amber-500/40 text-amber-400 bg-amber-950/60';
        statusText = 'Braccio Teso';
      }

      this.measuredAngleBadge.innerHTML = `<span class="text-white">${deg}°</span> • ${statusText}`;
      this.measuredAngleBadge.className = `px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${badgeClass}`;
    }

    updateCoachPanel() {
      const report = this.aiCoach.generateOfflineReport({
        styleKey: this.currentStyle,
        measuredAngle: this.measuredAngle,
        spm: this.cadenceBadge.textContent.replace(' SPM', ''),
        activePhaseIndex: this.activePhaseIndex
      });

      document.getElementById('coachScoreBadge').innerHTML = `${report.score}<span class="text-xs text-slate-400 font-normal">/10</span>`;
      document.getElementById('coachScoreBar').style.width = `${parseFloat(report.score) * 10}%`;

      const summaryVerdict = document.getElementById('coachSummaryVerdict');
      if (report.angleAnalysis) {
        summaryVerdict.textContent = report.angleAnalysis.detail;
      } else {
        summaryVerdict.textContent = `Fase analizzata: ${report.phaseName}. Target ideale: ${report.targetAngle}.`;
      }

      const drillsList = document.getElementById('coachDrillsList');
      drillsList.innerHTML = report.drills.map((drill, idx) => `
        <div class="p-2 rounded-lg bg-slate-900/80 border border-white/5 flex items-start gap-2">
          <span class="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">${idx + 1}</span>
          <span class="leading-tight">${drill}</span>
        </div>
      `).join('');
    }

    showToast(message) {
      const existing = document.getElementById('aquaToast');
      if (existing) existing.remove();

      const toast = document.createElement('div');
      toast.id = 'aquaToast';
      toast.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-slate-900/95 border border-cyan-500/50 text-cyan-300 font-mono text-xs shadow-2xl flex items-center gap-2 animate-fade-in backdrop-blur-md';
      toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>${message}`;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.remove();
      }, 3200);
    }
  }

  // Auto-init on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.aquaApp = new AquaMetricsApp();
    });
  } else {
    window.aquaApp = new AquaMetricsApp();
  }
})();
