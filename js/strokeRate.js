/**
 * AquaMetrics Pro - Stroke Rate & Cadence Calculator
 * Allows manual tap tempo timing, cycle duration calculation and acoustic/visual rhythm training
 */

export class StrokeRateCalculator {
  constructor({ onUpdate } = {}) {
    this.taps = [];
    this.maxTaps = 4;
    this.onUpdate = onUpdate;
    this.audioCtx = null;
  }

  tap() {
    const now = performance.now();

    // Reset if last tap was more than 4 seconds ago
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

    // SPM = 60 / intervalSec
    const spm = Math.round(60 / intervalSec);
    const cycleTime = (intervalSec * 2).toFixed(2); // Complete 2-arm cycle

    let classification = 'Normale';
    let badgeClass = 'badge-cyan';

    if (spm > 50) {
      classification = 'Cadenza da Sprint (50m - 100m)';
      badgeClass = 'badge-rose';
    } else if (spm >= 38) {
      classification = 'Ritmo Gara Ottimale (200m - 400m)';
      badgeClass = 'badge-emerald';
    } else if (spm >= 30) {
      classification = 'Fondo / Scivolamento Prolungato (800m+)';
      badgeClass = 'badge-cyan';
    } else {
      classification = 'Cadenza Bassa / Eccessivo Stop';
      badgeClass = 'badge-amber';
    }

    const result = {
      spm,
      cycleTime,
      tapCount: this.taps.length,
      classification,
      badgeClass
    };

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
      osc.frequency.setValueAtTime(880, this.audioCtx.currentTime); // A5
      gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.08);
    } catch {
      // Audio autoplay might be blocked
    }
  }
}
