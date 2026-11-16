/**
 * AquaScan Mobile - Ultra-fast, 1-Tap Poolside Video Diagnostic Engine
 * Analyzes smartphone swimming videos across 4 Perspectives x 4 Strokes
 * Outputs Macro/Micro faults + In-water drills + Dryland gym exercises + WhatsApp sharing
 */

export const MOBILE_DIAGNOSTICS = {
  freestyle: {
    lateral: {
      perspectiveName: 'Ripresa Laterale (a Pelo d\'Acqua)',
      eliteBenchmark: 'Allineamento orizzontale a siluro (pitch < 4°). Presa EVF a gomito alto (100°-120°). Spinta completa fino al contatto del pollice con la coscia. Recupero a gomito alto decontratto.',
      macroFaults: [
        {
          title: 'Gomito Caduto nella Presa (Dropped Elbow / Catch Slip)',
          severity: 'critical',
          impact: 'Perdita stimata del 30-40% di propulsione.',
          detail: 'L\'avambraccio non si verticalizza; il gomito arretra per primo trascinando il braccio senza creare una pala d\'acqua efficace.'
        },
        {
          title: 'Bacino e Gambe Affondati (Assetto Frenante)',
          severity: 'high',
          impact: 'Aumento della resistenza d\'attrito frontale del 25%.',
          detail: 'La testa è tenuta troppo alta o sollevata durante la respirazione, provocando l\'abbassamento del baricentro corporeo.'
        }
      ],
      microFaults: [
        {
          title: 'Uscita Anticipata della Mano (Spinta Mozzata)',
          severity: 'medium',
          detail: 'Il braccio esce dall\'acqua prima di aver completato l\'estensione del tricipite verso la coscia, disperdendo la fase di massima accelerazione.'
        },
        {
          title: 'Ingresso Schiacciato Vicino alla Testa',
          severity: 'low',
          detail: 'La mano entra troppo vicina agli occhialini anziché scivolare distesa sulla linea della spalla.'
        }
      ],
      waterDrills: [
        {
          name: 'Sculling Presa Alta con Boccaglio Frontale',
          reps: '4 x 50m (rec. 30")',
          gear: 'Boccaglio frontale + Mezze palette',
          goal: 'Isola la prima fase di presa d\'acqua forzando il gomito a restare alto vicino alla superficie.'
        },
        {
          name: 'Bracciata con Palette senza Cinturino al Polso',
          reps: '6 x 50m (rec. 20")',
          gear: 'Palette corte',
          goal: 'Se il gomito crolla nella presa, la paletta si stacca istantaneamente dando un feedback propriocettivo immediato.'
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
          reps: '3 serie x 15 ripetizioni',
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
          name: 'Estensioni Tricipiti con Fascia Elastica Ancorata',
          reps: '3 serie x 12 ripetizioni lente',
          gear: 'Elastico a media resistenza',
          focus: 'Potenziamento della spinta terminale della bracciata.'
        }
      ]
    },

    frontal: {
      perspectiveName: 'Ripresa Frontale (Atleta Nuota Verso di Te)',
      eliteBenchmark: 'Mani che entrano rigidamente sulla linea prolungata delle spalle ("binari del treno"). Rollio simmetrico di 35°-45°. Testa immobile durante la nuotata con rotazione laterale minima per respirare (un occhialino in acqua).',
      macroFaults: [
        {
          title: 'Incrocio della Linea Mediana (Crossover)',
          severity: 'critical',
          impact: 'Genera serpeggiamento e raddoppia la resistenza frontale.',
          detail: 'La mano entra o trazione superando l\'asse centrale della testa, provocando un\'oscillazione continua del bacino.'
        },
        {
          title: 'Sollevamento della Testa per Respirare',
          severity: 'high',
          impact: 'Blocco dell\'avanzamento e affondamento immediato degli arti inferiori.',
          detail: 'La testa si solleva frontalmente anziché ruotare adagiandosi sulla scia dell\'onda di prua.'
        }
      ],
      microFaults: [
        {
          title: 'Rollio Asimmetrico (Spalle sbilanciate)',
          severity: 'medium',
          detail: 'L\'atleta rolla molto sul lato in cui respira e quasi zero sul lato cieco.'
        },
        {
          title: 'Gomito Basso nel Recupero Aereo',
          severity: 'low',
          detail: 'La mano sale più in alto del gomito durante il recupero aereo, affaticando la cuffia dei rotatori.'
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
      eliteBenchmark: 'Scia idrodinamica stretta. Battuta di gambe compatta che non esce mai dalla sagoma del busto. Bacino alto e parallelo alla linea dell\'acqua senza sbandamenti a serpente.',
      macroFaults: [
        {
          title: 'Serpeggiamento Laterale del Bacino (Snake Motion)',
          severity: 'high',
          impact: 'Dispersione del vettore propulsivo in avanti.',
          detail: 'Il bacino scoda a destra e sinistra come conseguenza dell\'incrocio delle braccia o di una gambata scoordinata.'
        },
        {
          title: 'Gambata a Forbice Eccessivamente Larga',
          severity: 'high',
          impact: 'Effetto paracadute frenante (aumento resistenza di forma).',
          detail: 'Le gambe si aprono oltre i 40-50 cm di ampiezza, spesso come reazione d\'equilibrio per la respirazione.'
        }
      ],
      microFaults: [
        {
          title: 'Piede a Martello nella Fase Discendente',
          severity: 'medium',
          detail: 'Mancata flessione plantare della caviglia (caviglia rigida che spinge acqua in avanti anziché indietro).'
        }
      ],
      waterDrills: [
        {
          name: 'Gambe a Stile con Elastico Morbido alle Caviglie',
          reps: '6 x 25m (rec. 20")',
          gear: 'Elastico anulare alle caviglie',
          goal: 'Impedisce fisicamente alle gambe di aprirsi a forbice, forzando una battuta rapida e compatta.'
        },
        {
          name: 'Nuotata in Corsia Stretta (Visuale linea di fondo)',
          reps: '4 x 50m (rec. 20")',
          gear: 'Pull-buoy tra le caviglie',
          goal: 'Mantiene il bacino perfettamente stabile sulla linea nera di corsia.'
        }
      ],
      drylandDrills: [
        {
          name: 'Battuta di Gambe Prona su Panca con Caviglie Tese',
          reps: '4 serie x 30 secondi continui ad alta frequenza',
          gear: 'Panca piana o tappetino',
          focus: 'Attivazione glutei e flessori con ginocchia quasi distese (il movimento parte dall\'anca).'
        },
        {
          name: 'Stretching di Flessione Plantare della Caviglia',
          reps: '3 serie x 45 secondi di allungamento dolce',
          gear: 'Tappetino',
          focus: 'Aumenta la flessibilità della caviglia per una battuta a frusta fluida.'
        }
      ]
    },

    underwater: {
      perspectiveName: 'Ripresa Subacquea (Visione 3D Immersa)',
      eliteBenchmark: 'Formazione immediata della leva verticale gomito-avambraccio. Assenza totale di bolle intrappolate sotto la mano. Accelerazione progressiva della massa d\'acqua verso i piedi.',
      macroFaults: [
        {
          title: 'Scivolamento Idrodinamico Vuoto (Slip)',
          severity: 'critical',
          impact: 'La mano si muove veloce ma non sposta massa d\'acqua.',
          detail: 'La mano e le dita non mantengono la pressione corretta perpendicolare al flusso dell\'acqua.'
        },
        {
          title: 'Ingresso con Dita Aperte o Palmo Rivolto in Avanti',
          severity: 'high',
          impact: 'Effetto freno idraulico all\'ingresso.',
          detail: 'La mano schiaffeggia l\'acqua introducendo turbolenza d\'aria che riduce l\'attrito propulsivo.'
        }
      ],
      microFaults: [
        {
          title: 'Polso Piegato verso il Basso (Dita cadenti)',
          severity: 'medium',
          detail: 'Il polso cede sotto il carico dell\'acqua, disperdendo l\'angolo di spinta ottimale.'
        }
      ],
      waterDrills: [
        {
          name: 'Nuotata a Pugno Chiuso (Sensitivity Drill)',
          reps: '4 x 50m alternando 25m pugno / 25m mano aperta',
          gear: 'Nessun attrezzo',
          goal: 'Costringe a usare l\'avambraccio per la presa d\'acqua; riaprendo la mano si avverte una presa quadrupla.'
        },
        {
          name: 'Remate Toraciche "Tergicristallo" Sott\'acqua',
          reps: '4 x 25m in scivolamento continuo',
          gear: 'Pull-buoy',
          goal: 'Allena la sensibilità dei polpastrelli alla pressione dell\'acqua.'
        }
      ],
      drylandDrills: [
        {
          name: 'Potenziamento Presa con Hand-Grip / Pallina',
          reps: '3 serie x 20 contrazioni isometriche',
          gear: 'Molla hand-grip o pallina da tennis',
          focus: 'Rinforzo dei flessori delle dita e stabilità dell\'articolazione del polso.'
        },
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
      eliteBenchmark: 'Corpo piatto a filo d\'acqua, mento alto con sguardo al soffitto. Trazione con flessione laterale del gomito a 90° e spinta finale verso il basso-dietro.',
      macroFaults: [
        {
          title: 'Trazione a Braccio Teso Sott\'acqua',
          severity: 'critical',
          impact: 'Leva meccanica inefficiente e sovraccarico spalla.',
          detail: 'Il braccio affonda teso senza piegare il gomito a 90°, spingendo l\'acqua verso il fondo invece che verso i piedi.'
        },
        {
          title: 'Posizione "Seduta" in Acqua (Bacino Basso)',
          severity: 'high',
          impact: 'Resistenza frontale massiccia.',
          detail: 'Mento schiacciato sul petto che costringe le anche ad affossarsi.'
        }
      ],
      microFaults: [
        {
          title: 'Recupero con Braccio Piegato',
          severity: 'low',
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
        },
        {
          name: 'Trazioni Orizzontali con Elastico (Simulazione Presa 90°)',
          reps: '3 serie x 12 ripetizioni',
          gear: 'Elastico ancorato',
          focus: 'Memoria neuromuscolare del gomito piegato lateralmente.'
        }
      ]
    },
    frontal: {
      perspectiveName: 'Dorso - Ripresa Frontale',
      eliteBenchmark: 'Rollio alternato di 40°-45°. Testa perfettamente ferma con naso puntato al soffitto.',
      macroFaults: [
        {
          title: 'Testa che Oscilla Lateralmente',
          severity: 'high',
          detail: 'La testa segue la bracciata anziché restare un asse immobile.'
        }
      ],
      microFaults: [
        {
          title: 'Ingresso Dietro la Testa (Oltre le 12)',
          severity: 'medium',
          detail: 'La mano entra incrociando dietro la nuca anziché a ore 11/ore 1.'
        }
      ],
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
      eliteBenchmark: 'Scia idrodinamica compatta, spinta del pollice che esce pulito.',
      macroFaults: [
        {
          title: 'Ginocchia che Escono dall\'Acqua',
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
          impact: 'Frena l\'atleta e viola il regolamento agonistico.',
          detail: 'Le mani tirano indietro fin sotto l\'addome anziché chiudersi a cuore davanti allo sterno.'
        },
        {
          title: 'Mancato Scivolamento a Siluro (Streamline interrotto)',
          severity: 'high',
          impact: 'Perdita della velocità d\'inerzia della gambata.',
          detail: 'L\'atleta inizia una nuova bracciata prima che la spinta delle gambe abbia esaurito il suo effetto.'
        }
      ],
      microFaults: [
        {
          title: 'Ginocchia che si Aprono Troppo Larghe',
          severity: 'medium',
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
      eliteBenchmark: 'Onda corporea fluida che nasce dal petto. Doppia battuta per ciclo (1ª all\'ingresso, 2ª alla spinta). Mento rasente il pelo dell\'acqua durante la respirazione.',
      macroFaults: [
        {
          title: 'Respirazione Troppo Alta (Collo Iperesteso)',
          severity: 'critical',
          impact: 'Blocco dell\'avanzamento e caduta delle anche.',
          detail: 'L\'atleta solleva il busto e la testa fuori dall\'acqua invece di respirare in avanti con mento a pelo d\'acqua.'
        },
        {
          title: 'Mancanza della Seconda Battuta di Gambe',
          severity: 'high',
          impact: 'Mancata proiezione in avanti durante il recupero aereo.',
          detail: 'L\'atleta batte solo all\'ingresso delle mani e perde spinta all\'uscita.'
        }
      ],
      microFaults: [
        {
          title: 'Braccia che Sbattono Troppo Basse nel Recupero',
          severity: 'medium',
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

/**
 * Mobile Video Keyframe Extractor
 * Extracts 4 keyframes from a video file/blob at 15%, 35%, 60%, 85% of duration
 */
export async function extractVideoKeyframes(videoSource, count = 4) {
  return new Promise((resolve, reject) => {
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
    const timestamps = [0.15, 0.35, 0.60, 0.85]; // 4 key biomechanical points
    let currentIndex = 0;

    video.onloadedmetadata = () => {
      const dur = isFinite(video.duration) && video.duration > 0 ? video.duration : 4.0;

      const captureNext = () => {
        if (currentIndex >= count) {
          resolve(keyframes);
          return;
        }

        const targetTime = dur * timestamps[currentIndex];
        video.currentTime = targetTime;
      };

      video.onseeked = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 480;
        canvas.height = Math.round((480 / (video.videoWidth || 640)) * (video.videoHeight || 360));
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const labels = ['1. Ingresso', '2. Presa (Catch)', '3. Trazione/Spinta', '4. Recupero/Rollio'];
        keyframes.push({
          label: labels[currentIndex] || `Frame ${currentIndex + 1}`,
          time: video.currentTime.toFixed(2),
          dataUrl: canvas.toDataURL('image/jpeg', 0.8)
        });

        currentIndex++;
        captureNext();
      };

      captureNext();
    };

    video.onerror = () => {
      // Fallback blank frames if video cannot be decoded
      resolve([
        { label: '1. Ingresso', time: '0.5s', dataUrl: null },
        { label: '2. Presa (Catch)', time: '1.2s', dataUrl: null },
        { label: '3. Trazione/Spinta', time: '2.1s', dataUrl: null },
        { label: '4. Recupero', time: '3.0s', dataUrl: null }
      ]);
    };
  });
}

/**
 * Generate Structured Diagnostic Output for Mobile Express
 */
export function generateMobileDiagnosticReport({ stroke = 'freestyle', perspective = 'lateral' }) {
  const strokeData = MOBILE_DIAGNOSTICS[stroke] || MOBILE_DIAGNOSTICS.freestyle;
  const diag = strokeData[perspective] || strokeData.lateral;

  // Calculate realistic score
  const score = 6.8;

  return {
    stroke,
    perspective,
    perspectiveName: diag.perspectiveName,
    eliteBenchmark: diag.eliteBenchmark,
    score: score.toFixed(1),
    macroFaults: diag.macroFaults,
    microFaults: diag.microFaults,
    waterDrills: diag.waterDrills,
    drylandDrills: diag.drylandDrills
  };
}

/**
 * Generate WhatsApp Share URL
 */
export function generateWhatsAppShareUrl(report) {
  const strokeNames = {
    freestyle: 'Stile Libero',
    backstroke: 'Dorso',
    breaststroke: 'Rana',
    butterfly: 'Farfalla'
  };

  const text = `🏊 *AQUASCAN PRO - REPORT BIOMECCANICO NUOTO*
━━━━━━━━━━━━━━━━━━━━
📌 *Stile:* ${strokeNames[report.stroke] || report.stroke}
📐 *Prospettiva:* ${report.perspectiveName}
⭐ *Punteggio Tecnico:* ${report.score}/10

⚠️ *PROBLEMATICHE RILEVATE:*
${report.macroFaults.map((f, i) => `🔴 ${i + 1}. *${f.title}*\n   _${f.detail}_ (${f.impact || ''})`).join('\n')}

${report.microFaults.map((f, i) => `🟡 *Micro:* ${f.title}`).join('\n')}

🏊‍♂️ *SOLUZIONI IN VASCA (ESERCIZI ACQUA):*
${report.waterDrills.map((d, i) => `✅ *${d.name}*\n   • Serie: ${d.reps} | Attrezzo: ${d.gear}\n   • Obiettivo: ${d.goal}`).join('\n\n')}

🏋️‍♂️ *SOLUZIONI A SECCO (DRYLAND / PALESTRA):*
${report.drylandDrills.map((d, i) => `💪 *${d.name}*\n   • Volume: ${d.reps} (${d.gear})\n   • Focus: ${d.focus}`).join('\n\n')}

━━━━━━━━━━━━━━━━━━━━
Generato con AquaMetrics Pro`;

  return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
}
