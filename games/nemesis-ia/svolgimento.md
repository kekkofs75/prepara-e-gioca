La partita si svolge in una serie di turni consecutivi. Ogni turno è diviso in due fasi: la **Fase Giocatori** e la **Fase Evento**.

# Fase Giocatori

## 1. Pescare le carte Azione

All'inizio di ogni Fase Giocatori, tutti i giocatori pescano dal proprio mazzo Azione fino ad avere **5 carte** in mano. Se il mazzo è esaurito, rimescola la pila degli scarti per formare un nuovo mazzo, poi completa la pesca.

> Le carte [Contaminazione]{.def} si trovano nel mazzo Azione ma **non** sono carte Azione: non possono essere scartate per pagare il costo delle azioni.

## 2. Gettone Primo Giocatore

Dopo che tutti hanno pescato, il giocatore con il gettone Primo Giocatore lo passa al giocatore alla sua sinistra.

> Nel primo turno di gioco il gettone **non** viene passato.

## 3. Round del Giocatore

A partire dal Primo Giocatore e in senso orario, ogni giocatore completa un **round di 2 Azioni**. Quando tutti hanno completato il loro round (o hanno passato), si ripete il ciclo. Si continua finché **almeno un giocatore** non ha ancora passato. Quando tutti i giocatori hanno passato, si passa alla Fase Evento.

**Passare:** se non puoi o non vuoi eseguire azioni, devi passare. Se esegui solo 1 azione (invece di 2), devi passare immediatamente dopo. Chi ha passato **non può più eseguire azioni** per il resto della Fase Giocatori. Quando passi, puoi scartare un qualsiasi numero di carte dalla mano. Gira la tua carta Aiuto sul lato "passare" come promemoria.

> Avere **zero carte in mano non obbliga automaticamente a passare**: passare è esso stesso un'azione, che va eseguita nel proprio round. Se un giocatore esaurisce le carte durante il proprio round, deve aspettare il turno successivo per passare — con il rischio di subire ulteriori danni da Fuoco o Emorragia nel frattempo.

> È possibile giocare una carta **Interruzione** anche dopo aver passato il proprio round.

:::accent
Quando un Personaggio termina il proprio round in una Stanza con un segnalino Fuoco, subisce sempre 1 Ferita Leggera — anche se ha passato.
:::

---

# Azioni

Ogni azione ha un **costo in carte Azione**: per eseguirla, scarta dalla mano il numero indicato di carte (di qualsiasi tipo, tranne Contaminazione). Esistono quattro gruppi di azioni.

## Azioni Base

Disponibili sempre per tutti i Personaggi:

| Azione | Costo | Descrizione |
|---|---|---|
| **Movimento** | 1 | Spostati in una Stanza adiacente. |
| **Movimento Cauto** | 2 | Come Movimento, ma invece del Tiro Rumore posiziona 1 segnalino Rumore in un Corridoio a tua scelta collegato alla stanza in cui entri. Non usabile in Combattimento. Un corridoio non può avere più di 1 segnalino Rumore. Se si rivela un gettone Esplorazione con risultato Pericolo o Silenzio, il risultato del Movimento Cauto ha la precedenza e annulla l'effetto del gettone. |
| **Sparare** | 1 | Attacca un Intruso nella tua Stanza con un'Arma in mano. Scarta 1 segnalino Munizione dall'Arma e tira il dado Combattimento. |
| **Attacco in Mischia** | 1 | Attacca un Intruso nella tua Stanza a mani nude. Pesca 1 carta Contaminazione (nella pila degli scarti), poi tira il dado Combattimento. |
| **Raccogliere Oggetto Pesante** | 1 | Prendi 1 Oggetto Pesante dalla Stanza (Cadavere, Carcassa, Uovo). |
| **Scambiare** | 1 | Scambia Strumenti o Oggetti con Personaggi nella tua stessa Stanza. I Personaggi non possono scambiarsi Munizioni. |
| **Creare Strumento** | 1 | Scarta 2 carte Strumento con le icone blu "Creare" corrispondenti per ottenere lo Strumento Creato indicato. |

## Azioni da Carte Azione

Ogni Personaggio ha 10 carte Azione uniche. Per usarle: scarta la carta dalla mano (a faccia in su) e paga il costo indicato scartando il numero richiesto di **carte aggiuntive**. Se una carta ha due sezioni separate da [O], scegli quale eseguire.

## Azioni da Strumenti

Alcune carte Strumento permettono azioni specifiche. Il costo e gli effetti sono descritti sulla carta. Gli Strumenti Monouso vengono scartati dopo l'uso.

## Azioni delle Stanze

Per eseguire un'Azione Stanza devi trovarti nella Stanza corrispondente (con alcune eccezioni per abilità speciali). **Costo: 2 carte Azione**. Non eseguibile in Combattimento né se è presente un segnalino Malfunzionamento. Vedi la sezione Stanze in Panoramica per i dettagli di ogni azione.

---

# Movimento ed Esplorazione

## Stanze e Corridoi

Le miniature dei Personaggi e degli Intrusi si muovono e agiscono esclusivamente nelle **Stanze**. I Corridoi collegano le Stanze e servono solo al transito: nessuno può fermarsi in un Corridoio. Gli effetti del movimento (Tiro Rumore, Esplorazione) si risolvono **dopo** essere entrati nella Stanza.

Le Stanze Speciali (Hibernatorium, Cabina di Pilotaggio, Motori) sono considerate esplorate fin dall'inizio della partita.

