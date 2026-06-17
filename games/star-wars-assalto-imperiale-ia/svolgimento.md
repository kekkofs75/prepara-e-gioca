# Modalità Legends of the Alliance

## Struttura del Round

Le missioni si svolgono in una serie di round. Ogni round alterna le attivazioni degli eroi con quelle dei gruppi Imperiali:

1. I giocatori scelgono collettivamente **1 eroe** da attivare.
2. Quell'eroe effettua **2 azioni**.
3. I giocatori indicano nell'app che l'eroe ha terminato: l'app seleziona casualmente **1 gruppo Imperiale** e mostra le istruzioni per attivarlo.
4. Si prosegue alternando eroi e gruppi Imperiali finché tutte le miniature non si sono attivate.
5. Dopo l'ultima attivazione, l'app può produrre **effetti di fine round** (pericolo, eventi speciali), poi inizia un nuovo round.

> In una partita con meno di 4 eroi, gli eroi ottengono attivazioni bonus: con 2 eroi ogni eroe si attiva due volte per round; con 3 eroi, un eroe diverso ogni round riceve 1 attivazione bonus. Un eroe non può spendere un'attivazione bonus finché tutti gli eroi non hanno effettuato la loro prima attivazione.

## Attivazione di un Eroe

All'inizio dell'attivazione, ripristina tutte le carte Oggetto e Classe esaurite di quell'eroe. Poi effettua una qualsiasi combinazione di **2 azioni**:

### Movimento
Ottieni punti movimento pari alla tua **Velocità**. Spendi 1 punto movimento per muoverti in una casella adiacente (ortogonale o diagonale). I punti movimento possono essere spesi in qualsiasi momento durante l'attivazione, anche intervallati ad altre azioni — ma non durante la risoluzione di un'azione.

Puoi anche subire **fatica** per ottenere punti movimento extra: ogni C subita vale 1 punto movimento aggiuntivo, fino a **2 volte per attivazione**.

**Restrizioni al movimento:**

- Muoversi in una casella con una miniatura **ostile** costa 1 punto movimento aggiuntivo
- Muoversi in una casella con una miniatura **amica o neutrale** non costa punti aggiuntivi
- Non puoi **terminare** il movimento in una casella occupata da un'altra miniatura
- Muri, porte chiuse e terreno bloccante non sono attraversabili
- Il terreno difficile costa 1 punto movimento aggiuntivo per entrare

### Attacco
Scegli una miniatura Imperiale come bersaglio. Tira i dadi di attacco indicati sulla tua carta arma; contemporaneamente, tira i dadi di difesa indicati sulla carta Schieramento della miniatura bersaglio.

**Risoluzione dell'attacco:**

1. Controlla la **linea di vista** — l'attacco è dichiarabile solo se esiste
2. Per attacchi a distanza, verifica la **Precisione** — la somma dei numeri sui dadi deve essere ≥ alla distanza in caselle dal bersaglio
3. Applica eventuali modificatori dalle capacità
4. Calcola i danni: **H ottenuti − G del difensore** = danni subiti dal bersaglio
5. L'attaccante spende eventuali **B** per le capacità a impulso

:::indent
Gli attacchi in mischia (P) possono bersagliare solo miniature adiacenti. Gli attacchi a distanza (O) possono bersagliare qualsiasi miniatura entro linea di vista, ma possono mancare per Precisione insufficiente. Il dado bianco (E = schivata) fa mancare l'intero attacco.
:::

### Interazione
Interagisci con un segnalino nella tua casella o in una casella adiacente (per le porte, solo caselle ortogonalmente adiacenti). Seleziona l'oggetto nell'app e poi il tasto **Interagisci**.

Le interazioni possibili includono aprire porte, raccogliere contenitori (che potrebbero fornire carte Rifornimento o altri oggetti), usare terminali o raccogliere segnalini missione.

