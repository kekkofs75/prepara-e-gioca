# I Round

La partita è composta alternativamente da **round bianchi** e **round neri**, in ognuno dei quali ogni giocatore svolge un turno.

L'ordine di gioco può cambiare ad ogni round in base allo svolgimento della gara.

## Round e Gettoni Marcia

Sia il [segnalino Round]{.def} che i [gettoni Marcia]{.def} hanno un lato bianco ed uno nero.

- Il **segnalino Round** indica il round corrente. Al termine del round viene girato sul lato opposto.
- Il **gettone Marcia** indica la velocità della tua vettura durante i turni e lo stato del tuo turno.

Se il gettone Marcia mostra lo **stesso colore** del segnalino Round, non hai ancora svolto il tuo turno; altrimenti lo hai già concluso.

Al termine del tuo turno, posiziona un gettone Marcia girato sul lato corrispondente al round successivo (colore opposto al colore di round attuale).

Una volta che tutti i gettoni Marcia non mostrano il colore del round corrente, ne inizia uno nuovo e il segnalino Round viene capovolto.

# Ordine di Gioco

L'ordine di gioco è determinato dal seguente **ordine di priorità**:

| Priorità | Criterio | Regola |
|----------|----------|--------|
| 1 | **Velocità** | La vettura col gettone Marcia superiore gioca per prima |
| 2 | **Distanza** | La vettura nella casella col bordo anteriore più avanzato |
| 3 | **Posizione** | La vettura all'interno della curva (o successiva se in rettilineo) |

# I Turni

Una volta determinato l'ordine di gioco, ogni giocatore in ordine svolge un turno nel quale deve:

1. Scegliere i propri dadi
2. Lanciare i dadi e muovere la propria vettura

## Scegliere i Dadi

Durante il tuo turno puoi usare una **qualsiasi combinazione di dadi** concessi dalla tua plancia Vettura. Ogni singolo dado può essere usato **una sola volta** per turno.

Puoi combinare a piacere accelerazione, decelerazione, frenata e mantenimento della velocità.

Senza lanciarli, **posiziona sul circuito** i dadi che vuoi usare nelle caselle che vuoi percorrere per pianificare la **traiettoria**.

Il gettone Marcia accanto alla tua vettura indica la **marcia con cui inizi il turno**. I dadi che piazzi quando inizi a pianificare la mossa devono essere relativi a questa velocità.

## La Plancia Vettura

Sulla tua plancia Vettura sono presenti tutte le informazioni relative alla tua vettura:

| Voce | Descrizione |
|------|-------------|
| **A** | Categoria |
| **B** | Pneumatici |
| **C** | Condizioni meteo attuali |
| **D** | Dadi a disposizione |
| **E** | Numero simboli Pericolo che causano una Perdita di Controllo |
| **F** | Conseguenze di una Perdita di Controllo |

È possibile cambiare gli pneumatici durante un **Pit Stop** (cambiando la plancia Vettura). Ci sono due tipi di pneumatici:

- **Da Asfalto** — si comportano bene col sole, ma perdono aderenza con la pioggia.
- **Da Pioggia** — mantengono l'aderenza con la pioggia, ma sono meno performanti col sole.

# I Dadi

Tutti i dadi hanno dei **simboli Pericolo** che hanno effetto solo quando, in un singolo turno, ne accumuli un numero ≥ del limite indicato sulla tua plancia Vettura, subendo una **[Perdita di Controllo]{.def}**.

## Dadi Marcia Neri

Vengono usati per **accelerare o decelerare** in modo progressivo. Rappresentano le marce dalla 1ª alla 6ª.

Ogni dado Marcia permette alla vettura di avanzare di **una casella**. I dadi devono essere giocati in **ordine crescente o decrescente** l'uno rispetto all'altro.

Quando posizioni un dado Marcia puoi usarne uno qualsiasi il cui valore sia:

- **Accelerazione**: una Marcia in più rispetto alla casella precedente
- **Velocità stabile**: una Marcia identica alla casella precedente
- **Decelerazione**: una Marcia in meno rispetto alla casella precedente

## Dadi Inerzia Bianchi

Vengono usati per **mantenere una determinata velocità**. Rappresentano un andamento costante della vettura.

Ogni dado Inerzia permette alla vettura di avanzare di una casella **mantenendo la Marcia attuale**. Può essere usato all'inizio, durante o alla fine del movimento. Puoi usare solamente dadi Inerzia durante il turno oppure puoi alternarli con altri dadi.

