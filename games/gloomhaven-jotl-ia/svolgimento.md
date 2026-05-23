Lo svolgimento di ogni scenario è diviso in una serie di **round**. Ogni round segue sempre lo stesso ordine:

1. **Selezionare le Carte**
2. **Determinare l'Ordine di Iniziativa**
3. **Turni dei Personaggi e dei Mostri**
4. **Fine del Round**

# Fase 1 — Selezionare le Carte

Ogni giocatore sceglie **privatamente e simultaneamente** 2 [carte capacità]{.def} dalla propria mano e le posiziona a faccia in giù davanti a sé. È possibile discutere strategie generiche con gli altri giocatori, ma non mostrare le carte né rivelare valori numerici o titoli.

Tra le due carte scelte, una viene designata come **[carta di iniziativa]{.def}** (posizionata sotto l'altra). Quando le carte vengono rivelate, la carta di iniziativa è in cima e il suo valore centrale è visibile.

Ogni carta ha due metà: un'**azione superiore** e un'**azione inferiore**. Nel proprio turno si usa l'azione superiore di una carta e l'azione inferiore dell'altra, nell'ordine che si preferisce.

> **Gioco in solitario:** controlla due personaggi separati. È un'esperienza più complessa; nelle partite da 2 a 4 giocatori è consigliato un personaggio a testa.

Dal **2° scenario**, dopo che tutti hanno rivelato le loro carte, gira la carta in cima al mazzo capacità di ogni tipo di mostro presente sulla mappa: quella carta determina l'[iniziativa]{.def} dei mostri e le capacità che useranno in quel round.

# Fase 2 — Determinare l'Ordine di Iniziativa

Rivela tutte le carte e confronta i valori di iniziativa: **i numeri più bassi agiscono per primi**. Disponi i segnalini ordine di iniziativa in fila dal più basso al più alto.

- **Parità personaggio/mostro**: il personaggio agisce per primo.
- **Parità tra personaggi**: si guarda il valore di iniziativa della seconda carta per rompere il pareggio.

# Fase 3 — Turni dei Personaggi e dei Mostri

Ogni miniatura (personaggi e mostri) svolge il proprio turno nell'ordine stabilito.

## Il Turno del Personaggio

Nel proprio turno effettua **un'azione superiore** (da una delle due carte) e **un'azione inferiore** (dall'altra). Non è possibile usare due azioni superiori o due inferiori. L'ordine di esecuzione è libero.

Ogni azione può essere **saltata** interamente. Se un'azione viene eseguita, le singole capacità che la compongono possono essere saltate, a meno che non abbiano un effetto negativo su un personaggio.

Dopo l'uso, la carta va nella **pila degli scarti** a sinistra della plancia (salvo indicazione dell'icona carta persa, che la manda direttamente nelle **carte perse** a destra).

In alternativa alle capacità stampate, qualsiasi carta può essere usata per un'**[azione base]{.def}**: Attacco 2 (azione superiore) o Movimento 2 (azione inferiore). La carta va sempre negli scarti.

Alla fine del turno il personaggio **saccheggia automaticamente** l'esagono in cui si trova.

### Movimento

**Movimento X**: la miniatura si sposta fino a X esagoni. Non è obbligatorio usare tutti i punti. Si può passare attraverso alleati ma non nemici, ostacoli o muri. Il movimento non può terminare su un esagono occupato.

**Salto**: ignora ostacoli, nemici, trappole e terreno difficile durante il movimento. Non si può saltare attraverso i muri. Se il movimento con salto termina su una trappola, questa scatta comunque.

**[Terreno difficile]{.def}** (bordo viola): entrare in questi esagoni costa 2 punti movimento anziché 1.

### Attacco

**Attacco X**: il bersaglio subisce X danni base, modificati da una carta del [mazzo dei modificatori di attacco]{.def}.

- **Mischia**: colpisce solo nemici adiacenti (senza la parola "Gittata").
- **Distanza (Attacco X, Gittata Y)**: colpisce nemici entro Y esagoni. Un attacco a distanza su un bersaglio adiacente ottiene automaticamente **Svantaggio**.

La **[linea di vista]{.def}** è necessaria per bersagliare: deve essere possibile tracciare una linea dall'esagono dell'attaccante a quello del bersaglio senza toccare la linea di un muro. Ostacoli e miniature non bloccano la linea di vista.

**Bersagli multipli**: "Bersagli X" consente di colpire fino a X nemici diversi entro la gittata. Si pesca una carta modificatore separata per ogni bersaglio.

**Effetti ad area**: l'attacco colpisce tutti i nemici negli esagoni rossi del pattern. Se il pattern include un esagono grigio (la posizione dell'attaccante), è sempre in mischia.