### Riposo
Recupera un ammontare di **C (fatica)** pari alla tua **Tenacia**. Puoi anche usare un **medpac** durante il riposo per recuperare **5 danni** aggiuntivi.

> I medpac sono una risorsa condivisa tra tutti gli eroi. Il loro numero è mostrato nell'app. Un alleato può usare un medpac con un'azione (non di riposo).

### Azione Speciale
Risolvi una capacità con icona **A** su uno dei tuoi componenti. Ogni azione speciale può essere effettuata solo **una volta per attivazione**.

## Attivazione dei Gruppi Imperiali

Quando l'app attiva un gruppo Imperiale, mostra una **finestra di attivazione** con un effetto bonus e una lista di istruzioni. Ogni miniatura del gruppo, una alla volta, risolve le istruzioni dall'alto verso il basso. Una miniatura non può effettuare più di **2 azioni** per attivazione.

**Tipi di istruzioni di movimento:**

| Istruzione | Comportamento |
|---|---|
| **Muovi X verso «bersaglio»** | Si avvicina il più possibile al bersaglio spendendo X punti movimento |
| **Muovi X per impegnare «bersaglio»** | Si muove fino a una casella adiacente al bersaglio |
| **Muovi X per riposizionare Y** | Si porta a una distanza esatta di Y caselle dalla miniatura Ribelle più vicina |
| **Muovi X per attaccare «bersaglio»** | Si muove verso il bersaglio fino a poterlo attaccare, poi attacca |

**Regola Imperiale:** quando più opzioni soddisfano un'istruzione, i giocatori scelgono sempre l'opzione **più svantaggiosa per gli eroi**.

**Priorità dei bersagli:** se il bersaglio specificato non è raggiungibile, la miniatura sceglie il bersaglio alternativo più vicino che soddisfa al meglio i criteri. Se nessun bersaglio soddisfa i criteri, sceglie la miniatura Ribelle più vicina.

**Spendere gli impulsi:** ogni gruppo ha una **priorità di impulsi** visualizzabile nell'app. La miniatura spende i B seguendo quella lista dall'alto, saltando le capacità già usate, troppo costose o che non avrebbero effetto.

:::accent
Se un'istruzione non causerebbe alcun cambiamento allo stato di gioco, viene saltata. Un'istruzione viene saltata anche se sta per sconfiggere la miniatura che la effettua prima di poter influenzare un Ribelle.
:::

## Danni, Sconfitta e Stato degli Eroi

### Subire e Recuperare
- Quando un eroe subisce **H**, colloca i segnalini danno sulla sua scheda Eroe
- Quando un'altra miniatura subisce **H**, colloca i segnalini accanto alla miniatura sulla mappa
- Molti effetti permettono di recuperare danni o fatica: rimuovi i segnalini corrispondenti

### Ferito
Quando un eroe subisce danni pari alla sua **Salute** per la prima volta in una missione: scarta tutti i segnalini danno e gira la scheda Eroe sul **lato ferito**. Indica nell'app che l'eroe è ferito. Il lato ferito ha spesso Tenacia, Velocità o capacità ridotte.

### Ritirato
Un eroe ferito che subisce danni pari alla sua Salute si **ritira**: rimuovi la miniatura dalla mappa. Quell'eroe non può più attivarsi e le sue capacità non influenzano il gioco per il resto della missione.

### Sconfitta delle Miniature Imperiali
Quando l'ultima miniatura di un gruppo Imperiale viene sconfitta, indica nell'app che il gruppo è stato eliminato. Questo può innescare eventi nella missione.

## Esplorazione e Progressione

La maggior parte delle missioni inizia con una mappa parzialmente rivelata. Man mano che gli eroi aprono porte, sconfiggono gruppi e interagiscono con segnalini, l'app mostra automaticamente le istruzioni per aggiungere nuove tessere, segnalini e miniature.

