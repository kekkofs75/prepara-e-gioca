# Tabellone – Mappa

Il [Complesso]{.def} è composto da **3 Bordi dei Settori** (**A, B, C**) collegati da **3 Bordi del Tracciato dei Round**.

Ogni Settore ha il suo specifico [Sistema di Supporto Vitale]{.def} (Attivo o Inattivo) e le proprie **Stanze specifiche**.

Le **Stanze** vengono rivelate durante la partita (sempre all'interno di 1 dei 3 Settori) e collegate tramite **Corridoi** casuali.

:::indent
I **Personaggi** possono trovarsi nelle Stanze, mentre gli **Intrusi** sia nelle Stanze che nei Corridoi.
:::

I Bordi dei Settori e del Tracciato dei Turni delimitano la **superficie del Complesso**. Le Stanze e i Corridoi **non** possono oltrepassare o scavalcare questo confine (**neppure** dove non appare chiuso).

**Tessere Stanza (# 23)**

| Tipo | # | Stanze Fisse |
|---|:-:|---|
| Settore A | 3 | Zona d'Atterraggio, Sala di Perforazione, Supporto Vitale A, Sala Operatoria |
| Settore B | 3 | Hibernatorium, Impianto di Raffreddamento, Supporto Vitale B, Sala Server |
| Settore C | 4 | Supporto Vitale C, Nido, Reattore, Navetta d'Emergenza |
| Casuali "?" | 13 | Varie, possono apparire in qualsiasi Settore |

**Tessere Corridoio (# 40)**

- **10** per ogni valore di Rumore (1, 2, 3, 4)
- Ogni Corridoio ha un lato **Fronte** (con valore Rumore) e un lato **Retro Rinforzato** (valore 0)
- Alcuni Corridoi hanno uno **spazio Portellone**

## Stanze

Le **Stanze** sono la principale struttura della mappa. Possono essere specifiche di Settore (A, B, C) o casuali (?).

:::indent
I **Personaggi** possono muovere da una Stanza ad una vicina.
:::

Ogni Stanza mostra:

- **1. Nome** della Stanza.
- **2. Effetto**: breve descrizione dell'effetto della Stanza quando risolvi l'azione Usare una Stanza.
- **3. Icona Strumento**: tipi di Strumento che puoi trovare nella Stanza (usando la carta Azione Ricerca).
- **4. Icona Computer**: indica se la Stanza contiene o meno una connessione con il Server (usata da effetti ed Azioni).
- **5. Tipologia di Stanza e Numero ID**: indica il tipo di Stanza (A, B, C, ?); il numero viene usato per spareggiare in vari casi.
- **6. Altre icone**: altre icone per regole speciali (Stanze che non possono ricevere segnalini Sicuro, piuttosto che segnalini Malfunzionamento).

## Limite degli Intrusi

Una Stanza può ospitare un numero **illimitato** di Intrusi.

- Se la Stanza è occupata da **1+ Personaggi**, solo **1 Intruso** (dal più grande) può muovere da ogni Corridoio adiacente nella Stanza.
- Se la Stanza è priva di Personaggi, **tutti** gli Intrusi possono muovere dai Corridoi adiacenti nella Stanza.

## Nido

Ad inizio partita, il [Nido]{.def} ha uno spazio (5) sul **Bordo del Settore C** con **5 segnalini Uova** (estensione della Stanza Nido). I **Personaggi** nel Nido possono interagire con le Uova qui tenute e stanno (per tutti gli effetti di gioco) in una Stanza con delle Uova.

Le **Uova** sono **Strumenti Pesanti** e puoi raccoglierle con l'Azione Stanza Nido. Il **Fuoco** distrugge **1 segnalino Uova** ad ogni passo *Fuoco sugli Intrusi* della *Fase Intrusi*.

:::indent
Una volta terminate (raccolte o distrutte), il **Nido è distrutto** (poni un segnalino universale) anche se successivamente se ne aggiungono altre.
:::

## Corridoi

I **Personaggi** si muovono da una Stanza all'altra usando i **Corridoi** adiacenti (vi si pone un segnalino Rumore che può richiamare gli Intrusi che possono muovere in altri Corridoi o in Stanze).

Ogni Corridoio mostra:

- **1. Valore Rumore del Corridoio**: utilizzato dai tiri Rumore per capire in quale Corridoio piazzare i segnalini Rumore.
- **2. Valore Rumore in Modalità Mortale**: secondo valore Rumore usato solo in *Modalità Letale*.
- **3. Spazio Portellone**: punto in cui è disponibile un Portellone (Aperto, Chiuso o Distrutto).
- **4. Numero ID**: numero identificativo del Corridoio (usato per gli spareggi durante il movimento degli Intrusi – inizia sempre con il valore Rumore mostrato sul fronte).

Un **Corridoio**:

- Può essere posto a cavallo di **2 Settori** (è considerato essere in entrambi i Settori).
- È **Vuoto** se **non** ci sono Intrusi in esso (il segnalino Rumore non conta).
- È **Inesplorato** se è connesso solo ad **1 Stanza**.

Quando poni o muovi un **Intruso** in un Corridoio con un **segnalino Rumore**, scartalo. **Non** porre segnalini Rumore in Corridoi dove è già presente un Intruso.

Un Corridoio può ospitare:

- La **Regina** e fino ad altri **2 Intrusi**, oppure
- Fino a **6 Intrusi** tra Adulti, Fuchi o Larve, oppure
- **1 segnalino Rumore**.

## Corridoi Rinforzati

Puoi **rinforzare** i Corridoi vuoti durante la partita (**non** quelli per l'Hibernatorium).

:::indent
Scarta il **segnalino Rumore** (se presente) e gira la tessera Corridoio sul lato [Rinforzato]{.def} (ha valore Rumore **0**, ovvero i segnalini Rumore **non** possono esservi posti).
:::

Gli Intrusi possono entrarvi normalmente.

## Portelloni

Alcuni Corridoi hanno **spazi Portellone** (Aperto). Effetti rendono il Portellone **Chiuso** (segnalino Portellone sullo spazio Portellone).

:::indent
Quando poni un Corridoio con un Portellone, orientalo con lo spazio Portellone verso la Stanza appena posta.
:::

**Stanza e Corridoio** separati da un Portellone Chiuso sono ancora **adiacenti**, e **2 Stanze** separate da un Portellone Chiuso sono ancora **vicine**. Attraverso un **Portellone Chiuso**:

- Ai **Personaggi** viene impedito il Movimento e lo Sparare a Raffica (devono prima aprirlo o distruggerlo) ed in generale non possono eseguire Azioni che influenzano elementi che si trovano oltre di essi.
- Gli **Intrusi** invece, se vi muovono contro li distruggono.
- I **segnalini Rumore** e gli effetti che si riferiscono a *qualsiasi elemento del Complesso*, li ignorano.
- Il **Fuoco** non si propaga attraverso di essi.

Un **Portellone** può essere:

- **Chiuso**: solo negli spazi Portellone; ponici **1 segnalino Portellone**.
- **Aperto**: rimuovi il segnalino Portellone.
- **Distrutto**: se Chiuso, può essere Distrutto; sdraia il segnalino Portellone su un lato
  - Funziona come uno Aperto, ma **non** può più essere Chiuso.

# Segnalini Mappa

I **segnalini Rumore** sono posti nei **Corridoi**, i **segnalini Fuoco** e **Sicuro** nelle **Stanze**, mentre i **segnalini Malfunzionamento** su una varietà di componenti.

## Segnalini Rumore

Sono posti sui **Corridoi** e risolti con un **Tiro Rumore** (o da altri effetti). Sono la causa principale della comparsa di **Intrusi**.

:::indent
Quando richiesto rimuovilo e pesca **1 segnalino Intruso** dal Sacchetto (vedere la *Scheda Aiuto dell'Intruso*) per far comparire Intrusi nel Corridoio, poi scarta il segnalino Intruso (a meno del segnalino Vuoto).
:::

## Segnalini Fuoco

I **segnalini Fuoco** sono posti nelle **Stanze**. Se è già presente un segnalino Fuoco, ignora l'effetto.

:::accent
Se in qualsiasi momento devi porre un segnalino Fuoco, ma sono esauriti il **Complesso è distrutto**.
:::

Hanno **3 effetti** di gioco:

- Se un **Personaggio** termina il turno in una Stanza con un segnalino Fuoco, perde **1 Punto Salute**.
- Se un **Intruso** si trova in una Stanza con un segnalino Fuoco durante la *Fase Intruso*, subisce **1 Colpo**; se è il Nido, distrugge **1 segnalino Uovo** (scartalo).
- Il Fuoco può **propagarsi** (non attraverso i Portelloni) per alcuni Eventi nelle Stanze vicine.

## Segnalini Malfunzionamento

I [segnalini Malfunzionamento]{.def} sono posti su differenti componenti e li rendono **non utilizzabili**:

- **Stanze**: **non** puoi usare l'Azione Stanza, ma puoi sfruttare le icone Strumento e l'icona Computer.
  - Se è **già presente** un segnalino Malfunzionamento, ignora l'effetto. Se sono esauriti, poni un segnalino Fuoco al suo posto (se possibile).
- **Strumenti Pesanti**: **non** puoi usare lo Strumento, ma puoi usare i Dispositivi Tattici sullo Strumento.
  - Se è **già presente** un segnalino Malfunzionamento, scarta lo Strumento.
- **Robot**: **non** puoi usare il Robot (né con le Stanze né con le Azioni Robot), ma puoi usare i Dispositivi Tattici sul Robot, e gli effetti che ne richiedono solo la presenza possono essere risolti.
  - Se è **già presente** un segnalino Malfunzionamento, ignora l'effetto.

Puoi **rimuovere** un segnalino Malfunzionamento da una Stanza solo se ti trovi al suo interno e da uno Strumento o Robot solo se ti trovi nella Stanza di quest'ultimo usando appositi effetti (a meno che l'effetto indichi diversamente).

# Plancia Personaggio

Ogni plancia è composta da una **plancia generica** e da una **tessera Personaggio** inserita.

Ogni plancia mostra:

- **1. Nome e Grado** del Personaggio.
  - Il Grado influenza alcune carte Azione che permettono comandi gerarchici.
- **2. Tracciato Salute**: Illeso, Ferito, Gravemente Ferito.
- **3.** Il **segnalino Salute**: scorre da sinistra a destra verso il Teschio (morte).
- **4.** Le **Ferite Gravi** sono carte poste sugli stati del tracciato che ne riducono il valore massimo e introducono penalità.
- **5. [Cintura Tattica]{.def}** con **4 spazi Dispositivo Tattico**, tutti grigi (accettano qualsiasi tipo).
  - Anche le tue Armi e Strumenti possono ospitare spazi per i Dispositivi Tattici.
- **6. Riserva di Ossigeno** (0..7): inizi con **7 Ossigeno** (massimo).
- **7. 2 Spazi Mano** per gli Strumenti Pesanti.
- **8. 1 Spazio Armatura** al di sotto di Gravemente Ferito.
- **9. Lista delle Azioni** con relativi costi.
- **10. Spazio Zaino Portacarte** per gli Strumenti Ordinari.

Usa l'area alla sinistra della plancia come zona per il tuo **mazzo Azione** di pesca (coperto) e quello alla destra per la tua **pila degli scarti** (scoperto).

# Carta Azione

Ogni carta Azione mostra:

- **1. Non in Combattimento**: non puoi giocarla in una Stanza con un Intruso.
- **2. Titolo**.
- **3. Effetti della Carta**: risolto quando la carta viene giocata.
- **4. Effetto di Reazione**: eventuale effetto di Reazione.
- **5. Personaggio**: indica il Personaggio a cui la carta appartiene.

# Carta Evento

Ogni carta Evento mostra:

- **1. Titolo**.
- **2. Movimento degli Intrusi**.
- **3. Evento principale** (impatta sul gioco).
- **4. Evento secondario** (effetto minore).

# Carta Esplorazione

Ogni carta Esplorazione mostra:

- **1. Orientamento**: orientamento Nord della carta rispetto al Nord del Complesso.
- **2. Stanza**: pesca e poni **1 Stanza** del tipo indicato (A, B, C, ?) nel punto in cui hai mosso.
  - Se non c'è del tipo indicato poni una Stanza "?".
- **3. Corridoi**: pesca e poni **1 Corridoio** (lato Fronte) attorno alla nuova Stanza in ogni spazio indicato dalla carta (se non già presente) con l'eventuale spazio Portellone vicino ad essa. Eccezioni:
  - **Non** porre Corridoi che porterebbero al di fuori dell'area del Complesso.
  - **Non** porre Corridoi che porterebbero a Stanza già Scoperte.
- **4. Segnalini**: poni sui Corridoi e nella nuova Stanza i segnalini indicati dalla carta.
  - **Non** porre segnalini Rumore nei Corridoi che ne hanno già uno.
- **5. Spostamento e Promemoria**: sposta il Personaggio nella nuova Stanza, e poni **1 segnalino Sicuro** (solo se Movimento Cauto).
- **6. Effetto d'Ingresso**: risolvi l'effetto aggiuntivo di ingresso alla Stanza.
- **7. Icona Infiltrata**: ignorala nel gioco base.

Se non rimossa dall'Effetto d'Ingresso la carta viene scartata nella corrispondente **pila degli scarti**.

# Strumenti

Ogni Personaggio inizia la partita con il proprio **Strumento del Personaggio** ed **Equipaggiamento di Supporto** (a meno del *Mercenario*). Durante la partita troverete **Strumenti Ordinari**.

Gli Strumenti possono essere usati con l'Azione **Usare uno Strumento** oppure si innescano quando indicato dalla carta (passivi).

Gli Strumenti hanno [Tratti]{.def} al di sotto del nome:

- **Pesante**: puoi porli solo negli spazi Mano; hanno l'immagine in orizzontale.
- **Armatura**: la maggior parte fornisce un effetto passivo; hanno una banda orizzontale in alto e l'immagine verticale.
- **Arma a Distanza**, **Arma da Mischia**: molte Azioni le riferiscono; non hanno effetto di per sé.
- **Monouso**: vengono scartati dopo l'uso.
- **Non richiede Munizioni**: sono Armi speciali che non richiedono Munizioni per Sparare un Colpo o a Raffica (hanno sempre **1 segnalino Munizione**).

Gli **Strumenti Ordinari** hanno l'immagine verticale e **non** hanno la parola chiave Armatura né Pesante.

Gli Strumenti posso avere **1+ spazi** per i **Dispositivi Tecnici**:

- segnalini **Munizione**.
- segnalini **Granata**.
- segnalini **Ossigeno**.
- segnalini **Kit Medico**.
- segnalini **Dispositivo Tattico**.

Quando perdi uno Strumento perdi anche tutti i **Dispositivi Tattici** su di esso.

# Intrusi

Nel gioco base gli Intrusi appartengono a **4 tipi**:

| Tipo | Descrizione |
|---|---|
| **Regina** | È una sola, ma letale |
| **Fuchi** | Rari, ma più pericolosi degli Adulti |
| **Adulti** | Tipo classico più frequentemente incontrato |
| **Larve** | Non mortali, ma portatori di un'amara sorpresa |

# Carta Attacco dell'Intruso

Ogni carta Attacco dell'Intruso mostra:

- **1. Tipo di Intruso**.
- **2. Effetto associato** da risolvere.

# Carta Salute della Regina

Ogni carta Salute della Regina mostra:

- **1. Carte Salute della Regina** addizionali da scartare.
- **2. Effetto** della carta.

# Robot

Il **Robot** inizia nell'**Hibernatorium** e può aiutare i Personaggi nella loro missione. È pescato **casualmente** ad inizio partita e rimane **segreto** finché una Stanza viene collegata all'Hibernatorium.

A quel punto può essere **attivato** svolgendo le **Azioni** assegnategli dai Personaggi. Il Robot è sempre **ignorato** dagli Intrusi (**non** sono interessati ai congegni meccanici).

# Carta Obiettivo

Le **carte Obiettivo** rappresentano Obiettivi fra cui i giocatori devono scegliere durante la partita.

# Modalità Aggiuntive

## Difficoltà

Se aumenti (o diminuisci) il numero di **Compiti di Missione** durante la *Preparazione*, aumenti (o diminuisci) di conseguenza la difficoltà.

:::indent
Se **più Compiti** richiedono in totale un numero di **segnalini Dati maggiore** al numero dei Personaggi, dovrete averne invece un numero **pari** al numero dei Personaggi.
:::

## Modalità Letale

È disponibile sia nella modalità *Solitaria/Cooperativa* che in quella *ordinaria*.

Per tutti gli effetti di gioco, come per i **Tiri Rumore**, usa **entrambi** i valori Rumore presenti sui Corridoi (grande e piccolo).

I **Corridoi rinforzati** hanno ancora solo il valore 0.

Per gli **spareggi** usa solo il valore Rumore principale.

## Modalità Solitario e Cooperativo

Per giocare in Solitario o Cooperativo usa i **Compiti di Missione** della corrispondente modalità.

Durante la *Preparazione*, applica le seguenti **differenze**:

- Anziché **1 carta Compito di Missione** ordinaria, pesca **giocatori carte Compiti di Missione Solitario/Cooperativo**.
  - Se una carta è in **conflitto** con una precedente, scartala e pescane una nuova al suo posto.
- **Non** distribuire alcuna carta Obiettivo ordinario.

Per **vincere**, dovete conseguire **tutti** i Compiti di Missione e **1+ Personaggi** devono sopravvivere.

Se una **condizione di Obiettivo** viene ripetuta, va conseguita da un numero equivalente di Personaggi e altrettanti devono Sopravvivere.

## Rianimazione

Quando un **Personaggio muore**, si sdraia nella Stanza e scarta tutte le carte Strumento. Un altro Personaggio può muovere da quella Stanza in un'altra portandolo con sé scartando **1 carta Azione** aggiuntiva.

Se raggiungono la **Sala Operatoria** e i modelli KO iniziano lì il turno senza Intrusi e segnalino Malfunzionamento, scartano tutte le loro **Ferite Gravi** e pongono il segnalino Salute nello spazio più a sinistra dello stato Ferito del loro tracciato Salute.

---

---

# ![puzzle]{.icon} Infiltrata

## Panoramica

Ogni [carta Storia]{.def} mostra:

- **Fronte**: breve testo narrativo (su fondo chiaro) da leggere quando viene risolta.
- **Retro**: si trovano **4 tipi di effetti**:
  - **1. Effetto Istantaneo**: effetto da risolvere appena la carta viene girata (subito dopo averne letto il fronte).
  - **2. Effetto Permanente**: effetto che rimane in gioco fintanto che è visibile (aggiunge o modifica regole del gioco).
  - **3. Nuova Azione**: introduce **1 nuova Azione** per i Personaggi. Segue le regole ordinarie e costa un certo numero di carte Azione per essere eseguita. Eventuali altri requisiti ed effetti sono indicati sulla carta.
  - **4. Effetto Esplorazione**: effetto da risolvere ogni volta che viene rivelata una carta Esplorazione col simbolo (dopo averla prima risolta).

---

---

# ![puzzle]{.icon} Intrusi Xyriani

## Panoramica

Ogni **carta Attivazione degli Xyriani** mostra:

- **1. Effetto in presenza di Personaggi** nella stessa Stanza.
- **2. Effetto in assenza di Personaggi** nella stessa Stanza.

---

---

# ![puzzle]{.icon} Culto della Nuova Carne

## Regole Generali

Procedi normalmente per spezzare i pareggi, ma se necessario (es. l'Intruso più grande muove) usa l'**ordine dato dalle carte Abilità**.

Nel Culto della Nuova Carne **non** ci sono Intrusi equivalenti ai **Fuchi**, ma potrai scontrarti contro **4 tipi di Adulti** (*Dilaniatore*, *Scavastriscio*, *Ferromanto* e *Sputafuoco*). I [Cultisti]{.def} sono un **nuovo tipo di Intruso** con proprie regole ed i **Frementi** sono al posto delle Larve. La **Cerebromadre** è l'equivalente della Regina (il suo potere aumenta col progredire della partita).

Il CdNC ha **abilità aggiuntive** attive dall'inizio della partita, che possono essere disattivate sconfiggendo i Cultisti.

## Frementi

Sono l'equivalente delle **Larve** con le seguenti differenze:

- **Tutti** i Frementi si attivano nella *Fase Intruso* e non nella *Fase Evento*.
- Quando **Attaccano** un Personaggio, questi pesca **1 carta Contaminazione**. **Non** si spostano sulla plancia Personaggio (rimangono sulla Mappa).
- Finché l'**Abilità dei Frementi** è attiva, questi seguono le stesse regole degli **Adulti** per il calcolo della Vita (**non** vengono sconfitti con 1 solo Colpo), ma appena l'abilità viene disattivata i Frementi con **1+ Colpi**, muoiono subito.

## Cultisti

Sono **umani convertiti** in computer connessi con la Cerebromadre e ne fungono da **batteria**.

Vengono posti sulla Mappa con le **carte Esplorazione** e possiedono regole proprie: **non** Muovono, **non** Attaccano e **non** interagiscono con i Personaggi e/o altri componenti (a meno che non sia indicato diversamente).

I Personaggi nella stessa Stanza con i **soli Cultisti** non sono in Combattimento.

I Personaggi possono svolgere Azioni che bersagliano Intrusi per bersagliare i Cultisti. Questi seguono le stesse regole degli **Adulti** per il calcolo della Vita.

Se **uccidi un Cultista**, poni il suo modello sulla **tessera dei Cultisti Morti** (le carte Evento sono da ora meno potenti) e scegli **1 delle Abilità attive** da disattivare (capovolgila).

- Se qualcosa (**non** un Personaggio) uccide un Cultista, disattiva l'**ultima Abilità in ordine**, ovvero l'Abilità dei Cultisti se non ancora disattivata.

Se infliggi un **Colpo/Colpo Critico** ad un Cultista e l'Abilità dei Cultisti è attiva, risolvi un **Tiro Rumore**. Fallo anche se uccidi il Cultista, ma solo dopo che hai deciso quale Abilità disattivare (**non** risolvere il Tiro Rumore se disattivi l'Abilità dei Cultisti).

## Adulti

Ci sono **4 tipi di Adulto**, seguono le normali regole di gioco, ma ognuno con **1 Abilità speciale** (per l'Attacco e alcune regole aggiuntive).

- **DILANIATORE**: finché la sua Abilità è attiva, ogni volta che Attacca ed infligge una **Ferita Grave** e/o fa perdere **Punti Ferita** ad un Personaggio, lo Attacca una **2ª volta** (mai una 3ª).
  - Se **non** assegna alcun danno, non attacca una 2ª volta.
  - Se col 1° Attacco il Personaggio muore e nella Stanza ci sono **1+ Personaggi**, procede in ordine di turno ad Attaccare un altro Personaggio col suo 2° Attacco.
- **SCAVASTRISIO**: finché la sua Abilità è attiva, ogni volta che muore in una Stanza, pesca **3 carte Attacco dell'Intruso**.
  - Se **1+ carta "Boom!"**, risolvine una. Poi rimescola le 3 carte nel mazzo corrispondente.
- **SPUTAFUOCO**: finché la sua Abilità è attiva, ogni volta che un Personaggio **Spara a Raffica** in un Corridoio, prima il Personaggio perde **1 Punto Vita** per ogni Sputafuoco presente nel Corridoio, solo dopo risolve la Raffica.
  - Se il Personaggio muore, **non** risolvete la Raffica.
- **FERROMANTE**: finché la sua Abilità è attiva, applica le **2 Abilità** indicate sulla loro carta.
  - **1.** Un Ferromante deve essere sempre il **1° bersaglio** dell'Azione tra tutti gli Intrusi presenti in una Stanza o in un Corridoio.
    - I Personaggi possono eseguire Azioni che **non** necessariamente bersagliano Ferromanti.
    - Se un Personaggio Spara a Raffica può decidere di farlo in un Corridoio in cui non ci sono Ferromanti anche se in 1+ Corridoi adiacenti ve ne sono.
    - Quando devi colpire i Ferromanti (Stanze o Corridoi) puoi decidere l'ordine in cui colpirli, ma sempre per primi.
    - Applica queste regole anche alle altre Azioni che bersagliano Intrusi (es. Respingere).
  - **2.** Un Ferromante in un **Corridoio** deve subire **2 Colpi** per essere ucciso, mentre in una **Stanza** anziché morire viene **Respinto**.
    - Per uccidere un Ferromante in un Corridoio devi assegnargli **2 Colpi allo stesso tempo** (una Raffica di 1 Colpo non fa nulla).

## Carte Attacco degli Intrusi

Quando risolvi **1 carta Attacco**, procedi come segue:

- Se l'Intruso che Attacca è dello stesso **tipo di icona** presente nella **1ª riga**, allora risolvi l'effetto.
  - Risolvi l'effetto anche se l'Abilità dell'Adulto implicato nell'Attacco è **disattiva**.
- Se l'Intruso che Attacca è la **Cerebromadre** e il numero di Corpi richiesto nella **2ª riga** è stato Assorbito, allora risolvi l'effetto.
- Altrimenti, risoli l'effetto nella **3ª riga**.

## Segnalini Intruso

Quando inserisci un segnalino Intruso nel Sacchetto **non** guardarne il tipo (parti dal fondo). I segnalini seguono le normali regole di gioco con le seguenti differenze:

- Il segnalino pescato indica **esattamente** quanti e quali Intrusi porre in un Corridoio.
  - Se nel Corridoio non c'è abbastanza spazio, piazzane il più possibile seguendo l'**ordine di piazzamento** degli Intrusi (spezza gli spareggi ed usa l'ordine indicato dalle carte Abilità) ed ignorando i rimanenti.

## Uova

Il Culto della Nuova Carne si è impossessato del Complesso che ospitava i **Purosangue**, il loro **Nido** e le **Uova** sono ancora lì.

Le Uova e il Nido sono gli stessi del gioco base, ma le Uova **non** subiscono danni da Fuoco.

---

---

# ![puzzle]{.icon} Sanguivori

## Carte Infezione

Le [carte Infezione]{.def} vengono applicate più facilmente da un Attacco di uno **Spettro Sanguinario** e dal **Re** piuttosto che da un **Ghoul**. Nella *Procedura di Fine Partita* vengono usate al posto delle carte Contaminazione.

Sono l'**equivalente** delle carte Contaminazione anche per tutti gli altri effetti di gioco (rimuoverle o scartarle, …).

Puoi spendere **1 Azione speciale** per giocare carte Infezione per l'effetto in fondo alla carta al fine di rimuoverle dal tuo mazzo. Puoi anche scartare **1+ carte Infezione** (anche tutte) dalla tua pila degli scarti (quando Passi) perdendo **1 Punto Salute**.

**Non** puoi scartare gratuitamente dalla mano carte Infezione e **non** puoi scartarle per pagare il costo di una Azione.

A differenza delle carte Contaminazione, quando ottieni **1 carta Infezione** mettila **direttamente nel tuo mazzo** (mescolalo, senza rimescolarvi anche la pila degli scarti).

Puoi giocare **1 carta Riposo** per scartare nella tua pila degli scarti **1+ carte Infezione** dalla tua mano (senza costi aggiuntivi).

## Carte Sangue Corrotto

A seguito di un contatto con un Sanguivoro potresti ottenere **1 carta Sangue Corrotto** con Abilità speciali (da usare **1 volta per Round** come Azione con costo).

Quando ottieni **1 carta Sangue Corrotto** ponila scoperta accanto alla tua plancia Personaggio (come **Attiva**). Se ne possiedi già una, scegli quale tenere (poni l'altra sotto come **Inattiva**).

**Non** puoi usare le carte Inattive, a meno di un Attacco dei Sanguivori che richiede di scartare **1 carta Sangue Corrotto** (scarta sempre la carta più in basso, può essere quella Attiva se è l'unica che possiedi).

:::glossary
[Complesso]: La mappa di gioco: 3 Bordi dei Settori (A, B, C) collegati da 3 Bordi del Tracciato dei Round. Se servono segnalini Fuoco ma sono esauriti, il Complesso è **distrutto**.

[Sistema di Supporto Vitale]: Ogni Settore ne ha uno (Attivo o Inattivo). In un Settore con Supporto Vitale Inattivo si perde **1 Ossigeno** a fine turno.

[Nido]: Stanza del Settore C con uno spazio sul Bordo e **5 segnalini Uova**. Non può essere messa in sicurezza e viene distrutta quando le Uova terminano.

[Rinforzato]: Lato Retro di un Corridoio (valore Rumore 0): i segnalini Rumore non possono esservi posti. Si possono rinforzare solo Corridoi vuoti.

[segnalini Malfunzionamento]: Segnalini che rendono non utilizzabili Stanze (Azione Stanza), Strumenti Pesanti e Robot.

[Cintura Tattica]: Parte sinistra della plancia con **4 spazi Dispositivo Tattico** grigi (accettano qualsiasi tipo).

[Tratti]: Parole chiave sotto il nome di uno Strumento: Pesante, Armatura, Arma a Distanza, Arma da Mischia, Monouso, Non richiede Munizioni.

[carta Storia]: Carta del mazzo Storia dell'Infiltrata: il fronte ha un testo narrativo, il retro ha effetti (istantaneo, permanente, nuova Azione, Esplorazione).

[Cultisti]: Nuovo tipo di Intruso del CdNC: non Muovono, non Attaccano e non interagiscono con i Personaggi. Ucciderli disattiva un'Abilità.

[carte Infezione]: Nei Sanguivori sostituiscono le carte Contaminazione; si mettono direttamente nel mazzo e vengono usate nella Procedura di Fine Partita.
:::
