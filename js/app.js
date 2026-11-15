/**
 * AquaMetrics Pro - Main Application Orchestrator
 */

import { VideoSyncEngine, createSyntheticSwimmingStream } from './videoSync.js';
import { BiomechCanvas, exportDualComparisonSnapshot } from './biomechCanvas.js';
import { PRO_LIBRARY } from './proLibrary.js';
import { StrokeRateCalculator } from './strokeRate.js';
import { AiCoachEngine } from './aiCoach.js';

class AquaMetricsApp {
  constructor() {
    this.currentStyle = 'freestyle';
    this.activePhaseIndex = 1; // Default to Catch (Presa EVF)
    this.measuredAngle = null;

    this.initElements();
    this.initEngines();
    this.initEventListeners();
    this.initKeyboardShortcuts();
    this.updateCoachPanel();

    // Trigger icon rendering
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Auto-load interactive swimming demos initially so user can test immediately
    this.loadSyntheticDemos();
  }

  initElements() {
    // Video Elements & Containers
    this.videoUser = document.getElementById('videoUser');
    this.videoPro = document.getElementById('videoPro');
    this.canvasUser = document.getElementById('canvasUser');
    this.canvasPro = document.getElementById('canvasPro');
    this.containerUser = document.getElementById('containerUser');
    this.containerPro = document.getElementById('containerPro');
    this.ghostContainer = document.getElementById('ghostContainer');
    this.userPlaceholder = document.getElementById('userPlaceholder');

    // Controls
    this.btnPlayPause = document.getElementById('btnPlayPause');
    this.playIcon = document.getElementById('playIcon');
    this.btnPrevFrame = document.getElementById('btnPrevFrame');
    this.btnNextFrame = document.getElementById('btnNextFrame');
    this.timelineSlider = document.getElementById('timelineSlider');
    this.currentTimelineTime = document.getElementById('currentTimelineTime');
    this.totalTimelineDuration = document.getElementById('totalTimelineDuration');
    this.btnLockSync = document.getElementById('btnLockSync');
    this.btnToggleLink = document.getElementById('btnToggleLink');
    this.syncStatusPill = document.getElementById('syncStatusPill');
    this.syncStatusText = document.getElementById('syncStatusText');
    this.btnToggleLoop = document.getElementById('btnToggleLoop');

    // Tool Buttons
    this.toolGoniometer = document.getElementById('toolGoniometer');
    this.toolGrid = document.getElementById('toolGrid');
    this.toolDraw = document.getElementById('toolDraw');
    this.toolArrow = document.getElementById('toolArrow');
    this.toolUndo = document.getElementById('toolUndo');
    this.toolClear = document.getElementById('toolClear');

    // Metrics badges
    this.cadenceBadge = document.getElementById('cadenceBadge');
    this.cycleTimeBadge = document.getElementById('cycleTimeBadge');
    this.btnTapCadence = document.getElementById('btnTapCadence');
    this.measuredAngleBadge = document.getElementById('measuredAngleBadge');
    this.targetAngleBadge = document.getElementById('targetAngleBadge');
    this.proAthleteName = document.getElementById('proAthleteName');

    // Modals & Drawers
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
    // 1. Video Sync Engine
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

    this.syncEngine.onStateChange = ({ isPlaying, playbackRate }) => {
      this.updatePlayPauseIcon(isPlaying);
    };

    // 2. Biomechanical Canvas Overlays (User & Pro)
    this.biomechUser = new BiomechCanvas(this.canvasUser, this.videoUser, 'Utente');
    this.biomechPro = new BiomechCanvas(this.canvasPro, this.videoPro, 'Pro');

    const handleAngle = (deg, label) => {
      this.measuredAngle = deg;
      this.updateAngleBadge(deg);
      this.updateCoachPanel();
    };
    this.biomechUser.onAngleMeasured = handleAngle;
    this.biomechPro.onAngleMeasured = handleAngle;

    // Window resize observer for responsive canvas matching
    const resizeObserver = new ResizeObserver(() => {
      this.biomechUser.resizeToVideo();
      this.biomechPro.resizeToVideo();
    });
    resizeObserver.observe(this.videoUser);
    resizeObserver.observe(this.videoPro);

    // 3. Cadence / Stroke Rate Engine
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

    // 4. AI Coach Engine
    this.aiCoach = new AiCoachEngine();
  }