> Non è possibile usare un dado Inerzia se la tua velocità è 0.

## Dadi Freno Rossi

Vengono usati per **frenare bruscamente**, riducendo la velocità e scalando più di una marcia. Vengono associati ad un altro dado.

Puoi usare uno o più dadi Freno con un dado Marcia per ridurre la velocità e avanzare di una casella. Devi usare **tanti dadi Freno quante sono le Marce saltate**.

:::accent
Non puoi mai ridurre la velocità a 0 (minimo 1). Le Marce 0 e 00 vengono usate solo quando si subisce una Perdita di Controllo o rientrando in gara da un Pit Stop.
:::

# Muoversi

Può esserci solamente **1 vettura per casella**. In ogni turno, se possibile, devi far avanzare la tua vettura di almeno **1 casella**.

La tua vettura deve sempre muoversi avanzando **in linea retta** (sulla stessa corsia) o **in diagonale** (cambiando corsia), non lateralmente. Il bordo anteriore della casella in cui si muove deve essere più avanti rispetto a quello precedente.

Durante il movimento puoi **cambiare corsia** tutte le volte che vuoi. Considera i bordi esterni delle tessere Circuito sempre come bordo delle caselle.

## Le Curve

Le caselle Curva hanno limitazioni indicate da un numero e/o un simbolo Pericolo.

**Curve Normali** — Un numero dentro un cerchio indica la marcia più alta con cui la vettura può occupare quella casella.

:::indent
Puoi attraversarla con una marcia ≤ a quella indicata senza penalità. Con una marcia superiore subisci un'immediata Perdita di Controllo. Puoi accelerare in uscita.
:::

**Curve Pericolose** — Un numero dentro un triangolo con "!" indica la marcia più alta consentita.

:::indent
Puoi attraversarla con una marcia < a quella indicata senza penalità, oppure con una marcia = aggiungendo immediatamente un simbolo Pericolo al risultato dei dadi. Con una marcia superiore subisci un'immediata Perdita di Controllo.
:::

**Curve Strette** — I numeri sulle linee tratteggiate indicano il limite di velocità con cui la vettura può entrare ed uscire dalla casella.

:::indent
Puoi entrare con una marcia ≤ a quella indicata se provieni dalla stessa corsia. Ignora la limitazione se entri diagonalmente (traiettoria ideale). Stesse regole in uscita.

> Nelle Curve con corsia interna a larghezza doppia (Curve per tre corsie) il movimento diagonale dalla corsia più interna **non** è permesso e devi continuare ad avanzare sulla stessa corsia subendo la penalità.
:::

## Sorpasso

Per entrare nella casella di fianco ad un avversario devi usare un dado Marcia o un dado Inerzia con un valore **≥ a quello attuale** della vettura avversaria. Poi puoi continuare normalmente.

Due caselle sono affiancate se i bordi anteriori e/o posteriori sono alla stessa distanza lungo il circuito. Puoi sorpassare muovendoti diagonalmente.

## Bloccato

Sei bloccato se in un qualsiasi momento del turno:

- Non puoi raggiungere la velocità necessaria per sorpassare la vettura davanti a te, **oppure**
- Muoverti causerebbe un'immediata e inevitabile perdita di controllo a causa della presenza di un'altra vettura, **oppure**
- Ti trovi ostacolato in qualsiasi altro modo.

Concludi il turno immediatamente nella casella attuale e alla Marcia attuale.

- Se non ti sei mosso: capovolgi il gettone Marcia.
- Se ti sei mosso: posiziona un gettone Marcia alla velocità in cui ti trovi al momento in cui sei stato bloccato.

# Lanciare i Dadi e Muovere la Vettura

Una volta che hai scelto i dadi e li hai piazzati sul circuito, devi decidere se lanciarli **singolarmente** o **tutti insieme**.

## Lanciare i Dadi Singolarmente

Lancia un dado alla volta, iniziando dal primo posto subito dopo la tua vettura, muovendola di una casella per ogni dado lanciato a prescindere dal risultato.

Tieni da parte ogni dado con esito Pericolo, sommando anche quelli indicati dal circuito durante il movimento. Subisci una **Perdita di Controllo** se raggiungi il limite indicato dalla tua plancia Vettura.