Un **Portellone Chiuso** interrompe l'adiacenza tra due Stanze: non puoi muoverti attraverso un Corridoio bloccato da un Portellone Chiuso.

## Procedura di Movimento

Quando esegui l'Azione Movimento (costo 1), sposta la tua miniatura in una Stanza adiacente. Poi:

1. **Stanza inesplorata:** gira la tessera Stanza a faccia in su, poi rivela e risolvi il Gettone Esplorazione.
2. **Stanza vuota** (senza altri Personaggi o Intrusi): esegui un [Tiro Rumore]{.def}.
3. **Stanza con Personaggi o Intrusi:** non eseguire il Tiro Rumore. Se c'è un Intruso, sei immediatamente in Combattimento.

> Per muoverti **fuori** da una Stanza con un Intruso devi invece eseguire l'azione di **Fuga** (vedi Combattimento).

## Gettoni Esplorazione

Ogni gettone mostra un numero (Strumenti disponibili nella Stanza) e un simbolo effetto. Al momento della rivelazione:

**1. Impostare il Contatore Strumenti:** ruota la tessera Stanza finché il numero sul gettone coincide con il simbolo Contatore Strumenti stampato sulla plancia. Questo indica quante volte puoi Cercare in quella Stanza.

> Il Nido e la Stanza Ricoperta di Secrezioni non ricevono Strumenti.

**2. Risolvere l'effetto speciale:**

- **Silenzio** — non accade nulla; non eseguire il Tiro Rumore per questo Movimento. Se hai un segnalino Secrezione, risolvi invece "Pericolo".
- **Pericolo** — non eseguire il Tiro Rumore. Se c'è un Intruso in una Stanza adiacente (non in Combattimento), spostalo in questa Stanza. Se ci sono più Intrusi non in Combattimento, spostali tutti. Se non ci sono Intrusi adiacenti, posiziona un segnalino Rumore in ogni Corridoio collegato a questa Stanza che ne sia privo (inclusi i Corridoi Tecnici).
- **Secrezione** — posiziona un segnalino Secrezione sulla tua plancia Personaggio.
- **Fuoco** — posiziona un segnalino Fuoco in questa Stanza.
- **Malfunzionamento** — posiziona un segnalino Malfunzionamento in questa Stanza.
- **Portelloni** — posiziona un gettone Portellone nel Corridoio che hai usato per accedere alla Stanza.

Dopo aver risolto un gettone Esplorazione, rimuovilo dal gioco. I gettoni si risolvono solo una volta per partita.

## Tiro Rumore

Il Tiro Rumore simula l'attenzione degli Intrusi ai movimenti dell'equipaggio. Si esegue tirando **1 dado Rumore**:

