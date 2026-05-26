# Componenti di Gioco

## Tabellone e Mappa

La mappa è composta da **6 tessere modulari** che formano un arco. Esistono tre tipi di caselle:

| Tipo | Descrizione |
|------|-------------|
| **Pianeta** | Caselle principali dove si effettuano azioni di mercato, incontri e consegne. |
| **Boa di navigazione** | Caselle di transito nello spazio aperto, con il proprio mazzo degli incontri. |
| **Maelstrom** | Casella centrale unica: ferma il movimento di chiunque vi entri. |

Le caselle sono **adiacenti** se collegate da un percorso diretto. Su alcuni pianeti compare un'icona fazione che indica le ricompense più comuni degli incontri in quel luogo.

---

# Carte Banca Dati

La [banca dati]{.def} è un mazzo di **53 carte numerate** che non viene mai mescolato. Va conservato sempre in ordine numerico (carta #1 in cima, #92 in fondo). Quando un effetto richiede una carta specifica, sfoglia il mazzo dal retro fino a trovarla. Se più carte hanno lo stesso numero (indicate da più pallini sul retro), pescane una a caso tra quelle con quel numero.

Le carte banca dati contengono: contatti, lavori da tentare, carichi di partenza e personaggi reclutabili come equipaggio.

---

# Carte Mercato

Esistono **6 mazzi del mercato** distinti, ciascuno con un retro diverso:

| Mazzo | Contenuto | Carte |
|-------|-----------|-------|
| Attrezzatura e Modifiche | Potenziamenti per combattimento, salute, scafo, iperguida | 15 |
| Carichi | Merci da consegnare per crediti (e a volte fama) | 10 |
| Lavori | Missioni segrete; include alcuni membri dell'equipaggio | 14 |
| Lusso | Carte costose che garantiscono sempre modi per ottenere fama | 11 |
| Navi | Navi acquistabili durante la partita | 9 |
| Taglie | Bersagli da cacciare; include lavori per attaccare altri giocatori | 11 |

Ogni mazzo è sempre tenuto con la carta in cima a faccia in su. I [tratti]{.def} su alcune carte (es. ILLEGALE, ARMA, ARMATURA) non hanno effetto intrinseco ma possono essere richiamati da altre capacità.

---

# Schede Nave

Ogni scheda nave è fronte/retro:

- **Lato sinistro — Obiettivo della Nave:** mostra l'obiettivo da completare per ottenere punti fama e sbloccare la capacità speciale della nave.
- **Lato destro:** mostra la capacità speciale sbloccata dopo aver completato l'obiettivo.

La scheda mostra i valori di: iperguida (⇶), combattimento navale, scafo, e gli slot disponibili (Carico, Modifica, Equipaggio). Ogni slot contiene una carta alla volta.

---

# Carte Personaggio

Ogni carta personaggio è fronte/retro:

- **Lato "Obiettivo Personale":** mostra le abilità del personaggio, la carta banca dati di partenza, la reputazione iniziale e l'obiettivo da completare per guadagnare 1 punto fama.
- **Lato "Capacità":** sbloccato dopo aver completato l'obiettivo personale; sostituisce l'obiettivo con una nuova capacità permanente.

---

# Plancia Giocatore

La plancia contiene:

- L'**indicatore di fama** con il segnapunti (da 0 a 12).
- I **quattro indicatori di reputazione**, uno per ciascuna fazione (Hutt, Sindacato, Imperiale, Ribelle), ciascuno con tre caselle: positiva (▲), neutrale (─), negativa (▼).
- Gli **slot** per lavori e taglie attivi.

---

# Segnalini Pattuglia

I segnalini pattuglia sono suddivisi in quattro fazioni e **quattro livelli** di difficoltà crescente (da 1 a 4), indicati dai pallini bianchi sul retro. Ogni segnalino mostra il valore di combattimento della nave e la ricompensa per abbatterlo.

Le pattuglie sono sempre presenti sulla mappa (una per fazione). Quando una viene distrutta, viene immediatamente sostituita pescando il segnalino di livello successivo dalla pila della fazione corrispondente.

:::accent
Le pattuglie si muovono **solo** dopo che un giocatore ha **comprato** una carta dal mercato, non quando ne scarta una. La pattuglia si muove verso il giocatore che ha appena comprato.
:::

---

# Segnalini Contatto

I segnalini contatto sono posizionati sui pianeti e hanno tre classi (grigia, verde, gialla) indicata dai pallini colorati sul retro. La classe è usata dalle taglie per identificare il bersaglio. Ogni segnalino rimanda a una carta banca dati specifica che descrive il personaggio incontrato.

Alcuni contatti possono essere **guardati segretamente** grazie a certe capacità: fai scorrere il segnalino fuori dalla mappa, guardalo senza mostrarlo agli altri. Puoi riferire agli altri giocatori ciò che hai visto (anche mentendo), ma non puoi mostrare fisicamente il segnalino.

---

# Reputazione

La reputazione nei confronti di ciascuna fazione può essere in tre stati:

| Stato | Effetto |
|-------|---------|
| **Positiva (▲)** | La fazione ti considera alleato. Puoi muoverti liberamente attraverso le sue pattuglie e ricevi benefici dagli incontri legati a quella fazione. |
| **Neutrale (─)** | Nessun beneficio né penalità. |
| **Negativa (▼)** | La fazione ti considera nemico. Sei obbligato a incontrare le sue pattuglie se presenti nella tua casella. |

La reputazione si sposta di una casella alla volta. Non può superare il massimo positivo né scendere sotto il minimo negativo.

> **Sindacati del Crimine:** i sindacati criminali (Sole Nero, Pyke, Alba Cremisi) sono raggruppati in un'unica fazione "Sindacato". Tradire uno solo equivale a tradirli tutti: la reputazione è condivisa verso l'intero mondo criminale.

---

# Carte IA (Partita in Solitario)

Le **10 carte IA** guidano il personaggio avversario in solitario. Ogni carta descrive tre passi (Pianificazione, Azioni, Incontro) con voci prioritizzate. Il giocatore dell'IA:

- Si muove sempre verso il segnalino obiettivo più vicino.
- Compra carte solo su un pianeta e solo se ha slot vuoti e crediti sufficienti.
- Non usa le capacità delle carte (eccetto i bonus ai valori di nave e personaggio).
- Non completa obiettivi personali né obiettivi della nave.
- Può attraversare il Maelstrom liberamente come una boa di navigazione.

---

# Obiettivi Personali e della Nave

Ogni personaggio ha un **obiettivo personale** sul fronte della sua carta. Completandolo ottieni 1 punto fama e giri la carta per ottenere una nuova capacità permanente. Per tracciare i progressi verso obiettivi che richiedono azioni ripetute, posiziona segnalini obiettivo sulla carta.

Analogamente, ogni nave comprata durante la partita mostra un **obiettivo della nave** sul lato sinistro della scheda. Completandolo ottieni punti fama e giri la scheda per sbloccare la capacità speciale della nave (e il suo nome leggendario).

---

# Taglie sull'Equipaggio

Se possiedi una taglia su un tuo membro dell'equipaggio, puoi scontarti con lui come incontro durante il tuo passo dell'incontro (il membro usa il valore di combattimento sulla carta taglia). Se sei in possesso di una taglia sull'equipaggio di un *altro* giocatore, puoi scontarti con lui solo se ti trovi nella sua casella: quel giocatore sceglie se proteggere o meno il membro.

---

# ![puzzle]{.icon} Affari in Sospeso

## Schede Ambizione

Ogni scheda ambizione contiene cinque sezioni: istruzioni di preparazione, panoramica dell'obiettivo, capacità aggiuntive, obiettivi da soddisfare per vincere, indicatore dei progressi (caselle per i segnalini obiettivo). Gli obiettivi sono preceduti da simboli che indicano quando possono essere completati (trattino, numero, infinito o fama).

## Segnalini Debito

I segnalini debito rappresentano una promessa di favore futuro. Sono scambiabili come i crediti in qualsiasi momento. Restituire il segnalino debito di un altro giocatore obbliga quest'ultimo a concedere un favore a tua scelta.

## Carte con Risorse Rotanti

Alcune carte mercato dell'espansione hanno risorse su entrambe le estremità (indicate da una freccia nell'angolo). Quando compri o ottieni una di queste carte, paghi il costo della **risorsa di partenza** e inserisci la carta nello slot appropriato con quella risorsa visibile. Per "ruotare" la carta (come richiesto da certe capacità), girala di 180° in modo che l'altra risorsa sia orientata verso l'alto.

:::glossary
[banca dati]: Mazzo di 53 carte numerate mai mescolato, conservato in ordine crescente. Fonte di personaggi reclutabili, lavori e contatti.

[tratti]: Parole in stampatello su alcune carte mercato (es. ILLEGALE, ARMA) che non hanno effetto autonomo ma possono essere richiamati da altre capacità o regole.
:::
