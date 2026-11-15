/**
 * AquaMetrics Pro - Dual Video Synchronization & Playback Engine
 * Handles lockstep frame scrubbing, A-B loop cycling, ghost overlay & orientation transforms
 */

export class VideoSyncEngine {
  constructor({ videoUser, videoPro, containerUser, containerPro, ghostContainer }) {
    this.videoUser = videoUser;
    this.videoPro = videoPro;
    this.containerUser = containerUser;
    this.containerPro = containerPro;
    this.ghostContainer = ghostContainer;

    // State
    this.isPlaying = false;
    this.playbackRate = 0.5; // Start in 0.5x slow motion for biomechanical analysis
    this.isLinked = true;
    this.syncOffset = 0; // t_pro = t_user + syncOffset

    // A-B Looping
    this.loopEnabled = false;
    this.loopStart = 0;
    this.loopEnd = 0;

    // Display mode: 'side-by-side' | 'stacked' | 'ghost' | 'user' | 'pro'
    this.displayMode = 'side-by-side';
    this.ghostOpacity = 0.5;

    // Video transforms (Flip, Rotate, Zoom)
    this.transforms = {
      user: { flipH: false, rotate: 0, zoom: 1 },
      pro: { flipH: false, rotate: 0, zoom: 1 }
    };

    // Animation frame for sync tracking
    this.rafId = null;

    // Callbacks
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
          userTime: this.videoUser.currentTime,
          userDuration: this.videoUser.duration || 0,
          proTime: this.videoPro.currentTime,
          proDuration: this.videoPro.duration || 0
        });
      }
    });
  }

  startSyncLoop() {
    this.stopSyncLoop();

    const loop = () => {
      if (this.isPlaying) {
        // Enforce A-B loop if enabled
        if (this.loopEnabled && this.loopEnd > this.loopStart) {
          if (this.videoUser.currentTime >= this.loopEnd) {
            this.videoUser.currentTime = this.loopStart;
            if (this.isLinked) {
              this.videoPro.currentTime = Math.max(0, this.loopStart + this.syncOffset);
            }
          }
        }

        // Keep Pro video in sync with User video
        if (this.isLinked && !this.videoUser.paused) {
          const expectedProTime = this.videoUser.currentTime + this.syncOffset;
          const drift = Math.abs(this.videoPro.currentTime - expectedProTime);
          if (drift > 0.08) {
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

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  async play() {
    this.videoUser.playbackRate = this.playbackRate;
    this.videoPro.playbackRate = this.playbackRate;

    try {
      await Promise.all([
        this.videoUser.play().catch(() => {}),
        this.videoPro.play().catch(() => {})
      ]);
      this.isPlaying = true;
      this.startSyncLoop();
    } catch (err) {
      console.warn('Playback interrupted:', err);
    }
  }

  pause() {
    this.videoUser.pause();
    this.videoPro.pause();
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

  seekPro(timeSeconds) {
    this.videoPro.currentTime = timeSeconds;
    if (this.isLinked) {
      // Recalculate sync offset based on manual adjustment
      this.syncOffset = this.videoPro.currentTime - this.videoUser.currentTime;
    }
  }

  stepFrame(deltaFrames) {
    this.pause();
    const dt = deltaFrames * (1 / 30); // ~0.0333s per frame

    this.videoUser.currentTime = Math.max(0, this.videoUser.currentTime + dt);
    if (this.isLinked) {
      this.videoPro.currentTime = Math.max(0, this.videoUser.currentTime + this.syncOffset);
    }
  }

  lockCurrentAsSyncPoint() {
    this.syncOffset = this.videoPro.currentTime - this.videoUser.currentTime;
    this.isLinked = true;
    return this.syncOffset;
  }

  resetSyncOffset() {
    this.syncOffset = 0;
  }

  toggleLink() {
    this.isLinked = !this.isLinked;
    if (this.isLinked) {
      this.syncOffset = this.videoPro.currentTime - this.videoUser.currentTime;
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

  // Visual Transforms
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

  // Display Layout Modes
  setDisplayMode(mode) {
    this.displayMode = mode;
    const grid = document.getElementById('videoSplitGrid');
    if (!grid) return;

    if (mode === 'side-by-side') {
      grid.className = 'grid grid-cols-1 lg:grid-cols-2 gap-4 h-full';
      this.containerUser.classList.remove('hidden');
      this.containerPro.classList.remove('hidden');
      this.ghostContainer.classList.add('hidden');
    } else if (mode === 'stacked') {
      grid.className = 'grid grid-cols-1 gap-4 h-full';
      this.containerUser.classList.remove('hidden');
      this.containerPro.classList.remove('hidden');
      this.ghostContainer.classList.add('hidden');
    } else if (mode === 'ghost') {
      grid.className = 'grid grid-cols-1 h-full';
      this.containerUser.classList.add('hidden');
      this.containerPro.classList.add('hidden');
      this.ghostContainer.classList.remove('hidden');
      this.updateGhostView();
    } else if (mode === 'user') {
      grid.className = 'grid grid-cols-1 h-full';
      this.containerUser.classList.remove('hidden');
      this.containerPro.classList.add('hidden');
      this.ghostContainer.classList.add('hidden');
    } else if (mode === 'pro') {
      grid.className = 'grid grid-cols-1 h-full';
      this.containerUser.classList.add('hidden');
      this.containerPro.classList.remove('hidden');
      this.ghostContainer.classList.add('hidden');
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
      ghostUser.srcObject = this.videoUser.srcObject || null;
      if (!ghostUser.srcObject && this.videoUser.src) ghostUser.src = this.videoUser.src;

      ghostPro.srcObject = this.videoPro.srcObject || null;
      if (!ghostPro.srcObject && this.videoPro.src) ghostPro.src = this.videoPro.src;

      ghostUser.currentTime = this.videoUser.currentTime;
      ghostPro.currentTime = this.videoPro.currentTime;
    }
  }
}

/**
 * Procedural Realistic Underwater Swimming Simulation Video Generator
 * Creates an instant high-FPS Canvas stream so users can test immediately without loading external videos!
 */
export function createSyntheticSwimmingStream(style = 'freestyle', role = 'pro') {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 360;
  const ctx = canvas.getContext('2d');

  let time = 0;
  const isUserSimulation = role === 'user';

  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Deep water gradient background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGrad.addColorStop(0, '#003366');
    bgGrad.addColorStop(0.3, '#001f3f');
    bgGrad.addColorStop(1, '#000c1a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Water surface with light caustic waves
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.4)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x += 15) {
      const y = 60 + Math.sin(x * 0.03 + time * 3) * 6;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Pool lane line / bottom grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 300);
      ctx.lineTo(x + 20, 360);
      ctx.stroke();
    }

    // Swimmer center
    const cx = 320;
    const cy = 140 + Math.sin(time * 2) * 5; // Slight vertical oscillation

    // Biomechanics: Cycle phase
    const cycle = (time * 1.5) % (Math.PI * 2);

    // Torso (Body alignment)
    // If user simulation, let's inject a realistic amateur error: dropped hips!
    const hipDrop = isUserSimulation ? 28 : 6;
    const bodyPitch = isUserSimulation ? 0.18 : 0.03; // User tilts upward (creates drag)

    const shoulderX = cx + 50;
    const shoulderY = cy;
    const hipX = cx - 70;
    const hipY = cy + hipDrop;

    // Head
    const headX = shoulderX + 25;
    const headY = shoulderY - 8 + (isUserSimulation ? -12 : 0); // User lifts head too much
    ctx.fillStyle = '#ffdbac';
    ctx.beginPath();
    ctx.arc(headX, headY, 14, 0, Math.PI * 2);
    ctx.fill();

    // Swim Cap & Goggles
    ctx.fillStyle = role === 'pro' ? '#00e5ff' : '#f59e0b';
    ctx.beginPath();
    ctx.arc(headX, headY, 14, Math.PI * 0.9, Math.PI * 2.1);
    ctx.fill();

    // Goggles
    ctx.fillStyle = '#0a0f18';
    ctx.fillRect(headX + 5, headY - 3, 8, 5);

    // Torso line
    ctx.strokeStyle = '#1e3a5f';
    ctx.lineWidth = 22;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(shoulderX, shoulderY);
    ctx.lineTo(hipX, hipY);
    ctx.stroke();

    // Swimmer swimsuit
    ctx.strokeStyle = role === 'pro' ? '#10b981' : '#3b82f6';
    ctx.lineWidth = 24;
    ctx.beginPath();
    ctx.moveTo(hipX + 15, hipY);
    ctx.lineTo(hipX - 25, hipY + 4);
    ctx.stroke();

    // Legs and Flutter Kick
    const kickSpeed = time * 7;
    const leg1Angle = Math.sin(kickSpeed) * 0.35;
    const leg2Angle = Math.sin(kickSpeed + Math.PI) * 0.35;

    // Upper leg & foot 1
    const knee1X = hipX - 60;
    const knee1Y = hipY + Math.sin(leg1Angle) * 30 + 10;
    const foot1X = knee1X - 55;
    const foot1Y = knee1Y + Math.sin(leg1Angle) * 20;

    ctx.strokeStyle = '#ffdbac';
    ctx.lineWidth = 9;
    ctx.beginPath();
    ctx.moveTo(hipX, hipY);
    ctx.lineTo(knee1X, knee1Y);
    ctx.lineTo(foot1X, foot1Y);
    ctx.stroke();

    // Foot 2
    const knee2X = hipX - 60;
    const knee2Y = hipY + Math.sin(leg2Angle) * 30 + 10;
    const foot2X = knee2X - 55;
    const foot2Y = knee2Y + Math.sin(leg2Angle) * 20;
    ctx.strokeStyle = 'rgba(255, 219, 172, 0.7)';
    ctx.beginPath();
    ctx.moveTo(hipX, hipY);
    ctx.lineTo(knee2X, knee2Y);
    ctx.lineTo(foot2X, foot2Y);
    ctx.stroke();

    // Arm Stroke (The Core Biomechanical Differentiator!)
    // In Pro: High Elbow Catch (EVF - 110° angle), arm pulls vertically.
    // In User: Dropped Elbow error (elbow drops to 80°-70° leading the pull, hand slips).
    let elbowX, elbowY, wristX, wristY;

    if (role === 'pro') {
      // Pro: Early Vertical Forearm
      const armPhase = Math.sin(cycle);
      const armDepth = Math.cos(cycle);

      if (armDepth > 0) {
        // Underwater Catch & Pull
        elbowX = shoulderX - 10 + armPhase * 40;
        elbowY = shoulderY + 30; // High elbow! Stays near surface
        wristX = elbowX - 20 + armPhase * 55;
        wristY = elbowY + 45; // Forearm vertical downwards
      } else {
        // Recovery
        elbowX = shoulderX + 20 + armPhase * 30;
        elbowY = shoulderY - 30; // High clean recovery
        wristX = elbowX + 30;
        wristY = elbowY + 15;
      }
    } else {
      // User: Classic Dropped Elbow & Slip
      const armPhase = Math.sin(cycle);
      const armDepth = Math.cos(cycle);

      if (armDepth > 0) {
        // Dropped elbow: elbow drops deep, hand trails behind
        elbowX = shoulderX - 35 + armPhase * 35;
        elbowY = shoulderY + 65; // Dropped elbow below shoulder line!
        wristX = elbowX + 25; // Hand fails to get vertical
        wristY = elbowY - 10;
      } else {
        // Flat recovery
        elbowX = shoulderX + 35;
        elbowY = shoulderY - 10;
        wristX = elbowX + 35;
        wristY = elbowY;
      }
    }

    // Draw Right Arm
    ctx.strokeStyle = '#ffdbac';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(shoulderX, shoulderY);
    ctx.lineTo(elbowX, elbowY);
    ctx.lineTo(wristX, wristY);
    ctx.stroke();

    // Draw Hand Paddle / Palm
    ctx.fillStyle = '#ffdbac';
    ctx.beginPath();
    ctx.arc(wristX, wristY, 8, 0, Math.PI * 2);
    ctx.fill();

    // Bubbles & Turbulence
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    for (let b = 0; b < 6; b++) {
      const bx = wristX - 20 - (b * 12 + ((time * 80 + b * 20) % 60));
      const by = wristY + Math.sin(b + time * 5) * 8;
      ctx.beginPath();
      ctx.arc(bx, by, 2 + (b % 3), 0, Math.PI * 2);
      ctx.fill();
    }

    // Label on video
    ctx.font = 'bold 12px JetBrains Mono, monospace';
    ctx.fillStyle = role === 'pro' ? '#10b981' : '#f59e0b';
    ctx.fillText(
      role === 'pro' ? 'DEMO PRO: Popovic EVF High Elbow' : 'DEMO UTENTE: Analisi Difetto Gomito Caduto',
      20,
      30
    );

    time += 0.033;
    requestAnimationFrame(drawFrame);
  }

  requestAnimationFrame(drawFrame);

  // Return canvas capture stream as HTMLMediaElement source
  return canvas.captureStream(30);
}
