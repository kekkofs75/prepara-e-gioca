Assalto Imperiale supporta tre modalità di gioco distinte, adatte a esigenze diverse:

| Modalità | Giocatori | Chi gestisce gli Imperiali | Tipo di esperienza | Durata |
|---|---|---|---|---|
| **Legends of the Alliance** | 1–4 | L'app | Cooperativa narrativa | 60–90 min |
| **Campagna** | 2–5 | Un giocatore umano | Semi-cooperativa competitiva | Più sessioni |
| **Scontro Diretto** | 2 | Ciascuno il proprio esercito | Competitiva tattica | 45–90 min |

---

# Modalità Legends of the Alliance

## Componenti principali

### La mappa modulare
La mappa si compone di **tessere della mappa** esagonali a incastro che rappresentano ambienti interni ed esterni. Le missioni iniziano spesso con una mappa parzialmente rivelata: man mano che gli eroi esplorano, l'app indica quando aggiungere nuove tessere, segnalini e miniature. Le tessere sono identificate da un codice numerico (es. `38A`) utile per assemblarle correttamente.

### Tipi di terreno
Ogni casella sulla mappa può essere delimitata da bordi colorati che ne definiscono il comportamento:

| Indicatore | Tipo | Effetto |
|---|---|---|
| Linea nera spessa | **Muro** | Blocca movimento e linea di vista |
| Linea rossa tratteggiata | **Invalicabile** | Blocca il movimento, non la linea di vista; le caselle sono comunque adiacenti |
| Bordo rosso pieno | **Bloccante** | Blocca movimento e linea di vista; le caselle non sono accessibili |
| Bordo blu | **Difficile** | Costa 1 punto movimento aggiuntivo per entrare |
| Segnalino porta | **Porta** | Blocca movimento e linea di vista finché non viene aperta |

### Schede Eroe
Ogni eroe ha una [scheda Eroe]{.def} fronte/retro: il lato **illeso** e il lato **ferito**, con statistiche potenzialmente diverse. Le statistiche principali sono:

- **Salute** — quanti danni può subire prima di essere sconfitto
- **Tenacia** — quanta fatica può subire volontariamente
- **Velocità** — quanti punti movimento ottiene per azione di movimento
- **Difesa** — i dadi da tirare quando viene attaccato
- **Attributi** (Vigore, Percezione, Tecnica) — dadi usati per le prove di attributo

### Carte Schieramento
Le miniature non-eroe hanno una [carta Schieramento]{.def} che ne indica Salute, Velocità, Difesa, tipo di attacco e capacità speciali. Le carte con **bordo grigio** sono versioni regolari; quelle con **bordo rosso** sono versioni [elite]{.def}, più forti.

Il numero di barre nell'angolo in alto a sinistra indica quante miniature compone quel gruppo.

### Carte Classe Eroe
Ogni eroe ha un mazzo di carte Classe personale. All'inizio si ottengono gratuitamente le carte senza costo in PE; nel corso della campagna si acquisiscono carte sempre più potenti. Le carte Classe rimangono in gioco per tutta la campagna e si ripristinano all'inizio di ogni attivazione dell'eroe.

### Carte Oggetto
Le armi, armature ed equipaggiamenti sono rappresentati da [carte Oggetto]{.def}. Ogni eroe può portare con sé al massimo **1 Armatura**, **2 Armi** e **3 Equipaggiamenti** per missione. Alcune carte Oggetto sono **Modifiche**: si collocano fisicamente sotto un'arma e ne ampliano le capacità; ogni arma ha un numero massimo di modifiche ricevibili, indicato dalle barre nell'angolo in basso a destra.

### Carte Rifornimento
Carte monouso ottenibili esplorando contenitori sulla mappa. La maggior parte viene scartata dopo l'uso e tutte tornano nel mazzo al termine della missione.

### I dadi
Il gioco usa **11 dadi** di colori diversi con funzioni distinte:

| Colore | Tipo | Uso |
|---|---|---|
| Rosso, Blu, Giallo, Verde | Dadi di attacco | Tirare quando si attacca |
| Bianco, Nero | Dadi di difesa | Tirare quando si difende |

I risultati possibili sui dadi sono: **H** (danno), **G** (blocco/difesa), **B** (impulso), **F** (elusione, annulla un B), **E** (schivata, solo dado bianco — l'intero attacco manca), e numeri di **Precisione** (solo attacchi a distanza).

### Segnalini
- **Segnalini Danno** (da 1 e da 5) — tracciare i danni subiti dalle miniature
- **Segnalini Fatica** — tracciare la fatica accumulata dagli eroi
- **Segnalini Attivazione** — segnare se un eroe si è già attivato in questo round (gestiti dall'app in Legends)
- **Segnalini Condizione** — rappresentare condizioni attive su miniature non-eroe
- **Segnalini ID** con adesivi — differenziare gruppi duplicati dello stesso tipo

### Condizioni
Le condizioni sono effetti continui assegnati alle miniature. Un eroe riceve una **carta Condizione** accanto alla propria scheda; le altre miniature ricevono un **segnalino condizione**. Le condizioni principali del gioco base sono:

- **Concentrato** — ottieni un dado verde aggiuntivo al prossimo attacco o prova
- **Stordito** — non puoi attaccare o uscire volontariamente dalla tua casella; un'azione di A rimuove questa condizione
- **Sanguinante** — subisci 1 danno ogni volta che effettui un'azione

## Concetti chiave

### Linea di Vista
Per determinare se una miniatura ha linea di vista fino a un bersaglio, traccia **due linee rette** da un angolo della casella attaccante fino a **due angoli diversi** della casella bersaglio. Se entrambe le linee passano senza intersecare muri, terreno bloccante o caselle occupate da altre miniature (che non siano il bersaglio stesso), la linea di vista esiste.

:::accent
Le miniature adiacenti hanno sempre linea di vista l'una verso l'altra. Una miniatura non blocca la linea di vista su se stessa.
:::

### Precisione
Gli attacchi a distanza possono **mancare** se la precisione totale ottenuta con i dadi è inferiore al numero di caselle di distanza tra l'attaccante e il bersaglio. La distanza si calcola contando il percorso più breve possibile — ignorando terreno invalicabile, miniature e terreno difficile, ma non muri, porte e terreno bloccante.

### Fatica e Tenacia
Gli eroi possono **subire volontariamente fatica** (C) per ottenere punti movimento aggiuntivi (1 C = 1 punto movimento extra, fino a due volte per attivazione) o per attivare capacità con costo in C. Un eroe non può subire fatica volontariamente oltre il suo valore di **Tenacia**. Se un effetto di gioco forza un eroe a superare la propria Tenacia, l'eccesso si converte in danni.

:::indent
Se un eroe supera la propria fatica accumulata quando diventa ferito (il lato ferito ha spesso una Tenacia ridotta), i segnalini fatica in eccesso vengono scartati.
:::

### Impulsi
I risultati **B** ottenuti con i dadi durante un attacco sono gli [impulsi]{.def}. L'attaccante può spenderli per attivare capacità speciali indicate con **B:** sulle proprie carte. Ogni risultato **F** (elusione) del difensore annulla un B dell'attaccante. Un eroe può sempre spendere 1 B per recuperare 1 C.

### Prove di Attributo
Alcune interazioni e missioni richiedono una [prova di attributo]{.def}: si tirano i dadi indicati sulla scheda Eroe per quell'attributo (**Vigore K**, **Percezione J**, **Tecnica I**) e ogni risultato B equivale a un successo. Un solo successo è sufficiente per superare la maggior parte delle prove fisiche; alcune prove nell'app richiedono più successi e ne scalano il risultato.

:::indent
Le miniature elite che devono effettuare prove di attributo ottengono automaticamente un successo. Le miniature regolari falliscono automaticamente.
:::

---

# Modalità Campagna

## Struttura della campagna

Una campagna è una serie di missioni collegate da una trama portante. I giocatori usano gli stessi eroi per tutta la campagna, acquisendo potenziamenti tra una missione e l'altra. La campagna si svolge alternando tre tipi di sezioni, indicate sul **diario della campagna**:

- **Sezione Missione** — si gioca una missione e si raccolgono le ricompense
- **Sezione Migliorie Ribelli** — gli eroi spendono crediti e PE
- **Sezione Migliorie Imperiali** — il giocatore Imperiale spende influenza e PE

La campagna culmina in una **missione finale** che determina il vincitore complessivo.

## Tipi di missione

| Tipo | Descrizione |
|---|---|
| **Missione Introduttiva** | La prima missione della campagna, sempre la stessa |
| **Missione Storia** | Fa avanzare la trama principale; diventa attiva come ricompensa |
| **Missione Secondaria** | Opzionale, scelta dagli eroi tra quelle attive sul tavolo |
| **Missione Obbligatoria** | Imposta da certi eventi o carte Obiettivo; va giocata prima possibile |

## Risorse della campagna

Le risorse si annotano sul **diario della campagna** (quarta di copertina della Guida alla Campagna):

| Risorsa | Chi la usa | Come si spende |
|---|---|---|
| **Crediti** | Eroi (condivisi) | Acquistare carte Oggetto nelle Sezioni Migliorie Ribelli |
| **Punti Esperienza (PE)** | Eroi e giocatore Imperiale | Acquistare carte Classe |
| **Influenza** | Giocatore Imperiale | Acquistare carte Obiettivo nelle Sezioni Migliorie Imperiali |

## Componenti aggiuntivi della campagna

### Carte Missione
Esistono tre tipi: **Missioni Secondarie** (rosse per eroi specifici, verdi e grigie generiche), **Missioni Storia** e **Missioni Obiettivo** (usate dal giocatore Imperiale). Le carte Missione Storia non si pescano casualmente: diventano attive solo come ricompense.

### Carte Obiettivo
Il giocatore Imperiale le acquista in segreto con influenza durante le Sezioni Migliorie Imperiali. Alcune creano missioni secondarie attive, altre hanno effetti immediati, altre vanno tenute in mano per effetti futuri. Il loro contenuto non viene rivelato agli eroi.

### Alleati e Nemici
Gli [alleati]{.def} sono miniature Ribelli speciali (come Luke Skywalker) ottenibili come ricompensa. Un alleato regolare che sopravvive a una missione viene promosso alla versione elite. Gli **alleati Imperiali** si chiamano [nemici]{.def} e seguono le stesse regole. In ogni missione si può schierare al massimo **1 gruppo alleato**.

### Indicatore di Round e Minaccia
Un componente fisico che traccia il **numero di round corrente** e il livello di **minaccia** del giocatore Imperiale. La minaccia aumenta ogni Fase di Status e viene spesa per schierare e rinforzare le miniature Imperiali.

## Vincere la campagna
Vince chi conquista la missione finale. Le ricompense ottenute nelle missioni precedenti influenzano quale finale si gioca e con quali vantaggi ci si arriva.

---

# Modalità Scontro Diretto

## Struttura di uno scontro diretto

Uno scontro diretto è una partita competitiva **solo per due giocatori** in cui ciascuno costruisce un esercito di miniature e lo schiera contro l'avversario su una mappa dedicata. L'obiettivo è raggiungere **40 punti vittoria (PV)** prima dell'avversario.

## Comporre un esercito

Ogni giocatore costruisce il proprio esercito rispettando queste regole:

**Carte Schieramento:**
- Costo totale ≤ 40 punti schieramento
- Tutte le carte devono avere la stessa **affiliazione** (Ribelle, Imperiale o Mercenari — che si considera Imperiale)
- Massimo **1 copia** di ogni carta unica (contrassegnata da •)
- Massimo **2 copie** di ogni carta elite (rossa)
- Massimo **4 copie** di ogni carta regolare (grigia)
- Le carte **Miglioria Scontro Diretto** non hanno miniatura corrispondente ma forniscono effetti speciali; alcune permettono di includere più affiliazioni

**Carte Comando:**
- Esattamente **15 carte** nel mazzo
- Costo totale ≤ 15
- Ogni carta riporta un'**icona di limite** che indica quante copie si possono includere

## Carte Comando
Le [carte Comando]{.def} sono usate esclusivamente negli scontri diretti. Ogni giocatore mantiene la propria mano segreta. Molte carte specificano una miniatura o un tratto nella restrizione superiore: solo quella miniatura può usarle. Se la carta riporta A, la miniatura deve spendere un'azione per risolvere la capacità.

## Punti Vittoria
I PV si guadagnano da due fonti:

- **Miniatura sconfitta** — l'avversario guadagna PV pari al costo di schieramento di quel gruppo
- **Obiettivi della missione** — specificati sulla carta Missione a Scontro Diretto

:::accent
Se tutte le miniature di un giocatore sono sconfitte, quel giocatore perde immediatamente indipendentemente dai PV accumulati.
:::

## Missioni a Scontro Diretto
Ogni mappa ospita due missioni diverse (contrassegnate A e B). Il giocatore con l'iniziativa pesca una carta dal proprio mazzo delle Missioni a Scontro Diretto per determinare quale missione si gioca. Il mazzo è composto da una copia di ogni carta Missione a Scontro Diretto posseduta.

## Differenze chiave rispetto alle altre modalità

| Aspetto | Scontro Diretto |
|---|---|
| **Fatica** | Si converte direttamente in danni; il giocatore può scartare una carta Comando per evitarne 1 |
| **Riposo** | Non disponibile |
| **Attacco** | Solo 1 azione di attacco per attivazione (include azioni speciali con attacchi) |
| **Eroi** | Si usano le carte Schieramento, non le schede Eroe; vengono rimossi dalla mappa se sconfitti |
| **Contenitori** | Non forniscono carte Rifornimento; gli effetti sono descritti nelle regole della missione |

:::glossary
[scheda Eroe]: Componente fronte/retro che rappresenta un eroe: il lato illeso è quello iniziale, il lato ferito si usa dopo la prima sconfitta nella missione. Riporta Salute, Tenacia, Velocità, Difesa e attributi.

[carta Schieramento]: Carta che rappresenta un gruppo di miniature non-eroe (o un eroe negli scontri diretti). Riporta tutte le statistiche e le capacità di ogni miniatura del gruppo.

[elite]: Versione potenziata di una miniatura, identificata dal bordo rosso della carta Schieramento. Ha più Salute e capacità migliori rispetto alla versione regolare (bordo grigio).

[impulsi]: Risultati B ottenuti sui dadi durante un attacco. Si spendono per attivare capacità speciali; ogni F del difensore ne annulla uno.

[prova di attributo]: Tiro di dadi che verifica se una miniatura supera una sfida legata a un attributo (Vigore, Percezione, Tecnica). Ogni B ottenuto è un successo.

[alleati]: Miniature Ribelli speciali ottenibili come ricompensa in una campagna. Funzionano come miniature aggiuntive dalla parte degli eroi e seguono le regole delle carte Schieramento. Un alleato regolare sopravvissuto viene promosso alla versione elite.

[nemici]: Alleati Imperiali — seguono le stesse regole degli alleati ma sono dalla parte del giocatore Imperiale. Possono essere messi in gioco come gruppo aperto in qualsiasi missione una volta ottenuti come ricompensa.

[carte Comando]: Carte usate esclusivamente negli scontri diretti. Forniscono capacità speciali che si possono giocare in momenti specifici della partita. Ogni giocatore ha un mazzo personale di 15 carte.

[carte Oggetto]: Armi, armature ed equipaggiamenti che gli eroi portano con sé nelle missioni. Ogni eroe può portarne al massimo 1 Armatura, 2 Armi e 3 Equipaggiamenti per missione.

[carta Schieramento]: Carta che rappresenta un gruppo di miniature non-eroe. Riporta Salute, Velocità, Difesa, tipo di attacco, capacità e dimensione del gruppo.
:::