Se accade, posiziona la tua vettura dove hai ottenuto l'ultimo simbolo Pericolo, poi risolvi la Perdita di Controllo.

Non sei obbligato a lanciare tutti i dadi che hai posizionato per il turno e, finché non subisci una Perdita di Controllo, puoi scegliere di terminare il movimento. Quando lanci un dado sei obbligato a risolverne il risultato.

Quando hai terminato il movimento, piazza accanto alla vettura un **gettone Marcia** col numero pari al valore dell'ultimo dado Marcia lanciato nel turno e sul lato (bianco o nero) del turno successivo.

> Se hai usato solo dadi Inerzia, mantieni lo stesso gettone Marcia di partenza voltandolo sul lato del turno successivo.

## Andare a Tutto Gas

Posiziona un gettone Marcia sulla casella in cui vorresti terminare il movimento col numero pari al valore dell'ultimo dado Marcia previsto e sul lato del turno successivo.

Prendi e lancia contemporaneamente tutti i dadi previsti.

- Se ottieni un numero di simboli Pericolo **< del limite** previsto dalla tua plancia Vettura (sommando anche quelli del circuito): sposta la vettura nella casella dove hai collocato il gettone Marcia e termina il movimento.
- Se ottieni un numero di simboli Pericolo **≥ del limite** previsto: subisci una Perdita di Controllo.

:::indent
Prima però posiziona i dadi lanciati (senza modificarne i risultati) sul circuito, anche senza seguire la traiettoria originale, pianificando un normale movimento purché ne posizioni abbastanza da causare la Perdita di Controllo.

- La Perdita di Controllo viene risolta nella casella in cui si trova il simbolo Pericolo o l'elemento del circuito che l'ha causata.
- Questo consente al giocatore di scegliere dove e a quale velocità risolverla.
:::

In caso di successo o meno, ottieni dalla riserva un numero di **gettoni Focus** = al numero di dadi Marcia e Inerzia usati nella manovra, indipendentemente dal risultato del dado.

## Gettoni Focus

Consentono di "assicurare" i dadi evitando di doverli lanciare e di ottenere un possibile simbolo Pericolo. Non ti consentono di ignorare i limiti di Velocità o i simboli Pericolo indicati sul circuito.

Puoi usare un gettone Focus in qualsiasi momento **prima** di lanciare un dado. Una volta lanciato non puoi modificarne il risultato.

| Dado assicurato | Costo in gettoni Focus |
|-----------------|------------------------|
| 1° dado | 1 gettone |
| 2° dado | 2 gettoni |
| 3° dado | 3 gettoni |
| e così via… | +1 per ogni dado |

Puoi assicurare un lancio che prevede dadi Freno, ma in questo caso devi assicurare **tutti** i dadi che fanno parte di quella mossa. Se non hai abbastanza gettoni Focus non puoi farlo.

# Perdita di Controllo

Quando ottieni un numero di simboli Pericolo ≥ al limite indicato sulla tua plancia Vettura, o se non rispetti il limite di velocità indicato su una Curva, subisci una **[Perdita di Controllo]{.def}**.

Devi risolverla nella casella in cui si è verificato l'ultimo simbolo Pericolo. Dopo averla risolta, termini **immediatamente** il turno.

Le conseguenze dipendono dalla **velocità della vettura** e dal **livello di pericolosità** della tessera Circuito, indicate nella tabella della tua plancia Vettura.

## Conseguenze per la Velocità

**Marcia 0 (sbandata)** — gira la vettura in senso opposto di marcia e lasciala sulla casella raggiunta. Posiziona il gettone Marcia "0" accanto ad essa. Nel turno successivo potrai girare la vettura e ripartire normalmente.

**Marcia 00 (fuori pista)** — posiziona la vettura ed il gettone Marcia "00" all'esterno del circuito accanto alla casella raggiunta. Nel turno successivo posiziona la vettura sulla casella del circuito accanto in senso opposto di marcia con il gettone Marcia "0", poi termina immediatamente il turno.

:::indent
> Se la casella è già occupata da un'altra vettura non puoi rientrare nel circuito in quel turno: capovolgi il gettone Marcia "00" e salta il turno.

Le vetture presenti sul circuito giocano sempre **prima** di quelle fuori pista. Se due vetture devono ritornare sul circuito nello stesso momento, quella uscita per prima rientra e gioca per prima.
:::

## Conseguenze per la Pericolosità

