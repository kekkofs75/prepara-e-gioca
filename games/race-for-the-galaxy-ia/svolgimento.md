# Struttura del Round

Ogni round segue questa sequenza:

- Tutti i giocatori scelgono **segretamente e simultaneamente** una carta azione dal proprio set di 7 e la posizionano coperta davanti a sé.
- Quando tutti sono pronti, si rivelano contemporaneamente le carte scelte.
- Si eseguono le **fasi corrispondenti nell'ordine numerico** (I → V), saltando quelle che nessuno ha scelto.
- Alla fine del round, ogni giocatore scarta fino a un massimo di **10 carte in mano**, poi riprende la propria carta azione.

:::accent
Ogni fase ha un'**azione** (eseguita da tutti i giocatori) e un **bonus** (riservato solo a chi ha scelto quella fase). Se più giocatori scelgono la stessa fase, l'azione si esegue comunque una sola volta, ma tutti chi l'ha scelta ricevono il bonus.
:::

---

# Le Cinque Fasi

## I — Esplora (Explore)

**Azione:** Pesca 2 carte dalla riserva, tienine 1, scarta l'altra.

Tutte le pescate avvengono prima che chiunque scarti.

**Bonus:**
- *Explore +5:* pesca 5 carte aggiuntive (7 in totale), tienine 1.
- *Explore +1,+1:* pesca 1 carta aggiuntiva (3 in totale), tienine 2.

I poteri di alcune carte nel tableau possono aumentare ulteriormente il numero di carte pescate o tenute.

---

## II — Sviluppa (Develop)

**Azione:** Scegli uno sviluppo dalla mano, posizionalo coperto davanti a te (o non giocare nulla). Tutti rivelano simultaneamente, poi pagano.

Per **pagare** uno sviluppo, scarta dalla mano un numero di carte pari al **costo** stampato nel simbolo a rombo (da 1 a 6).

**Bonus:** scarta 1 carta in meno del costo normale.

:::indent
Non puoi avere due copie dello stesso sviluppo nel tuo tableau. Se il costo scende sotto 0 grazie a poteri, si considera 0 (nessun rimborso).
:::

I [sviluppi a costo 6]{.def} hanno un valore VP variabile (simbolo `?`) calcolato a fine partita.

---

## III — Colonizza (Settle)

**Azione:** Scegli un mondo dalla mano, posizionalo coperto davanti a te (o non giocare nulla). Tutti rivelano simultaneamente, poi pagano o conquistano.

**Mondi normali** (cerchio nero): paga carte pari al costo indicato.

**Mondi militari** (cerchio rosso): non si pagano — devi [conquistarli]{.def}. Il tuo [Militare]{.def} totale deve essere ≥ alla difesa del mondo. Se sì, lo piazzi gratis.

:::indent
Un *Contact Specialist* permette di pagare un mondo militare (tranne Alien militari) come se fosse normale, al costo uguale alla difesa –1. Il Militare e i pagamenti non si combinano mai.
:::

**Mondi windfall** (alone colorato attorno al cerchio): quando li colonizzi, prendi subito una carta coperta dalla riserva e posizionala sopra il mondo — è il suo [bene windfall]{.def} iniziale.

**Bonus:** pesca 1 carta dopo aver piazzato il mondo.

**Tipi di beni** in gioco:

| Tipo | Colore |
|---|---|
| Tecnologia Aliena | Giallo |
| Geni | Verde |
| Elementi Rari | Marrone |
| Novelty | Blu |

---

## IV — Consuma (Consume)

**Azione:** Devi usare tutti i tuoi poteri Consume (se ne hai) per scartare beni e ottenere **gettoni VP** e/o carte.

Il consumo è obbligatorio. Puoi scegliere l'ordine in cui invocare i poteri, ma una volta avviato un potere devi completarlo prima di passare al successivo.

I beni si scartano coperti. Ogni bene si applica a un solo potere Consume.

