# Struttura del Round

Ogni round si compone di tre fasi, sempre nello stesso ordine:

1. **Fase dei Giocatori** — ogni giocatore attiva i propri Sopravvissuti a turno
2. **Fase degli Zombie** — tutti gli zombie si attivano e si generano nuovi zombie
3. **Fase Finale** — si rimuovono i segnalini Rumore e passa il segnalino primo giocatore

---

# Fase dei Giocatori

A partire dal primo giocatore, ognuno attiva i propri Sopravvissuti uno alla volta, nell'ordine che preferisce. Si procede in senso orario.

Ogni Sopravvissuto dispone di **3 Azioni** per turno al [Livello di Pericolo]{.def} Blu. Raggiunto il Livello Giallo ottiene una quarta Azione. Alcune Abilità possono concedere azioni extra.

## Azioni disponibili

Salvo dove specificato, ogni azione può essere eseguita più volte nella stessa attivazione.

**Movimento**
Il Sopravvissuto si sposta in una [Zona]{.def} adiacente che condivide almeno un lato (non gli angoli: non ci si muove in diagonale). Non si può attraversare muri esterni o porte chiuse. Se nella zona di partenza ci sono zombie, si deve spendere **1 Azione extra per ogni zombie presente** per poter uscire. Entrare in una zona con zombie termina immediatamente l'azione di movimento.

**Cercare** *(1 volta per turno, solo in edifici senza zombie)*
Pesca una carta dal mazzo Equipaggiamento e aggiungila al tuo inventario o scartala. È possibile riorganizzare liberamente l'inventario dopo aver cercato.

> Quando il mazzo Equipaggiamento si esaurisce, rimescola tutti gli scarti (escluse le carte Cripta come Inferno e Balestra Orchesca) per formare un nuovo mazzo.

**Aprire una porta**
Richiede un'arma da Mischia con il simbolo apri-porta. Se l'arma richiede un tiro, lancia i dadi indicati: la porta si apre se almeno un risultato eguaglia o supera il valore di Precisione. Se è la prima volta che quell'edificio viene aperto, si genera immediatamente uno zombie in ogni zona dell'edificio (vedi Generazione negli Edifici).

:::indent
Aprire una porta non è un'Azione in Mischia: non beneficia di bonus Mischia, armi Doppie o Abilità di combattimento. Si usa solo il valore base di Dadi dell'arma.
:::

**Riorganizzare / Scambiare**
Riorganizza le carte del tuo inventario, oppure scambia simultaneamente qualsiasi numero di carte con un altro Sopravvissuto nella stessa zona. Lo scambio non deve essere equo: puoi cedere tutto senza ricevere nulla.

> È sempre possibile scartare carte dall'inventario gratuitamente, in qualsiasi momento — anche durante il turno di un altro giocatore.

**Azione di Combattimento**
Attacca gli zombie usando l'equipaggiamento impugnato in mano. Esistono tre tipi:

:::indent
- **Azione in Mischia** — arma da Mischia (Gittata 0), colpisce solo nella propria zona. I colpi mancati non causano Fuoco Amico.
- **Azione a Distanza** — arma a Distanza (Gittata 1+), mira a una zona visibile entro gittata. I colpi mancati possono colpire Sopravvissuti nella zona bersaglio ([Fuoco Amico]{.def}).
- **Azione di Magia** — incantesimo da Combattimento, funziona come l'Azione a Distanza.
:::

Per tutti i tipi: lancia i dadi indicati dall'arma. Ogni risultato ≥ al valore di Precisione è un **successo** e infligge i Danni indicati su un singolo bersaglio. I successi vengono assegnati agli zombie secondo l'[Ordine di Priorità dei Bersagli]{.def}.

Se si impugnano **due armi identiche** con il simbolo Doppia, si possono usare entrambe con una singola azione (le armi a distanza e gli incantesimi devono mirare alla stessa zona).

**Azione di Incantamento**
Usa un incantesimo senza caratteristiche di combattimento (es. Guarigione, Velocità). Risolvi l'effetto descritto sulla carta. Il bersaglio deve essere entro la Linea di Vista.

**Prendere o attivare un Obiettivo**
Prendi un segnalino Obiettivo o attiva un Obiettivo nella tua zona. Gli effetti sono descritti nella missione.

**Fare Rumore**
Colloca un segnalino Rumore nella tua zona per attirare deliberatamente gli zombie.

**Non fare niente**
Il Sopravvissuto termina il turno anticipatamente. Le Azioni rimanenti vanno perdute.

---

## Combattimento: dettagli

**Ordine di Priorità dei Bersagli** (per attacchi a Distanza e di Magia)

| Priorità | Tipo |
|---|---|
| 1 | Deambulante |
| 2 | Brute / Abominio (a scelta del tiratore) |
| 3 | Corridore |
| 4 | Necromante |

I successi vengono assegnati partendo dal bersaglio con priorità più alta finché non sono tutti eliminati, poi si passa al successivo. Se più bersagli condividono la stessa priorità, i giocatori scelgono quali colpire.

