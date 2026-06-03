# Struttura del Turno

Ogni turno è diviso in **6 fasi**, da giocare in quest'ordine:

| # | Fase |
|---|------|
| 1 | Pesca |
| 2 | Evocazione |
| 3 | Gioco Carte Evento |
| 4 | Movimento |
| 5 | Attacco |
| 6 | Accumulo Magia |

Quando completi tutte e 6 le fasi, il turno passa all'avversario.

---

## Fase 1 — Pesca

Pesca carte dalla tua [Pila di Pesca]{.def} fino ad avere **5 carte in mano**.

> Se inizi il turno con 2 carte, pescane 3. Se la tua Pila di Pesca è vuota, non puoi pescare e devi concludere la partita con le carte rimaste sul Campo di Battaglia (inclusa la Pila della Magia) e quelle in mano.

---

## Fase 2 — Evocazione

Puoi evocare una o più [Unità]{.def} sul Campo di Battaglia pagando il loro [Costo di Evocazione]{.def} in **Punti Magia**.

Per spendere Punti Magia:
- Rimuovi una carta dalla cima della tua [Pila della Magia]{.def} per ogni Punto Magia che vuoi spendere.
- Mettila scoperta nella tua Pila degli Scarti.

Dopo aver pagato il costo, posiziona l'Unità evocata **adiacente a una Carta Muro che controlli** (questo ti permette anche di posizionarla nel Territorio avversario, se controlli un Muro lì).

> Non puoi evocare un'Unità se non hai abbastanza carte nella Pila della Magia, oppure se non ci sono spazi liberi adiacenti a Carte Muro che controlli.

Puoi evocare tutte le Unità che hai in mano e di cui puoi pagare il costo, purché ci siano spazi liberi adiacenti ai Muri che controlli.

---

## Fase 3 — Gioco Carte Evento

Puoi giocare [Carte Evento]{.def}, incluse le [Carte Muro]{.def}.

- Non c'è limite al numero di Carte Evento giocabili in un turno.
- Le Carte Evento vengono giocate una alla volta e i loro effetti si risolvono immediatamente.
- Dopo aver giocato una Carta Evento, mettila scoperta nella Pila degli Scarti.
- Per giocare una Carta Muro, posizionala semplicemente in uno spazio libero del tuo Territorio.

> Alcune Carte Evento richiedono che siano soddisfatte determinate condizioni. Devi soddisfare **tutte** le condizioni richieste per poterle giocare.

---

## Fase 4 — Movimento

Puoi muovere fino a **3 tue Unità**, ciascuna di massimo **2 spazi**.

Regole del movimento:
- Le carte non si muovono diagonalmente.
- Non puoi muovere attraverso spazi occupati da altre carte.
- Un'Unità deve terminare il movimento su uno spazio non occupato.
- Nessuna Unità può muoversi più di una volta per Fase di Movimento, a meno che un Evento o un'Abilità Speciale lo consenta esplicitamente.

> Alcune Abilità Speciali si attivano quando un'Unità si muove. Puoi dichiarare che stai muovendo un'Unità di 0 spazi per attivare quell'Abilità senza spostare fisicamente la carta. Questo conta come 1 dei 3 movimenti permessi.

---

## Fase 5 — Attacco

Puoi attaccare con un massimo di **3 tue Unità** presenti sul Campo di Battaglia.

- Le Unità scelte per attaccare non devono essere necessariamente le stesse mosse nella fase precedente.
- Nessuna Unità può attaccare più di una volta per Fase di Attacco, salvo eccezioni esplicite.
- Risolvi ogni attacco prima di passare al successivo.

**Come si risolve un attacco:**
Tira un numero di dadi pari al [Valore di Attacco]{.def} dell'attaccante.
- Con **3 o più**: Colpito → aggiungi 1 Punto Ferita alla carta attaccata.
- Con **2 o meno**: Mancato.

Quando i Punti Ferita di un'Unità raggiungono o superano i suoi [Punti Vita]{.def}, l'Unità è distrutta: metti la sua carta coperta in cima alla tua Pila della Magia. Questo ti fornirà Punti Magia per le Evocazioni future.

> Puoi attaccare e distruggere le tue stesse carte, ma un'Unità non può mai attaccare se stessa.

## Simbolo della Spada vs Simbolo dell'Arco

| Simbolo | Portata | Note |
|---------|---------|------|
| **Spada** | Solo adiacenti | Non può attaccare diagonalmente |
| **Arco** | Fino a 3 spazi | Solo in linea retta (orizzontale o verticale); la linea di vista non deve essere bloccata da altre carte |

---

## Fase 6 — Accumulo Magia

Puoi prendere un qualsiasi numero di carte dalla tua mano e metterle **coperte, in cima alla tua Pila della Magia**.

Così facendo liberi la mano dalle carte che ritieni meno utili, per poterne pescare di nuove all'inizio del turno successivo. Puoi guardare le carte della tua Pila della Magia quando vuoi, ma non puoi cambiarne l'ordine.

:::glossary
[Pila di Pesca]: Il mazzo coperto da cui si pescano le carte a inizio turno.

[Unità]: Qualsiasi forza sul Campo di Battaglia, dall'Evocatore alle Truppe. Rappresentata da una Carta Unità.

[Costo di Evocazione]: Il numero di Punti Magia da spendere per portare un'Unità in battaglia.

[Pila della Magia]: La riserva di carte coperte che fungono da valuta per le Evocazioni. Si accumula mettendoci carte dalla mano o le carte delle Unità distrutte.

[Carte Evento]: Carte con effetti speciali giocabili durante la Fase 3. Comprendono le Carte Muro.

[Carte Muro]: Tipo speciale di Carta Evento, senza testo, che funge da punto di evocazione e da copertura sul Campo di Battaglia.

[Valore di Attacco]: Il numero di dadi da tirare quando un'Unità attacca.

[Punti Vita]: Il numero di Punti Ferita necessari per distruggere un'Unità.
:::