### Carte Modificatore di Attacco

Per ogni bersaglio attaccato si pesca una carta dal proprio mazzo:

| Carta | Effetto |
|---|---|
| +0, +1, +2, -1, -2 | Aggiunge o sottrae al danno base |
| ×2 (viola) | Raddoppia il danno; poi rimescola il mazzo |
| ✕ (marrone) | Nessun danno; poi rimescola il mazzo |

**[Vantaggio]{.def}**: pesca 2 carte, applica la migliore. **[Svantaggio]{.def}**: pesca 2 carte, applica la peggiore. Vantaggio e Svantaggio si annullano a vicenda se entrambi presenti.

### Condizioni

Le condizioni si applicano come capacità autonome o come effetti di un attacco (anche se l'attacco non infligge danni). Durano fino alla fine del turno successivo del bersaglio.

**Condizioni negative:**

- **[Immobilizzare]{.def}**: non può muoversi.
- **[Stordire]{.def}**: non può effettuare alcuna capacità (nemmeno muoversi).
- **[Confondere]{.def}**: tutti i suoi attacchi ottengono Svantaggio.
- **[Disarmare]{.def}**: non può attaccare.
- **[Veleno]{.def}**: tutti gli attacchi che la bersagliano ottengono +1 attacco; la condizione si rimuove solo con una cura, che però non aumenta i PF.
- **[Ferita]{.def}**: subisce 1 danno all'inizio di ogni suo turno; si rimuove con una cura (che aumenta comunque i PF, a meno che non sia presente anche veleno).
- **[Maledizione]{.def}**: mescola una carta Maledizione (funziona come ✕) nel mazzo dei modificatori di attacco; rimane finché non viene pescata.

**Condizioni positive:**

- **[Rinforzo]{.def}**: tutti i suoi attacchi ottengono Vantaggio.
- **[Benedizione]{.def}**: mescola una carta Benedizione (funziona come ×2) nel mazzo dei modificatori di attacco; rimane finché non viene pescata.

### Cura

**Cura X**: la miniatura o un alleato entro la gittata indicata recupera X punti ferita (ruota il contatore rosso). Non si può superare il massimo. Cura rimuove Veleno e Ferita, ma se entrambe le condizioni sono presenti, la cura le rimuove senza aumentare i PF.

### Bonus Attivi

Alcune azioni forniscono bonus che durano fino alla fine del round o per l'intera durata dello scenario (bonus persistenti). Quando si gioca una tale azione, si posiziona la carta nell'**area attiva** sopra la plancia personaggio.

- **Bonus di round**: durano fino alla fine del round, poi la carta va negli scarti o nelle perse.
- **Bonus persistenti**: durano fino all'esaurimento degli utilizzi o fino a fine scenario. Usa i **segnalini personaggio** per tracciare gli utilizzi.
- **[Scudo]{.def} X**: riduce i danni subiti da attacchi di X (minimo 0). Non riduce i danni da trappole o altri effetti.

### Spingere e Tirare

- **Spingere X**: il bersaglio si muove fino a X esagoni allontanandosi dall'attaccante.
- **Tirare X**: il bersaglio si muove fino a X esagoni verso l'attaccante.

I bersagli possono essere spinti/tirati attraverso i propri alleati, non attraverso nemici, ostacoli o muri. Se finiscono su una trappola, questa scatta. I movimenti obbligati non sono influenzati dal terreno difficile.

### Negare Danni Perdendo Carte

Ogni volta che subisci danni, puoi scegliere di negarli completamente perdendo carte:

- **1 carta dalla mano** per negare qualsiasi fonte di danni.
- **2 carte dalla pila degli scarti** per negare qualsiasi fonte di danni.

Le carte perse vanno nella pila delle carte perse a destra della plancia.

### Elementi (dal 4° Scenario)

Alcune azioni **infondono** un elemento sul campo di battaglia: sposta il segnalino elemento nella colonna "Forte" della plancia delle infusioni elementali alla fine del turno.

Alla fine di ogni round, tutti gli elementi si indeboliscono di un passo (Forte → Debole → Inerte).

Alcune azioni consentono di **consumare** un elemento (Forte o Debole) per potenziare la capacità: sposta il segnalino in "Inerte". Non è possibile infondere e consumare lo stesso elemento nello stesso turno.

### Oggetti

L'uso di un oggetto è gratuito e si aggiunge alle due azioni delle carte. Dopo l'uso:

- **Consumato**: la carta viene girata; si ripristina a fine scenario.
- **Speso**: la carta viene ruotata di 90°; si ripristina con un riposo lungo.
- **Persistente**: nessuna icona, si usa ogni volta che la situazione lo consente.

## Il Turno dei Mostri

I mostri agiscono tutti alla stessa iniziativa, determinata dalla carta capacità girata all'inizio del round. I mostri elite agiscono prima dei normali, entrambi in ordine numerico di pedina.

**Ogni mostro effettua solo le capacità scritte sulla sua carta capacità** del round in corso. Le capacità dei mostri modificano i valori base (es. "Attacco +1" con attacco base 2 = Attacco 3).

### Focus del Mostro

Prima di agire, ogni mostro individua il proprio **[focus]{.def}**: il personaggio contro cui può effettuare l'attacco usando il **minimo movimento**. Se più personaggi sono equidistanti, si privilegia quello con l'iniziativa più bassa nel round.

Il focus non richiede linea di vista. Se non esiste alcun percorso valido per raggiungere un personaggio, il mostro non si muove e non attacca.

### Movimento dei Mostri

Il mostro si avvicina al focus percorrendo il tragitto più breve. Se già adiacente (o a distanza di gittata, per attacchi a distanza), non si muove ulteriormente. Se il percorso è bloccato da altri mostri, il mostro non si muove.

I mostri con attacchi a **distanza** si muovono per entrare in gittata senza essere adiacenti (per evitare lo Svantaggio); se bloccati o già con Svantaggio per altra causa, si muovono normalmente.

I mostri considerano le **trappole come ostacoli** per il focus e il movimento, salvo che non sia l'unico modo per avvicinarsi; in quel caso scelgono il percorso con il minor numero di trappole.

### Attacco dei Mostri

Se il mostro è nella posizione corretta per attaccare il focus, lo attacca con il valore base modificato da una carta del mazzo dei modificatori di attacco dei mostri (condiviso tra tutti i mostri).

### Mostri con Bonus Attivi

Alcuni mostri hanno bonus permanenti indicati sulla carta statistiche (a sinistra per il rango normale, a destra per l'elite). Si applicano sempre, indipendentemente dalle carte capacità.

### Boss

I boss usano un mazzo capacità universale "Boss". Molte carte indicano "Speciale 1" o "Speciale 2", riferendosi alle capacità speciali descritte sulla carta statistiche del boss. Le statistiche dei boss si basano sul numero di personaggi (indicato con "P"). I boss sono immuni ad alcune condizioni negative (specificate sulla carta). Un boss con "-" come valore di movimento non si muove, ma può essere mosso da Tirare, Spingere o azioni conferite.

# Fase 4 — Fine del Round

Quando tutte le miniature hanno svolto il turno:

- Se è stata rivelata una carta ×2 o ✕ da un mazzo dei modificatori di attacco, rimescola gli scarti nel mazzo.
- Rimescola le carte capacità dei mostri se una di esse mostrava l'icona mescolare.
- Dal 4° scenario: tutti gli elementi si indeboliscono di un passo sulla plancia delle infusioni.
- Se è stato completato l'obiettivo dello scenario, lo scenario termina **alla fine di questo round**.
- Inizia un nuovo round.

# Riposo

## Riposo Breve

Puoi effettuarlo **alla fine di un round** se hai almeno 2 carte nella pila degli scarti.

- Prendi tutte le carte della pila degli scarti, mescola e metti **1 carta casuale** nella pila delle carte perse.
- Il resto torna in mano e il round successivo si gioca normalmente.
- Opzione: subisci **1 danno** per perdere invece un'altra carta casuale (utilizzabile una sola volta per riposo).

## Riposo Lungo

Invece di giocare normalmente, puoi dichiarare un **riposo lungo** all'inizio della fase di selezione delle carte. Il tuo turno avviene a iniziativa 99.

- Scegli **1 carta dagli scarti** da trasferire nelle carte perse; il resto torna in mano.
- Ottieni una **Cura 2 su se stesso**.
- Ripristina tutti gli **oggetti spesi** (ruotati di 90°).

> Attenzione: durante un riposo lungo i mostri agiscono comunque e possono attaccarti.

# Sfinimento e Fine Scenario

Se un personaggio raggiunge **0 punti ferita**, diventa immediatamente **[sfinito]{.def}**: la miniatura viene rimossa dalla mappa. Il personaggio non può più influenzare lo scenario, ma non è morto — viene ripristinato completamente a fine scenario.

Se non hai almeno **2 carte in mano** all'inizio di un round per selezionare le tue 2 carte, diventi sfinito.

Se **tutti i personaggi** diventano sfiniti, lo scenario è perso.

:::glossary
[carte capacità]: Le carte di gioco di ogni personaggio, divise in azione superiore e azione inferiore. Si selezionano 2 carte a round.

[carta di iniziativa]: Una delle due carte scelte per il round, il cui valore centrale determina la posizione del personaggio nell'ordine di azione.

[iniziativa]: Valore numerico che stabilisce l'ordine di azione nel round; i valori più bassi agiscono per primi.

[azione base]: Azione standard disponibile su qualsiasi carta: Attacco 2 (superiore) o Movimento 2 (inferiore), senza effetti aggiuntivi.

[mazzo dei modificatori di attacco]: Mazzo personale di ogni personaggio (e uno condiviso per i mostri) che modifica ogni attacco: +0, +1, +2, -1, -2, ×2 o nessun danno.

[linea di vista]: Condizione necessaria per bersagliare: deve esistere una linea non interrotta da muri tra attaccante e bersaglio. Ostacoli e miniature non bloccano la linea di vista.

[vantaggio]: Pesca 2 carte modificatore, applica la migliore.

[svantaggio]: Pesca 2 carte modificatore, applica la peggiore.

[terreno difficile]: Esagono con bordo viola che richiede 2 punti movimento per essere attraversato.

[immobilizzare]: La miniatura non può muoversi fino alla fine del turno successivo.

[stordire]: La miniatura non può effettuare alcuna capacità fino alla fine del turno successivo.

[confondere]: Tutti gli attacchi della miniatura ottengono Svantaggio fino alla fine del turno successivo.

[disarmare]: La miniatura non può attaccare fino alla fine del turno successivo.

[veleno]: Gli attacchi che bersagliano la miniatura ottengono +1 attacco. Rimossa solo da una cura, che però non ripristina PF.

[ferita]: La miniatura subisce 1 danno all'inizio di ogni suo turno. Rimossa da una cura.

[maledizione]: Una carta Maledizione viene mescolata nel mazzo dei modificatori; funziona come "nessun danno" quando pescata, poi viene rimossa.

[rinforzo]: Tutti gli attacchi della miniatura ottengono Vantaggio fino alla fine del turno successivo.

[benedizione]: Una carta Benedizione viene mescolata nel mazzo dei modificatori; funziona come ×2 quando pescata, poi viene rimossa.

[scudo]: Bonus attivo che riduce i danni subiti da attacchi di un valore fisso (minimo 0).

[focus]: Il personaggio che un mostro sceglie come bersaglio prioritario, selezionato in base al minimo movimento necessario per attaccarlo.

[sfinito]: Stato di un personaggio a 0 PF o senza carte sufficienti. La miniatura è rimossa dalla mappa fino a fine scenario.
:::