**Effetti di Pericolo:** alla fine di ogni round, se gli eroi procedono troppo lentamente, possono scattare effetti di pericolo: schieramenti aggiuntivi, danni agli eroi o altre difficoltà.

---

# Modalità Campagna

## Struttura del Round

Ogni round è composto da due fasi risolte nell'ordine:

1. **Fase di Attivazione**
2. **Fase di Status**

### Fase di Attivazione

I giocatori si alternano ad attivare miniature, **a partire dal giocatore Ribelle**. Quando tocca ai Ribelli, scelgono quale miniatura Ribelle attivare. Quando tocca all'Imperiale, attiva tutte le miniature di una carta Schieramento (un **gruppo di schieramento**). Si continua ad alternare finché tutte le miniature non si sono attivate.

**Tenere il conto delle attivazioni:**
- Dopo che un eroe si attiva, volta il suo segnalino attivazione sul lato **rosso (esaurito)**
- Dopo che l'ultima miniatura di un gruppo Schieramento si attiva, ruota la carta di 90° (**esaurita**)
- La Fase di Attivazione termina quando tutti i segnalini attivazione e tutte le carte Schieramento sono esauriti

> Se tutti i gruppi amici di un giocatore sono esauriti prima di quelli avversari, l'avversario continua ad attivare i propri gruppi finché non esaurisce anche lui.

### Attivazione di un Eroe (Campagna)

All'inizio, ripristina tutte le carte Oggetto e Classe esaurite. Poi effettua **2 azioni** (vedi le stesse azioni descritte in Legends — Movimento, Attacco, Interazione, Riposo, Speciale).

:::indent
**Differenza chiave rispetto a Legends:** solo gli eroi possono usare **entrambe le azioni** per attaccare. Le miniature non-eroe possono usare solo **1 azione di attacco** per attivazione.
:::

### Attivazione di un Gruppo di Schieramento

Quando il giocatore Imperiale attiva un gruppo, risolve **2 azioni per ogni miniatura** del gruppo, nell'ordine che preferisce. Deve risolvere entrambe le azioni di una miniatura prima di passare alla successiva.

### Fase di Status (Campagna)

Dopo che tutte le miniature si sono attivate:

1. **Incrementare la Minaccia** — il giocatore Imperiale aumenta l'indicatore di minaccia del valore indicato sul diario della campagna
2. **Ripristinare** — il giocatore Imperiale ripristina tutte le carte Classe e Schieramento esaurite; ogni eroe ripristina i segnalini attivazione (lato verde)
3. **Schierare e Rinforzare** — il giocatore Imperiale può spendere minaccia (D) per schierare nuovi gruppi o rinforzare gruppi esistenti
4. **Effetti di Fine Round** — si risolvono capacità o regole della missione che si innescano a fine round
5. **Avanzare l'Indicatore di Round** — avanza di 1, poi inizia un nuovo round dalla Fase di Attivazione

**Schierare un gruppo:** spendi D pari al costo di schieramento, colloca la carta a faccia in su e posiziona le miniature il più vicino possibile a un punto di schieramento verde attivo.

**Rinforzare:** spendi D pari al costo di rinforzo, colloca 1 miniatura di quel gruppo il più vicino possibile a un punto di schieramento verde. Si può rinforzare solo se almeno un'altra miniatura di quel gruppo è già sulla mappa.

## Capacità e Minaccia

Le capacità delle carte Schieramento Imperiale con costo **D** si pagano riducendo l'indicatore di minaccia. Il giocatore Imperiale non può innescare capacità che costano più minaccia di quanta ne possieda.

## Eroi Feriti e Ritiro (Campagna)

Il sistema ferito/ritirato funziona come in Legends, con una differenza: nella campagna, **un eroe ferito può comunque attivarsi** e ricevere danni. Se viene sconfitto una seconda volta, si **ritira** e viene rimosso dalla mappa per il resto della missione.

## Prove di Attributo in Missione

