# Tabellone e Tessere Strada

Il [tabellone]{.def} è composto da 3 tessere strada affiancate in fila (**posteriore → centrale → anteriore**) che scorrono man mano che la gara avanza. Le auto si muovono dalla tessera posteriore verso quella anteriore.

## Terreno

Ogni tessera ha caselle di terreno diverso e caselle pericolo.

| Casella | Costo | Note |
|---|---|---|
| **Strada** | 1 movimento | Consente il bonus dado strada |
| **Fuori-strada** | 1 movimento | Nessun bonus |
| **Fango** | 2 movimenti | Puoi entrarci con 1 rimasto |
| **Invalicabile** | — | L'auto è eliminata |
| **Pericolo** | — | Posizione per segnalino pericolo |

## Segnalini Pericolo

Sono posti coperti sulle caselle pericolo quando viene aggiunta una nuova tessera e vengono risolti quando un'auto si muove su di essi.

| Segnalino | Effetto | Dopo |
|---|---|---|
| **Rottame** | Poni 1 miniatura rottame e tampona | Scarta (sostituito dal rottame) |
| **Mina** | Subisci 1 danno e termina il movimento | Scarta il segnalino |
| **Strada** | La casella diventa terreno Strada | Resta sul tabellone |
| **Fango** | La casella diventa terreno Fango | Resta sul tabellone |
| **Petrolio** | Sposta l'auto di 1 casella, poi diventa terreno Strada | Resta sul tabellone |

## Rottami

Sono veicoli carbonizzati di precedenti gare, rappresentati da apposite miniature, da trattare come **auto piccole fuori uso**.

- Se un veicolo su strada entra nella loro casella, vengono **tamponati** normalmente.
- Se un rottame entra in una casella con un segnalino pericolo (per via di un tamponamento), quest'ultimo viene **risolto**.
- Se subiscono danno o terminano il turno nella casella di un elicottero, sono **eliminati** e rimossi dal tabellone.

## Ostacoli

Esistono 5 tipi di ostacoli. Se un veicolo su strada entra in una casella che ne contiene, devi risolvere quanto segue:

- **Casella occupata** da un altro veicolo su strada (anche dello stesso equipaggio): perde il movimento rimanente, lo impili sopra all'altro e risolvi immediatamente un tamponamento.
- **Elicottero:** può attraversarla liberamente senza effetti, ma se vi termina il turno (per qualsiasi motivo, anche a seguito di tamponamento o danno) è immediatamente eliminato.
- **Pericolo coperto:** il segnalino viene girato a faccia in su e risolto immediatamente.
- **Pericolo scoperto:** viene risolto immediatamente.
- **Casella invalicabile:** il veicolo viene immediatamente eliminato.

Una casella senza ostacoli è invece una **casella libera**.

## Arco Frontale

L'[arco frontale]{.def} sono le 3 caselle di fronte a sinistra, di fronte e di fronte a destra.

- Le auto in movimento (di turno, su tamponamento o danni) si possono muovere solo verso l'arco frontale.
- Le auto possono sparare solo su bersagli nel proprio arco frontale.

---

# Veicoli

Ogni equipaggio ha 2 tipi di veicoli: **3 auto** (piccola S, media M, grande L) ed **1 elicottero**. La dimensione influenza la facilità di essere colpita e la potenza in tamponamento: la piccola è difficile da colpire ma tampona poco, mentre la grande tampona forte ma è un bersaglio facile.

Gli **elicotteri** non ricevono danni, non possono essere bersagliati, non tamponano. Possono però sparare ed eliminano qualsiasi auto (anche della propria squadra) che termini il turno nella loro casella.

## Cruscotti

Ogni auto ha il proprio cruscotto con:

1. **Dimensione**
2. **Slot dei Danni** (2 al massimo)
3. **Movimento** e **Fine Turno**
4. **Inerzia** (con 2 pallini come limite)

## Stato delle Auto

| Stato | Condizione | Cosa può fare |
|---|---|---|
| **Operativa** | 0–1 segnalini danno | Muoversi e sparare normalmente |
| **Fuori uso** | 2 segnalini danno | Non si muove, non spara, non riceve ulteriori danni. Può essere tamponata. Recuperabile con Riparazione. |
| **Eliminata** | Condizione di eliminazione | Rimossa dal gioco definitivamente |

Un'auto è **eliminata** se:

- Entra in una casella invalicabile.
- Termina il turno nella stessa casella di un elicottero (anche il proprio).
- Si trova su una tessera strada posteriore quando questa viene rimossa dal gioco.
- Lascia la plancia dal bordo sinistro, destro o posteriore (per via di danno o tamponamento).
- Incontra un effetto che la elimina direttamente.

:::accent
Ricorda: se tutte le auto di 1 giocatore sono fuori uso o eliminate, quel giocatore è **fuori dal gioco**. Quando accade, l'attuale tessera strada anteriore diventa la tessera finale (aggiungi la linea del traguardo).
:::

## Segnalini Danno

Quando un'auto subisce danno, pesca 1 segnalino danno, risolvine l'effetto, poi posizionalo coperto in 1 slot danno libero del cruscotto (se ha 2 danni, è fuori uso). Se si stava muovendo, perde il movimento rimanente.

| Segnalino | Effetto | Dadi usati |
|---|---|---|
| **Ammaccatura** | Nessun effetto extra | — |
| **Schegge** | Colpisce il primo veicolo in linea retta | Dado direzione |
| **Slittamento** | Sposta l'auto di 1 casella nella direzione indicata | — |
| **Sbandata** | Movimento casuale (il terreno ha effetto) | Dado acrobazia + dado direzione |
| **Sbalzo** | L'auto "salta" in linea retta (ignora ostacoli) | Dado direzione + dado acrobazia |

Se un'auto viene mossa su un altro veicolo, perde il movimento rimanente e risolve un tamponamento. Se un'auto viene mossa su una casella invalicabile o oltre i bordi (sinistro, destro o posteriore) del tabellone, è eliminata.

---

# Plancia Comando

Ogni giocatore ha una plancia comando con **4 comandi** da usare una sola volta per round e solo se non sta muovendo per inerzia.

| Comando | Valori dado |
|---|---|
| **Assalto Aereo** | 1–6 (qualsiasi) |
| **Nitro** | 1–3 |
| **Drift** | 3–5 |
| **Riparazione** | 6 |

---

# Dadi

| Dado | Quando si usa |
|---|---|
| **Dado Movimento** | Movimento, inerzia e comando |
| **Dado Strada** | Bonus movimento dopo un turno tutto su strada |
| **Dado Acrobazia** | Sbandate e sbalzi da segnalini danno |
| **Dado Mira** | Per determinare se un colpo va a segno |
| **Dado Tamponamento** | Per determinare quale veicolo si sposta nel tamponamento |
| **Dado Direzione** | Per determinare la direzione di movimenti causati da effetti |

---

# Espansione: Solo Parti Originali

## Plancia Comando dei Capitani

Sostituisce la plancia comando regolare. Conferisce nuovi comandi e 1 potere speciale:

1. **Potere speciale** — sempre attivo, senza dado.
2. **Comandi** — alcuni attivabili solo con segnalino comando.
3. **Icona segnalino comando** — identifica i comandi che richiedono un segnalino invece di un dado.

:::glossary
[tabellone]: L'insieme delle 3 tessere strada attive (posteriore, centrale, anteriore) su cui si svolge la gara.

[arco frontale]: Le 3 caselle davanti a sinistra, di fronte e davanti a destra di un veicolo. Delimita movimento e tiro.
:::
