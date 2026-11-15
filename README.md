# 🏊 AquaMetrics Pro - Video-Analisi Biomeccanica Nuoto & AI Coach

> **Web App 100% Gratuita, Serverless & Open Source per l'analisi comparativa della tecnica di nuoto.**  
> Progettata per atleti, allenatori e appassionati di nuoto: confronta i video registrati con il tuo smartphone con i benchmark dei più grandi nuotatori del mondo e ricevi diagnosi tecniche ed esercizi correttivi.

---

## 🌟 Caratteristiche Principali

- **Dual Player Sincronizzato:**
  - Riproduzione affiancata (orizzontale o verticale) del tuo video e di quello del professionista.
  - **Modalità Ghost X-Ray (Sovrapposizione):** Sovrapponi il video del soggetto al nuotatore pro con slider di trasparenza per cogliere istantaneamente disallineamenti di rollio, altezza della testa e trazione.
  - Controllo velocità al rallentatore: **0.1x, 0.25x, 0.5x, 1.0x**.
  - Avanzamento o riavvolgimento fotogramma per fotogramma (**frame-by-frame step** a 30/60 fps).
  - **A-B Loop:** Ripeti all'infinito un singolo ciclo di bracciata per studiarlo nei minimi dettagli.
  - Blocco Sincronia (*Link Sync*): allinea i due video sul punto esatto di presa d'acqua (*catch point*).

- **Goniometro & Strumenti Biomeccanici a Schermo:**
  - **Misuratore d'Angolo a 3 Punti:** Clicca *Spalla ➔ Gomito ➔ Polso* per calcolare all'istante l'angolo di presa d'acqua (*Early Vertical Forearm - EVF*).
  - Feedback cromatico immediato:
    - 🟢 **100° - 120°:** Angolo ideale EVF Élite.
    - 🟡 **120° - 135°:** Braccio troppo disteso.
    - 🔴 **< 95°:** Gomito caduto (*dropped elbow* - perdita propulsiva del 35-40%).
  - **Griglia Idrodinamica & Linea d'Acqua:** Per misurare l'inclinazione del tronco (*pitch & roll angle*) e l'affossamento delle gambe.
  - **Frecce e Disegno Vettoriale:** Traccia le traiettorie della bracciata e cerchia i difetti posturali.

- **Calcolatore Cadenza & Frequenza di Bracciata (SPM):**
  - Pulsante *Tap to Calculate*: tocca 3 volte sul momento d'ingresso della mano per calcolare automaticamente le bracciate al minuto (Stroke Rate) e la durata del ciclo in secondi.

- **AI Swimming Coach a Doppio Livello:**
  - **Livello 1 (Offline Biomechanical Engine):** Funziona sempre, 100% offline, senza bisogno di alcuna configurazione. Diagnostica le 5 fasi della nuotata (*Ingresso, Presa, Trazione/Spinta, Recupero, Rollio/Gambe*) e suggerisce 3 esercizi correttivi da svolgere in vasca.
  - **Livello 2 (Vision AI con Google Gemini Multimodal):** Cattura i fotogrammi sincronizzati dell'utente e del pro e li invia a Gemini Flash (tramite la tua API Key gratuita) per generare una perizia biomeccanica completa con pagella tecnica e tabella di allenamento in vasca.

- **Esportazione Istantanea HD:**
  - Esporta con un click un'immagine ad alta risoluzione del confronto affiancato con disegni, angoli misurati, cadenza e dati dell'atleta.

---

## 🚀 Come Pubblicare Gratis su GitHub Pages (in 60 secondi)

Questa web app è **100% statica (zero build, zero server)**: funziona direttamente su GitHub Pages senza bisogno di configurare Node.js né pipeline complesse!

1. Crea un nuovo repository su GitHub (es. `aquametrics-nuoto`).
2. Dal terminale di questa cartella, collega il repository remoto ed esegui il push:
   ```bash
   git add .
   git commit -m "Inizializzazione AquaMetrics Pro"
   git remote add origin https://github.com/TUO-USERNAME/NOME-REPO.git
   git push -u origin main
   ```
3. Vai su GitHub nelle **Settings** del tuo repository ➔ clicca su **Pages** (nel menu a sinistra).
4. Sotto **Build and deployment**:
   - **Source:** Seleziona `Deploy from a branch`.
   - **Branch:** Seleziona `main` e cartella `/ (root)`.
   - Clicca su **Save**.
5. Fatto! In 30 secondi la tua web app sarà attiva e accessibile a tutti all'indirizzo:  
   `https://TUO-USERNAME.github.io/NOME-REPO/`

---

## 💻 Come Avviare in Locale sul PC

Puoi aprire `index.html` direttamente nel tuo browser, oppure avviare il server PowerShell leggero incluso:

```powershell
# Esegui in PowerShell nella cartella del progetto:
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```
Il server si aprirà automaticamente su `http://localhost:8080`.

---

## 📱 Guida alle Riprese da Smartphone per il Nuoto

Per ottenere la massima accuratezza nell'analisi biomeccanica:

1. **Posizionamento Laterale a Pelo d'Acqua:**
   - Appoggia lo smartphone a bordo vasca (o su un piccolo treppiede) a circa 10-20 cm dalla superficie dell'acqua, perpendicolare alla corsia.
2. **Imposta 60 o 120 FPS:**
   - Dalle impostazioni della fotocamera dello smartphone, imposta i 60 fotogrammi al secondo (o modalità Slow-Motion a 120 fps) per eliminare la scia e la sfocatura causata dagli schizzi d'acqua.
3. **Ripresa Subacquea (se disponibile custodia impermeabile):**
   - Una ripresa subacquea laterale a 30-40 cm di profondità elimina la rifrazione superficiale dell'acqua e offre il 100% di precisione sulla trazione del gomito e della mano.
4. **Ripresa Frontale:**
   - Ottima per verificare se le braccia incrociano la linea mediana della testa (*crossover*) o se la testa si solleva eccessivamente durante la respirazione.

---

## 🔑 Come Attivare l'AI Coach con Google Gemini (Gratis)

1. Vai su [Google AI Studio (aistudio.google.com)](https://aistudio.google.com/app/apikey).
2. Crea una chiave API gratuita (servono 30 secondi con il tuo account Google).
3. Nell'app AquaMetrics Pro, clicca sull'icona delle **Impostazioni ⚙️** in alto a destra e incolla la tua chiave.
4. La chiave viene memorizzata in modo sicuro **esclusivamente nella memoria locale del tuo browser** (`localStorage`) e non viene mai inviata a nessun server terzo.

---

## 🛠️ Tecnologie Utilizzate

- **HTML5 Video & Canvas API:** Manipolazione fotogrammi ad alte prestazioni, sincronizzazione temporale e overlay biomeccanico.
- **Tailwind CSS & JetBrains Mono:** Interfaccia dark sportiva ad alto contrasto adatta all'uso a bordo vasca.
- **ES Modules:** Architettura JavaScript modulare, priva di dipendenze di build.
- **Lucide Icons & Marked:** Iconografia moderna e rendering del report medico-sportivo AI.
- **Google Gemini 2.5 Flash Multimodal:** Vision AI per diagnosi cinematica e stesura piani correttivi.

---

*Sviluppato con passione per il nuoto sportivo.*
