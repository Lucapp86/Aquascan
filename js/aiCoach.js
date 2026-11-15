/**
 * AquaMetrics Pro - AI Swimming Coach Engine
 * Combines offline biomechanical heuristic diagnostics + Gemini Vision Multimodal AI coaching
 */

import { PRO_LIBRARY } from './proLibrary.js';

export class AiCoachEngine {
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

  /**
   * 1. Offline Biomechanical Diagnostic Report
   * Instant, 100% free, no network required.
   */
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
            title: 'Gomito Caduto (Dropped Elbow / Catch Slip)',
            detail: `L'angolo misurato di ${measuredAngle}° è significativamente inferiore al target ottimale (100°-120°). Il gomito arretra prima dell'avambraccio, disperdendo la massa d'acqua propulsiva.`,
            lossPercentage: '30-40%'
          };
          mainFaults.push('Mancata creazione della pala verticale (EVF) nella presa');
          mainFaults.push('Trazione condotta dal gomito invece che dalla mano e avambraccio');
          drills.push('Sculling subacqueo con boccaglio frontale (focus sulla posizione del gomito alto)');
          drills.push('Nuotata con palette senza cinghietto al polso (cadono se il gomito crolla)');
          drills.push('Esercizio "Bracciata a pugno chiuso" per sviluppare sensibilità di presa con l\'avambraccio');
        } else if (measuredAngle > 130) {
          score = 6.5;
          angleAnalysis = {
            status: 'warning',
            title: 'Braccio Eccessivamente Disteso',
            detail: `L'angolo di ${measuredAngle}° evidenzia una trazione a braccio troppo lungo, che sovraccarica la cuffia dei rotatori e ritarda la fase di spinta.`,
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
            lossPercentage: '0% (Efficienza massima)'
          };
        }
      }
    } else {
      // Default fault analysis for demo
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
      mainFaults: mainFaults.length > 0 ? mainFaults : ['Nessun errore macroscopico rilevato sull\'angolo'],
      drills: drills.length > 0 ? drills : [styleData.commonErrors[0].drill],
      cadenceAnalysis: spm ? `Frequenza attuale: ${spm} SPM (${spm < 35 ? 'Bassa' : spm > 50 ? 'Sprint' : 'Ottimale'})` : 'Cadenza non misurata'
    };
  }

  /**
   * 2. Online Vision AI Coach (Google Gemini Multimodal API)
   * Captures synchronized frames and sends them to Gemini for elite coach breakdown.
   */
  async analyzeWithGemini({
    userVideo,
    proVideo,
    styleKey = 'freestyle',
    measuredAngle = null,
    spm = null
  }) {
    if (!this.apiKey) {
      throw new Error('Chiave API Google Gemini non configurata. Inseriscila nelle impostazioni (è gratuita!).');
    }

    // Capture current frame from user video
    const userFrameB64 = this.captureFrameAsBase64(userVideo);
    // Capture current frame from pro video
    const proFrameB64 = this.captureFrameAsBase64(proVideo);

    const styleData = PRO_LIBRARY[styleKey] || PRO_LIBRARY.freestyle;

    const systemPrompt = `Sei un Allenatore Federale di Nuoto Olimpico ed esperto internazionale di biomeccanica e idrodinamica.
Ti vengono fornite due immagini sincronizzate:
1. FOTOGRAMMA 1: Atleta Utente (ripreso da smartphone).
2. FOTOGRAMMA 2: Nuotatore Professionista Élite (${styleData.athlete}) nello stile ${styleData.name}.

Dati aggiuntivi:
- Angolo al gomito/braccio misurato: ${measuredAngle ? measuredAngle + '°' : 'Non disponibile'}
- Cadenza stimata: ${spm ? spm + ' SPM' : 'Non misurata'}

Fornisci un'analisi tecnica comparativa professionale, chiara, diretta e costruttiva strutturata con precisione in questo formato Markdown:

# 🏊 Report Tecnico di Video-Analisi Biomeccanica

### 1. Confronto Diretto di Fase (Assetto & Posizione)
- **Assetto del corpo e galleggiamento:** [Confronta linea orizzontale, altezza del bacino e posizione della testa]
- **Presa d'acqua (Catch) & EVF:** [Confronta l'angolo del gomito e la verticalità dell'avambraccio]
- **Trazione e traiettoria della mano:** [Differenze propulsive]

### 2. Errori Tecnici Identificati
- **Difetto Prioritario 1:** [Descrizione e impatto sulla velocità]
- **Difetto Secondario 2:** [Descrizione]

### 3. Protocollo di Correzione in Vasca (3 Esercizi Specifici)
1. **[Nome Esercizio 1]:** [Serie/ripetizioni consigliate e attrezzo: es. 4x50m con boccaglio e mezze pinne]
2. **[Nome Esercizio 2]:** [Spiegazione pratica]
3. **[Nome Esercizio 3]:** [Spiegazione pratica]

### 4. Pagella Biomeccanica
- **Efficienza Idrodinamica (Streamline):** [Voto /10]
- **Propulsione della Bracciata:** [Voto /10]
- **Voto Tecnico Complessivo:** [Voto /10]`;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${this.apiKey}`;

    const parts = [
      { text: systemPrompt },
      {
        inline_data: {
          mime_type: 'image/jpeg',
          data: userFrameB64.split(',')[1]
        }
      }
    ];

    if (proFrameB64) {
      parts.push({
        inline_data: {
          mime_type: 'image/jpeg',
          data: proFrameB64.split(',')[1]
        }
      });
    }

    const payload = {
      contents: [{ parts }],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 2048
      }
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errJson = await response.json().catch(() => ({}));
      throw new Error(`Errore API Gemini (${response.status}): ${errJson.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!candidateText) {
      throw new Error('Nessuna risposta generata dal modello AI.');
    }

    return candidateText;
  }

  captureFrameAsBase64(videoElement) {
    if (!videoElement || !videoElement.videoWidth) {
      // Fallback blank canvas
      const canvas = document.createElement('canvas');
      canvas.width = 640;
      canvas.height = 360;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#0a0f18';
      ctx.fillRect(0, 0, 640, 360);
      return canvas.toDataURL('image/jpeg', 0.85);
    }

    const canvas = document.createElement('canvas');
    canvas.width = Math.min(videoElement.videoWidth, 960);
    canvas.height = Math.round((canvas.width / videoElement.videoWidth) * videoElement.videoHeight);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg', 0.85);
  }
}