  initEventListeners() {
    // Play / Pause
    this.btnPlayPause.addEventListener('click', () => this.syncEngine.togglePlay());
    this.btnPrevFrame.addEventListener('click', () => this.syncEngine.stepFrame(-1));
    this.btnNextFrame.addEventListener('click', () => this.syncEngine.stepFrame(1));

    // Playback Speed buttons
    document.querySelectorAll('.speed-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active', 'bg-cyan-500/20', 'text-[#00e5ff]', 'font-bold'));
        btn.classList.add('active', 'bg-cyan-500/20', 'text-[#00e5ff]', 'font-bold');
        const speed = parseFloat(btn.getAttribute('data-speed'));
        this.syncEngine.setSpeed(speed);
      });
    });

    // Timeline Scrubbing
    this.timelineSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      const duration = this.videoUser.duration || 10;
      const targetTime = (val / 100) * duration;
      this.syncEngine.seekUser(targetTime);
    });

    // Sync Locking & Link
    this.btnLockSync.addEventListener('click', () => {
      const offset = this.syncEngine.lockCurrentAsSyncPoint();
      this.syncStatusText.textContent = `Sincronia Allineata (Δ ${offset.toFixed(2)}s)`;
      this.showToast(`Sincronizzazione agganciata (Offset: ${offset.toFixed(2)}s)`);
    });

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

    // Loop A-B
    this.btnToggleLoop.addEventListener('click', () => {
      if (!this.syncEngine.loopEnabled) {
        // Set loop between current - 0.5s and current + 1.5s
        const cur = this.videoUser.currentTime;
        const dur = this.videoUser.duration || 5;
        const start = Math.max(0, cur - 0.2);
        const end = Math.min(dur, cur + 1.8);
        this.syncEngine.setLoopPoints(start, end);
        this.btnToggleLoop.classList.add('active');
        this.showToast(`Loop attivo: da ${start.toFixed(1)}s a ${end.toFixed(1)}s`);
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

    // Biomechanical Tools selection
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

    // User Video Upload
    const inputVideo = document.getElementById('inputVideoUser');
    inputVideo.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        this.videoUser.srcObject = null;
        this.videoUser.src = url;
        this.videoUser.load();
        this.userPlaceholder.classList.add('hidden');
        this.showToast(`Video caricato: ${file.name}`);
      }
    });

    document.getElementById('btnLoadUserDemo').addEventListener('click', () => {
      this.loadSyntheticDemos();
    });

    // Flip & Rotate buttons
    document.getElementById('btnFlipUser').addEventListener('click', () => this.syncEngine.toggleFlip('user'));
    document.getElementById('btnRotateUser').addEventListener('click', () => this.syncEngine.rotate('user'));
    document.getElementById('btnFlipPro').addEventListener('click', () => this.syncEngine.toggleFlip('pro'));
    document.getElementById('btnRotatePro').addEventListener('click', () => this.syncEngine.rotate('pro'));

    // Stroke Style Tabs
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
      if (val.startsWith('freestyle')) {
        this.proAthleteName.textContent = 'David Popovici (EVF)';
      } else if (val.startsWith('backstroke')) {
        this.proAthleteName.textContent = 'Thomas Ceccon (90°)';
      } else if (val.startsWith('breaststroke')) {
        this.proAthleteName.textContent = 'Adam Peaty (Cuore)';
      } else if (val.startsWith('butterfly')) {
        this.proAthleteName.textContent = 'Léon Marchand (Onda)';
      }
      this.updateCoachPanel();
    });

    // Cadence Tap Button
    this.btnTapCadence.addEventListener('click', () => {
      this.strokeCalculator.tap();
    });

    // Phase Selection in Drawer
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

    // Snapshot Export Button
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

    // Gemini AI Analysis Modal & Execution
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
      // Ignore if user is typing in an input
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

  loadSyntheticDemos() {
    // Generate synthetic animated streams for both User and Pro
    const userStream = createSyntheticSwimmingStream(this.currentStyle, 'user');
    const proStream = createSyntheticSwimmingStream(this.currentStyle, 'pro');

    this.videoUser.srcObject = userStream;
    this.videoPro.srcObject = proStream;

    this.videoUser.play().catch(() => {});
    this.videoPro.play().catch(() => {});

    this.userPlaceholder.classList.add('hidden');
  }

  onStyleChanged(styleKey) {
    const styleData = PRO_LIBRARY[styleKey] || PRO_LIBRARY.freestyle;
    this.proAthleteName.textContent = styleData.athlete;
    this.targetAngleBadge.textContent = styleData.phases[1].targetAngle;

    // Reload demos for selected style
    this.loadSyntheticDemos();
    this.updateCoachPanel();
  }

  updateTimelineUI(userTime, userDuration, proTime) {
    const format = (sec) => {
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      const ms = Math.floor((sec % 1) * 10);
      return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}.${ms}`;
    };

    document.getElementById('userTimeBadge').textContent = format(userTime);
    document.getElementById('proTimeBadge').textContent = format(proTime);
    this.currentTimelineTime.textContent = format(userTime);

    if (userDuration > 0) {
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

// Instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.aquaApp = new AquaMetricsApp();
});
