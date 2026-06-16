# Struttura della Partita

Lo schieramento che gioca per primo è indicato dal briefing dello scenario. Poi i giocatori si alternano svolgendo un turno ciascuno, finché uno dei due non conquista il numero di medaglie vittoria richiesto dalle condizioni di vittoria.

# Turno di Gioco

Durante il proprio turno, ogni giocatore svolge in sequenza questi 5 passi:

1. **Giocare 1 carta ordini** dalla mano, a faccia in su.
2. **Comandare** — annunciare tutte le unità che verranno comandate, nei limiti definiti dalla carta.
3. **Muovere** le unità comandate, una alla volta e in qualsiasi ordine.
4. **Attaccare** con un'unità comandata alla volta, in qualsiasi ordine.
5. **Pescare 1 nuova carta ordini**.

---

## Passo 1 — Giocare 1 Carta Ordini

All'inizio del turno, gioca 1 [carta ordini]{.def} dalla tua mano posizionandola a faccia in su davanti a te e leggendola a voce alta. Esistono due tipi di carte:

- **Carte Sezione** — comandano 1 o più unità in una o più sezioni specifiche del campo di battaglia (fianco sinistro, centro, fianco destro).
- **Carte Tattica** — permettono movimenti speciali, attacchi particolari o azioni speciali descritte sulla carta stessa.

:::indent
Su alcune carte ordini compare il testo: *"Se non controlli unità di fanteria/veicoli…, comanda 1 unità a tua scelta"*. In questo caso, l'unità scelta non ottiene i benefici della carta e può essere comandata normalmente ovunque sul tabellone.
:::

---

## Passo 2 — Comandare le Unità

Dopo aver giocato la carta, annuncia quali unità scegli di comandare, nei limiti indicati dalla carta stessa. Solo le unità comandate potranno muoversi, attaccare o compiere azioni speciali in questo turno.

- Non è possibile comandare più di 1 volta la stessa unità per turno.
- Le unità in un esagono attraversato da una linea rossa tratteggiata si considerano in entrambe le sezioni adiacenti ai fini del comando.
- Se la carta permette di comandare più unità di quante ne hai in quella sezione, i comandi aggiuntivi vanno persi.
- Se non hai unità nelle sezioni indicate, gioca la carta e pesca 1 nuova senza comandare alcuna unità.

---

## Passo 3 — Muovere le Unità

Muovi le unità comandate una alla volta, nell'ordine che preferisci. Ogni unità può muoversi una sola volta per turno, ma non è obbligatorio farlo.

Il numero di esagoni percorribili dipende dal tipo di unità (vedi Panoramica — Unità). Regole generali:

- Occorre completare il movimento di un'unità prima di iniziare quello di un'altra.
- Un'unità può spostarsi da una sezione del campo di battaglia a un'altra.
- Due unità non possono occupare lo stesso esagono; non è possibile muoversi attraverso un esagono occupato da un'altra unità.
- Le miniature di un'unità devono sempre restare insieme e si muovono come un gruppo unico.
- Le unità ridotte dalle perdite non possono unirsi ad altre unità.
- Il terreno può limitare il movimento o impedire l'attacco (vedi Panoramica — Terreno).
- Le regole della [ritirata]{.def} sono diverse dal movimento normale (vedi sotto).

---

## Passo 4 — Attaccare

Una volta completati tutti i movimenti, risolvi gli attacchi in sequenza, un'unità comandata alla volta, nell'ordine che preferisci.

Regole generali:

- Un'unità può attaccare solo una volta per turno.
- Un'unità comandata non è obbligata ad attaccare.
- Un'unità non può dividere i suoi dadi attacco tra più bersagli nemici.
- Le perdite subite da un'unità non ne riducono la potenza di fuoco: un'unità con 1 sola miniatura rimasta attacca con gli stessi dadi di un'unità al completo.
- Un attacco contro un'unità nemica in un esagono adiacente è un **attacco in combattimento ravvicinato**.

### Procedura di Attacco

**1. Annuncia** l'unità attaccante e seleziona il bersaglio.

**Verifica la gittata:** il bersaglio deve trovarsi entro la gittata massima dell'unità attaccante. La gittata si calcola contando gli esagoni a partire da quello dell'unità che attacca (l'esagono dell'attaccante non si conta). Il numero di dadi base decresce con la distanza: un'unità di fanteria tira 3 dadi in ravvicinato, 2 a distanza 2, 1 a distanza 3.

