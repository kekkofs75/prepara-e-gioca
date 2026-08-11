La partita è divisa in una serie di **Turni**, ognuno composto da 4 Fasi in sequenza:

:::indent
**1. Fase dei Giocatori → 2. Fase Intruso → 3. Fase Evento → 4. Fase di Ripristino**
:::

---

# Fase dei Giocatori

A partire dal [Primo Giocatore]{.def} e procedendo in senso orario, ogni giocatore esegue il proprio **round**. Quando tutti hanno passato, la fase termina.

## Il Round del Giocatore

Ogni round si articola in 3 passi:

**1. Esegui 2 Azioni**

Scegli 2 Azioni tra quelle elencate sulla tua plancia Personaggio. Puoi eseguire la stessa Azione più volte. Se non puoi eseguire altre Azioni, devi scegliere **Passare**.

**2. Perdita di Ossigeno**

Se ti trovi in un Settore con il [Supporto Vitale]{.def} **Inattivo**, perdi **1 Ossigeno**.

**3. Danno da Fuoco**

Se ti trovi in una Stanza con un **segnalino Fuoco**, perdi **1 Punto Salute**.

---

## Lista delle Azioni

| Costo | Azione |
|---|---|
| 0 carte | Giocare una carta Azione |
| 0 carte | Passare |
| 1 carta | Muovere |
| 1 carta | Piazzare 1 segnalino Sicuro 🚫 |
| 1 carta | Sparare un Colpo Singolo in una Stanza |
| 1 carta | Sparare a Raffica in un Corridoio |
| 1 carta | Attaccare in Mischia |
| 1 carta | Utilizzare uno Strumento |
| 1 carta | Attivare il Robot 🚫 |
| 1 carta | Scambiare Strumenti 🚫 |
| 1 carta | Usare un Dispositivo Tattico |
| 2 carte | Usare una Stanza 🚫 |
| 2 carte | Muoversi Cautamente 🚫 |

> 🚫 = Azione **Non in Combattimento**: non può essere eseguita in una Stanza che ospita almeno 1 Intruso.

:::accent
Passare è un'Azione. Non avviene automaticamente quando finisci le carte. Una volta passato, il tuo round è saltato per il resto del Turno corrente — puoi però ancora usare le Reazioni.
:::

---

## Regole Speciali delle Azioni

**Muovere — Sequenza di Movimento:**

1. Scegli un Corridoio adiacente attraversabile.
2. Se ci sono Intrusi nella tua Stanza o nel Corridoio scelto, risolvi un [Attacco di Opportunità]{.def} per ognuno (massimo 3), partendo dal più grande.
3. Risolvi il Movimento:
   - Se la Stanza di destinazione è già **Scoperta**: spostati, effettua un [Tiro Rumore]{.def}, e — se è un Movimento Cauto — piazza 1 segnalino Sicuro.
   - Se la Stanza di destinazione è **Non Scoperta**: risolvi la **Sequenza di Esplorazione**.

**Sequenza di Esplorazione:**