Le regole di alcune missioni richiedono prove di attributo per interagire con elementi specifici (es. aprire una porta con una prova di Tecnica). Tira i dadi indicati sulla scheda Eroe per quell'attributo: ogni B è un successo. Un solo successo supera la prova nella maggior parte dei casi.

## Avanzamento Post-Missione

Dopo ogni missione:

- Gli eroi recuperano completamente H e C; ogni eroe ferito torna al lato illeso
- Le carte Rifornimento tornano nel mazzo
- Gli eroi ottengono **50 crediti** per ogni segnalino contenitore reclamato
- La carta della missione torna nella scatola
- Si pesca una nuova carta Missione Secondaria (se necessario)

Poi si prosegue con la sezione successiva del diario della campagna (Migliorie Ribelli o Migliorie Imperiali).

**Sezione Migliorie Ribelli:**
1. Pesca **6 carte Oggetto** dal mazzo del rango indicato sul diario
2. I Ribelli decidono collettivamente quali acquistare spendendo crediti e le assegnano agli eroi
3. Ogni eroe può spendere PE per acquistare carte dal proprio mazzo Classe

**Sezione Migliorie Imperiali:**
1. Il giocatore Imperiale pesca **4 carte Obiettivo** in segreto e può acquistarne spendendo influenza
2. Può spendere PE per acquistare carte dal proprio mazzo Classe

---

# Modalità Scontro Diretto

## Struttura del Round

Ogni round è composto da due fasi:

1. **Fase di Attivazione**
2. **Fase di Status**

### Fase di Attivazione

Partendo dal giocatore **con l'iniziativa**, i giocatori si alternano ad attivare gruppi di miniature. Ogni miniatura del gruppo effettua **2 azioni** prima di passare alla successiva. La fase termina quando tutti i gruppi sono esauriti.

:::indent
Se un giocatore ha esaurito tutti i propri gruppi prima dell'avversario, può scegliere di **passare** invece di attivare — non è obbligato ad attivare un gruppo se ha meno carte ripristinate dell'avversario.
:::

### Azioni disponibili

Le stesse azioni della campagna (Movimento, Attacco, Interazione, Speciale) con queste differenze:
- **Riposo non disponibile**
- **Solo 1 azione di attacco per attivazione** (include azioni speciali con attacchi)
- **La fatica si converte in danni** — per ogni C subita, la miniatura subisce 1 H; il giocatore che la controlla può scartare 1 carta Comando dalla cima del proprio mazzo per evitare quel singolo danno

### Carte Comando in Gioco

Durante la Fase di Attivazione (e in altri momenti specificati), i giocatori possono **giocare carte Comando** dalla propria mano rivelandole all'avversario e risolvendo la capacità indicata. Non c'è limite al numero di carte che si possono giocare in un turno.

### Fase di Status (Scontro Diretto)

1. **Ripristinare le Carte** — entrambi i giocatori ripristinano tutte le proprie carte Schieramento
2. **Pescare le Carte Comando** — ogni giocatore pesca **1 carta**, più 1 aggiuntiva per ogni **terminale** che controlla (miniatura amica adiacente, nessuna miniatura ostile adiacente)
3. **Effetti di Fine Round** — si risolvono le capacità o regole della missione che si innescano a fine round
4. **Passare l'Iniziativa** — il segnalino iniziativa passa all'avversario; poi inizia un nuovo round

## Punti Vittoria

I PV si accumulano durante la partita:

- **Gruppo sconfitto** — l'avversario guadagna PV pari al **costo di schieramento** di quel gruppo (colloca la carta Schieramento sconfitta accanto all'avversario come promemoria)
- **Obiettivi della missione** — specificati sulla carta Missione a Scontro Diretto attiva
- **Carte Schieramento o Comando** — alcune specificano modalità aggiuntive per guadagnare PV

Usa l'indicatore di minaccia (o segnalini e dadi) per tenere il conto dei PV. La partita termina **non appena** un giocatore raggiunge 40 PV.