**Verifica la [linea di vista]{.def}:** traccia una linea immaginaria dal centro dell'esagono dell'attaccante al centro dell'esagono del bersaglio. La linea di vista è bloccata se la linea attraversa un esagono contenente un'ostruzione (unità amiche o nemiche, esagoni terreno che bloccano la vista, tessere struttura). Il terreno nell'esagono dell'attaccante e in quello del bersaglio non blocca mai la linea di vista.

:::indent
**Caso bordo esagoni:** se la linea corre lungo il bordo di esagoni con ostruzioni senza attraversarli, la linea di vista è bloccata solo se le ostruzioni si trovano su entrambi i lati della linea; se si trovano su un solo lato, la linea di vista non è bloccata.

**Caso crinali:** tra due unità che si trovano entrambe in un crinale, la linea di vista è bloccata solo da altre unità in un crinale o da un seracco.

**Bordi del tabellone:** i mezzi esagoni lungo i bordi laterali del campo di battaglia bloccano la linea di vista.
:::

**2. Conta i dadi attacco base** in base al tipo di unità e alla distanza dal bersaglio.

**3. Applica i modificatori del terreno:** riduci il numero di dadi attacco in base alla protezione offerta dal terreno in cui si trova il bersaglio e alle penalità per il terreno in cui si trova l'attaccante (vedi Panoramica — Terreno). I due modificatori sono cumulativi.

**4. Tira i dadi attacco** e risolvi il risultato.

### Colpi

Per ogni simbolo ottenuto corrispondente al tipo di unità bersagliata, l'attaccante ottiene **1 colpo**. Il simbolo esplosione vale sempre 1 colpo contro qualsiasi tipo di unità.

| Simbolo | Effetto |
|---|---|
| Fanteria | 1 colpo contro fanteria (soldati artici, soldati Base Echo) |
| Veicolo | 1 colpo contro veicoli (AT-AT, snowspeeder) |
| Esplosione | 1 colpo contro qualsiasi unità |
| X | Colpo mancato |

Ogni simbolo non corrispondente al tipo di unità attaccata, a un'esplosione o a una ritirata è un mancato.

Per ogni colpo, l'unità bersagliata subisce 1 perdita: rimuovi 1 miniatura dall'unità. Quando viene rimossa l'ultima miniatura, l'attaccante colloca quella miniatura su uno degli slot medaglia del proprio lato del tabellone.

I colpi in eccesso rispetto al numero di miniature dell'unità non hanno effetto.

:::accent
**Tiro di Conferma AT-AT:** i dadi che risultano in un colpo contro un AT-AT vanno ritirati per un tiro di conferma. L'AT-AT viene eliminato solo se il giocatore ottiene almeno 1 esplosione con il tiro di conferma.
:::

### Ritirata

Dopo aver risolto i colpi, risolvi i simboli ritirata ottenuti dall'attaccante. Per ogni simbolo ritirata, l'unità bersaglio si ritira di 1 esagono verso la propria base. Il giocatore che controlla l'unità bersagliata sceglie in quale esagono ritirarsi, rispettando le seguenti regole:

- L'unità deve ritirarsi verso la propria base (salvo regole speciali dello scenario).
- Il terreno non ha effetto sulla ritirata: un'unità può attraversare rocce o rottami senza fermarsi. Non può mai attraversare terreno invalicabile.
- Un'unità non può ritirarsi in un esagono o attraverso un esagono occupato da un'altra unità (amica o nemica).
- Se un'unità non può completare la ritirata o viene spinta fuori dal bordo del campo di battaglia, subisce **1 perdita per ogni movimento di ritirata non completato**.
- Alcuni tipi di terreno permettono di ignorare 1 simbolo ritirata (es. fanteria in trincea).
- Se esiste un percorso di ritirata valido per tutti i simboli ottenuti, non è possibile scegliere di perdere miniature al suo posto.

---

## Passo 5 — Pescare 1 Carta Ordini

Al termine del turno, scarta a faccia in su la carta ordini appena giocata e pesca 1 nuova carta dal tuo mazzo, concludendo il turno.

Se il mazzo si esaurisce, rimescola gli scarti per formare un nuovo mazzo di pesca.

:::glossary
[carta ordini]: Carta che ogni giocatore gioca all'inizio del proprio turno per attivare le proprie unità. Esistono carte sezione (attivano unità per zona del campo di battaglia) e carte tattica (effetti speciali).

[linea di vista]: Linea immaginaria tra il centro dell'esagono dell'attaccante e quello del bersaglio. Deve essere libera da ostruzioni perché l'attacco sia possibile.

[ritirata]: Movimento forzato di un'unità verso la propria base in seguito ai simboli ritirata ottenuti dall'avversario con il tiro di dadi.
:::