- **Risultato 1–4:** posiziona un segnalino Rumore con il numero corrispondente in un Corridoio collegato alla Stanza in cui sei entrato (inclusi i Corridoi Tecnici se c'è un Ingresso). Un Corridoio non può avere più di 1 segnalino Rumore. Se il Corridoio ne contiene già uno, risolvi un **Incontro**.
- **Risultato Pericolo:** se c'è un Intruso in una Stanza adiacente (non in Combattimento), spostalo in questa Stanza (tutti, se sono più di uno). Se non ci sono Intrusi adiacenti, posiziona un segnalino Rumore in ogni Corridoio collegato che ne sia privo.
- **Risultato Silenzio:** non accade nulla. Se hai un segnalino Secrezione, risolvi invece "Pericolo".

> Il Tiro Rumore non si esegue mai quando entri in una Stanza con altri Personaggi o Intrusi già presenti.

## Corridoi Tecnici

I [Corridoi Tecnici]{.def} permettono agli Intrusi di spostarsi ovunque nella nave ma sono inaccessibili ai Personaggi (con l'eccezione della carta Azione Corridoi Tecnici del Meccanico e della carta Piani dei Corridoi Tecnici).

Se un numero del Tiro Rumore corrisponde a un Ingresso dei Corridoi Tecnici, il segnalino Rumore va posizionato nello **spazio Corridoi Tecnici** sul tabellone (vale per tutti gli Ingressi simultaneamente).

Se un Intruso si muove verso un Ingresso dei Corridoi Tecnici, scompare: scarta i suoi segnalini Danno, reinserisci il suo gettone nel sacchetto e rimuovi la miniatura dal tabellone. Un eventuale segnalino Rumore nello spazio Corridoi Tecnici non viene rimosso.

---

# Segnalini e Gettoni

## Segnalino Rumore

Indica il Corridoio in cui eseguire il Tiro Rumore (vedi Tiro Rumore). Ha effetto sull'intero Corridoio. Un segnalino nello spazio Corridoi Tecnici equivale a uno in tutti gli Ingressi Tecnici del tabellone.

## Segnalino Secrezione

Finché un Personaggio ha un [segnalino Secrezione]{.def} sulla propria plancia, ogni risultato "Silenzio" (Tiro Rumore o gettone Esplorazione) viene trattato come "Pericolo". Un Personaggio può averne solo 1: un secondo segnalino non ha ulteriori effetti. Si rimuove con i Vestiti o l'Azione Stanza Doccia.

## Segnalino Fuoco

I segnalini Fuoco hanno tre funzioni:

1. **Ferite ai Personaggi:** ogni volta che un Personaggio termina il proprio round in una Stanza con Fuoco, subisce **1 Ferita Leggera**.
2. **Danni agli Intrusi:** nella Fase Evento ogni Intruso in una Stanza con Fuoco subisce **1 Danno**.
3. **Esplosione della nave:** la partita prevede **8 segnalini Fuoco**. Se occorre posizionarne un nono, la nave esplode e la partita termina.

Una Stanza può contenere al massimo 1 segnalino Fuoco. Puoi comunque cercare Strumenti e svolgere Azioni Stanza in una Stanza in fiamme. I segnalini Fuoco **possono** essere posizionati in Stanze inesplorate.

## Segnalino Malfunzionamento

I segnalini Malfunzionamento hanno due funzioni:

1. **Bloccare le Azioni Stanza:** se c'è un segnalino Malfunzionamento in una Stanza, le sue Azioni Stanza (incluse quelle dei Computer) non sono disponibili. L'Azione Cercare funziona normalmente. Alcune carte Azione e Strumenti possono rimuovere un segnalino Malfunzionamento.
2. **Perdita di integrità dello scafo:** la partita prevede **8 segnalini Malfunzionamento**. Se occorre posizionarne un nono, la nave perde integrità e la partita termina.

> Un segnalino Malfunzionamento non può essere posizionato nel Nido, in una Stanza Ricoperta di Secrezioni, né in **Stanze inesplorate**. Un Malfunzionamento nella Sala Motori non modifica lo stato dei Motori (Funzionante/Danneggiato).

## Gettoni Portellone

I Portelloni si trovano nei Corridoi. Ogni Corridoio può averne al massimo uno. Tre stati possibili:

- **Aperto** — nessun gettone nel Corridoio; il passaggio è libero.
- **Chiuso** — gettone in piedi nel Corridoio; impedisce il passaggio a Personaggi e Intrusi (e il lancio di granate). Quando un Intruso tenta di attraversare un Portellone Chiuso, distrugge il Portellone ma non si muove.
- **Distrutto** — gettone steso nel Corridoio; il passaggio è libero. Un Portellone Distrutto non può più essere chiuso (unica eccezione: Saldatrice al Plasma del Meccanico).

> I Portelloni non hanno effetto sui segnalini Rumore. Un Intruso che compare in seguito a un Tiro Rumore ignora i Portelloni Chiusi.

---

# Incontro e Combattimento

## Incontro

Un [Incontro]{.def} si verifica quando, a seguito di un Tiro Rumore, un Intruso compare in una Stanza occupata da un Personaggio. Procedura:

1. Scarta tutti i segnalini Rumore da tutti i Corridoi collegati a questa Stanza (inclusi i Corridoi Tecnici).
2. Pesca 1 gettone dal Sacchetto Intruso.
3. Posiziona nella Stanza una miniatura Intruso corrispondente al simbolo sul gettone.
4. Confronta il **numero sul gettone** con il numero di **carte in mano** al giocatore (Azione + Contaminazione). Se le carte in mano sono **inferiori** al numero sul gettone, avviene un **Attacco a Sorpresa** (vedi Attacco dell'Intruso).

Metti da parte il gettone pescato (potrebbe tornare nel sacchetto se l'Intruso fugge nei Corridoi Tecnici).

**Gettone Vuoto:** posiziona 1 segnalino Rumore in ogni Corridoio collegato alla Stanza. Se il Vuoto era l'ultimo gettone nel sacchetto, aggiungi 1 gettone Intruso Adulto al sacchetto (se disponibile). Rimetti il Vuoto nel sacchetto. L'Incontro termina.

> Quando un Personaggio **entra** in una Stanza già occupata da un Intruso, non avviene un Incontro: sono immediatamente in Combattimento.

## Combattimento

Ogni volta che un Personaggio e un Intruso si trovano nella stessa Stanza, sono in Combattimento. In Combattimento puoi attaccare o fuggire durante il tuo round. Le azioni "Solo Non in Combattimento" non sono disponibili.

### Sparare (Azione Base, costo 1)

Puoi sparare solo se hai un'Arma con almeno 1 segnalino Munizione in uno spazio Mano.

1. Scegli l'Arma e l'Intruso bersaglio.
2. Scarta 1 segnalino Munizione dall'Arma.
3. Tira il dado Combattimento:

:::indent
| Risultato | Effetto |
|---|---|
| ✕ (mancato) | Bersaglio mancato |
| ◐ (piccolo) | 1 Danno solo a Larve e Aracnidi; altrimenti mancato |
| ◑ (medio) | 1 Danno a Larve, Aracnidi e Adulti; altrimenti mancato |
| ● (colpo) | 1 Danno a qualsiasi Intruso |
| ●● (doppio) | 2 Danni a qualsiasi Intruso |
:::

### Attacco in Mischia (Azione Base, costo 1)

1. Pesca 1 carta Contaminazione e posizionala sulla tua pila degli scarti.
2. Scegli l'Intruso bersaglio.
3. Tira il dado Combattimento:

:::indent
| Risultato | Effetto |
|---|---|
| ✕ | Mancato; subisci **1 Ferita Grave** |
| ◐ | 1 Danno a Larve/Aracnidi; altrimenti mancato e **1 Ferita Grave** |
| ◑ | 1 Danno a Larve/Aracnidi/Adulti; altrimenti mancato e **1 Ferita Grave** |
| ● | 1 Danno a qualsiasi Intruso |
| ●● | Solo **1 Danno** a qualsiasi Intruso (non 2!) |
:::

### Fuga (costo 1)

Per fuggire da una Stanza con Intrusi, esegui un'azione Movimento normale ma **prima** di spostare la miniatura risolvi **1 Attacco dell'Intruso** per ogni Intruso presente nella Stanza, partendo da quelli di dimensioni maggiori (Regina, poi Nutrice, poi Adulto, poi Larva). Se sopravvivi, completa il Movimento nella Stanza adiacente (inclusa la normale procedura di Esplorazione e Tiro Rumore).

Se il tuo Personaggio muore nel tentativo, il Cadavere resta nella Stanza di partenza.

## Attacco dell'Intruso

Gli Attacchi dell'Intruso avvengono in tre situazioni: Attacco a Sorpresa (durante un Incontro), nel passo 5 della Fase Evento, e durante la Fuga.

**Procedura:**

1. **Scegli il bersaglio:** l'Intruso attacca il Personaggio con il minor numero di carte in mano. In caso di parità, il giocatore con il gettone Primo Giocatore (o il successivo in ordine di turno). In caso di Attacco a Sorpresa, viene attaccato il Personaggio che ha causato l'Incontro. In caso di Fuga, viene attaccato il Personaggio che fugge.
2. **Pesca 1 carta Attacco dell'Intruso:** se il simbolo Intruso sulla carta corrisponde al tipo di Intruso che attacca, risolvi l'effetto. Altrimenti, l'attacco fallisce. Dopo la risoluzione, scarta la carta nella pila degli scarti Attacco dell'Intruso.

> Durante un Attacco dell'Intruso, **ignora** l'icona "sangue" nell'angolo in alto a sinistra della carta (quella serve solo per controllare i danni, non durante l'attacco).

**Infestazione (attacco speciale della Larva):** quando una Larva attacca, non si pesca una carta Attacco. Si rimuove la miniatura Larva e la si posiziona sulla plancia del Personaggio attaccato (spazio miniatura). Il Personaggio riceve anche **1 carta Contaminazione**.

> Se il Personaggio ha già una Larva sulla propria plancia al momento dell'attacco, la Larva attaccante **scompare** senza infestarla: la Larva esistente rimane intatta e il Personaggio riceve solo 1 carta Contaminazione. Non muore per effetto dell'attacco in sé.

## Danni agli Intrusi e Morte

Ogni volta che un Intruso subisce Danni, posiziona il numero corrispondente di segnalini Danno sulla sua miniatura, poi controlla gli Effetti del Danno:

- **Larva o Uovo:** 1 Danno è sufficiente a ucciderli. Rimuovi la miniatura.
- **Aracnide o Adulto:** pesca 1 carta Attacco dell'Intruso e confronta il valore nell'icona "sangue" con i segnalini Danno sull'Intruso. Se il valore "sangue" è ≤ al numero di segnalini, l'Intruso è morto: rimuovi la miniatura e posiziona 1 gettone Carcassa Intruso nella Stanza (eccetto per le Larve).
- **Nutrice o Regina:** pesca 2 carte Attacco dell'Intruso, somma i valori "sangue" e usa lo stesso confronto.

Se l'Intruso è ancora vivo (valore "sangue" > segnalini Danno), rimane in gioco con i segnalini acquisiti.

**Ritirata dell'Intruso:** se appare un'icona Ritirata nell'icona "sangue" di una qualsiasi carta pescata durante il controllo Effetti del Danno, l'Intruso fugge. Pesca 1 carta Evento e sposta l'Intruso nel Corridoio il cui numero corrisponde al Simbolo Intruso sul movimento della carta. Poi scarta la carta Evento.

> Se il Corridoio indicato contiene un Portellone Chiuso, l'Intruso **distrugge il Portellone** e rimane nella Stanza di partenza (non si muove).

> Se devi posizionare un Adulto ma tutte e 8 le miniature sono già sul tabellone, tutti gli Adulti non in Combattimento si ritirano: rimettili nel sacchetto e posiziona 1 sola miniatura Adulto nella Stanza dell'Incontro.

## Contaminazione

Quando ricevi una [carta Contaminazione]{.def} (per qualsiasi ragione), pescane una dal mazzo e posizionala in cima alla tua pila degli scarti. Le carte Contaminazione occupano la mano come carte normali ma **non forniscono azioni** e **non possono essere scartate per pagare costi**.

Ogni carta Contaminazione ha un'informazione nascosta: il Personaggio potrebbe essere INFETTO o meno. Per scoprirlo occorre **Scannerizzare**: posiziona lo Scanner (la lamina rossa) sopra il campo cifrato della carta. Se compare la parola INFETTO, il Personaggio è infetto. Se non si vede, la carta è NON INFETTO.

:::accent
Se sei INFETTO, posiziona una miniatura Larva sulla tua plancia Personaggio. Se c'è già una Larva, il tuo Personaggio muore — e poni 1 Aracnide nella Stanza dove è morto.
:::

> Durante un'Azione Riposo (o Cambusa/Doccia), anche se più carte Contaminazione risultano INFETTO, si posiziona comunque **una sola Larva**, indipendentemente dal numero di carte infette trovate. Il Personaggio muore solo se una Larva era già presente sulla plancia prima della Scannerizzazione.

Le carte Contaminazione possono essere rimosse tramite alcune azioni specifiche (Riposo, Azione Stanza Cambusa, Doccia, Chirurgia, Antidoto). Ogni descrizione spiega la procedura esatta.

---

# Strumenti e Oggetti

## Inventario e Mano

Esistono due tipi di Strumenti:

- **Strumenti normali** (senza icona Mano): si tengono nell'Inventario (portacarte in plastica), nascosti agli altri giocatori. Non c'è limite al numero tenuto nell'Inventario. Per usarli devono essere rivelati.
- **Strumenti Pesanti** (con icona Mano): devono essere tenuti in uno dei due **spazi Mano** sulla plancia. Un Personaggio può trasportare al massimo **2 Strumenti/Oggetti Pesanti** simultaneamente. Non possono essere nascosti.

Gli **Oggetti Pesanti** (Cadavere del Personaggio, Carcassa dell'Intruso, Uova degli Intrusi) occupano anch'essi uno spazio Mano. Non ci sono regole specifiche: vengono usati quando un'Azione Stanza o carta lo richiede.

Un Personaggio può **lasciare cadere** uno Strumento o Oggetto in qualsiasi momento del proprio turno senza usare un'Azione. Gli Oggetti restano nella Stanza; gli Strumenti vengono scartati.

## Ricerca

Per trovare Strumenti nelle Stanze si usa la carta Azione Ricerca (dal mazzo Azione personale). Il colore dello Strumento trovato deve corrispondere al colore della Stanza (indicato dal colore di sfondo dell'Azione Stanza):
- **Stanze Rosse** → Strumenti Rossi (Militari)
- **Stanze Gialle** → Strumenti Gialli (Tecnici)
- **Stanze Verdi** → Strumenti Verdi (Medici)
- **Stanze Bianche** → scelta libera tra i 3 mazzi

Ogni Ricerca nella Stanza riduce il Contatore Strumenti di 1. Quando raggiunge 0, la Stanza è esaurita e non può più essere cercata.

## Creare Strumenti

L'Azione Base Creare Strumento (costo 1) permette di ottenere uno Strumento Creato scartando 2 carte Strumento con le icone blu corrispondenti. I 4 Strumenti Creati disponibili:

:::indent
| Componente 1 | Componente 2 | Risultato |
|---|---|---|
| Composti Chimici | Antidoto base | Antidoto |
| Filo Elettrico | Batteria | Taser |
| Composti Chimici | Accendino | Lanciafiamme |
| Composti Chimici | Contenitore | Molotov |
:::

Uno Strumento Creato non può essere costruito se la sua carta non è disponibile nel mazzo, anche se hai tutti i componenti. Puoi consultare il mazzo Strumenti Creati in qualsiasi momento.

## Strumenti Esplorazione

Ogni Personaggio ha 2 Strumenti Esplorazione iniziali, posizionati orizzontalmente a faccia in su (non attivi). Ognuno ha una condizione di sblocco specificata sulla parte orizzontale. Quando la soddisfi, gira la carta in verticale: ora è uno Strumento normale.

---

# Ferite e Morte del Personaggio

## Ferite Leggere

Posiziona 1 segnalino Ferita sul Tracciato Ferite Leggere sulla plancia:
- 1° segnalino → spazio superiore
- 2° segnalino → spazio inferiore
- 3ª Ferita Leggera con segnalino già nello spazio inferiore → rimuovi il segnalino e subisci **1 Ferita Grave**

## Ferite Gravi

Pesca 1 carta Ferita Grave e posizionala a fianco della plancia. D'ora in avanti, il Personaggio è soggetto agli effetti descritti. Ogni Ferita Grave ha un effetto diverso. Averne **più copie** della stessa non cumula l'effetto ma rende più difficile liberarsene.

Quando un Personaggio con già 3 Ferite Gravi subisce un'ulteriore Ferita (leggera o grave), **muore immediatamente**.

Alla morte: rimuovi la miniatura e posiziona un gettone Cadavere del Personaggio nella Stanza (conta come Oggetto Cadavere). Tutti gli Oggetti Pesanti vengono lasciati cadere nella Stanza. Gli Strumenti normali nell'Inventario scompaiono dal gioco.

> I gettoni Intruso rimossi dal sacchetto o derivanti dalla morte di un Intruso tornano sempre nella **riserva di gettoni** a fianco del tabellone: rimangono disponibili per essere reinseriti nel sacchetto durante la partita.

## Bendare e Curare

- **Bendare Ferite Gravi:** gira la carta Ferita Grave sul lato coperto. Gli effetti vengono ignorati ma conta comunque ai fini del limite di 3.
- **Curare:** rimuovi una Ferita Leggera o scarta una carta Ferita Grave Bendata.

Le modalità specifiche dipendono dalla carta Strumento o dall'Azione Stanza usata.

---

# Carte Debolezza dell'Intruso

Durante il setup sono state posizionate 3 carte Debolezza sulla Plancia Intruso a faccia in giù, una per tipo di Oggetto (Cadavere del Personaggio, Uova, Carcassa). Scoprirle rivela vulnerabilità delle creature e fornisce vantaggi ai giocatori.

Per rivelare una carta Debolezza, porta il corrispondente Oggetto nel **Laboratorio** ed esegui l'Azione Analisi. La carta viene girata a faccia in su e rimane sulla Plancia Intruso per tutta la partita (l'Oggetto non viene scartato dopo l'analisi).

---

# Punti Critici della Partita

## Primo Incontro

Quando la **prima miniatura Intruso** compare sul tabellone (di qualsiasi tipo), tutti i giocatori devono scegliere immediatamente quale delle 2 carte Obiettivo tenere, scartando l'altra a faccia in giù senza rivelarla. Poi si risolve l'Incontro e il gioco continua normalmente.

## Prima Morte del Personaggio

Quando il **primo Personaggio muore**, l'IA della nave sblocca automaticamente tutte le Capsule di Salvataggio (gira i gettoni sul lato Sbloccato). Potranno comunque essere bloccate e sbloccate normalmente in seguito.

Il giocatore il cui Personaggio è morto per primo può scegliere di giocare come Intruso (vedi Modalità di Gioco in Panoramica).

## Apertura delle Camere di Ibernazione

Quando il segnalino Tempo raggiunge qualsiasi **spazio blu** del Tracciato del Tempo, le camere di ibernazione si aprono. Prima di quel momento, nessun Personaggio può ibernarsi.

## Autodistruzione Critica

Quando il segnalino Autodistruzione raggiunge qualsiasi **spazio giallo** del Tracciato dell'Autodistruzione, tutte le Capsule di Salvataggio vengono sbloccate automaticamente e la sequenza **non può più essere fermata**.

---

# Fase Evento

Al termine di ogni Fase Giocatori, si risolve in ordine la Fase Evento:

## 4. Tracciato del Tempo

Sposta il segnalino Tempo di **1 spazio verso destra**. Se la sequenza di Autodistruzione è attiva, sposta anche quel segnalino di 1 spazio.

## 5. Attacco dell'Intruso

Ogni Intruso in Combattimento con un Personaggio **attacca** (vedi Attacco dell'Intruso).

## 6. Danni da Fuoco

Ogni Intruso in una Stanza con un segnalino Fuoco subisce **1 Danno** (vedi Danni agli Intrusi).

## 7. Risolvere la Carta Evento

Pesca e risolvi 1 carta Evento. Ogni carta ha due parti:

- **Movimento dell'Intruso:** tutti gli Intrusi con il simbolo indicato sulla carta (che **non** si trovano in Combattimento) si spostano nel Corridoio il cui numero corrisponde a quello indicato. Se quel numero è un Corridoio Tecnico, l'Intruso scompare nei condotti (scarta i segnalini Danno, reinserisci il gettone nel sacchetto, rimuovi la miniatura).
- **Effetto dell'Evento:** risolvi l'effetto testuale dopo il movimento.

Dopo la risoluzione, scarta la carta nella pila degli scarti (salvo indicazione contraria). Se il mazzo si esaurisce, rimescola gli scarti.

## 8. Sviluppo del Sacchetto Intruso

Pesca 1 gettone dal Sacchetto Intruso e risolvi in base al tipo:

- **Larva:** rimuovi e sostituisci con 1 gettone Adulto nel sacchetto.
- **Aracnide:** rimuovi e sostituisci con 1 gettone Nutrice nel sacchetto.
- **Adulto:** tutti i giocatori non in Combattimento eseguono un Tiro Rumore in ordine di turno. Reinserisci **immediatamente** il gettone nel sacchetto (prima di risolvere i Tiri Rumore), in modo che possa essere pescato di nuovo se uno di essi innesca un Incontro.
- **Nutrice:** come Adulto. Reinserisci il gettone nel sacchetto.
- **Regina:** se il Nido è stato scoperto e ci sono Personaggi, posiziona la Regina nel Nido e risolvi un Incontro. Se il Nido non è ancora scoperto o non ci sono Personaggi, aggiungi 1 gettone Uova sulla Plancia Intruso. Reinserisci il gettone Regina nel sacchetto.
- **Vuoto:** aggiungi 1 gettone Adulto al sacchetto (se disponibile). Reinserisci il Vuoto nel sacchetto.

## 9. Fine del Turno

Inizia un nuovo turno dalla Fase Giocatori. Il turno termina solo dopo che tutto lo sviluppo del sacchetto (inclusi eventuali Incontri e Attacchi a Sorpresa) è stato completato.

---

---

# ![puzzle]{.icon} Aftermath — Modifiche allo Svolgimento

**Nuova Azione Base — Attivazione:** costo 1 carta Azione. Può essere eseguita in Combattimento e non in Combattimento. Serve esclusivamente a soddisfare le condizioni di alcune carte Allerta e non ha altri effetti. Eseguibile solo nella Stanza specificata dalla carta Allerta.

**Tratti dei Personaggi:** ogni Personaggio Aftermath (e quelli base, se si usa l'espansione) ha una carta Tratto con effetti passivi e/o attivi permanenti, validi per tutta la partita.

**Allerta:** durante la partita Epilogo o Missione Scientifica, compaiono carte Allerta che richiedono di completare mini-missioni entro un tempo limite. Se un Allerta non viene completato entro i turni stabiliti, la partita termina con una sconfitta collettiva.

**Torrette (stanza aggiuntiva):** la Sala Torrette permette di cambiare lo stato di una Torretta presente sul tabellone. Le Torrette possono essere in tre stati: Inattiva (nessun effetto), Fuoco su Chiunque (spara a tutto ciò che entra nella Stanza: Personaggi subiscono 1 Ferita Leggera, Intrusi 1 Danno), Fuoco sugli Intrusi (come sopra ma solo sugli Intrusi). Gli Intrusi attivi distruggono una Torretta durante il passaggio Danni da Fuoco.

> La Torretta spara **dopo** aver risolto tutti gli altri effetti di ingresso nella Stanza. Esempio: una Larva che entra tramite Incontro riesce a infestare un Personaggio prima che la Torretta apra il fuoco, e quindi non viene mai colpita.

**Tabellone Navicella:** ha 4 Stanze aggiuntive collegate alla Nemesis tramite i Corridoi Tecnici. Dalla Stanza Principale puoi muoverti in qualsiasi Stanza della Nemesis con un Ingresso ai Corridoi Tecnici, e viceversa. Le Stanze della Navicella non hanno Contatore Strumenti.

**Fase Evento (Epilogo):** lo Sviluppo del Sacchetto Intruso non avviene nell'Epilogo. Le carte Evento Aftermath possono avere l'icona Allerta: quando compare, tutti i Personaggi non in Combattimento eseguono un Tiro Rumore.

---

---

# ![puzzle]{.icon} Carnomorphs — Modifiche allo Svolgimento

**Mutazioni:** i Carnomorfi non infestano i Personaggi come le Larve. Invece, i Personaggi possono **mutare**.

Quando un Personaggio deve ricevere una **Mutazione**:
- Se non ha ancora una carta Mutazione, pesca 2 e ne sceglie 1 (l'altra torna nel mazzo). La carta resta nascosta finché non viene usata per la prima volta.
- Se ha già una carta Mutazione, riceve 1 segnalino Mutazione sulla plancia.
- Al **quarto segnalino Mutazione**, il Personaggio muore immediatamente; poni una miniatura Carnambulo e un Cadavere nella Stanza.

**Azione Mutante:** per attivare la propria carta Mutazione, il giocatore Scannerizza 1 carta Contaminazione dalla propria mano e pone 1 segnalino Mutazione sulla plancia. Se la carta è INFETTO → scartala dagli scarti ed esegui l'effetto INFETTO. Se è NON INFETTO → scartala dal mazzo, pesca una nuova Contaminazione e mettila sugli scarti, poi esegui l'effetto NON INFETTO.

**Contaminazione — Scannerizzazione:** quando ottieni INFETTO tramite Azione Riposo, Cambusa o Doccia, ricevi 1 segnalino Mutazione invece della miniatura Larva.

**Attacco del Metavorace:** nessuna carta Attacco dell'Intruso viene pescata. Il Personaggio attaccato riceve automaticamente **1 carta Mutazione + 1 carta Contaminazione + 1 Ferita Leggera**. La miniatura Metavorace viene rimossa e 1 gettone Carnambulo viene aggiunto al sacchetto. Se il Personaggio ha già una carta Mutazione, riceve solo 1 Contaminazione e 1 Ferita Leggera.

**Adattamenti Carnomorfici:** sostituiscono le carte Debolezza ma **rafforzano** i Carnomorfi invece di indebolirli. Quando compare per la prima volta un nuovo tipo di Carnomorfo, prendi la miniatura dalla plancia e scopri la carta Adattamento corrispondente. L'effetto di ogni Adattamento si applica a **tutti i tipi di Carnomorfo**, non solo a quello che ne ha determinato la scoperta. Usando il Laboratorio per analizzare Oggetti Pesanti, puoi rimuovere carte Adattamento già scoperte dal gioco.

**Nutrizione (Fase Evento, passo 5):** prima dell'Attacco, i Carnomorfi non in Combattimento che si trovano in una Stanza con Oggetti Pesanti (Cadavere, Carcassa, Uovo) e/o altri Metavoraci si **nutrono**:
1. **Guarigione:** rimuovi tutti i segnalini Danno dal Carnomorfo.
2. **Evoluzione:** sostituisci la miniatura con quella del livello superiore (Metavorace → Carnambulo → Proteomostro → Carnefice).
3. **Consumazione:** rimuovi 1 Oggetto Pesante o miniatura Metavorace dalla Stanza.

Ordine di priorità per la Nutrizione: Carnefice > Proteomostro > Carnambulo > Metavorace. Ordine di consumazione degli Oggetti: Cadavere rosso > Uovo > Carcassa > Metavorace > Cadavere blu.

:::accent
In Carnomorphs, il Cadavere del Personaggio Blu può essere consumato dai Carnomorfi, rendendo impossibile il raggiungimento di alcuni Obiettivi. Tienilo al sicuro.
:::

**Morte dei Carnomorfi:**
- Metavorace/Carnambulo morti lasciano 1 Carcassa nella Stanza.
- Proteomostro morto lascia 1 Carcassa + 1 Carnambulo.
- Carnefice morto lascia 2 Carnambuli (non vengono pescati dal sacchetto). Una volta ucciso, il Carnefice non torna in gioco.

**Sviluppo del Sacchetto — Metavorace Rosso:** invece del normale tiro Rumore, posiziona 1 miniatura Metavorace in ogni Stanza che contiene già un Metavorace o un Oggetto Pesante. Se il Nido è stato esplorato ma non distrutto, aggiungi un Metavorace anche lì.

> **Gettone Vuoto nell'Incontro (Carnomorphs):** il gettone Vuoto va rimesso nel sacchetto **prima** di eseguire i Tiri Rumore derivanti dall'Incontro, in modo che possa essere pescato nuovamente se uno di essi innesca un ulteriore Incontro.

---

---

# ![puzzle]{.icon} Void Seeders — Modifiche allo Svolgimento

**Sistema della Pazzia:** sostituisce la meccanica della Larva e della Secrezione. Ogni Personaggio ha un Tracciato della Pazzia (da 1 a 5). Il tipo di Annichiloide che compare durante un Incontro dipende dal Livello di Pazzia del giocatore che lo ha provocato (indicato dal simbolo sul tracciato).

**Carte Panico:** quando devi risolvere una carta Panico, pesca 1 carta e confronta il Livello di Pazzia indicato con il tuo:
- Se il tuo livello è **inferiore** a quello sulla carta (o l'effetto non può essere risolto), il tuo Livello di Pazzia **aumenta di 1**.
- Se è **uguale o superiore**, risolvi immediatamente l'effetto.

Un altro Personaggio nella stessa Stanza può giocare una carta Interruzione per annullare l'effetto di una carta Panico (in questo caso il livello non aumenta).

Un Personaggio con Livello di Pazzia 5 che deve aumentare ulteriormente, **muore immediatamente**.

**Tane:** strutture fisiche degli Annichiloidi, compaiono tramite i gettoni Esplorazione Tana. I Personaggi nella stessa Stanza di una Tana sono considerati in Combattimento. Alla fine di ogni round (ogni round!), se un Personaggio si trova in una Stanza con una Tana, deve eseguire un Tiro Rumore. Le Tane non si muovono mai.

> Scoprire una Tana tramite un gettone Esplorazione **non** costituisce un Primo Incontro e non obbliga i giocatori a scegliere l'Obiettivo da mantenere.

Per colpire una Tana occorre tirare almeno ●. Un Attacco in Mischia mancato contro una Tana infligge normalmente **1 Ferita Grave** al Personaggio. Si pescano 2 carte Attacco e si usa il valore "sangue" più alto. Se appare un'icona Ritirata, la Tana non viene distrutta. Una Tana distrutta lascia una Carcassa e la sua miniatura va nell'apposito spazio sulla Plancia Annichiloide. Quando tutte le Tane sono distrutte, il Devastatore viene sconfitto e non può più comparire.

> **Fuggire** da una Stanza con una Tana **non** innesca alcun Attacco. Le Tane non attaccano durante il passaggio Attacco dell'Intruso della Fase Evento.

**Il Devastatore** non può essere danneggiato in Combattimento e non riceve segnalini Danno. L'unico modo per sconfiggerlo è distruggere tutte le Tane. Se colpito, si pesca 1 carta Attacco: il valore "sangue" viene ignorato ma il Devastatore può Ritirarsi.

**Movimento degli Annichiloidi:** gli Annichiloidi **ignorano i Portelloni Chiusi** quando si muovono. Considera tutti i Portelloni Chiusi come Aperti per il movimento degli Annichiloidi.

**Incontro — Gettone Pazzia:** anziché comparire un Intruso, poni 1 segnalino Rumore in ogni Corridoio collegato alla Stanza e il giocatore che ha causato l'Incontro risolve una carta Panico. Il gettone torna nel sacchetto.

**Attacco a Sorpresa degli Annichiloidi:** tutti i tipi usano lo stesso effetto — il Personaggio riceve **1 carta Contaminazione** e risolve **1 carta Panico** (nessuna carta Attacco viene pescata).

**Appostamento (nuovo passo della Fase Evento, dopo le Carte Evento):**
1. Individua le Stanze con Annichiloidi non in Combattimento e senza Personaggi nelle Stanze adiacenti (gli Annichiloidi ignorano i Portelloni).
2. Poni 1 segnalino Rumore in ogni Corridoio collegato a queste Stanze (se non già presente).
3. Rimuovi tutti gli Annichiloidi da queste Stanze e aggiungi 1 gettone Annichiloide al sacchetto per ogni miniatura rimossa.

**Riposo, Cambusa, Doccia:** oltre agli effetti normali, permettono di ridurre il Livello di Pazzia di 1 (non è possibile scendere da 3 a 2). Se durante la Scannerizzazione ottieni INFETTO, il tuo Livello di Pazzia sale a 5 indipendentemente da tutto.

**Laboratorio:** invece di analizzare un Cadavere del Personaggio, si analizza il Livello di Pazzia di un Personaggio vivo. Deve esserci almeno 1 Personaggio con Livello ≥ 3 nel Laboratorio.

**Chirurgia e Antidoto:** invece di rimuovere una Larva, riducono il Livello di Pazzia a 3.

:::glossary
[Tiro Rumore]: Tiro con 1 dado Rumore eseguito quando si entra in una Stanza vuota. Il risultato (1–4, Pericolo, Silenzio) determina se e dove posizionare segnalini Rumore, potenzialmente innescando un Incontro.

[Incontro]: Evento che si verifica quando, a causa di un Tiro Rumore, un Intruso compare in una Stanza occupata da un Personaggio. Si risolve pescando dal Sacchetto Intruso e posizionando la miniatura corrispondente.

[Combattimento]: Condizione attiva quando un Personaggio e un Intruso si trovano nella stessa Stanza. In Combattimento non sono disponibili le azioni "Solo Non in Combattimento".

[Contaminazione]: Carte speciali che si accumulano nel mazzo Azione del Personaggio dopo contatti con gli Intrusi. Non forniscono azioni aggiuntive e non possono essere scartate per pagare costi. Nascondono informazioni su una possibile infezione.

[Corridoi Tecnici]: Rete di condotti della nave accessibile solo agli Intrusi (con rare eccezioni per il Meccanico). Permettono agli Intrusi di muoversi ovunque nella nave e di scomparire dal tabellone.

[segnalino Secrezione]: Segnalino sulla plancia Personaggio che trasforma ogni risultato "Silenzio" (Tiro Rumore o gettone Esplorazione) in "Pericolo". Un Personaggio può averne al massimo 1.
:::