**Bonus:**
- *Consume: Trade ($):* prima di consumare, vendi 1 bene pescando carte in base al tipo (Aliena: 5; Geni: 4; Elementi Rari: 3; Novelty: 2). Solo chi ha scelto questa azione può vendere.
- *Consume: 2x VP:* raddoppia i gettoni VP ottenuti dai poteri Consume (non altri effetti, non VP da scarto di carte dalla mano).

---

## V — Produci (Produce)

**Azione:** Posiziona 1 bene (una carta coperta dalla riserva) su ogni [mondo di produzione]{.def} nel tuo tableau che non ne abbia già uno.

Un mondo non può avere più di 1 bene. Il tipo di bene corrisponde al colore del cerchio pieno sul mondo.

**Bonus:** produci un bene su uno dei tuoi mondi windfall che non ne abbia uno (se possibile).

---

# Fine del Round e Gestione delle Carte

Dopo che tutte le fasi scelte sono state eseguite:

- Scarta dalla mano fino a **10 carte** (limite di mano).
- Riprendi la carta azione che avevi giocato.
- Se la riserva si esaurisce, rimescola immediatamente gli scarti per formare una nuova riserva.

---

# Gestione dei Tempi

La maggior parte delle azioni avviene simultaneamente. Nei casi in cui l'ordine è rilevante (riserva quasi esaurita, gettoni VP sul punto di finire, colonizzazioni a fine partita), si risolve in senso orario a partire dal giocatore con il **mondo di partenza con numero più basso**.

---

---

# ![puzzle]{.icon} Expansion and Brinkmanship (Set 1–3)

**Variante 2 giocatori esperti:** ogni giocatore usa un set completo di **9 carte azione** e ne sceglie **2** per round. Le fasi scelte due volte dallo stesso giocatore si eseguono in sequenza (con bonus in entrambe).

**Obiettivi (opzionale):** al termine di certe fasi, chi soddisfa per primo una condizione "Primo" ottiene la tessera (3 VP). Le tessere "Più" (5 VP) vengono assegnate a chi soddisfa la condizione nella misura maggiore e possono cambiare di mano nel corso della partita.

**Conquiste (opzionale, Set 2):** durante la fase Colonizza, un giocatore con un potere di conquista può tentare di sottrarre un mondo militare già colonizzato da un altro giocatore. La conquista riesce se il proprio Militare è ≥ al Militare del difensore + la difesa del mondo bersaglio.

**Prestigio (Set 3):** alcune carte forniscono gettoni prestigio quando vengono piazzate. Il giocatore con il maggior prestigio all'inizio di ogni round ottiene 1 VP e pesca 1 carta (se ha prestigio sul segnalino Prestige Lead). In alternativa, può usare la propria carta azione prestigio/ricerca per ottenere un bonus speciale di fase o cercare nel mazzo una carta di una categoria specifica.

:::glossary
[sviluppi a costo 6]: Sviluppi con simbolo `?` come valore VP. Il loro punteggio finale dipende dalla composizione del tableau (es. numero di mondi di un certo tipo, militare totale, ecc.) secondo le istruzioni stampate sulla carta.

[conquistarli]: Piazzare un mondo militare senza pagarlo. Richiede che il tuo Militare totale sia ≥ alla difesa del mondo (numero nel cerchio rosso).

[Militare]: Valore numerico derivato da poteri di carte nel tableau. Serve per conquistare mondi militari durante la fase Colonizza. Dura fino alla fine della fase.

[mondo di produzione]: Mondo con un cerchio colorato pieno. Durante la fase Produci riceve automaticamente un bene del colore corrispondente, se non ne ha già uno.

[bene windfall]: Carta presa coperta dalla riserva e posizionata su un mondo con alone colorato quando viene colonizzato, o su un mondo windfall durante la fase Produci (se si sceglie il bonus o si possiede un potere apposito).
:::