**Fuoco Amico:** quando si spara su una zona con Sopravvissuti, ogni *insuccesso* colpisce automaticamente un Sopravvissuto in quella zona (a scelta dei giocatori). Ogni colpo infligge i Danni dell'arma. Sono consentiti tiri Armatura. Non si applica alle armi da Mischia.

**Armi ricaricabili:** alcune armi (es. Balestra a Mano) devono essere ricaricate dopo ogni uso con un'Azione apposita. Alla Fase Finale si ricaricano gratuitamente.

**Fuoco di Drago:** scarta una carta Bile di Drago per collocare una pozza di Bile nella tua zona o in una adiacente (Gittata 0–1). Poi scarta una Torcia per incendiarla: ogni personaggio nella zona viene eliminato istantaneamente, indipendentemente da Ferite o Armatura. Il Fuoco di Drago non genera Rumore e non può essere prevenuto dai tiri Armatura. Chi lancia la Torcia ottiene tutti i punti esperienza.

---

## Esperienza e Livelli di Pericolo

Per ogni zombie ucciso il Sopravvissuto guadagna **1 punto esperienza** (5 per un Abominio). Man mano che avanza sulla Barra di Pericolo sblocca nuove Abilità.

| Livello | Punti esperienza | Bonus |
|---|---|---|
| Blu | 0–6 | Abilità di partenza |
| Giallo | 7–18 | +1 Azione |
| Arancio | 19–42 | Scelta tra 2 Abilità |
| Rosso | 43+ | Scelta tra 3 Abilità |

:::accent
Più alto è il Livello di Pericolo del Sopravvissuto più esperto in gioco, più zombie vengono generati ogni turno. La forza acquisita ha un prezzo.
:::

---

# Fase degli Zombie

Una volta che tutti i giocatori hanno attivato i propri Sopravvissuti, gli zombie agiscono autonomamente.

## Passo 1 — Attivazione

Prima si risolvono tutti gli **Attacchi**, poi tutti i **Movimenti**.

**Attacco:** ogni zombie nella stessa zona di almeno un Sopravvissuto attacca. L'attacco ha sempre successo, non richiede dadi e infligge **1 Ferita**. I giocatori distribuiscono le Ferite tra i Sopravvissuti nella zona come preferiscono.

Un Sopravvissuto viene eliminato quando raggiunge **3 Ferite**. La miniatura viene rimossa e l'equipaggiamento scartato.

**Tiri Armatura:** i Sopravvissuti con un'armatura nello slot Corpo possono lanciare un dado per ogni Ferita ricevuta; ogni risultato ≥ al valore di Armatura nega una Ferita. Uno Scudo in mano consente di ripetere il tiro Armatura una volta. Le Ferite degli Abomini e il Fuoco di Drago non possono essere negate dall'Armatura.

**Movimento:** gli zombie che non hanno attaccato si muovono di 1 zona verso i Sopravvissuti. Seguono queste priorità:
1. La zona con Sopravvissuti visibili che contiene il maggior numero di [segnalini Rumore]{.def} (ogni Sopravvissuto conta come 1 segnalino Rumore).
2. In assenza di Sopravvissuti visibili, la zona più rumorosa.

Se esistono percorsi di uguale lunghezza, gli zombie si dividono in gruppi uguali seguendo tutti i percorsi. Se necessario si aggiungono miniature zombie per mantenere i gruppi identici.

Gli zombie ignorano i muri ma si fermano alle porte chiuse (si muovono *come se* le porte fossero aperte per calcolare il percorso, ma fisicamente si fermano). Le porte chiuse a chiave li bloccano sempre.

I **Corridori** hanno 2 Azioni per attivazione: dopo che tutti gli zombie hanno risolto la prima azione, i Corridori ne eseguono una seconda (attacco se c'è qualcuno, altrimenti movimento).

**Necromanti:** seguono regole speciali — invece di attaccare, si muovono verso la Zona di Generazione più vicina che non sia quella della loro entrata, ignorando i Sopravvissuti. Quando raggiungono una Zona di Generazione, fuggono dal tabellone. Se fuggono e ci sono già **6 segnalini Zona di Generazione** sul tabellone, la partita è persa.

Quando un Necromante compare, viene immediatamente piazzato un segnalino **Zona di Generazione Necromante** nella sua zona d'entrata e si risolve subito una generazione su di esso. Da quel momento quella zona genera zombie normalmente. Uccidere un Necromante permette di rimuovere una Zona di Generazione a scelta.

## Passo 2 — Generazione

Per ogni Zona di Generazione attiva, pesca una carta Zombie e leggi la riga corrispondente al **Livello di Pericolo più alto** tra i Sopravvissuti ancora in gioco. Colloca il numero e il tipo di zombie indicati in quella zona. Si procede sempre in senso orario a partire dalla stessa zona.

**Carte speciali:**
- *Attivazione Extra:* nessun zombie viene generato, ma tutti gli zombie del tipo indicato eseguono immediatamente un'attivazione extra (nessun effetto al Livello Blu).
- *Doppia Generazione:* nessun zombie in quella zona; la zona successiva viene generata pescando due carte invece di una.

**Penuria di miniature:** se non ci sono abbastanza miniature del tipo richiesto, si piazzano quelle disponibili e poi tutti gli zombie di quel tipo ottengono un'Attivazione Extra.

**Generazione negli edifici:** quando si apre un edificio per la prima volta, si genera uno zombie in ogni zona dell'edificio (pescando una carta Zombie per zona). Gli edifici già aperti all'inizio della partita non generano zombie.

---

# Fase Finale

- Rimuovi tutti i **segnalini Rumore** dal tabellone.
- Passa il segnalino **primo giocatore** al giocatore successivo in senso orario.
- Inizia un nuovo round.

---

# Cripte

Le Cripte sono zone speciali accessibili tramite porte colorate. Funzionano come zone degli edifici ma con alcune differenze: non è possibile Cercare al loro interno, non si generano zombie quando vengono rivelate, e non esiste Linea di Vista tra la Cripta e la zona a essa collegata (anche con la porta aperta). Un Sopravvissuto può spendere un'Azione per prendere un artefatto della Cripta al loro interno (non è un'Azione di Cercare).