Le successive colonne della tabella indicano la **Pericolosità** della tessera Circuito (gli estremi di ogni tessera presentano dei segnalini colorati corrispondenti al suo livello).

La velocità e il livello di Pericolosità indicano se la vettura subisce danni. Per ogni quadratino nero nella casella corrispondente, pesca **1 gettone Danno** dal sacchetto.

**Effetti dei Gettoni Danno:**

- **Danno alle Marce** — -1 dado Marcia per ogni gettone sulla plancia Vettura
- **Danno ai Freni** — -1 dado Freno per ogni gettone sulla plancia Vettura
- **Danno all'Inerzia** — -1 dado Inerzia per ogni gettone sulla plancia Vettura

> I gettoni possono ridurre il numero di dadi a 0. Altri gettoni vengono comunque posti sulla plancia Vettura, ma non hanno alcun effetto.

## Cambiamenti del Meteo

Tutti i giocatori ribaltano la propria plancia Vettura e tengono conto del nuovo limite di simboli Pericolo e dei dadi disponibili.

> Se 2 su 4 gettoni Meteo vengono pescati contemporaneamente si annullano a vicenda e non hanno alcun effetto.

## Bandiera Gialla

Piazzate il gettone **Bandiera Gialla** sulla tessera Circuito dove si è verificata la Perdita di Controllo.

Un giocatore non può mai affiancare altre vetture sia sulla tessera Circuito con il gettone Bandiera Gialla, sia sulle tessere direttamente precedente e successiva.

:::indent
Puoi comunque affiancare vetture all'esterno della pista (Marcia "00") o in Marcia "0". Le vetture già affiancate quando il gettone viene pescato possono muoversi normalmente.

Ulteriori gettoni Bandiera Gialla sulla stessa tessera non hanno alcun effetto aggiuntivo.
:::

Quando il giocatore che ha pescato il gettone inizia un turno successivo in Marcia 0, lo rimuove e lo piazza sulla propria plancia Vettura. Il gettone non ha più alcun effetto.

# Pit Stop

Se la vettura ha diversi Danni o se gli Pneumatici non sono adatti alle attuali condizioni meteo, puoi effettuare un **[Pit Stop]{.def}**.

Devi terminare il turno in 1ª Marcia in una casella senza limiti di velocità o simboli Pericolo (quindi non in Curva) e ai bordi del circuito.