Pesca una carta dal mazzo Esplorazione e risolvila nell'ordine indicato sulla carta:
1. Piazza la Stanza del tipo indicato (A, B, C o ?).
2. Piazza i Corridoi mostrati dalla carta (eccetto dove non c'è spazio o dove conducono a Stanze già esistenti).
3. Piazza i segnalini indicati (Rumore, Fuoco, ecc.).
4. Sposta il Personaggio nella nuova Stanza (piazza segnalino Sicuro se Movimento Cauto).
5. Risolvi l'Effetto d'Ingresso (di solito un Tiro Rumore).

> **Chiusura Portelloni:** quando una carta indica di chiudere tutti i Portelloni attorno alla nuova Stanza, si chiudono **solo** quelli che toccano fisicamente quella Stanza — non quelli in Corridoi adiacenti che non la raggiungono direttamente. L'Hibernatorium non viene mai coinvolto, poiché l'Esplorazione non vi avviene mai.

> **Rimuovere la carta dal gioco:** la dicitura "Rimuovi questa carta dal gioco" non fa parte dell'Effetto d'Ingresso. Anche gli effetti che permettono di Esplorare ignorando l'Effetto d'Ingresso rimuovono comunque la carta dal gioco.

**Tiro Rumore:**

Lancia il dado Rumore (d10) e risolvi in base al risultato per **ogni** Corridoio adiacente con il valore corrispondente:
- **Corridoio con Intrusi** → l'Intruso più grande entra nella Stanza e attacca.
- **Corridoio con segnalino Rumore** → risolvi il segnalino (pesca dal Sacchetto, piazza Intrusi nel Corridoio).
- **Corridoio vuoto** → piazza 1 segnalino Rumore nel Corridoio.
- **Risultato Pericolo (teschio)** → pesca un segnalino dal Sacchetto e piazza l'Intruso indicato direttamente nella tua Stanza.

> L'Attacco generato dal risultato Pericolo **non è parte della Sequenza di Movimento**: non può essere prevenuto da effetti che ignorano Attacchi durante il Movimento (come alcune carte Azione che proteggono durante lo spostamento).

**Sparare a Colpo Singolo:**

1. Scegli un'Arma a Distanza funzionante con almeno 1 segnalino Munizioni (non deve essere completamente carica).
2. Scegli un Intruso nella tua Stanza. Piazza **1 segnalino Colpo** vicino alla sua base.
3. Lancia un dado Colpo Singolo (d8):
   - **Teschio critico** → Intruso ucciso.
   - **2–5** → se il risultato ≤ numero di Colpi sull'Intruso, muore.
   - **Munizioni (⚙)** → paga 1 Munizione (capovolgi o scarta il segnalino).

**Sparare a Raffica:**

1. Scegli un'Arma a Distanza funzionante con almeno 1 Munizione. **Paga 1 Munizione.**
2. Scegli un Corridoio adiacente.
3. Lancia un dado Raffica (d6): il risultato indica i **Colpi totali** da distribuire.
4. Assegna i Colpi come vuoi: 1 per Adulto, 1 per Larva, 2 per Fuco, qualsiasi numero per la Regina. Ogni Colpo non assegnato è perso.
5. Adulti/Larve con 1 Colpo e Fuchi con 2 Colpi **muoiono**.

**Attacco in Mischia:**

1. Pesca **1 carta Contaminazione** (va nella tua pila degli scarti).
2. Scegli un Intruso nella tua Stanza. Piazza **1 Colpo**.
3. Lancia il dado Colpo Singolo: risolvi come il Colpo Singolo.
4. Se l'Intruso sopravvive, effettua un **Attacco di Risposta** (oppure metti un segnalino Malfunzionamento su una tua Arma per prevenirlo).

**Usare un Dispositivo Tattico:**

Scegli un numero qualsiasi di segnalini Dispositivo Tattico e usali:
- **Ossigeno** → +3 alla tua Riserva di Ossigeno (max 7).
- **Kit Medico** → recupera **2 Punti Salute**.
- **Granata** → scegli un Corridoio adiacente, lancia un dado Raffica e aggiungi 2 al risultato; distribuisci quei Colpi nel Corridoio.
- **Munizioni** → carica un'Arma (sposta il segnalino dall'attuale spazio allo spazio dell'Arma).

---

## Scegliere l'Obiettivo

Una volta per partita, nel tuo round (non durante la risoluzione di un'Azione), puoi **Scegliere l'Obiettivo**: rimuovi dal gioco una delle tue 2 carte Obiettivo (senza mostrarla). L'altra è quella che devi conseguire.

:::indent
Il segnalino sul tracciato Scelta Obiettivo avanza di 1 passo e peschi carte Azione aggiuntive: il 1° giocatore pesca 3 carte, il 2° e 3° pescano 2 carte, il 4° e 5° pescano 1 carta.
:::

---

## Reazioni

Alcune carte Azione sono **Reazioni**: possono essere giocate al di fuori del tuo turno, in qualsiasi momento, purché le condizioni sulla carta siano soddisfatte. Non contano come Azione e non rispettano il limite delle 2 Azioni per round.

---

# Fase Intruso

## 1. Fuoco sugli Intrusi

Ogni Intruso in una Stanza con un segnalino Fuoco subisce **1 Colpo**. Se il Fuoco è nel Nido, viene distrutto **1 Uovo**.

> Questo Colpo non usa dadi: non può mai uccidere un Intruso (eccetto una Larva).

## 2. Attacco degli Intrusi

Ogni Intruso in ogni Stanza attacca un Personaggio presente (se ce n'è almeno uno). Si risolve Stanza per Stanza partendo dall'alto a sinistra, riga dopo riga. Se ci sono più Intrusi nella stessa Stanza, inizia dal più grande; tutti attaccano il Personaggio primo in ordine di turno, a meno che non muoia o lasci la Stanza.

**Attacco ordinario:** pesca 1 carta dal mazzo Attacco dell'Intruso e applica l'effetto corrispondente al tipo di Intruso.

**Attacco delle Larve:** il Personaggio attaccato pesca 1 carta Contaminazione (nella pila degli scarti) e la Larva si sposta sulla sua plancia Personaggio (è ora infettato). Se ha già una Larva, la Larva attaccante viene scartata.

**Attacco a Sorpresa:** ogni volta che un Intruso viene piazzato o spostato in una Stanza con un Personaggio (per qualsiasi ragione), tenta immediatamente di attaccarlo.

**Segnalini Sicuro:** ogni volta che un Intruso entra in una Stanza con almeno 1 Personaggio e almeno 1 segnalino Sicuro, scarta **1 segnalino Sicuro** invece di risolvere l'Attacco. Non protegge dagli Attacchi di Intrusi già presenti nella Stanza.

---

# Fase Evento

## 3. Risoluzione della Carta Evento

Pesca 1 carta dal mazzo Eventi e risolvila in ordine:

1. **Movimento degli Intrusi:** muovi gli Intrusi indicati dalle icone sulla carta verso il Personaggio più vicino (percorso più breve; i Portelloni sono ignorati nel calcolo ma vengono distrutti se attraversati dagli Intrusi). Se più Intrusi dello stesso Corridoio puntano a una Stanza con un Personaggio, solo il più grande entra.
2. **Effetto Principale:** risolvi l'effetto principale della carta.
3. **Effetto Secondario:** risolvi l'effetto secondario (di solito piazza segnalini Rumore).
4. Scarta la carta.

Se un effetto è impossibile (es. piazzare un Malfunzionamento dove ce n'è già uno), ignoralo e continua.

> **Segnalini Rumore negli effetti Evento:** un effetto che ordina di "risolvere un segnalino Rumore in ogni Corridoio Inesplorato" richiede che il segnalino Rumore sia **fisicamente presente** in quel Corridoio. Se il Corridoio non ne ha uno, l'effetto non si applica e non si pesca dal Sacchetto.

## 4. Sviluppo del Sacchetto

Pesca 1 segnalino casuale dal Sacchetto e risolvilo come indicato dalla Scheda Aiuto dell'Intruso (usa solo il fronte del segnalino). Poi scartalo in fondo alla pila corrispondente.

**Effetti con la Regina in vita:**

| Segnalino | Effetto |
|---|---|
| Regina | Attiva la Regina (attacca o muove) |
| Adulto o Fuco | Aggiungi 2 segnalini Regina al Sacchetto |
| Larva | Aggiungi 2 segnalini Fuco casuali al Sacchetto |
| Vuoto | Aggiungi 2 segnalini Adulto casuali al Sacchetto; **rimetti il Vuoto nel Sacchetto** |

> Il segnalino Vuoto è l'unico che torna sempre nel Sacchetto. Tutti gli altri vengono scartati.

---

# Fase di Ripristino

## 5. Cambio del Primo Giocatore

Il segnalino Primo Giocatore passa al giocatore successivo in senso orario.

## 6. Pesca delle Carte Azione

Ogni giocatore pesca carte Azione dal proprio mazzo finché non ne ha **5 in mano**. Se il mazzo si esaurisce durante la pesca, rimescola la pila degli scarti e continua a pescare.

## 7. Avanzamento del Tempo

Avanza il Segnaturno di **1 passo**. Se entra in uno spazio con un altro segnalino, risolvilo immediatamente:

- **Segnalino Autodistruzione** → il Complesso esplode: tutti i Personaggi al suo interno (anche nell'Hibernatorium) e tutti gli Intrusi muoiono. La partita termina.
- **Segnalino Modulo da Sbarco** → rivela il segnalino Antiaerea in cima: se è **Inattivo**, il Modulo atterra nella Zona d'Atterraggio (i Personaggi potranno usarlo per Scappare); se è **Attivo**, il Modulo è distrutto (scarta il segnalino).

Se il Segnaturno era già alla fine del tracciato, passa invece alla **Fine della Partita**.

---

## Intrusi: Regole di Movimento

Gli Intrusi muovono sempre verso il Personaggio più vicino sul percorso più breve (ignorando i Portelloni nel calcolo). Se attraversano un Portellone Chiuso, lo **distruggono** invece di passarci. Solo **1 Intruso** alla volta può entrare in una Stanza con un Personaggio (il più grande del gruppo). Gli Intrusi non lasciano mai una Stanza dove c'è almeno un Personaggio (a meno che siano Respinti).

**Capacità dei Corridoi:** massimo **6 Intrusi** (la Regina conta come 4). Se il limite è superato, piazza quanti puoi partendo dai più grandi.

---

## La Regina

La Regina è un Intruso unico e molto più resistente degli altri. I Colpi assegnati le vengono tracciati sul **tracciato Colpi della Regina**. Ogni volta che il segnalino raggiunge lo spazio finale, pesca la carta in cima al mazzo Salute della Regina:

1. Scarta tante carte Salute della Regina quante indicate sulla carta pescata.
2. Risolvi l'effetto speciale in basso alla carta.
3. Riporta il segnalino Colpi a "0".

Quando l'**ultimo Colpi** Salute è scartata, la Regina muore: rimuovi il modello, gira la Scheda Aiuto dell'Intruso sul lato "La Regina è morta" e ignora da quel momento qualsiasi effetto che la piazzerebbe sul Complesso.

---

## Portelloni

I Portelloni si trovano in alcuni spazi Corridoio. Possono essere **Aperti**, **Chiusi** o **Distrutti**:
- **Chiuso** → blocca il Movimento e lo Sparare a Raffica dei Personaggi. Il Fuoco non si propaga attraverso. Gli Intrusi lo distruggono se cercano di attraversarlo.
- **Distrutto** → funziona come Aperto, ma non può più essere chiuso.

> **Propagazione del Fuoco:** il Fuoco si propaga esclusivamente attraverso Corridoi che hanno uno **spazio Portellone** (aperto o distrutto). Se il Corridoio tra due Stanze non ha alcuno spazio Portellone, il Fuoco **non si propaga** — non piazzare il segnalino Fuoco.

---

## Carte Contaminazione

Le carte Contaminazione hanno lo stesso retro delle carte Azione ma **non possono essere scartate per pagare un'Azione**. Puoi scartarle liberamente solo quando **Passi**. Contengono testo celato che può essere letto solo con lo Scanner. Se contengono la parola "INFETTO", la carta è infetta e può causare l'infezione da Larva.

---

---

# ![puzzle]{.icon} Culto della Nuova Carne

## Modifiche alla Fase Intruso

**Passo 0 — Fuoco sugli Intrusi:** saltato (i macchinari del Culto non subiscono danni da Fuoco; le Uova nemmeno).

**Passo 1 — Attacco degli Intrusi:** come di consueto, con due eccezioni:
- I **Frementi** (equivalenti delle Larve) non si spostano sulla plancia Personaggio quando attaccano; il Personaggio attaccato pesca 1 carta Contaminazione. I Frementi rimangono sulla mappa.
- I **Cultisti** non attaccano mai.

**Passo 2 (nuovo) — Attivazione dei Frementi:** tutti i Frementi sulla mappa si attivano e muovono verso il **Corridoio Inesplorato più vicino** — anche quelli che si trovano già in una Stanza con Personaggi (seguono comunque le regole standard dell'Attacco se durante il movimento entrano in una Stanza con qualcuno). Se un Fremente si trova già su un Corridoio Inesplorato, lascia la mappa: rimettilo nella riserva e avanza tutti i segnalini Corpo di 1 spazio sul Tracciato dei Turni.

## Segnalini Corpo e Corpi Assorbiti

Tre segnalini Corpo si trovano sull'8°, 11° e 14° spazio del Tracciato dei Turni. Quando il Segnaturno raggiunge uno di questi spazi, risolvi la **Sequenza di Assorbimento dei Corpi**:
1. Aggiungi al Sacchetto il segnalino Cerebromadre più a destra sulla tessera Corpi Assorbiti.
2. Capovolgi il segnalino Corpo e piazzalo sul nuovo spazio rivelato della tessera — il tracciato Ferite della Regina si è appena ampliato.

Ogni Corpo Assorbito aumenta la soglia di Colpi necessaria per pescare una carta Salute della Regina e potenzia gli Attacchi della Cerebromadre.

## Carte Evento (Culto)

Il movimento degli Intrusi sulle carte Evento non usa più l'orientamento dei Corridoi, bensì indica un **tipo specifico** di Intruso. Muovono tutti gli Intrusi di quel tipo e tutti gli Intrusi presenti sullo stesso Corridoio in cui si trovano quelli di quel tipo.

Gli effetti delle carte presentano spesso la condizione **"Se 2 o più Cultisti sono ancora vivi"**: contate le icone visibili (non coperte) sulla tessera Cultisti Morti. Se almeno tante quante indicate, risolvete l'effetto; altrimenti saltatelo.

I Frementi non si attivano mai durante la Fase Evento (lo hanno già fatto nella Fase Intruso). I Cultisti non muovono mai.

## Intrusi del Culto: Abilità Speciali

Le abilità dei 4 tipi di Adulto e dei Frementi sono attive fin dall'inizio e possono essere disattivate uccidendo i Cultisti corrispondenti.

| Intruso | Abilità (se attiva) |
|---|---|
| **Dilaniatore** | Se assegna una Ferita Grave o fa perdere Salute, attacca una seconda volta |
| **Scavastriscio** | Quando viene sconfitto in una Stanza, pesca 3 carte Attacco; se c'è almeno 1 "Boom!" risolvetela |
| **Sputafuoco** | Prima di ogni Raffica sparata nel suo Corridoio, il Personaggio perde 1 Salute per ogni Sputafuoco presente |
| **Ferromanto** | Deve essere sempre il primo bersaglio; in un Corridoio richiede 2 Colpi per essere sconfitto; in una Stanza viene Respinto invece di morire |
| **Fremente** | Segue le regole degli Adulti per la Vita (non muore con 1 solo Colpo) |

## Sconfiggere i Cultisti

Quando sconfiggi un Cultista, poni il suo modello sulla tessera Cultisti Morti e **disattiva 1 Abilità** a tua scelta (capovolgila). Fintanto che l'**Abilità dei Cultisti** è attiva, ogni volta che infliggi Colpi a un Cultista devi eseguire un Tiro Rumore.

> Indipendentemente da quanti Colpi vengono inflitti in una singola Azione (es. con una Raffica), si esegue **un solo Tiro Rumore** al termine dell'intera Azione.

---

---

# ![puzzle]{.icon} Infiltrata

## Introduzione dell'Infiltrata

L'Infiltrata non è in gioco a inizio partita. Entra quando, per la prima volta, un Personaggio pesca una carta Esplorazione con il simbolo dell'Infiltrata:

1. Termina di risolvere la carta Esplorazione.
2. Prendi il Mazzo Storia e trova tutte le carte relative alla Stanza appena Scoperta. Rimetti tutte le altre nella scatola.
3. Risolvi la carta Storia Iniziale (quella con il numero più basso, in un riquadro).

## Carte Storia

Ogni carta Storia va risolta quando indicato (carta iniziale, o quando un effetto dice "Vai al #XYZ"). Le carte non Iniziali si piazzano in cima alla precedente, così solo l'ultima è visibile e attiva. Le carte con una **linea tratteggiata** restano parzialmente visibili quando vengono coperte dalla successiva.

Sul retro di ogni carta puoi trovare:
- **Effetti istantanei** (fondo chiaro): risolti subito.
- **Effetti permanenti**: attivi finché la carta è visibile.
- **Nuove Azioni**: eseguibili dai Personaggi (costano carte Azione come indicato).
- **Effetti Esplorazione**: risolti ogni volta che pesca una carta Esplorazione con il simbolo.

## L'Infiltrata sulla Mappa

L'Infiltrata si trova solo nelle Stanze e può muovere solo attraverso Corridoi vuoti. Non può esplorare Stanze non Scoperte. Non interagisce con il gioco (incluso il Fuoco) a meno che carte Storia o la carta Infiltrata non lo specifichino.

**Infiltrata Amichevole:** ogni Personaggio nella sua stessa Stanza pesca 1 carta Azione aggiuntiva dopo la Pesca delle Carte Azione. Gli Intrusi la trattano come l'ultimo Personaggio in ordine di turno. Le Larve non la attaccano mai.

**Infiltrata Ostile:** i Personaggi la trattano come un Intruso Adulto (possono spararle e ucciderla). Gli Intrusi e l'Infiltrata si ignorano.

---

---

# ![puzzle]{.icon} Intrusi Xyriani

## Struttura del Turno (Xyriani)

Prima della normale Fase Evento, si aggiunge la **Fase degli Xyriani** (solo se almeno 1 Xyriano è sulla mappa):

1. Risolvi **1 carta Attivazione degli Xyriani**.
2. Aggiungi al Sacchetto il **segnalino Intruso Xyriano**.
3. Se in qualche Stanza ci sono più di 1 Xyriano, sostituisci quello meno ferito con un segnalino Traccia.

## Regole Generali degli Xyriani

- Gli Xyriani si trovano **solo nelle Stanze** (mai nei Corridoi), anche quando Respinti.
- Gli Intrusi ignorano completamente gli Xyriani.
- I Personaggi li trattano come Intrusi (possono sparargli), ma **non sono in Combattimento** quando si trovano nella loro stessa Stanza.
- I segnalini Sicuro non possono essere piazzati in Stanze con Xyriani.
- Gli Xyriani non subiscono il Fuoco sugli Intrusi e non muovono per effetto delle carte Evento.

## Carte Esplorazione e Segnalini Traccia

Tre carte Esplorazione degli Xyriani sono mescolate nel mazzo. Quando vengono pescate, piazzano segnalini Traccia in alcune Stanze e aggiungono il segnalino Intruso Xyriano al Sacchetto. Le carte vengono poi rimosse dal gioco.

## Segnalino Intruso Xyriano

Quando viene pescato dal Sacchetto:
1. Se ci sono Xyriani sulla mappa, pesca e risolvi 1 carta Attivazione.
2. Rimpiazza ogni segnalino Traccia con un modello Xyriano.
3. Scarta il segnalino.

## Carte Attivazione

Ogni carta Attivazione distingue due comportamenti:
- **Xyriani in Stanze con Personaggi (A):** l'Xyriano attacca o esegue l'effetto della parte superiore.
- **Tutti gli altri Xyriani (B):** eseguono l'effetto della parte inferiore (di solito muovono).

Gli Xyriani con un segnalino Xyriano Ferito scartano invece il segnalino senza risolvere la carta.

## Combattimento con gli Xyriani

Gli Xyriani hanno **due vite**: la prima volta che dovrebbero morire, scarta tutti i Colpi e piazza un segnalino Xyriano Ferito sotto il modello. La seconda volta, lo Xyriano muore definitivamente — rimuovi il modello dal gioco e capovolgi il segnalino sul lato Strumento Xyriano.

Dopo ogni Azione in cui un Personaggio infligge almeno 1 Colpo a uno Xyriano, deve effettuare un **Tiro Rumore**.

Quando gli Xyriani muovono attraverso un Corridoio con Intrusi, infliggono automaticamente un Colpo critico all'Intruso più grande presente.

## Alleanza Xyriana

Un solo Personaggio per partita può stringere un'Alleanza: deve trovarsi nella Stanza con il segnalino Alleanza Disponibile e scartare 1 carta Azione. Ottiene la carta Alleanza (lato Alleanza Stretta) con effetti protettivi contro gli Xyriani.

---

---

# ![puzzle]{.icon} Sanguivori

## Modifiche al Movimento

I Personaggi **non effettuano Tiri Rumore** dopo il Movimento. I segnalini Rumore sono sostituiti dai **segnalini Ombra**, che seguono regole proprie.

**Sequenza di Movimento (Sanguivori):**

1. Scegli un Corridoio adiacente.
2. Risolvi eventuali Attacchi di Opportunità.
3. Muoviti nella Stanza. Se è una Stanza già Scoperta, invece del Tiro Rumore piazza **1 segnalino Ombra** in ogni Corridoio adiacente eccetto quello da cui vieni. Se è un Movimento Cauto, non piazzare segnalini Ombra.
4. Se hai attraversato segnalini Ombra (solo in Movimento non Cauto), pesca **1 carta Ombra** e risolvi l'effetto corrispondente al numero di segnalini attraversati.

**Regole dei segnalini Ombra:**
- Massimo **3 segnalini Ombra** per Corridoio. Se ne dovresti piazzare un 4°, sostituisci tutti con **1 Spettro Sanguinario**.
- I segnalini Ombra e gli Intrusi possono coesistere nello stesso Corridoio (i segnalini Ombra occupano 1 spazio, lasciandone 5 agli Intrusi).
- Puoi Sparare a Raffica contro i segnalini Ombra per rimuoverli.
- Il Movimento Cauto li attraversa senza risolverli.

## Carte Infezione

Le carte Infezione sostituiscono le carte Contaminazione. Vengono mescolate nel mazzo Azione quando ottenute. Sono equivalenti a Contaminazioni Infette per tutti gli effetti. Durante la partita puoi:
- Giocarle come Azione (scarta 1 carta Azione) per risolterne l'effetto in fondo e rimuoverle dal mazzo.
- Scartarle dalla mano quando **Passi**, perdendo 1 Ossigeno (indipendentemente dal numero scartate).

Non possono essere scartate in nessun altro modo e non possono pagare il costo di Azioni.

## Carte Sangue Corrotto

Alcuni effetti dei Sanguivori ti lasciano una **carta Sangue Corrotto**: un'Abilità speciale (con costo) usabile una volta per Turno, che conta come Azione. Puoi averne al massimo 2 (1 Attiva e 1 Inattiva). Quando ti è chiesto di scartarne una, scarta sempre quella più in basso.

---

---

# ![puzzle]{.icon} Squadra di Supporto

## Operatore Droni

L'Operatore Droni controlla un **Drone** attraverso le proprie carte Azione. Il Drone:
- Inizia nella Zona d'Atterraggio.
- Si muove solo quando le carte Azione lo indicano.
- Non interagisce con gli Intrusi (lo ignorano) e non effettua Tiri Rumore.
- Non può attraversare Corridoi non Esplorati né Portelloni Chiusi.

:::glossary
[Primo Giocatore]: Il giocatore in possesso del segnalino Primo Giocatore. Comincia la Fase dei Giocatori e funge da spareggiatore in caso di pareggio.

[Supporto Vitale]: Sistema che regola l'ossigeno di un Settore. Se Inattivo, i Personaggi in quel Settore perdono 1 Ossigeno alla fine di ogni loro round. Può essere attivato/disattivato nelle Stanze Supporto Vitale.

[Attacco di Opportunità]: Attacco immediato di un Intruso quando il Personaggio si muove attraverso il Corridoio in cui si trova o lascia una Stanza in cui si trova. Si risolvono fino a un massimo di 3, partendo dall'Intruso più grande.

[Tiro Rumore]: Lancio del dado Rumore (d10) eseguito dopo ogni Movimento. Può far muovere Intrusi dai Corridoi adiacenti verso la Stanza del Personaggio, far comparire nuovi Intrusi o aggiungere segnalini Rumore ai Corridoi.
:::