---

# ![puzzle]{.icon} Wulfsburg

## Lupi Zombie

I Lupi Zombie hanno **3 Azioni** per turno. Dopo che tutti gli zombie (inclusi Corridori e Lupi Zombie) hanno completato la prima azione, Corridori e Lupi Zombie eseguono una seconda attivazione. Poi i Lupi Zombie eseguono una terza attivazione. In entrambi i casi: attaccano se c'è un Sopravvissuto nella loro zona, altrimenti si muovono.

## Licabomini

I Licabomini sono Abomini con **3 Azioni** per turno, gestiti esattamente come i Lupi Zombie. Le ferite da Licabominio non possono essere prevenute dall'Armatura. Per ucciderli servono 3 Danni o il Fuoco di Drago.

## Ordine di Priorità dei Bersagli aggiornato

| Priorità | Tipo | Azioni | Danni min. | PE |
|---|---|---|---|---|
| 1 | Deambulante | 1 | 1 | 1 |
| 2 | Brute / Abominio / Licabominio | 1/1/3 | 2/3/3 | 1/5/5 |
| 3 | Corridore | 2 | 1 | 1 |
| 4 | Lupi Zombie | 3 | 1 | 1 |
| 5 | Necromante | 1 | 1 | 1 |

## Torri

Le tessere torre contengono zone edificio e zone strada separate da **bastioni**. I bastioni non possono essere attraversati ma non bloccano la Linea di Vista. Un personaggio su una torre vede al di sopra degli edifici fino alle zone oltre di essi; può tirare sopra una zona edificio (che conta ai fini della gittata ma non riceve la linea di vista diretta). Non esiste Linea di Vista tra le zone torre delimitate dai bastioni e le zone edificio adiacenti, nemmeno con la porta aperta.

## Equipaggiamento Magico

Le carte Equipaggiamento Magico funzionano come normali carte Equipaggiamento ma richiedono determinati Livelli di Pericolo per poter essere usate (indicati dalle gemme in cima alla carta). Non possono essere assegnate allo slot Corpo, salvo che si tratti di armature.

## Modalità Ultrarossa

Quando un Sopravvissuto raggiunge il Livello Rosso, l'indicatore torna a "0" e il Sopravvissuto rimane al Livello Rosso mantenendo tutte le Abilità. Continua ad accumulare esperienza e a sbloccare le Abilità ancora mancanti nei livelli successivi. Una volta esaurite tutte le Abilità disponibili, ad ogni nuovo raggiungimento del Livello Arancio e Rosso il giocatore sceglie liberamente un'Abilità qualsiasi tra quelle di Zombicide: Black Plague (escluse quelle con parentesi quadre come "Parte con [Equipaggiamento]").

:::glossary
[Livello di Pericolo]: Indicatore di avanzamento del Sopravvissuto, diviso in quattro gradini (Blu, Giallo, Arancio, Rosso). Determina le Abilità sbloccate e il numero di zombie generati ogni turno.

[Zona]: Unità spaziale del tabellone. In un edificio è una stanza; in strada è l'area delimitata da segni lineari e muri.

[Ordine di Priorità dei Bersagli]: Regola che determina quali zombie vengono colpiti per primi da un attacco a distanza o di magia. Si parte dal tipo con priorità più bassa (Deambulante = 1) e si esaurisce prima di passare al successivo.

[Fuoco Amico]: Quando si spara su una zona con Sopravvissuti, ogni dado fallito colpisce automaticamente un Sopravvissuto a scelta dei giocatori, infliggendo i danni dell'arma.

[segnalini Rumore]: Segnalini triangolari che attraggono gli zombie. Prodotti da azioni rumorose (aprire porte con certi strumenti, usare equipaggiamento rumoroso). Rimossi alla Fase Finale. Ogni miniatura Sopravvissuto conta sempre come 1 segnalino Rumore.
:::
