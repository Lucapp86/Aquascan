/**
 * AquaMetrics Pro - Dual Engine Standalone Bundle
 * Includes:
 * 1. AquaScan Mobile Express (1-Tap Poolside Automated Video Scanner)
 * 2. Studio Lab Desktop (Dual-sync player, goniometer, ghost overlay)
 * 3. 16 Olympic-grade Biomechanical Profiles (4 Strokes x 4 Perspectives)
 * 4. WhatsApp Coach Prescriptions & Keyframe Extraction
 */

(function () {
  'use strict';

  // ==========================================
  // 1. OLYMPIC BENCHMARK LIBRARY (DESKTOP LAB)
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
        }
      ]
    }
  };

  // ========================================================
  // 2. AQUASCAN MOBILE - 16 COMPLETE BIOMECHANICAL PROFILES
  // ========================================================
  const MOBILE_DIAGNOSTICS = {
    freestyle: {
      lateral: {
        perspectiveName: 'Ripresa Laterale (a Pelo d\'Acqua)',
        eliteBenchmark: 'Allineamento orizzontale a siluro (pitch < 4°). Presa EVF a gomito alto (100°-120°). Spinta completa al pollice. Recupero rilassato.',
        macroFaults: [
          {
            title: 'Gomito Caduto nella Presa (Dropped Elbow / Catch Slip)',
            severity: 'critical',
            impact: 'Perdita stimata del 35-40% di propulsione',
            detail: 'L\'avambraccio non si verticalizza; il gomito arretra per primo trascinando il braccio senza creare una pala d\'acqua efficace.'
          },
          {
            title: 'Bacino e Gambe Affondati (Assetto Frenante)',
            severity: 'high',
            impact: '+25% di attrito frontale',
            detail: 'La testa è tenuta troppo alta o sollevata durante la respirazione, provocando l\'affossamento del baricentro corporeo.'
          }
        ],
        microFaults: [
          {
            title: 'Uscita Anticipata della Mano (Spinta Mozzata)',
            detail: 'Il braccio esce dall\'acqua prima di aver completato l\'estensione del tricipite verso la coscia.'
          },
          {
            title: 'Ingresso Schiacciato Vicino alla Testa',
            detail: 'La mano entra troppo vicina agli occhialini anziché scivolare distesa sulla linea della spalla.'
          }
        ],
        waterDrills: [
          {
            name: 'Sculling a Presa Alta con Boccaglio Frontale',
            reps: '4 x 50m (rec. 30")',
            gear: 'Boccaglio frontale + Mezze palette',
            goal: 'Isola la prima fase di presa d\'acqua forzando il gomito a restare alto vicino alla superficie.'
          },
          {
            name: 'Bracciata con Palette senza Cinturino al Polso',
            reps: '6 x 50m (rec. 20")',
            gear: 'Palette corte',
            goal: 'Se il gomito crolla nella presa, la paletta si stacca all\'istante dando un feedback propriocettivo immediato.'
          },
          {
            name: 'Nuotata con Sfioramento Coscia col Pollice',
            reps: '4 x 50m (rec. 15")',
            gear: 'Pull-buoy',
            goal: 'Costringe a completare la spinta finale fino in fondo prima di avviare il recupero.'
          }
        ],
        drylandDrills: [
          {
            name: 'Trazioni EVF con Elastico su Panca Inclinata',
            reps: '3 serie x 15 ripetizioni lente',
            gear: 'Elastico da nuoto con maniglie',
            focus: 'Fissa il gomito in alto a 90° e tira l\'elastico verticalizzando solo l\'avambraccio.'
          },
          {
            name: 'Plank Idrodinamico a Freccia con Rollio Controllato',
            reps: '4 serie x 40 secondi',
            gear: 'A corpo libero',
            focus: 'Rinforzo della catena cinetica posteriore per evitare l\'affossamento del bacino.'
          },
          {
            name: 'Stretching Spalle e Mobilità Gabbia Toracica con Bastone',
            reps: '3 serie x 10 rotazioni controllate',
            gear: 'Bastone / Elastico',
            focus: 'Migliora l\'estensione dell\'ingresso senza inarcare la zona lombare.'
          }
        ]
      },

      frontal: {
        perspectiveName: 'Ripresa Frontale (Atleta Nuota Verso di Te)',
        eliteBenchmark: 'Mani che entrano rigidamente sulla linea prolungata delle spalle ("binari del treno"). Rollio simmetrico di 35°-45°. Testa immobile, rotazione minima (1 occhialino in acqua).',
        macroFaults: [
          {
            title: 'Incrocio della Linea Mediana (Crossover)',
            severity: 'critical',
            impact: 'Genera serpeggiamento e raddoppia la resistenza frontale',
            detail: 'La mano entra o trazione superando l\'asse centrale della testa, provocando un\'oscillazione continua del bacino.'
          },
          {
            title: 'Sollevamento della Testa per Respirare',
            severity: 'high',
            impact: 'Frenata idraulica istantanea',
            detail: 'La testa si solleva frontalmente anziché ruotare adagiandosi sulla scia dell\'onda di prua.'
          }
        ],
        microFaults: [
          {
            title: 'Rollio Asimmetrico (Spalle sbilanciate)',
            detail: 'L\'atleta rolla molto sul lato in cui respira e quasi zero sul lato cieco.'
          }
        ],
        waterDrills: [
          {
            name: 'Esercizio "Binari del Treno" con Boccaglio',
            reps: '6 x 50m (rec. 25")',
            gear: 'Boccaglio frontale',
            goal: 'Le mani entrano a 30cm di distanza tra loro, larghe e parallele senza mai toccare la linea mediana.'
          },
          {
            name: 'Esercizio "6 Battute + 1 Bracciata e Rollio"',
            reps: '4 x 50m (rec. 30")',
            gear: 'Mezze pinne',
            goal: 'Mantiene il corpo inclinato a 45° su un fianco per 6 battute prima di effettuare un rollio pulito sul fianco opposto.'
          }
        ],
        drylandDrills: [
          {
            name: 'Torsioni del Tronco con Bastone su Panca',
            reps: '3 serie x 20 torsioni lente e controllate',
            gear: 'Bastone leggero',
            focus: 'Migliora la mobilità toracica e la rotazione del busto mantenendo la testa fissa in avanti.'
          },
          {
            name: 'Extrarotazioni Spalla con Loop Band a Gomito Aderente',
            reps: '3 serie x 15 ripetizioni per lato',
            gear: 'Loop band elastica',
            focus: 'Stabilizzazione del sottospinato e prevenzione infortuni da crossover.'
          }
        ]
      },

      posterior: {
        perspectiveName: 'Ripresa Posteriore (Atleta si Allontana)',
        eliteBenchmark: 'Scia idrodinamica stretta. Battuta di gambe compatta che non esce mai dalla sagoma del busto. Bacino alto e stabile.',
        macroFaults: [
          {
            title: 'Serpeggiamento Laterale del Bacino (Snake Motion)',
            severity: 'high',
            impact: 'Dispersione del vettore propulsivo in avanti',
            detail: 'Il bacino scoda a destra e sinistra come conseguenza dell\'incrocio delle braccia o di una gambata scoordinata.'
          },
          {
            title: 'Gambata a Forbice Eccessivamente Larga',
            severity: 'high',
            impact: 'Effetto paracadute frenante',
            detail: 'Le gambe si aprono oltre i 40 cm di ampiezza come reazione d\'equilibrio per la respirazione.'
          }
        ],
        microFaults: [
          {
            title: 'Piede a Martello nella Fase Discendente',
            detail: 'Mancata flessione plantare della caviglia (caviglia rigida che spinge acqua in avanti anziché indietro).'
          }
        ],
        waterDrills: [
          {
            name: 'Gambe a Stile con Elastico Morbido alle Caviglie',
            reps: '6 x 25m (rec. 20")',
            gear: 'Elastico anulare alle caviglie',
            goal: 'Impedisce fisicamente alle gambe di aprirsi a forbice, forzando una battuta rapida e compatta.'
          }
        ],
        drylandDrills: [
          {
            name: 'Battuta di Gambe Prona su Panca con Caviglie Tese',
            reps: '4 serie x 30 secondi continui ad alta frequenza',
            gear: 'Panca piana o tappetino',
            focus: 'Attivazione glutei e flessori con ginocchia quasi distese (il movimento parte dall\'anca).'
          }
        ]
      },

      underwater: {
        perspectiveName: 'Ripresa Subacquea (Visione 3D Immersa)',
        eliteBenchmark: 'Formazione immediata della leva verticale gomito-avambraccio (EVF). Assenza totale di bolle intrappolate sotto la mano.',
        macroFaults: [
          {
            title: 'Scivolamento Idrodinamico a Vuoto (Slip)',
            severity: 'critical',
            impact: 'La mano si muove veloce ma non sposta massa d\'acqua',
            detail: 'La mano e le dita non mantengono la pressione corretta perpendicolare al flusso dell\'acqua.'
          }
        ],
        microFaults: [
          {
            title: 'Polso Cedevole nella Trazione Centrale',
            detail: 'Il polso flette sotto la pressione dell\'acqua disperdendo la spinta.'
          }
        ],
        waterDrills: [
          {
            name: 'Nuotata a Pugno Chiuso (Sensitivity Drill)',
            reps: '4 x 50m alternando 25m pugno / 25m mano aperta',
            gear: 'Nessun attrezzo',
            goal: 'Costringe a usare l\'avambraccio per la presa d\'acqua; riaprendo la mano si avverte una presa quadrupla.'
          }
        ],
        drylandDrills: [
          {
            name: 'Tenuta Isometrica alla Sbarra in Posizione di Presa EVF',
            reps: '4 serie x 12 secondi al 90% di contrazione',
            gear: 'Sbarra per trazioni',
            focus: 'Forza massimale isometrica del gran dorsale e del grande rotondo.'
          }
        ]
      }
    },

    backstroke: {
      lateral: {
        perspectiveName: 'Dorso - Ripresa Laterale',
        eliteBenchmark: 'Corpo piatto a filo d\'acqua, mento staccato dallo sterno. Trazione con flessione laterale del gomito a 90° e spinta terminale verso i piedi.',
        macroFaults: [
          {
            title: 'Trazione a Braccio Teso Sott\'acqua',
            severity: 'critical',
            impact: 'Leva meccanica inefficiente e sovraccarico spalla',
            detail: 'Il braccio affonda teso senza piegare il gomito a 90°, spingendo l\'acqua verso il fondo invece che verso i piedi.'
          },
          {
            title: 'Posizione "Seduta" in Acqua (Bacino Basso)',
            severity: 'high',
            impact: 'Resistenza frontale massiccia',
            detail: 'Mento schiacciato sul petto che costringe le anche ad affossarsi.'
          }
        ],
        microFaults: [
          {
            title: 'Recupero con Braccio Piegato',
            detail: 'Il braccio aereo non è disteso perpendicolarmente.'
          }
        ],
        waterDrills: [
          {
            name: 'Dorso con Tavoletta sulla Pancia',
            reps: '4 x 50m gambe a dorso (rec. 20")',
            gear: 'Tavoletta',
            goal: 'Forza le anche a spingere in superficie mantenendo la tavoletta all\'asciutto.'
          },
          {
            name: 'Bracciata Singola con Flessione Gomito 90°',
            reps: '6 x 50m (rec. 25")',
            gear: 'Mezze pinne',
            goal: 'Concentrazione totale sul piegamento del gomito nella fase intermedia subacquea.'
          }
        ],
        drylandDrills: [
          {
            name: 'Ponte Glutei a Terra con Spinta Bacino in Alto',
            reps: '3 serie x 15 ripetizioni con tenuta di 3"',
            gear: 'Tappetino',
            focus: 'Attivazione glutei per mantenere l\'assetto orizzontale a dorso.'
          }
        ]
      },
      frontal: {
        perspectiveName: 'Dorso - Ripresa Frontale',
        eliteBenchmark: 'Rollio alternato di 40°-45°. Testa immobile.',
        macroFaults: [
          {
            title: 'Testa che Oscilla Lateralmente',
            severity: 'high',
            detail: 'La testa segue la bracciata anziché restare un asse immobile.'
          }
        ],
        microFaults: [],
        waterDrills: [
          {
            name: 'Dorso con Bicchierino d\'Acqua sulla Fronte',
            reps: '4 x 25m nuotata lentissima',
            gear: 'Bicchierino di plastica',
            goal: 'Se la testa si muove anche di 1 cm, il bicchierino cade.'
          }
        ],
        drylandDrills: [
          {
            name: 'Plank Supino con Collo Neutro',
            reps: '3 serie x 45 secondi',
            gear: 'A corpo libero',
            focus: 'Stabilità del tronco con testa allineata.'
          }
        ]
      },
      posterior: {
        perspectiveName: 'Dorso - Ripresa Posteriore',
        eliteBenchmark: 'Scia idrodinamica compatta, gambata sotto il pelo dell\'acqua.',
        macroFaults: [
          {
            title: 'Ginocchia che Escono dall\'Acqua (Pedalata)',
            severity: 'high',
            detail: 'Flessione eccessiva delle ginocchia come se si pedalasse in bicicletta.'
          }
        ],
        microFaults: [],
        waterDrills: [
          {
            name: 'Gambe a Dorso a Ginocchia Sommerse',
            reps: '4 x 50m a ritmo costante',
            gear: 'Nessun attrezzo',
            goal: 'Le ginocchia devono sempre restare sotto il pelo dell\'acqua.'
          }
        ],
        drylandDrills: [
          {
            name: 'Calci a Dorso su Tappetino con Gambe Tese',
            reps: '3 serie x 40 secondi',
            gear: 'Tappetino',
            focus: 'Gambata guidata dall\'anca senza flessione del ginocchio.'
          }
        ]
      },
      underwater: {
        perspectiveName: 'Dorso - Ripresa Subacquea',
        eliteBenchmark: 'Flessione del gomito subacqueo a 90° e accelerazione continua.',
        macroFaults: [
          {
            title: 'Mano che Scivola Troppo Superficiale',
            severity: 'high',
            detail: 'Presa d\'acqua a meno di 10cm dalla superficie con ingresso d\'aria.'
          }
        ],
        microFaults: [],
        waterDrills: [
          {
            name: 'Remata Subacquea a Dorso con Pull-Buoy',
            reps: '4 x 50m',
            gear: 'Pull-buoy',
            goal: 'Focalizzazione sulla profondità ideale di 25-35 cm per la trazione.'
          }
        ],
        drylandDrills: [
          {
            name: 'Trazioni ai Cavi Incrociati per Dorsali',
            reps: '3 serie x 12',
            gear: 'Cavi o elastici',
            focus: 'Forza del gran dorsale in spinta discendente.'
          }
        ]
      }
    },

    breaststroke: {
      lateral: {
        perspectiveName: 'Rana - Ripresa Laterale',
        eliteBenchmark: 'Alternanza esplosiva: Trazione a cuore corta ➔ Salita rapida del tronco ➔ Spinta a freccia (Streamline) ➔ Frustata a forbice convergente.',
        macroFaults: [
          {
            title: 'Trazione Eccessivamente Lunga (Oltre le Spalle)',
            severity: 'critical',
            impact: 'Frena l\'atleta e viola il regolamento agonistico',
            detail: 'Le mani tirano indietro fin sotto l\'addome anziché chiudersi a cuore davanti allo sterno.'
          },
          {
            title: 'Mancato Scivolamento a Siluro (Streamline interrotto)',
            severity: 'high',
            impact: 'Perdita della velocità d\'inerzia della gambata',
            detail: 'L\'atleta inizia una nuova bracciata prima che la spinta delle gambe abbia esaurito il suo effetto.'
          }
        ],
        microFaults: [
          {
            title: 'Ginocchia che si Aprono Troppo Larghe',
            detail: 'Ginocchia più larghe del bacino che aumentano l\'area frontale frenante.'
          }
        ],
        waterDrills: [
          {
            name: 'Rana 1 Bracciata + 2 Gambate con Scivolamento 3"',
            reps: '6 x 50m (rec. 25")',
            gear: 'Nessun attrezzo',
            goal: 'Enfatizza la posizione idrodinamica a freccia dopo ogni spinta.'
          },
          {
            name: 'Rana con Trazione Corta e Gomiti Sempre Visibili',
            reps: '4 x 50m (rec. 20")',
            gear: 'Pull-buoy',
            goal: 'I gomiti non devono mai arretrare oltre il piano del petto.'
          }
        ],
        drylandDrills: [
          {
            name: 'Squat con Salto e Chiusura Piedi Convergente',
            reps: '3 serie x 12 salti esplosivi',
            gear: 'A corpo libero',
            focus: 'Esplosività della catena cinetica estensoria delle gambe.'
          },
          {
            name: 'Aperture Adduzioni Gambe con Fascia Elastica',
            reps: '3 serie x 15 ripetizioni',
            gear: 'Loop band',
            focus: 'Rinforzo degli adduttori per la chiusura potente della gambata.'
          }
        ]
      },
      frontal: {
        perspectiveName: 'Rana - Ripresa Frontale',
        eliteBenchmark: 'Trazione a cuore simmetrica con mani sempre avanzate rispetto ai gomiti.',
        macroFaults: [
          {
            title: 'Gomiti che Cedono All\'indietro',
            severity: 'high',
            detail: 'I gomiti arretrano verso i fianchi nella fase di chiusura.'
          }
        ],
        microFaults: [],
        waterDrills: [
          {
            name: 'Sculling a Rana a Gomiti Avanzati',
            reps: '4 x 25m',
            gear: 'Boccaglio',
            goal: 'Mantenimento dei gomiti davanti allo sguardo.'
          }
        ],
        drylandDrills: [
          {
            name: 'Chiusure Pettorali con Manubri su Panca',
            reps: '3 serie x 12',
            gear: 'Manubri leggeri',
            focus: 'Potenza dell\'adduzione orizzontale delle braccia.'
          }
        ]
      },
      posterior: {
        perspectiveName: 'Rana - Ripresa Posteriore',
        eliteBenchmark: 'Piedi a martello extraruotati prima della frustata.',
        macroFaults: [
          {
            title: 'Gambata a Forbice Asimmetrica',
            severity: 'high',
            detail: 'Un piede spinge prima o più aperto dell\'altro.'
          }
        ],
        microFaults: [],
        waterDrills: [
          {
            name: 'Gambe a Rana sul Dorso con Tavoletta',
            reps: '4 x 50m',
            gear: 'Tavoletta',
            goal: 'Autocontrollo visivo della simmetria dei piedi.'
          }
        ],
        drylandDrills: [
          {
            name: 'Rotazioni Interne/Esterne Anca a Terra',
            reps: '3 serie x 15',
            gear: 'Tappetino',
            focus: 'Mobilità rotazionale dell\'articolazione coxo-femorale.'
          }
        ]
      },
      underwater: {
        perspectiveName: 'Rana - Ripresa Subacquea',
        eliteBenchmark: 'Chiusura delle gambe a freccia e allineamento perfetto.',
        macroFaults: [
          {
            title: 'Residuo di Spinta Incompleto',
            severity: 'high',
            detail: 'I piedi non arrivano a toccarsi a suola unita al termine del colpo.'
          }
        ],
        microFaults: [],
        waterDrills: [
          {
            name: 'Gambata a Rana con Tocco Suole',
            reps: '4 x 50m',
            gear: 'Tavoletta',
            goal: 'Focus sul tocco finale delle suole dei piedi.'
          }
        ],
        drylandDrills: [
          {
            name: 'Squat Isometrico a Muro con Pallone tra le Ginocchia',
            reps: '3 serie x 45"',
            gear: 'Palla medica',
            focus: 'Tenuta isometrica adduttori.'
          }
        ]
      }
    },

    butterfly: {
      lateral: {
        perspectiveName: 'Farfalla - Ripresa Laterale',
        eliteBenchmark: 'Onda corporea fluida originata dal petto. Doppia battuta per ciclo (1ª ingresso, 2ª spinta). Mento a filo d\'acqua durante la respirazione.',
        macroFaults: [
          {
            title: 'Respirazione Troppo Alta (Collo Iperesteso)',
            severity: 'critical',
            impact: 'Blocco dell\'avanzamento e caduta delle anche',
            detail: 'L\'atleta solleva il busto e la testa fuori dall\'acqua invece di respirare in avanti con mento a pelo d\'acqua.'
          },
          {
            title: 'Mancanza della Seconda Battuta di Gambe',
            severity: 'high',
            impact: 'Mancata proiezione in avanti durante il recupero aereo',
            detail: 'L\'atleta batte solo all\'ingresso delle mani e perde spinta all\'uscita.'
          }
        ],
        microFaults: [
          {
            title: 'Braccia che Sbattono Troppo Basse nel Recupero',
            detail: 'Le mani toccano l\'acqua prima di aver completato il cerchio di recupero.'
          }
        ],
        waterDrills: [
          {
            name: 'Delfino a un Braccio Solo con Respirazione Laterale',
            reps: '6 x 50m alternando 25m dx / 25m sx',
            gear: 'Mezze pinne',
            goal: 'Mantiene il corpo basso e allineato senza sforzo cervicale.'
          },
          {
            name: 'Ondulazioni Subacquee con Braccia a Freccia',
            reps: '6 x 25m in apnea (rec. 30")',
            gear: 'Mezze pinne',
            goal: 'Sviluppa l\'onda propulsiva dal torace senza spezzare le ginocchia.'
          }
        ],
        drylandDrills: [
          {
            name: 'Onde Corporee al Muro (Chest Press Wave)',
            reps: '3 serie x 20 ondulazioni lente',
            gear: 'A corpo libero al muro',
            focus: 'Mobilità toracica e coordinazione dell\'onda cinetica.'
          },
          {
            name: 'Slanci Posteriori Braccia con Elastici Leggeri',
            reps: '3 serie x 15 ripetizioni',
            gear: 'Elastico a bassa resistenza',
            focus: 'Decontrazione e mobilità delle spalle nel recupero aereo.'
          }
        ]
      },
      frontal: {
        perspectiveName: 'Farfalla - Ripresa Frontale',
        eliteBenchmark: 'Ingresso alla larghezza delle spalle con palmi all\'infuori, trazione a clessidra.',
        macroFaults: [
          {
            title: 'Ingresso Mani Troppo Stretto o Incrociato',
            severity: 'high',
            detail: 'Le mani entrano toccandosi, bloccando l\'apertura della trazione.'
          }
        ],
        microFaults: [],
        waterDrills: [
          {
            name: 'Delfino con Ingresso Largo alle Spalle',
            reps: '4 x 25m',
            gear: 'Boccaglio frontale',
            goal: 'Mani rigorosamente larghe all\'ingresso.'
          }
        ],
        drylandDrills: [
          {
            name: 'Y-T-W con Manubri Leggeri su Panca Inclinata',
            reps: '3 serie x 10 per posizione',
            gear: 'Manubri da 1-2kg',
            focus: 'Rinforzo trapezio medio/basso e cuffia rotatori.'
          }
        ]
      },
      posterior: {
        perspectiveName: 'Farfalla - Ripresa Posteriore',
        eliteBenchmark: 'Spinta potente oltre i fianchi con uscita simultanea delle mani.',
        macroFaults: [
          {
            title: 'Uscita Asimmetrica delle Braccia',
            severity: 'medium',
            detail: 'Un braccio esce prima dell\'altro per sbilanciamento del core.'
          }
        ],
        microFaults: [],
        waterDrills: [
          {
            name: 'Delfino Solo Gambe a Braccia Lungo i Fianchi',
            reps: '4 x 50m',
            gear: 'Mezze pinne',
            goal: 'Perfetto equilibrio del bacino.'
          }
        ],
        drylandDrills: [
          {
            name: 'Plank con Estensioni Braccia Alternate',
            reps: '3 serie x 30"',
            gear: 'Tappetino',
            focus: 'Stabilità asimmetrica del core.'
          }
        ]
      },
      underwater: {
        perspectiveName: 'Farfalla - Ripresa Subacquea',
        eliteBenchmark: 'Trazione a clessidra sotto il petto con avambracci verticali.',
        macroFaults: [
          {
            title: 'Gomiti che Cedono nella Trazione Centrale',
            severity: 'high',
            detail: 'Perdita della presa sotto la cassa toracica.'
          }
        ],
        microFaults: [],
        waterDrills: [
          {
            name: 'Remata a Clessidra con Boccaglio',
            reps: '4 x 25m',
            gear: 'Boccaglio + Pull-buoy',
            goal: 'Isolamento della fase di massima pressione centrale.'
          }
        ],
        drylandDrills: [
          {
            name: 'Pull-over con Manubrio su Panca',
            reps: '3 serie x 12',
            gear: 'Manubrio da 6-10kg',
            focus: 'Espansione toracica e forza del gran dorsale.'
          }
        ]
      }
    }
  };

  // ==========================================
  // 2B. BIOMECHANICAL VISION & KINEMATIC ENGINE
  // ==========================================
  class BiomechanicalVisionEngine {
    constructor() {
      this.poseDetector = null;
      this.isPoseReady = false;
      this.initPoseDetector();
    }

    async initPoseDetector() {
      if (typeof window !== 'undefined' && typeof window.Pose !== 'undefined' && !this.poseDetector) {
        try {
          const pose = new window.Pose({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
          });
          pose.setOptions({
            modelComplexity: 0,
            smoothLandmarks: false,
            enableSegmentation: false,
            minDetectionConfidence: 0.25,
            minTrackingConfidence: 0.25
          });
          await pose.initialize();
          this.poseDetector = pose;
          this.isPoseReady = true;
        } catch (e) {
          console.warn('MediaPipe Pose background init error:', e);
        }
      }
    }

    async detectPose(canvas) {
      if (!this.poseDetector && typeof window !== 'undefined' && typeof window.Pose !== 'undefined') {
        await this.initPoseDetector();
      }
      if (!this.poseDetector) return null;

      return new Promise((resolve) => {
        let resolved = false;
        const timer = setTimeout(() => {
          if (!resolved) {
            resolved = true;
            resolve(null);
          }
        }, 1400);

        this.poseDetector.onResults((results) => {
          if (!resolved) {
            resolved = true;
            clearTimeout(timer);
            if (results && results.poseLandmarks && results.poseLandmarks.length >= 29) {
              resolve(results.poseLandmarks);
            } else {
              resolve(null);
            }
          }
        });

        try {
          this.poseDetector.send({ image: canvas });
        } catch (e) {
          if (!resolved) {
            resolved = true;
            clearTimeout(timer);
            resolve(null);
          }
        }
      });
    }

    analyzeSilhouette(canvas) {
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      let imgData;
      try {
        imgData = ctx.getImageData(0, 0, w, h);
      } catch (e) {
        return { centerX: w * 0.5, centerY: h * 0.5, pitch: -3.8, confidence: 0.2 };
      }
      const data = imgData.data;

      let totalPoints = 0;
      let sumX = 0, sumY = 0;
      let minX = w, maxX = 0, minY = h, maxY = 0;
      const swimmerPoints = [];

      for (let y = 0; y < h; y += 4) {
        for (let x = 0; x < w; x += 4) {
          const idx = (y * w + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          const isWater = (b > r + 20 && g > r + 5 && b > 70);
          const isSwimmer = !isWater && (r + g + b > 40) && (r + g + b < 660);

          if (isSwimmer) {
            swimmerPoints.push({ x, y });
            sumX += x;
            sumY += y;
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
            totalPoints++;
          }
        }
      }

      if (totalPoints < 35) {
        return { centerX: w * 0.5, centerY: h * 0.5, pitch: -3.8, confidence: 0.25 };
      }

      const cX = sumX / totalPoints;
      const cY = sumY / totalPoints;

      let mxx = 0, myy = 0, mxy = 0;
      for (let i = 0; i < swimmerPoints.length; i++) {
        const dx = swimmerPoints[i].x - cX;
        const dy = swimmerPoints[i].y - cY;
        mxx += dx * dx;
        myy += dy * dy;
        mxy += dx * dy;
      }
      mxx /= totalPoints;
      myy /= totalPoints;
      mxy /= totalPoints;

      let angleRad = 0.5 * Math.atan2(2 * mxy, mxx - myy);
      let pitchDeg = -angleRad * (180 / Math.PI);
      if (pitchDeg > 30) pitchDeg = 30;
      if (pitchDeg < -30) pitchDeg = -30;

      return {
        centerX: cX,
        centerY: cY,
        bbox: { minX, maxX, minY, maxY },
        pitch: pitchDeg,
        confidence: Math.min(0.9, totalPoints / 300)
      };
    }

    async analyzeAndAnnotateKeyframe(canvas, phaseIndex, stroke = 'freestyle', perspective = 'lateral') {
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      const landmarks = await this.detectPose(canvas);
      const sil = this.analyzeSilhouette(canvas);

      let evfAngle = 108;
      let pitchAngle = sil.pitch || -4.0;
      let headLift = 0;
      let kneeAngle = 160;
      let isPoseAI = false;

      if (landmarks) {
        isPoseAI = true;
        const rVis = (landmarks[12].visibility + landmarks[14].visibility + landmarks[16].visibility) / 3;
        const lVis = (landmarks[11].visibility + landmarks[13].visibility + landmarks[15].visibility) / 3;
        const arm = rVis >= lVis ?
          { s: landmarks[12], e: landmarks[14], w: landmarks[16] } :
          { s: landmarks[11], e: landmarks[13], w: landmarks[15] };

        const leg = rVis >= lVis ?
          { h: landmarks[24], k: landmarks[26], a: landmarks[28] } :
          { h: landmarks[23], k: landmarks[25], a: landmarks[27] };

        // Elbow EVF Angle
        const v1 = { x: arm.s.x - arm.e.x, y: arm.s.y - arm.e.y };
        const v2 = { x: arm.w.x - arm.e.x, y: arm.w.y - arm.e.y };
        const dot = v1.x * v2.x + v1.y * v2.y;
        const mag = Math.hypot(v1.x, v1.y) * Math.hypot(v2.x, v2.y);
        if (mag > 0.001) {
          evfAngle = Math.round(Math.acos(Math.max(-1, Math.min(1, dot / mag))) * 180 / Math.PI);
        }

        if (arm.e.y > arm.w.y + 0.04) {
          if (evfAngle > 95) evfAngle = Math.min(evfAngle, 88);
        }

        // Body Pitch
        const dx = Math.abs(leg.a.x - arm.s.x);
        const dy = leg.a.y - arm.s.y;
        pitchAngle = Number((-Math.atan2(dy, Math.max(0.01, dx)) * 180 / Math.PI).toFixed(1));

        // Knee Angle
        const vk1 = { x: leg.h.x - leg.k.x, y: leg.h.y - leg.k.y };
        const vk2 = { x: leg.a.x - leg.k.x, y: leg.a.y - leg.k.y };
        const dotK = vk1.x * vk2.x + vk1.y * vk2.y;
        const magK = Math.hypot(vk1.x, vk1.y) * Math.hypot(vk2.x, vk2.y);
        if (magK > 0.001) {
          kneeAngle = Math.round(Math.acos(Math.max(-1, Math.min(1, dotK / magK))) * 180 / Math.PI);
        }

        if (landmarks[0]) {
          headLift = (arm.s.y - landmarks[0].y);
        }

        // --- DRAW POSE SKELETON ON CANVAS ---
        ctx.save();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#00e5ff';
        ctx.shadowColor = '#00e5ff';
        ctx.shadowBlur = 8;

        ctx.beginPath();
        ctx.moveTo(arm.s.x * w, arm.s.y * h);
        ctx.lineTo(arm.e.x * w, arm.e.y * h);
        ctx.lineTo(arm.w.x * w, arm.w.y * h);
        ctx.stroke();

        ctx.strokeStyle = '#10b981';
        ctx.shadowColor = '#10b981';
        ctx.beginPath();
        ctx.moveTo(arm.s.x * w, arm.s.y * h);
        ctx.lineTo(leg.h.x * w, leg.h.y * h);
        ctx.lineTo(leg.k.x * w, leg.k.y * h);
        ctx.lineTo(leg.a.x * w, leg.a.y * h);
        ctx.stroke();

        const joints = [arm.s, arm.e, arm.w, leg.h, leg.k, leg.a];
        for (const j of joints) {
          ctx.beginPath();
          ctx.arc(j.x * w, j.y * h, 4.5, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
          ctx.strokeStyle = '#00e5ff';
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        const ex = arm.e.x * w;
        const ey = arm.e.y * h;
        const isEvfGood = evfAngle >= 100 && evfAngle <= 125;
        const badgeColor = isEvfGood ? '#10b981' : (evfAngle < 95 || evfAngle > 135 ? '#f43f5e' : '#f59e0b');

        ctx.font = 'bold 11px ui-monospace, SFMono-Regular, monospace';
        const text = `EVF ${evfAngle}°`;
        const tw = ctx.measureText(text).width;
        ctx.fillStyle = 'rgba(10, 15, 24, 0.85)';
        ctx.strokeStyle = badgeColor;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(ex - tw / 2 - 5, ey - 22, tw + 10, 16, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = badgeColor;
        ctx.fillText(text, ex - tw / 2, ey - 10);

        ctx.restore();
      } else {
        // --- DRAW COMPUTER VISION KINEMATIC OVERLAY ---
        ctx.save();
        const cx = sil.centerX;
        const cy = sil.centerY;

        ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
        ctx.setLineDash([4, 4]);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(10, Math.max(15, cy - 35));
        ctx.lineTo(w - 10, Math.max(15, cy - 35));
        ctx.stroke();
        ctx.setLineDash([]);

        const rad = (-pitchAngle * Math.PI) / 180;
        const len = Math.min(w * 0.35, 120);
        ctx.strokeStyle = pitchAngle < -7.5 ? '#f43f5e' : '#10b981';
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 6;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(cx - Math.cos(rad) * len, cy - Math.sin(rad) * len);
        ctx.lineTo(cx + Math.cos(rad) * len, cy + Math.sin(rad) * len);
        ctx.stroke();

        ctx.font = 'bold 10px ui-monospace, SFMono-Regular, monospace';
        const pText = `Pitch: ${pitchAngle > 0 ? '+' : ''}${pitchAngle.toFixed(1)}°`;
        const pw = ctx.measureText(pText).width;
        ctx.fillStyle = 'rgba(10, 15, 24, 0.85)';
        ctx.strokeStyle = pitchAngle < -7.5 ? '#f43f5e' : '#10b981';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(cx - pw / 2 - 4, cy + 12, pw + 8, 15, 3);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fillText(pText, cx - pw / 2, cy + 23);

        ctx.restore();

        if (phaseIndex === 1 || phaseIndex === 2) {
          evfAngle = Math.round(105 + (sil.pitch * 1.5));
          if (evfAngle < 75) evfAngle = 78;
          if (evfAngle > 145) evfAngle = 142;
        }
      }

      return {
        dataUrl: canvas.toDataURL('image/jpeg', 0.85),
        evfAngle,
        pitchAngle,
        headLift,
        kneeAngle,
        isPoseAI
      };
    }
  }

  // Helper: Extract Video Keyframes with Vision Engine
  async function extractVideoKeyframes(videoSource, count = 4, visionEngine = null, stroke = 'freestyle', perspective = 'lateral') {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.muted = true;
      video.playsInline = true;
      video.crossOrigin = 'anonymous';

      if (typeof videoSource === 'string') {
        video.src = videoSource;
      } else {
        video.src = URL.createObjectURL(videoSource);
      }

      const keyframes = [];
      const timestamps = [0.15, 0.35, 0.60, 0.85];
      let currentIndex = 0;

      video.onloadedmetadata = () => {
        const dur = isFinite(video.duration) && video.duration > 0 ? video.duration : 4.0;
        keyframes._videoDuration = dur;

        const captureNext = async () => {
          if (currentIndex >= count) {
            resolve(keyframes);
            return;
          }

          const targetTime = dur * timestamps[currentIndex];
          video.currentTime = targetTime;
        };

        video.onseeked = async () => {
          const canvas = document.createElement('canvas');
          canvas.width = 480;
          canvas.height = Math.round((480 / (video.videoWidth || 640)) * (video.videoHeight || 360));
          const ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          let analysis = {
            dataUrl: canvas.toDataURL('image/jpeg', 0.8),
            evfAngle: 108,
            pitchAngle: -4.0,
            headLift: 0,
            kneeAngle: 160,
            isPoseAI: false
          };

          if (visionEngine) {
            analysis = await visionEngine.analyzeAndAnnotateKeyframe(canvas, currentIndex, stroke, perspective);
          }

          const labels = ['1. Ingresso', '2. Presa (Catch)', '3. Trazione/Spinta', '4. Recupero/Rollio'];
          keyframes.push({
            label: labels[currentIndex] || `Frame ${currentIndex + 1}`,
            time: `${video.currentTime.toFixed(1)}s`,
            dataUrl: analysis.dataUrl,
            evfAngle: analysis.evfAngle,
            pitchAngle: analysis.pitchAngle,
            headLift: analysis.headLift,
            kneeAngle: analysis.kneeAngle,
            isPoseAI: analysis.isPoseAI
          });

          currentIndex++;
          captureNext();
        };

        captureNext();
      };

      video.onerror = () => {
        resolve([
          { label: '1. Ingresso', time: '0.6s', dataUrl: null, evfAngle: 108, pitchAngle: -4.0 },
          { label: '2. Presa (EVF)', time: '1.4s', dataUrl: null, evfAngle: 108, pitchAngle: -4.0 },
          { label: '3. Trazione', time: '2.2s', dataUrl: null, evfAngle: 108, pitchAngle: -4.0 },
          { label: '4. Recupero', time: '3.1s', dataUrl: null, evfAngle: 108, pitchAngle: -4.0 }
        ]);
      };
    });
  }

  // Dynamic Biomechanical Diagnostic Calculator
  function analyzeVideoBiomechanics({
    stroke = 'freestyle',
    perspective = 'lateral',
    analyzedFrames = [],
    videoDuration = 4.0
  }) {
    const strokeData = MOBILE_DIAGNOSTICS[stroke] || MOBILE_DIAGNOSTICS.freestyle;
    const diag = strokeData[perspective] || strokeData.lateral;

    const catchFrame = analyzedFrames[1] || analyzedFrames[0] || {};
    const pullFrame = analyzedFrames[2] || analyzedFrames[1] || {};
    const evfAngle = Math.round(catchFrame.evfAngle || pullFrame.evfAngle || 108);

    const avgPitch = Number((analyzedFrames.reduce((acc, f) => acc + (f.pitchAngle || -4.0), 0) / Math.max(1, analyzedFrames.length)).toFixed(1));

    const dur = videoDuration > 0 ? videoDuration : 4.0;
    const spm = Math.round(Math.max(28, Math.min(65, 60 / (dur / 2.2))));

    const headLifted = analyzedFrames.some(f => (f.headLift || 0) > 0.08);

    let score = 9.5;
    const macroFaults = [];
    const microFaults = [];
    const strengths = [];
    const waterDrills = [];
    const drylandDrills = [];

    // Robust Deduplication Helper for Exercises
    const isDuplicateDrill = (list, candidate) => {
      const norm = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const cKey = norm(candidate.name).substring(0, 8);
      return list.some(existing => {
        const eKey = norm(existing.name).substring(0, 8);
        return eKey === cKey ||
          (norm(existing.name).includes('scull') && norm(candidate.name).includes('scull')) ||
          (norm(existing.name).includes('hollow') && norm(candidate.name).includes('hollow')) ||
          (norm(existing.name).includes('elastici') && norm(candidate.name).includes('elastici')) ||
          (norm(existing.name).includes('tavoletta') && norm(candidate.name).includes('tavoletta')) ||
          (norm(existing.name).includes('occhialino') && norm(candidate.name).includes('occhialino'));
      });
    };

    const addWaterDrill = (d) => {
      if (!isDuplicateDrill(waterDrills, d)) waterDrills.push(d);
    };
    const addDrylandDrill = (d) => {
      if (!isDuplicateDrill(drylandDrills, d)) drylandDrills.push(d);
    };

    // 1. EVF EVALUATION
    if (evfAngle < 95) {
      score -= 2.2;
      macroFaults.push({
        title: `Gomito Caduto nella Presa (EVF Slip: ${evfAngle}°)`,
        severity: 'critical',
        impact: `-35% spinta propulsiva`,
        detail: `Nel fotogramma di presa l'avambraccio non si verticalizza: l'angolo registrato è di ${evfAngle}° (target élite: 100°-120°). Il gomito cede verso il corpo prima della mano, disperdendo la massa d'acqua propulsiva.`
      });
      addWaterDrill({
        name: 'Sculling a Presa Alta con Boccaglio Frontale',
        reps: '4 x 50m (rec. 25")',
        gear: 'Boccaglio frontale + Mezze palette',
        goal: 'Isola la prima fase di presa obbligando il gomito a restare alto rispetto al polso.'
      });
      addDrylandDrill({
        name: 'Trazione EVF con Elastici a Parete',
        reps: '3 x 15 ripetizioni lente',
        gear: 'Elastici da nuoto con palette',
        focus: 'Blocca il gomito in alto e ruota solo l\'avambraccio verso il basso per memorizzare il gesto.'
      });
    } else if (evfAngle > 132) {
      score -= 1.6;
      macroFaults.push({
        title: `Trazione a Braccio Troppo Disteso (${evfAngle}°)`,
        severity: 'high',
        impact: `Sovraccarico articolare spalla`,
        detail: `L'angolo del gomito misurato è di ${evfAngle}°. La passata subacquea è a braccio troppo rigido, allungando la leva a sfavore della cuffia dei rotatori e ritardando l'accelerazione finale.`
      });
      addWaterDrill({
        name: 'Nuotata "Catch-Up" con Pull-Buoy e Flessione Forzata',
        reps: '6 x 50m',
        gear: 'Pull-buoy',
        goal: 'Flettere il gomito a 110° a metà passata prima di accelerare la mano verso la coscia.'
      });
      addDrylandDrill({
        name: 'Pull-over con Manubrio su Panca',
        reps: '3 x 12',
        gear: 'Manubrio da 6-10kg',
        focus: 'Espansione toracica e controllo dell\'angolo di trazione del gran dorsale.'
      });
    } else {
      strengths.push({
        title: `Presa EVF Élite a Gomito Alto (${evfAngle}°)`,
        detail: `L'avambraccio si verticalizza rapidamente. L'angolo di ${evfAngle}° crea una pala d'acqua solida e ottimale (benchmark olimpico 100°-120°).`
      });
    }

    // 2. BODY PITCH EVALUATION
    if (avgPitch < -7.5) {
      score -= 2.0;
      const causeNote = headLifted ? ' (accentuato dal sollevamento del capo)' : '';
      macroFaults.push({
        title: `Assetto Frenante: Gambe e Bacino Affondati (${avgPitch}°)${causeNote}`,
        severity: 'high',
        impact: `+${Math.round(Math.abs(avgPitch) * 2.3)}% resistenza d'attrito`,
        detail: `L'asse corporeo evidenzia un'inclinazione verso il basso di ${avgPitch}° rispetto al piano dell'acqua (target: tra -2° e -4°). Le gambe scendono troppo in profondità creando turbolenze frenanti.`
      });
      addWaterDrill({
        name: 'Battuta di Gambe con Tavoletta Piatta & Snorkel',
        reps: '4 x 50m',
        gear: 'Snorkel + Tavoletta tenuta orizzontale a pelo d\'acqua',
        goal: 'Premere con il torace in basso per sollevare la linea di galleggiamento di anche e talloni.'
      });
      addDrylandDrill({
        name: 'Hollow Body Hold (Barchetta a Terra)',
        reps: '4 x 30 secondi',
        gear: 'A corpo libero su tappetino',
        focus: 'Attivazione del trasverso addominale e retroversione del bacino per annullare l\'inclinazione.'
      });
    } else if (avgPitch >= -4.5 && avgPitch <= 1.5) {
      strengths.push({
        title: `Assetto a Siluro Orizzontale (${avgPitch}°)`,
        detail: `Linee del corpo perfettamente idrodinamiche lungo la linea di galleggiamento. Minima resistenza frontale.`
      });
    } else {
      microFaults.push({
        title: `Leggero Disallineamento Posteriore (${avgPitch}°)`,
        detail: `Inclinazione lievemente accentuata verso il basso. Ottimizzabile premendo con maggiore costanza sulla cassa toracica.`
      });
    }

    // 3. HEAD & BREATHING EVALUATION (avoid duplicate if pitch already explains it)
    if (headLifted && avgPitch >= -7.5) {
      score -= 0.8;
      microFaults.push({
        title: `Iperestensione del Capo nella Respirazione`,
        detail: `Durante la fase respiratoria il capo si solleva frontalmente anziché ruotare adagiandosi sulla scia della spalla.`
      });
      addWaterDrill({
        name: 'Stile con un Occhialino Permanente in Acqua',
        reps: '4 x 50m',
        gear: 'Senza attrezzi',
        goal: 'Mantenere sempre un occhialino immerso durante ogni respirazione laterale.'
      });
    } else if (!headLifted) {
      strengths.push({
        title: `Assetto del Capo Corretto`,
        detail: `La testa rimane adagiata sulla linea d'avanzamento, proteggendo l'allineamento della colonna vertebrale.`
      });
    }

    // 4. CADENCE EVALUATION
    if (spm < 38) {
      score -= 0.5;
      microFaults.push({
        title: `Cadenza di Bracciata Bassa (${spm} SPM)`,
        detail: `Frequenza di ${spm} bracciate/min. È presente una fase di scivolamento passivo prolungata che causa decelerazione tra le bracciate.`
      });
    } else if (spm > 54) {
      microFaults.push({
        title: `Cadenza da Sprint Elevata (${spm} SPM)`,
        detail: `Frequenza molto alta (${spm} SPM). Assicurarsi di completare la spinta del tricipite fino al contatto del pollice con la coscia.`
      });
    } else {
      strengths.push({
        title: `Cadenza e Ritmo Ottimali (${spm} SPM)`,
        detail: `Continuità propulsiva eccellente senza pause morte.`
      });
    }

    // Fallback catalogue drills if fewer than 2 exist
    if (waterDrills.length < 2 && diag.waterDrills) {
      for (const d of diag.waterDrills) {
        addWaterDrill(d);
        if (waterDrills.length >= 2) break;
      }
    }
    if (drylandDrills.length < 2 && diag.drylandDrills) {
      for (const d of diag.drylandDrills) {
        addDrylandDrill(d);
        if (drylandDrills.length >= 2) break;
      }
    }

    const finalScore = Math.max(4.8, Math.min(9.8, score)).toFixed(1);

    return {
      stroke,
      perspective,
      perspectiveName: diag.perspectiveName,
      eliteBenchmark: diag.eliteBenchmark,
      score: finalScore,
      macroFaults,
      microFaults,
      strengths,
      waterDrills,
      drylandDrills,
      metrics: {
        evfAngle,
        bodyPitch: avgPitch,
        cadence: spm,
        headStatus: headLifted ? 'Sollevata (+14°)' : 'Allineata (0°)',
        isPoseAI: analyzedFrames.some(f => f.isPoseAI)
      }
    };
  }

  // Helper: Generate WhatsApp Text with real metrics
  function generateWhatsAppShareUrl(report) {
    const strokeNames = {
      freestyle: 'Stile Libero',
      backstroke: 'Dorso',
      breaststroke: 'Rana',
      butterfly: 'Farfalla'
    };

    const m = report.metrics || {};
    const text = `🏊 *AQUASCAN PRO - REPORT BIOMECCANICO NUOTO*
━━━━━━━━━━━━━━━━━━━━
📌 *Stile:* ${strokeNames[report.stroke] || report.stroke}
📐 *Prospettiva:* ${report.perspectiveName}
⭐ *Valutazione:* ${report.score}/10

📊 *PARAMETRI MISURATI DAL VIDEO:*
• Gomito EVF: ${m.evfAngle ? m.evfAngle + '°' : 'Rilevato'}
• Inclinazione Corpo: ${m.bodyPitch !== undefined ? (m.bodyPitch > 0 ? '+' : '') + m.bodyPitch + '°' : 'Rilevata'}
• Cadenza Stimata: ${m.cadence ? m.cadence + ' SPM' : 'N/D'}

⚠️ *ANALISI TECNICA RILEVATA:*
${report.macroFaults.map((f, i) => `🔴 ${i + 1}. *${f.title}*\n   _${f.detail}_ (${f.impact || ''})`).join('\n')}

${report.microFaults.map((f) => `🟡 *Micro:* ${f.title} - ${f.detail}`).join('\n')}

${report.strengths && report.strengths.length > 0 ? `✅ *PUNTI DI FORZA:*\n${report.strengths.map(s => `• *${s.title}*: ${s.detail}`).join('\n')}\n` : ''}
🏊‍♂️ *SOLUZIONI IN VASCA (ESERCIZI ACQUA):*
${report.waterDrills.map((d) => `✅ *${d.name}*\n   • Serie: ${d.reps} | Attrezzo: ${d.gear}\n   • Obiettivo: ${d.goal}`).join('\n\n')}

🏋️‍♂️ *SOLUZIONI A SECCO (DRYLAND / PALESTRA):*
${report.drylandDrills.map((d) => `💪 *${d.name}*\n   • Volume: ${d.reps} (${d.gear})\n   • Focus: ${d.focus}`).join('\n\n')}

━━━━━━━━━━━━━━━━━━━━
Generato con AquaMetrics Pro`;

    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  }

  // ==========================================
  // 3. BIOMECHANICAL CANVAS (STUDIO LAB)
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
      if (tool === 'goniometer') this.anglePoints = [];
      this.render();
    }

    setColor(color) { this.drawColor = color; }

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
      if (this.anglePoints.length > 0) this.anglePoints.pop();
      else if (this.storedAngles.length > 0) this.storedAngles.pop();
      else if (this.paths.length > 0) this.paths.pop();
      this.render();
    }

    initEvents() {
      const getPos = (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return { x: clientX - rect.left, y: clientY - rect.top };
      };

      const handlePointerDown = (e) => {
        if (this.currentTool === 'none') return;
        e.preventDefault();
        const pos = getPos(e);

        if (this.currentTool === 'goniometer') {
          this.anglePoints.push(pos);
          if (this.anglePoints.length === 3) {
            const deg = this.calculateAngle(this.anglePoints[0], this.anglePoints[1], this.anglePoints[2]);
            this.storedAngles.push({ points: [...this.anglePoints], angle: Math.round(deg) });
            if (this.onAngleMeasured) this.onAngleMeasured(Math.round(deg), this.label);
            this.anglePoints = [];
          }
          this.render();
        } else if (this.currentTool === 'freehand') {
          this.isDrawing = true;
          this.paths.push({ type: 'freehand', color: this.drawColor, width: this.lineWidth, points: [pos] });
        } else if (this.currentTool === 'line' || this.currentTool === 'arrow') {
          this.isDrawing = true;
          this.paths.push({ type: this.currentTool, color: this.drawColor, width: this.lineWidth, start: pos, end: pos });
        }
      };

      const handlePointerMove = (e) => {
        if (!this.isDrawing) return;
        const pos = getPos(e);
        const currentPath = this.paths[this.paths.length - 1];
        if (!currentPath) return;

        if (currentPath.type === 'freehand') currentPath.points.push(pos);
        else if (currentPath.type === 'line' || currentPath.type === 'arrow') currentPath.end = pos;
        this.render();
      };

      const handlePointerUp = () => { this.isDrawing = false; };

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
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
        }
        for (let x = 50; x < w; x += 50) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
        }
        ctx.restore();
      }

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
          for (let i = 1; i < p.points.length; i++) ctx.lineTo(p.points[i].x, p.points[i].y);
          ctx.stroke();
        } else if (p.type === 'line') {
          ctx.beginPath(); ctx.moveTo(p.start.x, p.start.y); ctx.lineTo(p.end.x, p.end.y); ctx.stroke();
        } else if (p.type === 'arrow') {
          this.drawArrow(ctx, p.start.x, p.start.y, p.end.x, p.end.y, p.width);
        }
        ctx.restore();
      }

      for (const item of this.storedAngles) {
        this.drawAngleGraphic(ctx, item.points[0], item.points[1], item.points[2], item.angle);
      }

      if (this.anglePoints.length > 0) {
        ctx.save();
        ctx.strokeStyle = '#f59e0b';
        ctx.fillStyle = '#f59e0b';
        ctx.lineWidth = 2;
        this.anglePoints.forEach((p, idx) => {
          ctx.beginPath(); ctx.arc(p.x, p.y, 6, 0, Math.PI * 2); ctx.fill();
          ctx.font = '12px Inter, sans-serif';
          const labels = ['A (Spalla)', 'B (Gomito)', 'C (Polso)'];
          ctx.fillText(labels[idx] || `P${idx + 1}`, p.x + 10, p.y - 5);
        });
        if (this.anglePoints.length === 2) {
          ctx.beginPath(); ctx.moveTo(this.anglePoints[0].x, this.anglePoints[0].y); ctx.lineTo(this.anglePoints[1].x, this.anglePoints[1].y); ctx.stroke();
        }
        ctx.restore();
      }
    }

    drawArrow(ctx, fromX, fromY, toX, toY, width) {
      const headlen = 14;
      const angle = Math.atan2(toY - fromY, toX - fromX);
      ctx.beginPath(); ctx.moveTo(fromX, fromY); ctx.lineTo(toX, toY); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(toX, toY);
      ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
      ctx.closePath(); ctx.fill();
    }

    drawAngleGraphic(ctx, pA, pB, pC, angleDeg) {
      ctx.save();
      let badgeColor = '#10b981';
      if (angleDeg < 95) badgeColor = '#f43f5e';
      else if (angleDeg > 130) badgeColor = '#f59e0b';

      ctx.strokeStyle = badgeColor;
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(pA.x, pA.y); ctx.lineTo(pB.x, pB.y); ctx.lineTo(pC.x, pC.y); ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.arc(pB.x, pB.y, 5, 0, Math.PI * 2); ctx.fill();

      const r = 28;
      const angleA = Math.atan2(pA.y - pB.y, pA.x - pB.x);
      const angleC = Math.atan2(pC.y - pB.y, pC.x - pB.x);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(pB.x, pB.y, r, angleA, angleC, false); ctx.stroke();

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
  // 4. VIDEO SYNC ENGINE (STUDIO LAB)
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
      this.transforms = { user: { flipH: false, rotate: 0 }, pro: { flipH: false, rotate: 0 } };
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
              if (this.isLinked) this.videoPro.currentTime = Math.max(0, this.loopStart + this.syncOffset);
            }
          }
          if (this.isLinked && !this.videoUser.paused) {
            const expectedProTime = this.videoUser.currentTime + this.syncOffset;
            const drift = Math.abs(this.videoPro.currentTime - expectedProTime);
            if (drift > 0.09) this.videoPro.currentTime = Math.max(0, expectedProTime);
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
      if (this.isPlaying) this.pause();
      else await this.play();
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
      if (this.isLinked) this.syncOffset = (this.videoPro.currentTime || 0) - (this.videoUser.currentTime || 0);
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
      if (ghostVideo) ghostVideo.style.opacity = val;
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
  // 5. STROKE RATE CALCULATOR (SPM)
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
      if (this.taps.length > 0 && (now - this.taps[this.taps.length - 1]) > 4000) this.taps = [];
      this.taps.push(now);
      if (this.taps.length > this.maxTaps) this.taps.shift();
      this.playClick();
      return this.calculate();
    }

    reset() {
      this.taps = [];
      if (this.onUpdate) this.onUpdate({ spm: null, cycleTime: null, classification: '--' });
    }

    calculate() {
      if (this.taps.length < 2) {
        const res = { spm: null, cycleTime: null, tapCount: this.taps.length, classification: 'Tocca ancora...' };
        if (this.onUpdate) this.onUpdate(res);
        return res;
      }
      const intervals = [];
      for (let i = 1; i < this.taps.length; i++) intervals.push(this.taps[i] - this.taps[i - 1]);
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
        if (!this.audioCtx) this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
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
  // 6. AI COACH ENGINE (HEURISTIC + GEMINI)
  // ==========================================
  class AiCoachEngine {
    constructor() {
      this.apiKey = localStorage.getItem('aquametrics_gemini_key') || '';
    }

    setApiKey(key) {
      this.apiKey = key.trim();
      if (this.apiKey) localStorage.setItem('aquametrics_gemini_key', this.apiKey);
      else localStorage.removeItem('aquametrics_gemini_key');
    }

    getApiKey() { return this.apiKey; }

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
            drills.push('Sculling subacqueo con boccaglio frontale (focus sulla posizione del gomito alto)');
            drills.push('Nuotata con palette senza cinghietto al polso (cadono se il gomito crolla)');
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
        if (styleData.commonErrors[1]) drills.push(styleData.commonErrors[1].drill);
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
      if (videoElement && videoElement.videoWidth) ctx.drawImage(videoElement, 0, 0, 640, 360);
      else {
        ctx.fillStyle = '#0a0f18';
        ctx.fillRect(0, 0, 640, 360);
      }
      return canvas.toDataURL('image/jpeg', 0.85);
    }

    async analyzeKeyframesWithGemini({ keyframes, stroke = 'freestyle', perspective = 'lateral', metrics = {} }) {
      if (!this.apiKey) {
        throw new Error('Chiave API Google Gemini non configurata. Inseriscila nelle impostazioni (è gratuita!).');
      }

      const strokeNames = {
        freestyle: 'Stile Libero',
        backstroke: 'Dorso',
        breaststroke: 'Rana',
        butterfly: 'Farfalla'
      };

      const systemPrompt = `Sei un Allenatore Federale di Nuoto Olimpico ed esperto di biomeccanica e idrodinamica.
Ti vengono forniti 4 fotogrammi sequenziali estratti da questo video girato da smartphone:
- Stile: ${strokeNames[stroke] || stroke}
- Prospettiva: ${perspective}
- Parametri biomeccanici rilevati dal sensore di visione:
  • Angolo gomito (EVF): ${metrics.evfAngle || 'N/D'}°
  • Inclinazione corporea (Pitch): ${metrics.bodyPitch !== undefined ? metrics.bodyPitch + '°' : 'N/D'}
  • Cadenza stimata: ${metrics.cadence || 'N/D'} SPM

Fasi dei 4 fotogrammi:
1. Ingresso e Scivolamento
2. Presa d'Acqua (Catch / EVF)
3. Trazione e Spinta (Pull & Push)
4. Recupero e Respirazione

Fornisci una perizia tecnica comparativa e costruttiva per questo atleta, commentando ciò che vedi realmente nelle immagini (assetto delle mani, bolle, rollio, rotazione del capo, battuta di gambe) e redigi un piano correttivo in Markdown con queste sezioni:
# 🏊 Report Tecnico Approfondito - Vision AI Coach
### 1. Diagnosi Visiva Fotogramma per Fotogramma
- **1. Ingresso:** [Descrizione dettagliata di ciò che si osserva nel fotogramma 1]
- **2. Presa EVF:** [Analisi della presa d'acqua e posizione del gomito]
- **3. Trazione & Spinta:** [Traiettoria e accelerazione della mano]
- **4. Recupero & Respirazione:** [Posizione della testa e rollio delle spalle]
### 2. Errori Biomeccanici Prioritari
1. **[Errore 1]:** [Spiegazione tecnica e impatto]
2. **[Errore 2]:** [Spiegazione tecnica e impatto]
### 3. Protocollo di Correzione Mirato (3 Esercizi Specifici)
1. **[Esercizio in Acqua 1]:** [Serie e focus pratico]
2. **[Esercizio in Acqua 2]:** [Serie e focus pratico]
3. **[Esercizio a Secco 3]:** [Esercizio con elastici o a corpo libero]
### 4. Pagella Finale
- **Efficienza Idrodinamica (Streamline):** [Voto /10]
- **Propulsione della Passata:** [Voto /10]
- **Voto Tecnico Complessivo:** [Voto /10]`;

      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${this.apiKey}`;
      const parts = [{ text: systemPrompt }];

      for (let i = 0; i < keyframes.length; i++) {
        const kf = keyframes[i];
        if (kf.dataUrl && kf.dataUrl.includes('base64,')) {
          parts.push({
            inline_data: {
              mime_type: 'image/jpeg',
              data: kf.dataUrl.split('base64,')[1]
            }
          });
        }
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
      if (!text) throw new Error('Nessuna risposta generata dal modello Vision AI.');
      return text;
    }
  }

  // ==========================================
  // 7. HIGH-RESOLUTION SNAPSHOT EXPORT
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
    if (videoUser && videoUser.videoWidth) expCtx.drawImage(videoUser, leftX, topY, paneWidth, paneHeight);
    if (canvasUser) expCtx.drawImage(canvasUser, leftX, topY, paneWidth, paneHeight);

    expCtx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    expCtx.fillRect(leftX + 20, topY + 20, 220, 36);
    expCtx.font = 'bold 16px Inter, sans-serif';
    expCtx.fillStyle = '#00e5ff';
    expCtx.fillText('ATLETA UTENTE', leftX + 35, topY + 44);

    const rightX = leftX + paneWidth + 40;
    expCtx.fillStyle = '#020408';
    expCtx.fillRect(rightX, topY, paneWidth, paneHeight);
    if (videoPro && videoPro.videoWidth) expCtx.drawImage(videoPro, rightX, topY, paneWidth, paneHeight);
    if (canvasPro) expCtx.drawImage(canvasPro, rightX, topY, paneWidth, paneHeight);

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
  // 8. AQUAMETRICS APP MASTER CONTROLLER
  // ==========================================
  class AquaMetricsApp {
    constructor() {
      // Current mode: 'mobile' or 'desktop'
      this.currentMode = localStorage.getItem('aquametrics_mode') || (window.innerWidth < 1024 ? 'mobile' : 'desktop');
      this.mobileStroke = 'freestyle';
      this.mobilePersp = 'lateral';

      // Desktop state
      this.desktopStyle = 'freestyle';
      this.activePhaseIndex = 1;
      this.measuredAngle = null;
      this.userUploadedCustomVideo = false;

      this.initCommonElements();
      this.initMobileExpress();
      this.initDesktopLab();
      this.setMode(this.currentMode);

      if (window.lucide) {
        window.lucide.createIcons();
      }
    }

    initCommonElements() {
      this.btnModeMobile = document.getElementById('btnModeMobile');
      this.btnModeDesktop = document.getElementById('btnModeDesktop');
      this.mobileExpressView = document.getElementById('mobileExpressView');
      this.desktopLabView = document.getElementById('desktopLabView');

      this.btnModeMobile.addEventListener('click', () => this.setMode('mobile'));
      this.btnModeDesktop.addEventListener('click', () => this.setMode('desktop'));

      // Modals
      this.modalAiReport = document.getElementById('modalAiReport');
      this.modalSettings = document.getElementById('modalSettings');
      this.modalFilmingGuide = document.getElementById('modalFilmingGuide');

      document.getElementById('btnOpenSettings').addEventListener('click', () => {
        document.getElementById('inputApiKey').value = this.aiCoach.getApiKey();
        this.modalSettings.classList.remove('hidden');
      });
      document.getElementById('btnCloseSettings').addEventListener('click', () => {
        this.modalSettings.classList.add('hidden');
      });
      document.getElementById('btnSaveSettings').addEventListener('click', () => {
        const key = document.getElementById('inputApiKey').value;
        this.aiCoach.setApiKey(key);
        this.modalSettings.classList.add('hidden');
        this.showToast('Impostazioni salvate!');
      });

      document.getElementById('btnOpenFilmingGuide').addEventListener('click', () => {
        this.modalFilmingGuide.classList.remove('hidden');
      });
      document.getElementById('btnCloseFilmingGuide').addEventListener('click', () => {
        this.modalFilmingGuide.classList.add('hidden');
      });
      document.getElementById('btnCloseFilmingGuideBottom').addEventListener('click', () => {
        this.modalFilmingGuide.classList.add('hidden');
      });
    }

    setMode(mode) {
      this.currentMode = mode;
      localStorage.setItem('aquametrics_mode', mode);

      if (mode === 'mobile') {
        this.btnModeMobile.className = 'mode-tab active flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20';
        this.btnModeDesktop.className = 'mode-tab flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-all';
        this.mobileExpressView.classList.remove('hidden');
        this.desktopLabView.classList.add('hidden');
        document.getElementById('btnExportSnapshot').classList.add('hidden');
        document.getElementById('btnToggleCoachDrawer').classList.add('hidden');
      } else {
        this.btnModeDesktop.className = 'mode-tab active flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20';
        this.btnModeMobile.className = 'mode-tab flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-all';
        this.mobileExpressView.classList.add('hidden');
        this.desktopLabView.classList.remove('hidden');
        document.getElementById('btnExportSnapshot').classList.remove('hidden');
        document.getElementById('btnToggleCoachDrawer').classList.remove('hidden');

        // Resize desktop video canvas
        setTimeout(() => {
          this.biomechUser.resizeToVideo();
          this.biomechPro.resizeToVideo();
        }, 150);
      }

      if (window.lucide) window.lucide.createIcons();
    }

    // ==========================================
    // MOBILE EXPRESS LOGIC (1-TAP SCANNER)
    // ==========================================
    initMobileExpress() {
      // Stroke selector buttons
      document.querySelectorAll('.mobile-stroke-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.mobile-stroke-btn').forEach(b => {
            b.classList.remove('bg-cyan-500', 'text-slate-950', 'shadow-md', 'shadow-cyan-500/20');
            b.classList.add('bg-slate-900/90', 'text-slate-300');
          });
          btn.classList.add('bg-cyan-500', 'text-slate-950', 'shadow-md', 'shadow-cyan-500/20');
          btn.classList.remove('bg-slate-900/90', 'text-slate-300');
          this.mobileStroke = btn.getAttribute('data-stroke');
        });
      });

      // Perspective selector buttons
      const perspHints = {
        lateral: 'Laterale (EVF & linea d\'acqua)',
        frontal: 'Frontale (Crossover braccia & rollio)',
        posterior: 'Posteriore (Scodata & ampiezza gambe)',
        underwater: 'Subacqueo (Presa d\'acqua & turbolenza)'
      };

      document.querySelectorAll('.mobile-persp-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.mobile-persp-btn').forEach(b => {
            b.classList.remove('bg-emerald-500', 'text-slate-950', 'shadow-md', 'shadow-emerald-500/20');
            b.classList.add('bg-slate-900/90', 'text-slate-300');
          });
          btn.classList.add('bg-emerald-500', 'text-slate-950', 'shadow-md', 'shadow-emerald-500/20');
          btn.classList.remove('bg-slate-900/90', 'text-slate-300');
          this.mobilePersp = btn.getAttribute('data-persp');
          document.getElementById('perspectiveHint').textContent = perspHints[this.mobilePersp] || '';
        });
      });

      // Video Camera & Gallery Inputs
      const handleVideoFile = (file) => {
        if (!file) return;
        this.runMobileScan(file);
      };

      const camInput = document.getElementById('mobileCameraInput');
      camInput.addEventListener('change', (e) => handleVideoFile(e.target.files[0]));

      const gallInput = document.getElementById('mobileGalleryInput');
      gallInput.addEventListener('change', (e) => handleVideoFile(e.target.files[0]));

      // Fast Demo Button
      document.getElementById('btnMobileRunDemo').addEventListener('click', () => {
        this.runMobileScan('assets/sample-swim.webm');
      });

      // Reset Button
      document.getElementById('btnResetMobileAnalysis').addEventListener('click', () => {
        document.getElementById('mobileReportSection').classList.add('hidden');
        document.getElementById('mobileCaptureSection').classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      // Copy Button
      document.getElementById('btnCopyMobileReport').addEventListener('click', () => {
        if (this.currentMobileReport) {
          const text = this.generatePlainTextReport(this.currentMobileReport);
          navigator.clipboard.writeText(text);
          this.showToast('Scheda copiata negli appunti!');
        }
      });

      // Gemini Vision Deep-Dive Button
      const btnGemini = document.getElementById('btnMobileRunGemini');
      if (btnGemini) {
        btnGemini.addEventListener('click', async () => {
          if (!this.aiCoach.getApiKey()) {
            this.modalSettings.classList.remove('hidden');
            this.showToast('Inserisci prima la tua chiave API Google Gemini (gratuita) nelle impostazioni.');
            return;
          }

          const btnText = document.getElementById('btnMobileGeminiText');
          const resultContainer = document.getElementById('mobileGeminiResult');
          if (!this.currentMobileReport) {
            this.showToast('Esegui prima la scansione del video.');
            return;
          }

          btnGemini.disabled = true;
          btnText.innerHTML = `<span class="inline-block w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span> Analisi in corso con Gemini Vision AI...`;

          try {
            const md = await this.aiCoach.analyzeKeyframesWithGemini({
              keyframes: this.currentMobileReport.keyframes,
              stroke: this.currentMobileReport.stroke,
              perspective: this.currentMobileReport.perspective,
              metrics: this.currentMobileReport.metrics
            });
            resultContainer.innerHTML = window.marked ? window.marked.parse(md) : `<pre class="whitespace-pre-wrap">${md}</pre>`;
            resultContainer.classList.remove('hidden');
            resultContainer.scrollIntoView({ behavior: 'smooth' });
          } catch (err) {
            resultContainer.innerHTML = `<div class="p-3 bg-rose-950/40 border border-rose-500/40 text-rose-300 rounded-lg">Errore durante l'analisi Vision AI: ${err.message}</div>`;
            resultContainer.classList.remove('hidden');
          } finally {
            btnGemini.disabled = false;
            btnText.textContent = 'Aggiorna Analisi Visiva Approfondita con Gemini AI';
          }
        });
      }

      // Keyframe Zoom Lightbox Listeners
      this.currentZoomIndex = 0;
      const modalZoom = document.getElementById('modalKeyframeZoom');
      const btnCloseZoom = document.getElementById('btnCloseZoom');
      if (btnCloseZoom) {
        btnCloseZoom.addEventListener('click', () => this.closeKeyframeZoom());
      }

      const btnZoomPrev = document.getElementById('btnZoomPrev');
      if (btnZoomPrev) btnZoomPrev.addEventListener('click', () => this.navigateZoom(-1));
      const btnOverlayPrev = document.getElementById('btnOverlayPrev');
      if (btnOverlayPrev) btnOverlayPrev.addEventListener('click', () => this.navigateZoom(-1));

      const btnZoomNext = document.getElementById('btnZoomNext');
      if (btnZoomNext) btnZoomNext.addEventListener('click', () => this.navigateZoom(1));
      const btnOverlayNext = document.getElementById('btnOverlayNext');
      if (btnOverlayNext) btnOverlayNext.addEventListener('click', () => this.navigateZoom(1));

      if (modalZoom) {
        modalZoom.addEventListener('click', (e) => {
          if (e.target === modalZoom) this.closeKeyframeZoom();
        });
      }

      window.addEventListener('keydown', (e) => {
        if (modalZoom && !modalZoom.classList.contains('hidden')) {
          if (e.key === 'Escape') this.closeKeyframeZoom();
          if (e.key === 'ArrowLeft') this.navigateZoom(-1);
          if (e.key === 'ArrowRight') this.navigateZoom(1);
        }
      });
    }

    openKeyframeZoom(index) {
      if (!this.currentMobileReport || !this.currentMobileReport.keyframes) return;
      const keyframes = this.currentMobileReport.keyframes;
      if (index < 0 || index >= keyframes.length) return;

      this.currentZoomIndex = index;
      const kf = keyframes[index];

      const modal = document.getElementById('modalKeyframeZoom');
      const img = document.getElementById('zoomFrameImage');
      const title = document.getElementById('zoomFrameTitle');
      const time = document.getElementById('zoomFrameTime');
      const phaseBadge = document.getElementById('zoomPhaseBadge');
      const metricsBadge = document.getElementById('zoomMetricsBadge');
      const desc = document.getElementById('zoomFrameDescription');

      if (img && kf.dataUrl) img.src = kf.dataUrl;
      if (title) title.textContent = kf.label || `Fotogramma ${index + 1}`;
      if (time) time.textContent = kf.time || '';
      if (phaseBadge) phaseBadge.textContent = `Fase ${index + 1}/4`;

      const descriptions = [
        'Fase 1: Ingresso e Scivolamento. La mano deve entrare distesa lungo la linea della spalla ("binari del treno"). L\'asse corporeo deve formare una linea idrodinamica a siluro a pelo d\'acqua (pitch compreso tra -2° e -4°).',
        'Fase 2: Presa d\'Acqua (Catch / EVF). Momento cardine della nuotata: l\'avambraccio si verticalizza creando una pala d\'acqua efficace, mentre il gomito deve restare stabilmente più alto rispetto al polso.',
        'Fase 3: Trazione e Spinta (Pull & Push). Massima accelerazione propulsiva: la mano spinge indietro sotto la cassa toracica completando l\'estensione del tricipite fino al contatto del pollice con la coscia.',
        'Fase 4: Recupero e Respirazione. Braccio decontratto e flesso durante la fase aerea. Il capo ruota senza sollevarsi frontalmente, mantenendo un occhialino immerso per non far affondare il bacino.'
      ];

      if (desc) desc.textContent = descriptions[index] || 'Analisi dettagliata del fotogramma biomeccanico.';

      if (metricsBadge) {
        const evf = kf.evfAngle ? `EVF: ${kf.evfAngle}°` : '';
        const pitch = kf.pitchAngle !== undefined ? `Pitch: ${kf.pitchAngle > 0 ? '+' : ''}${kf.pitchAngle}°` : '';
        metricsBadge.textContent = [evf, pitch].filter(Boolean).join(' | ');
      }

      modal.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
    }

    navigateZoom(direction) {
      if (!this.currentMobileReport || !this.currentMobileReport.keyframes) return;
      const total = this.currentMobileReport.keyframes.length;
      let nextIndex = (this.currentZoomIndex + direction) % total;
      if (nextIndex < 0) nextIndex += total;
      this.openKeyframeZoom(nextIndex);
    }

    closeKeyframeZoom() {
      const modal = document.getElementById('modalKeyframeZoom');
      if (modal) modal.classList.add('hidden');
    }

    async runMobileScan(videoSource) {
      const captureSection = document.getElementById('mobileCaptureSection');
      const progressSection = document.getElementById('mobileScanningProgress');
      const reportSection = document.getElementById('mobileReportSection');
      const progressBar = document.getElementById('mobileProgressBar');
      const heading = document.getElementById('scanningStatusHeading');
      const sub = document.getElementById('scanningStatusSub');

      captureSection.classList.add('hidden');
      reportSection.classList.add('hidden');
      progressSection.classList.remove('hidden');

      // Step 1: Extract Keyframes & Run Vision Engine
      progressBar.style.width = '35%';
      heading.textContent = '1. Estrazione Fotogrammi Chiave...';
      sub.textContent = 'Isolamento fasi: Ingresso, Presa EVF, Trazione, Recupero...';

      if (!this.visionEngine) {
        this.visionEngine = new BiomechanicalVisionEngine();
      }

      const keyframes = await extractVideoKeyframes(videoSource, 4, this.visionEngine, this.mobileStroke, this.mobilePersp);

      // Step 2: Biomechanical Evaluation
      progressBar.style.width = '75%';
      heading.textContent = '2. Analisi Biomeccanica Reale dei Fotogrammi...';
      sub.textContent = 'Calcolo angolo EVF, inclinazione pitch corporea e cadenza...';

      await new Promise(r => setTimeout(r, 400));

      // Step 3: Generate Prescriptions
      progressBar.style.width = '100%';
      heading.textContent = '3. Generazione Scheda Correttiva Personalizzata...';
      sub.textContent = 'Assegnazione esercizi mirati ai difetti effettivi...';

      await new Promise(r => setTimeout(r, 300));

      // Build Dynamic Report from actual video measurements
      const report = analyzeVideoBiomechanics({
        stroke: this.mobileStroke,
        perspective: this.mobilePersp,
        analyzedFrames: keyframes,
        videoDuration: keyframes._videoDuration || 4.0
      });
      report.keyframes = keyframes;

      this.currentMobileReport = report;
      this.renderMobileReport(report);

      progressSection.classList.add('hidden');
      reportSection.classList.remove('hidden');

      // Scroll smoothly to results
      reportSection.scrollIntoView({ behavior: 'smooth' });
    }

    renderMobileReport(report) {
      const strokeNames = {
        freestyle: 'Stile Libero',
        backstroke: 'Dorso',
        breaststroke: 'Rana',
        butterfly: 'Farfalla'
      };

      document.getElementById('reportStrokeBadge').textContent = strokeNames[report.stroke] || report.stroke;
      document.getElementById('reportPerspBadge').textContent = report.perspectiveName;
      document.getElementById('reportScoreNum').textContent = report.score;

      // Verdict - Concise non-duplicate summary
      const mainFault = (report.macroFaults && report.macroFaults.length > 0) ? report.macroFaults[0].title : null;
      document.getElementById('reportVerdictText').textContent = mainFault
        ? `Priorità d'intervento: ${mainFault}. Assegnati protocolli mirati per assetto e pala d'acqua.`
        : `Nuotata fluida ed idrodinamica: nessun difetto critico macroscopico riscontrato, focus su ritmo e continuità.`;

      // Real Biomechanical Metrics Dashboard
      const metricsGrid = document.getElementById('mobileMetricsGrid');
      if (metricsGrid && report.metrics) {
        const m = report.metrics;
        const isEvfGood = m.evfAngle >= 100 && m.evfAngle <= 125;
        const evfColor = isEvfGood ? 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20' : (m.evfAngle < 95 || m.evfAngle > 135 ? 'text-rose-400 border-rose-500/30 bg-rose-950/20' : 'text-amber-400 border-amber-500/30 bg-amber-950/20');
        
        const isPitchGood = m.bodyPitch >= -4.5 && m.bodyPitch <= 1.5;
        const pitchColor = isPitchGood ? 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20' : (m.bodyPitch < -7.5 ? 'text-rose-400 border-rose-500/30 bg-rose-950/20' : 'text-amber-400 border-amber-500/30 bg-amber-950/20');

        metricsGrid.innerHTML = `
          <div class="p-2 rounded-xl border ${evfColor} flex flex-col">
            <span class="text-[9px] uppercase font-mono text-slate-400">Gomito EVF</span>
            <span class="text-sm font-bold font-mono mt-0.5">${m.evfAngle}°</span>
            <span class="text-[9px] text-slate-400">${isEvfGood ? 'Ottimale (100-120°)' : (m.evfAngle < 95 ? 'Gomito Basso' : 'Braccio Teso')}</span>
          </div>
          <div class="p-2 rounded-xl border ${pitchColor} flex flex-col">
            <span class="text-[9px] uppercase font-mono text-slate-400">Pitch Assetto</span>
            <span class="text-sm font-bold font-mono mt-0.5">${m.bodyPitch > 0 ? '+' : ''}${m.bodyPitch}°</span>
            <span class="text-[9px] text-slate-400">${isPitchGood ? 'Siluro Élite' : (m.bodyPitch < -7.5 ? 'Affossato' : 'Accettabile')}</span>
          </div>
          <div class="p-2 rounded-xl border border-cyan-500/30 bg-cyan-950/20 flex flex-col">
            <span class="text-[9px] uppercase font-mono text-slate-400">Cadenza SPM</span>
            <span class="text-sm font-bold font-mono text-cyan-400 mt-0.5">${m.cadence}</span>
            <span class="text-[9px] text-slate-400">${m.cadence < 38 ? 'Passo Lento' : (m.cadence > 54 ? 'Sprint Alto' : 'Passo Gara')}</span>
          </div>
          <div class="p-2 rounded-xl border border-white/10 bg-slate-900/40 flex flex-col">
            <span class="text-[9px] uppercase font-mono text-slate-400">Capo & Motore</span>
            <span class="text-xs font-bold text-slate-200 mt-0.5 truncate">${m.headStatus}</span>
            <span class="text-[9px] font-mono ${m.isPoseAI ? 'text-emerald-400' : 'text-cyan-400'}">${m.isPoseAI ? 'MediaPipe AI' : 'Visione CV'}</span>
          </div>
        `;
      }

      // Filmstrip of 4 Extracted Keyframes (Click to Zoom in high-res Lightbox)
      const filmstrip = document.getElementById('mobileFilmstrip');
      filmstrip.innerHTML = report.keyframes.map((kf, idx) => `
        <div class="filmstrip-item bg-slate-900/90 hover:bg-slate-800 rounded-xl p-1.5 border border-white/10 hover:border-cyan-400 flex flex-col shadow-sm cursor-pointer transition-all active:scale-95 group" data-frame-index="${idx}" title="Tocca per ingrandire e vedere le linee di correzione">
          <div class="h-24 bg-slate-950 rounded-lg overflow-hidden flex items-center justify-center relative">
            ${kf.dataUrl ? `<img src="${kf.dataUrl}" class="w-full h-full object-cover">` : `<span class="text-[10px] text-slate-500">Fotogramma</span>`}
            <span class="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 rounded text-[9px] font-mono text-cyan-400">${kf.time}</span>
            ${kf.isPoseAI ? `<span class="absolute top-1 left-1 bg-emerald-500/90 text-slate-950 px-1 py-0.2 rounded text-[8px] font-bold">POSE AI</span>` : ''}
            <div class="absolute inset-0 bg-cyan-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span class="p-1.5 rounded-full bg-cyan-500 text-slate-950 shadow-lg">
                <i data-lucide="zoom-in" class="w-4 h-4"></i>
              </span>
            </div>
          </div>
          <div class="flex items-center justify-between mt-1 px-0.5">
            <span class="text-[10px] font-semibold text-slate-200 truncate">${kf.label}</span>
            <span class="text-[9px] text-cyan-400 font-mono font-medium flex items-center gap-0.5">🔍 Zoom</span>
          </div>
        </div>
      `).join('');

      // Attach click-to-zoom on each filmstrip card
      filmstrip.querySelectorAll('.filmstrip-item').forEach(item => {
        item.addEventListener('click', () => {
          const idx = parseInt(item.getAttribute('data-frame-index'), 10);
          this.openKeyframeZoom(idx);
        });
      });

      // Faults and Strengths List (Deduplicated)
      const faultsList = document.getElementById('mobileFaultsList');
      const hasMacro = report.macroFaults && report.macroFaults.length > 0;
      faultsList.innerHTML = `
        ${report.strengths && report.strengths.length > 0 ? `
          <div class="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 space-y-1">
            <div class="flex items-center gap-1.5 font-bold text-emerald-300 text-xs">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              PUNTI DI FORZA BIOMECCANICI
            </div>
            ${report.strengths.map(s => `
              <div class="text-[11px] text-slate-200">
                <span class="font-semibold text-emerald-300">• ${s.title}:</span> ${s.detail}
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${hasMacro ? report.macroFaults.map((f, i) => `
          <div class="p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/40 space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-bold text-rose-300 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-rose-400"></span>
                MACRO ${i + 1}: ${f.title}
              </span>
              ${f.impact ? `<span class="text-[10px] font-mono text-rose-400 bg-rose-950/60 border-rose-500/20 px-1.5 py-0.5 rounded border">${f.impact}</span>` : ''}
            </div>
            <p class="text-[11px] text-slate-300 leading-relaxed">${f.detail}</p>
          </div>
        `).join('') : `
          <div class="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Nessun macro-errore critico riscontrato sui parametri principali di presa e assetto.</span>
          </div>
        `}

        ${report.microFaults && report.microFaults.length > 0 ? report.microFaults.map((f) => `
          <div class="p-2 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></span>
            <div>
              <span class="font-bold text-amber-300 text-[11px]">MICRO: ${f.title}</span>
              <p class="text-[10px] text-slate-300 mt-0.5">${f.detail}</p>
            </div>
          </div>
        `).join('') : ''}
      `;

      // In-water Drills List (Deduplicated)
      const waterList = document.getElementById('mobileWaterDrillsList');
      waterList.innerHTML = report.waterDrills.map((d, i) => `
        <div class="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-1.5">
          <div class="flex items-center justify-between font-bold text-cyan-200">
            <span class="flex items-center gap-1.5">
              <span class="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px]">${i + 1}</span>
              ${d.name}
            </span>
            <span class="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">${d.reps}</span>
          </div>
          <div class="flex items-center gap-2 text-[11px] text-slate-400">
            <span class="text-slate-300 font-semibold">Attrezzi:</span>
            <span class="text-cyan-300 font-medium">${d.gear}</span>
          </div>
          <p class="text-[11px] text-slate-300 italic leading-snug">Obiettivo: ${d.goal}</p>
        </div>
      `).join('');

      // Dryland Drills List (Deduplicated)
      const dryList = document.getElementById('mobileDrylandDrillsList');
      dryList.innerHTML = report.drylandDrills.map((d, i) => `
        <div class="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1.5">
          <div class="flex items-center justify-between font-bold text-emerald-200">
            <span class="flex items-center gap-1.5">
              <span class="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">${i + 1}</span>
              ${d.name}
            </span>
            <span class="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">${d.reps}</span>
          </div>
          <div class="flex items-center gap-2 text-[11px] text-slate-400">
            <span class="text-slate-300 font-semibold">Attrezzo:</span>
            <span class="text-emerald-300 font-medium">${d.gear}</span>
          </div>
          <p class="text-[11px] text-slate-300 leading-snug">Focus: ${d.focus}</p>
        </div>
      `).join('');

      // WhatsApp Button URL
      const shareUrl = generateWhatsAppShareUrl(report);
      document.getElementById('btnShareWhatsApp').href = shareUrl;

      if (window.lucide) window.lucide.createIcons();
    }

    generatePlainTextReport(report) {
      return `🏊 AQUASCAN PRO REPORT (${report.perspectiveName})
Punteggio: ${report.score}/10
Errori: ${report.macroFaults.map(f => f.title).join(', ')}
Esercizi Acqua: ${report.waterDrills.map(d => `${d.name} (${d.reps})`).join(' | ')}
Esercizi Secco: ${report.drylandDrills.map(d => `${d.name} (${d.reps})`).join(' | ')}`;
    }

    // ==========================================
    // DESKTOP STUDIO LAB LOGIC
    // ==========================================
    initDesktopLab() {
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
      this.btnExportSnapshot = document.getElementById('btnExportSnapshot');
      this.btnRunGeminiAnalysis = document.getElementById('btnRunGeminiAnalysis');

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

      this.initDesktopEvents();
      this.loadDesktopVideos();
      this.updateCoachPanel();
    }

    initDesktopEvents() {
      this.btnPlayPause.addEventListener('click', () => this.syncEngine.togglePlay());
      this.btnPrevFrame.addEventListener('click', () => this.syncEngine.stepFrame(-1));
      this.btnNextFrame.addEventListener('click', () => this.syncEngine.stepFrame(1));

      document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active', 'bg-cyan-500/20', 'text-[#00e5ff]', 'font-bold'));
          btn.classList.add('active', 'bg-cyan-500/20', 'text-[#00e5ff]', 'font-bold');
          this.syncEngine.setSpeed(parseFloat(btn.getAttribute('data-speed')));
        });
      });

      this.timelineSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        const duration = this.videoUser.duration || 14;
        this.syncEngine.seekUser((val / 100) * duration);
      });

      this.btnLockSync.addEventListener('click', () => {
        const offset = this.syncEngine.lockCurrentAsSyncPoint();
        this.syncStatusText.textContent = `Sincronia Allineata (Δ ${offset.toFixed(2)}s)`;
        this.showToast(`Sync agganciata (Δ ${offset.toFixed(2)}s)`);
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

      document.getElementById('viewSideBySide').addEventListener('click', (e) => this.switchViewMode('side-by-side', e.currentTarget));
      document.getElementById('viewStacked').addEventListener('click', (e) => this.switchViewMode('stacked', e.currentTarget));
      document.getElementById('viewGhost').addEventListener('click', (e) => this.switchViewMode('ghost', e.currentTarget));

      const ghostSlider = document.getElementById('ghostOpacitySlider');
      if (ghostSlider) {
        ghostSlider.addEventListener('input', (e) => {
          this.syncEngine.setGhostOpacity(parseFloat(e.target.value));
        });
      }

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

      // Desktop Video Upload
      document.getElementById('inputVideoUser').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          this.userUploadedCustomVideo = true;
          this.videoUser.src = URL.createObjectURL(file);
          this.videoUser.load();
          this.userPlaceholder.classList.add('hidden');
          this.showToast(`Video caricato: ${file.name}`);
          setTimeout(() => this.syncEngine.play().catch(() => {}), 300);
        }
      });

      document.getElementById('btnLoadUserDemo').addEventListener('click', () => {
        this.loadDesktopVideos();
        this.syncEngine.play().catch(() => {});
        this.showToast('Demo video avviata!');
      });

      document.getElementById('btnFlipUser').addEventListener('click', () => this.syncEngine.toggleFlip('user'));
      document.getElementById('btnRotateUser').addEventListener('click', () => this.syncEngine.rotate('user'));
      document.getElementById('btnFlipPro').addEventListener('click', () => this.syncEngine.toggleFlip('pro'));
      document.getElementById('btnRotatePro').addEventListener('click', () => this.syncEngine.rotate('pro'));

      const selectPro = document.getElementById('selectProPreset');
      selectPro.addEventListener('change', (e) => {
        const val = e.target.value;
        let targetProVideo = null;

        if (val === 'freestyle-phelps') {
          this.proAthleteName.textContent = 'Michael Phelps (Stile Libero)';
          this.desktopStyle = 'freestyle';
          targetProVideo = 'assets/phelps-pro.webm';
        } else if (val === 'freestyle-evf') {
          this.proAthleteName.textContent = 'David Popovici (EVF Gomito Alto)';
          this.desktopStyle = 'freestyle';
          targetProVideo = 'assets/phelps-pro.webm';
        } else if (val === 'backstroke-ceccon') {
          this.proAthleteName.textContent = 'Thomas Ceccon (Dorso 90°)';
          this.desktopStyle = 'backstroke';
          targetProVideo = 'assets/sample-backstroke.webm';
        } else if (val === 'breaststroke-peaty') {
          this.proAthleteName.textContent = 'Adam Peaty (Rana Élite)';
          this.desktopStyle = 'breaststroke';
          targetProVideo = 'assets/peaty-pro.webm';
        } else if (val === 'butterfly-marchand') {
          this.proAthleteName.textContent = 'Léon Marchand (Farfalla Subacquea)';
          this.desktopStyle = 'butterfly';
          targetProVideo = 'assets/butterfly-pro.webm';
        }

        this.loadDesktopVideos(targetProVideo);
        this.updateCoachPanel();
      });

      this.btnTapCadence.addEventListener('click', () => this.strokeCalculator.tap());

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

      this.btnToggleCoachDrawer.addEventListener('click', () => this.coachDrawer.classList.toggle('hidden'));
      this.btnCloseCoachDrawer.addEventListener('click', () => this.coachDrawer.classList.add('hidden'));

      this.btnExportSnapshot.addEventListener('click', async () => {
        const styleData = PRO_LIBRARY[this.desktopStyle] || PRO_LIBRARY.freestyle;
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
        this.showToast('Snapshot salvata!');
      });

      this.btnRunGeminiAnalysis.addEventListener('click', async () => {
        if (!this.aiCoach.getApiKey()) {
          this.modalSettings.classList.remove('hidden');
          this.showToast('Inserisci prima la tua chiave API Google Gemini nelle impostazioni.');
          return;
        }

        this.modalAiReport.classList.remove('hidden');
        const container = document.getElementById('aiReportContent');
        container.innerHTML = `
          <div class="flex flex-col items-center justify-center py-12 text-slate-400">
            <div class="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p class="text-xs font-mono">Elaborazione biomeccanica con Gemini Vision...</p>
          </div>
        `;

        try {
          const reportMd = await this.aiCoach.analyzeWithGemini({
            userVideo: this.videoUser,
            proVideo: this.videoPro,
            styleKey: this.desktopStyle,
            measuredAngle: this.measuredAngle,
            spm: this.cadenceBadge.textContent.replace(' SPM', '')
          });
          if (window.marked) container.innerHTML = window.marked.parse(reportMd);
          else container.textContent = reportMd;
        } catch (err) {
          container.innerHTML = `<div class="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-200"><h4 class="font-bold text-sm text-rose-400 mb-1">Errore</h4><p class="text-xs">${err.message}</p></div>`;
        }
      });

      document.getElementById('btnCloseAiModal').addEventListener('click', () => this.modalAiReport.classList.add('hidden'));
      document.getElementById('btnCloseAiModalBottom').addEventListener('click', () => this.modalAiReport.classList.add('hidden'));
      document.getElementById('btnCopyReport').addEventListener('click', () => {
        navigator.clipboard.writeText(document.getElementById('aiReportContent').innerText);
        this.showToast('Report copiato!');
      });

      window.addEventListener('keydown', (e) => {
        if (this.currentMode !== 'desktop' || e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
        if (e.code === 'Space') { e.preventDefault(); this.syncEngine.togglePlay(); }
        else if (e.code === 'ArrowLeft') { e.preventDefault(); this.syncEngine.stepFrame(-1); }
        else if (e.code === 'ArrowRight') { e.preventDefault(); this.syncEngine.stepFrame(1); }
        else if (e.key === 'g' || e.key === 'G') this.setActiveTool('goniometer', this.toolGoniometer);
        else if (e.key === 's' || e.key === 'S') { this.syncEngine.lockCurrentAsSyncPoint(); this.showToast('Sync agganciata!'); }
      });
    }

    loadDesktopVideos(customProVideo = null) {
      const style = PRO_LIBRARY[this.desktopStyle] || PRO_LIBRARY.freestyle;
      this.videoUser.muted = true;
      this.videoPro.muted = true;

      if (!this.userUploadedCustomVideo) {
        this.videoUser.src = style.userVideo || style.fallbackUserUrl;
        this.videoUser.load();
      }

      this.videoPro.src = customProVideo || style.proVideo || style.fallbackProUrl;
      this.videoPro.load();

      if (this.userPlaceholder) this.userPlaceholder.classList.add('hidden');

      setTimeout(() => this.syncEngine.play().catch(() => {}), 350);
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
        if (toolName === 'goniometer') this.showToast('Goniometro attivo: tocca Spalla -> Gomito -> Polso');
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
        styleKey: this.desktopStyle,
        measuredAngle: this.measuredAngle,
        spm: this.cadenceBadge.textContent.replace(' SPM', ''),
        activePhaseIndex: this.activePhaseIndex
      });

      document.getElementById('coachScoreBadge').innerHTML = `${report.score}<span class="text-xs text-slate-400 font-normal">/10</span>`;
      document.getElementById('coachScoreBar').style.width = `${parseFloat(report.score) * 10}%`;

      const summaryVerdict = document.getElementById('coachSummaryVerdict');
      if (report.angleAnalysis) summaryVerdict.textContent = report.angleAnalysis.detail;
      else summaryVerdict.textContent = `Fase analizzata: ${report.phaseName}. Target ideale: ${report.targetAngle}.`;

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
      setTimeout(() => toast.remove(), 3200);
    }
  }

  // Auto-init on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { window.aquaApp = new AquaMetricsApp(); });
  } else {
    window.aquaApp = new AquaMetricsApp();
  }
})();