1. Posiziona il gettone Marcia "0" o "00" (in base all'opzione scelta) accanto alla casella in cui hai terminato il movimento.
2. Piazza la vettura in una delle 3 corsie della tessera Pit Stop.

**Opzioni di Pit Stop:**

| Opzione | Effetto | Rientro |
|---------|---------|---------|
| **Cambio Pneumatici** | Sostituisci la plancia Vettura con un'altra dello stesso colore e categoria ma con diversi pneumatici. Poni gettone Marcia 0. | Turno successivo |
| **Riparazioni** | Rimuovi tutti i gettoni Danno dalla plancia Vettura e rimescolali nel sacchetto. Poni gettone Marcia 00. | Dopo 2 turni |
| **Riparazioni + Cambio Pneumatici** | Effettua entrambe le operazioni. | Come Riparazioni |

> Se la casella di rientro è già occupata da un'altra vettura non puoi rientrare nel circuito in quel turno: capovolgi il gettone Marcia "0" e salta il turno.

:::accent
Non puoi effettuare un Pit Stop dopo una Perdita di Controllo, in quanto in quel caso termini immediatamente il turno.
:::

# Fine del Turno

Il tuo turno finisce quando:

- Hai completato il movimento
- Il tuo movimento è bloccato
- Subisci una Perdita di Controllo

Posiziona accanto alla tua vettura un **gettone Marcia** con la velocità attuale e il colore del turno successivo. Poi il giocatore successivo nell'ordine di gioco inizia il proprio.

Quando tutti i giocatori hanno svolto il proprio turno, capovolgi il **segnalino Round**, determinate il nuovo ordine di gioco ed iniziate un nuovo round.

---

# ![puzzle]{.icon} Regole Avanzate

## Partenza Bruciante

Quando inizi il turno in Marcia "0" (griglia di partenza o in gara), prima di lanciare qualsiasi dado, dichiara che vuoi eseguire una **Partenza Bruciante**, andando direttamente in 2ª Marcia.

Se col dado di 2ª Marcia (lanciato singolarmente o insieme agli altri) ottieni un simbolo Pericolo, il tuo turno termina immediatamente. Muovi la vettura di una casella e posiziona il gettone Marcia 2 accanto alla vettura (ignora una qualsiasi Perdita di Controllo).

Puoi assicurare il dado di 2ª Marcia con i gettoni Focus.

## Zona Rossa

Se la tua vettura è nella sua **marcia più alta** puoi continuare il movimento usando i dadi Freno (nel numero massimo indicato dalla tua plancia Vettura) come se fossero dadi Inerzia.

I dadi Freno usati per la Zona Rossa **non** possono essere usati per frenare e viceversa. Nello stesso turno puoi frenare ed eseguire una manovra Zona Rossa.

> I dadi Freno usati in questo modo non generano gettoni Focus.

---

# ![puzzle]{.icon} Modalità in Solitario

Segui le stesse regole del gioco base, con due eccezioni:

- Non puoi effettuare un Pit Stop.
- *(Opzionale)* Ogni gettone Cambiamento del Meteo viene considerato come un gettone Bandiera Verde.

Segui le stesse regole del turno base, ma dopo aver piazzato il gettone Marcia, **annota il turno** sul Foglio di Gara spuntando la casella corrispondente alla tua velocità finale o indicando la condizione atmosferica di A(sciutto) o B(agnato) se variabile durante la partita.

Maggiore è la Marcia, minore è il tempo aggiunto.

---

# ![puzzle]{.icon} Championship

Un Campionato consiste di **8 gare**, di **2 giri** ciascuna, su **8 tracciati differenti**. Segui normalmente le regole del gioco base.

Utilizza il **Foglio di Gara** presente nel manuale per segnare i punti durante il Campionato. Quando giochi con più di 1 vettura per giocatore, ciascuna conta come un singolo pilota ai fini dei punti.

Alla fine di ogni gara assegna i punti in base alla posizione finale:

| Posizione | Punti | Posizione | Punti |
|-----------|-------|-----------|-------|
| 1° | 25 | 4° | 12 |
| 2° | 18 | 5° | 10 |
| 3° | 15 | 6° | 8 |

> Con l'espansione Team Challenge: 7° = 6 pt, 8° = 4 pt, 9° = 2 pt, 10° = 1 pt, 11°–12° = 0 pt.

---

# ![puzzle]{.icon} Team Challenge

Puoi avere fino a **12 vetture** in gara in uno dei seguenti modi:

- **12 singoli giocatori** — ogni giocatore prende la vettura del colore scelto con tutti i componenti necessari.
- **2 vetture per ogni giocatore** — ogni giocatore prende 2 vetture del colore scelto con tutti i componenti per ciascuna.

Per distinguere le vetture dello stesso colore sul circuito sono presenti **gettoni Marcia** con segni aggiuntivi.

> Se giochi con 7+ vetture si consiglia di usare le tessere Circuito a 3 e 4 corsie per evitare troppi blocchi.

**Circuiti a forma di "8"** — Usa una tessera Circuito Incrocio per creare un avvitamento del circuito, insieme ad una doppia Griglia di Partenza con entrambi i lati che vanno nella stessa direzione. Se una vettura conclude il turno nella casella centrale di una tessera Incrocio, solo le vetture che si muovono nella stessa direzione possono attraversare l'incrocio.

**Modalità Inseguimento** — I circuiti usano una doppia Griglia di Partenza con ogni lato che va in una direzione diversa, dividendo la pista in due percorsi separati su cui le vetture vengono divise in due gruppi (A e B). In ogni round le vetture del primo gruppo svolgono il proprio turno, poi le vetture del secondo gruppo svolgono il loro.

:::glossary
[segnalino Round]: Segnalino che indica il round corrente (bianco o nero). Viene capovolto al termine di ogni round.

[gettoni Marcia]: Segnalini che indicano la velocità attuale della vettura di un giocatore e lo stato del suo turno nel round corrente.

[Perdita di Controllo]: Evento che si verifica quando si accumulano simboli Pericolo in numero ≥ al limite della plancia Vettura, o quando non si rispetta il limite di velocità di una Curva. Causa danni e termina immediatamente il turno.

[Pit Stop]: Sosta ai box che consente di riparare i danni alla vettura e/o cambiare gli pneumatici. Richiede di terminare il turno in 1ª Marcia ai bordi del circuito, in una casella senza limitazioni.
:::
