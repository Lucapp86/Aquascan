/**
 * AquaMetrics Pro - Professional Swimmers Library & Biomechanical Benchmarks
 */

export const PRO_LIBRARY = {
  freestyle: {
    id: 'freestyle',
    name: 'Stile Libero (Crawl)',
    athlete: 'David Popovici / Michael Phelps',
    tempoSPM: '38 - 46 SPM (Medio-Fondo) / 52 - 62 SPM (Sprint)',
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
    ],
    demoType: 'synthetic-freestyle'
  },

  backstroke: {
    id: 'backstroke',
    name: 'Dorso (Backstroke)',
    athlete: 'Thomas Ceccon / Ryan Murphy',
    tempoSPM: '36 - 44 SPM',
    description: 'Asse orizzontale impeccabile, rollio costante di 40°-45° su entrambi i lati, flessione del gomito subacqueo a 90°.',
    phases: [
      {
        name: 'Ingresso della Mano',
        targetAngle: '170° - 180°',
        keyPoint: 'Migliolo entra per primo a ore 11 (braccio sinistro) o ore 1 (braccio destro). Braccio disteso.',
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
    ],
    demoType: 'synthetic-backstroke'
  },

  breaststroke: {
    id: 'breaststroke',
    name: 'Rana (Breaststroke)',
    athlete: 'Adam Peaty / Nicolò Martinenghi',
    tempoSPM: '32 - 42 SPM',
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
    ],
    demoType: 'synthetic-breaststroke'
  },

  butterfly: {
    id: 'butterfly',
    name: 'Farfalla / Delfino (Butterfly)',
    athlete: 'Caeleb Dressel / Léon Marchand',
    tempoSPM: '42 - 54 SPM',
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
        idealParams: { elbowAngle: 160, bodyRoll: 0, headPosition: 'Mentone a filo d\'acqua durante la respirazione' }
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
    ],
    demoType: 'synthetic-butterfly'
  }
};
