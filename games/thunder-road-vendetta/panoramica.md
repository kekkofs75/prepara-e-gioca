# Il Tabellone e le Tessere Strada

Il tabellone è composto da 3 tessere affiancate in fila (**posteriore → centrale → anteriore**) che scorrono man mano che la gara avanza. Le auto si muovono dalla posteriore verso l'anteriore. Un'auto che esce dal bordo sinistro, destro o posteriore è eliminata.

## Tipi di caselle

| Casella | Costo di entrata | Note |
|---|---|---|
| **Strada** | 1 movimento | Consente il bonus dado strada |
| **Fuori-strada** | 1 movimento | Nessun bonus |
| **Fango** | 2 movimenti | Puoi entrarci anche con 1 solo movimento rimasto |
| **Invalicabile** | — | Elimina qualsiasi auto che vi entra. Bordo giallo doppio. |
| **Pericolo** | — | Indica dove posizionare i segnalini pericolo quando si aggiunge una tessera |

---

# Veicoli

## Auto

Ogni equipaggio ha 3 auto di dimensione diversa. La dimensione influenza la facilità di essere colpita e la potenza in tamponamento.

| Dimensione | Colpire con armi | Tamponamento |
|---|---|---|
| **Piccola (S)** | Difficile da colpire | Poco efficace |
| **Media (M)** | Intermedia | Intermedio |
| **Grande (L)** | Facile da colpire | Molto efficace |

## Elicottero

Ogni equipaggio ha 1 elicottero. Non riceve danni, non può essere bersagliato, non tampona altri veicoli. Può sparare. Elimina qualsiasi auto (anche propria) che termini il turno nella sua casella.

## Rottami

I rottami sono carcasse di auto di gare precedenti. Sono trattati come **auto piccole fuori uso** di nessun giocatore:

- Se un veicolo su strada entra nella loro casella, vengono tamponati normalmente.
- Se un rottame entra in una casella con un segnalino pericolo (per via di un tamponamento), quest'ultimo viene risolto.
- Sono eliminati se subiscono danno o se terminano il turno nella casella di un elicottero.

Compaiono in gioco quando viene rivelato un segnalino pericolo Rottame: si posiziona la miniatura sulla casella, il veicolo che vi era entrato si impila sopra e si risolve un tamponamento.

---

# Cruscotti

Ogni auto ha il proprio cruscotto che mostra:

- La **dimensione** dell'auto
- Lo slot centrale per il **dado movimento**
- Lo spazio **inerzia** (con 2 pallini come limite massimo di usi per round)
- Gli **slot danno** (2 slot: al secondo danno l'auto diventa fuori uso)

---

# Stato delle Auto

| Stato | Condizione | Effetti |
|---|---|---|
| **Operativa** | 0 o 1 segnalino danno | Può muoversi e sparare normalmente |
| **Fuori uso** | 2 segnalini danno | Girata al contrario. Non si muove, non spara, non riceve ulteriori danni. Può essere tamponata. Recuperabile con Riparazione. |
| **Eliminata** | Condizione di eliminazione | Rimossa definitivamente. Segnalini danno tornano nella pila, cruscotto nella scatola. |

Un'auto è **eliminata** se:
- Entra in una casella invalicabile
- Termina il turno nella casella di un elicottero (anche proprio)
- Si trova sulla tessera posteriore quando questa viene rimossa
- Esce dal bordo sinistro, destro o posteriore del tabellone
- Incontra un effetto che la elimina direttamente

---

# Ostacoli

Una casella è **libera** se non contiene ostacoli. Sono ostacoli: veicoli su strada, elicotteri, segnalini pericolo (coperti o scoperti) e caselle invalicabili.

Quando un veicolo su strada entra in una casella con un ostacolo:

- **Casella occupata** da altro veicolo su strada: il veicolo in movimento perde il movimento rimanente, si impila sopra e si risolve un tamponamento.
- **Elicottero**: puoi attraversare liberamente la casella. Se però ci *termini il turno* per qualsiasi motivo, sei eliminato.
- **Pericolo coperto**: viene girato a faccia in su e risolto immediatamente.
- **Pericolo scoperto**: viene risolto immediatamente.
- **Casella invalicabile**: il veicolo è eliminato.

---

# Segnalini Pericolo

Posizionati coperti sulle caselle apposite quando viene aggiunta una nuova tessera. Quando un veicolo su strada li rivela, si risolvono immediatamente.

## Da risolvere e scartare

| Pericolo | Effetto |
|---|---|
| **Rottame** | Posiziona una miniatura rottame sulla casella. Il veicolo si impila sopra e si risolve un tamponamento. |
| **Mina** | Il veicolo prende un segnalino danno e perde il movimento rimanente. |

## Da lasciare sul tabellone (modificano la casella permanentemente)

| Pericolo | Effetto |
|---|---|
| **Strada** | La casella diventa casella strada. |
| **Fango** | La casella diventa casella fango. |
| **Chiazza di petrolio** | Lancia il dado direzione e sposta il veicolo di 1 casella in quella direzione (senza consumare movimento). La casella diventa strada. |

---

# Segnalini Danno

Quando un'auto subisce danno, pesca un segnalino casuale, risolvine l'effetto, poi posizionalo coperto in uno slot danno. Se l'auto era in movimento, perde il movimento rimanente.

| Segnalino | Effetto |
|---|---|
| **Ammaccatura** | Nessun effetto aggiuntivo. |
| **Slittamento** *(6 varianti)* | L'auto si sposta di 1 casella nella direzione mostrata sul segnalino. |
| **Sbandata** | Lancia il dado acrobazia: l'auto si muove di tante caselle, lanciando il dado direzione per ognuna. Il terreno ha effetto normale. La sbandata termina se l'auto perde il movimento (es. tamponamento). |
| **Sbalzo** | Lancia dado direzione e dado acrobazia: l'auto si sposta di tante caselle in quella direzione ignorando tutto ciò che c'è in mezzo. La casella finale ha effetto normale. |
| **Schegge** | Lancia il dado direzione: il primo veicolo su strada in quella direzione riceve 1 danno. Ignorano qualsiasi terreno, anche invalicabile. Se non c'è nessun veicolo, non succede nulla. |

> Se un'auto viene mossa su una casella invalicabile o oltre i bordi sinistro, destro o posteriore a causa di un segnalino danno, è eliminata.

---

# Tamponamento

Si verifica ogni volta che due veicoli su strada occupano la stessa casella, per qualsiasi motivo (movimento, pericoli, effetti danno).

1. Lancia **dado tamponamento** e **dado direzione**: indicano quale veicolo si sposta (quello in cima o in fondo) e in che direzione.
2. Se un veicolo è di **dimensione maggiore** dell'altro, il suo proprietario può chiedere un unico ritiro di entrambi i dadi (vale anche se il veicolo più grande è fuori uso, o se entrambi appartengono allo stesso giocatore).
3. Il veicolo indicato si sposta di **1 casella**. Se si genera un nuovo tamponamento, si continua a risolvere finché ogni casella ha al massimo 1 veicolo su strada.

---

# Dado Strada

Lanciato dal primo giocatore all'inizio del round. Dopo il movimento di un'auto che ha percorso **solo caselle strada**, puoi facoltativamente ottenere movimento bonus pari al suo valore. Se decidi di usarlo, devi usarlo tutto. Non si applica durante l'inerzia.

---

# Dadi FX — Riepilogo

| Dado | Quando si usa |
|---|---|
| **Dado strada** | Bonus movimento dopo un turno tutto su strada |
| **Dado acrobazia** | Sbandate e sbalzi da segnalini danno |
| **Dado mira** | Per determinare se un colpo va a segno |
| **Dado tamponamento** | Per determinare quale veicolo si sposta nel tamponamento |
| **Dado direzione** | Per determinare la direzione di movimenti causati da effetti |
