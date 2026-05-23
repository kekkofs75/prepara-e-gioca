# Plance Giocatore

Ogni plancia Giocatore riporta le seguenti informazioni:

| # | Elemento | Descrizione |
|---|----------|-------------|
| 1 | **Nome del Mago** | Il nome del Mago delle Brecce |
| 2 | **Preparazione delle Brecce** | Configurazione iniziale delle Brecce (diversa per ogni Mago) |
| 3 | **Mano iniziale** | Le 5 carte con cui si inizia la partita |
| 4 | **Mazzo iniziale** | Le 5 carte del mazzo iniziale (da disporre in ordine, da sinistra in cima a destra più in fondo) |
| 5 | **Numero giocatore** | Spazio per il segnalino Numero giocatore a cui le carte Ordine di turno faranno riferimento |
| 6 | **Punti vita** | Spazio per i segnalini Vita |
| 7 | **Abilità** | [Abilità Unica]{.def} del Mago: dopo aver posto 1 segnalino Carica su ogni spazio (anche subito dopo aver piazzato l'ultimo) è possibile attivarla; dopo averla attivata, rimuovere tutti i segnalini |
| 8 | **Mazzo di pesca** | Spazio per il mazzo di pesca (faccia in giù) |
| 9 | **Pila degli scarti** | Spazio per le carte scartate (faccia in su) |
| 10 | **Storia** | Testo narrativo del Mago |

---

# Brecce

Una **tessera Breccia** (fronte-retro) viene usata per preparare in un turno 1 carta Incantesimo (porla sulla Breccia aperta o chiusa se stabilizzata) e per lanciarla nel turno successivo (poi scartarla).

> Due tessere Breccia sono **adiacenti** se sono una accanto all'altra.

| # | Elemento | Descrizione |
|---|----------|-------------|
| 1 | **Breccia Aperta/Chiusa** | Lo stato attuale della Breccia |
| 2 | **Numero della Breccia** | Posizione sopra la plancia Giocatore |
| 3 | **Costo di apertura** | Costo in Etere per aprire la Breccia (una volta aperta rimane tale fino a fine partita) |
| 4 | **Costo di stabilizzazione** | Costo in Etere per stabilizzare la Breccia (ruotarla di 90°). Puoi preparare un Incantesimo su una Breccia chiusa solo dopo averla stabilizzata nello stesso turno |
| 5 | **Bonus di Breccia aperta** | Bonus al lancio di Incantesimi fornito dalla Breccia una volta aperta |

> Puoi aprire/stabilizzare le Brecce in qualsiasi ordine di numero.

---

# Carte Giocatore

Sono le carte con cui costruire il tuo mazzo e sconfiggere la Nemesi. Ogni Mago inizia con una mano e mazzo iniziale differenti. Puoi spendere [Etere]{.def} per ottenere nuove carte dalla Riserva.

| Tipo | Funzione | Effetto |
|------|----------|---------|
| **Gemme** | Producono Etere da spendere per ottenere carte e Cariche; permettono di stabilizzare le Brecce | Immediato |
| **Reliquie** | Effetti istantanei | Immediato |
| **Incantesimi** | Infliggono danni alla Nemesi e ai suoi Seguaci dopo essere stati preparati su una Breccia | Dopo la preparazione su Breccia |

Ogni carta riporta anche:
- **Costo**: quantità di Etere da spendere per ottenerla.
- **Testo di ambientazione**: testo narrativo.

## Carte Randomizzatore

Le **carte Randomizzatore** hanno un bordo grigio e si usano in fase di preparazione per determinare casualmente Gemme, Reliquie e Incantesimi da porre nella Riserva (ne esiste una per ogni carta Giocatore).

---

# Plancia Nemesi

| # | Elemento | Descrizione |
|---|----------|-------------|
| 1 | **Nome della Nemesi** | — |
| 2 | **Punti Vita** | Iniziali da segnare sul Contatore (se scendono a 0 i giocatori hanno vinto) |
| 3 | **Effetto Scatenare** | Si applica quando indicato da alcune carte o eventi (diverso per ogni Nemesi) |
| 4 | **Regole aggiuntive** | Regole specifiche da applicare |
| 5 | **Difficoltà superiore** | Regole facoltative per rendere la partita più difficile |
| 6 | **Livello di difficoltà** | Da 1 (più facile) a 10 (più difficile) |
| 7 | **Storia della Nemesi** | Testo narrativo |
| 8 | **Preparazione** | Informazioni aggiuntive per la fase di Preparazione |

---

# Carte Nemesi

Rappresentano Attacchi, Seguaci e Poteri che la Nemesi usa contro i giocatori e Gravehold. Il mazzo Nemesi è composto da **carte Nemesi Base** (generiche) e **carte specifiche** della Nemesi affrontata.

| Tipo | Caratteristiche |
|------|----------------|
| **Seguaci** | Entrano in gioco con segnalini Vita; rimangono finché non sconfitti; hanno effetti permanenti da applicare nella fase principale della Nemesi |
| **Poteri** | Hanno la parola *Potere X* ed entrano in gioco con X segnalini Potere; ogni turno della Nemesi si rimuove 1 segnalino, e appena esauriti si applica l'effetto e la carta viene scartata |
| **Attacchi** | Risolti immediatamente e poi scartati |

Ogni carta Nemesi riporta anche:
- **Punti Vita** (solo Seguaci): se scendono a 0 la carta viene scartata.
- **Effetto Per Scartare**: al tuo turno puoi risolvere questo effetto per scartarla (senza applicare il suo normale effetto).
- **Nemesi** di appartenenza: se Base, usabile da qualsiasi Nemesi.
- **Livello**: da 1 (meno pericolose) a 10 (più pericolose). Se livello 0, vedi le regole aggiuntive della Nemesi.

---

# Termini di Gioco

| Termine | Definizione |
|---------|-------------|
| **[Alleato]{.def}** | Un qualsiasi giocatore all'infuori di te |
| **[Distruggi]{.def}** | Rimuovi la carta dal gioco (non puoi né usarla né interagirci) |
| **"Oppure"** | Puoi scegliere una o l'altra opzione indicate sulla carta (se non puoi applicare interamente un'opzione devi scegliere l'altra) |
| **"Per Scartare"** | Durante la tua Fase Principale puoi risolvere l'effetto indicato per scartare la carta (l'effetto della carta Potere non si applica) |
| **"[Scatenare]{.def}"** | Alcune carte Nemesi riportano la parola *Scatena*. Ogni Nemesi ha un effetto Scatenare che si applica in questi casi (segui le regole sulla plancia Nemesi) |

:::glossary
[Abilità Unica]: Il potere speciale di ogni Mago, attivabile riempiendo tutti gli spazi Carica sulla plancia Giocatore. Dopo l'attivazione tutti i segnalini Carica vengono rimossi.

[Etere]: La risorsa prodotta dalle Gemme, usata per acquistare carte dalla Riserva, stabilizzare/aprire Brecce e ottenere Cariche. Non è cumulabile tra turni né cedibile ad altri giocatori.

[Alleato]: Qualsiasi giocatore diverso da te. Alcune carte hanno effetti che coinvolgono gli alleati.

[Distruggi]: Azione che rimuove permanentemente una carta dal gioco, rendendola inutilizzabile per il resto della partita.

[Scatenare]: Effetto speciale della Nemesi, unico per ciascuna, che si attiva in situazioni specifiche indicate sulle carte (es. quando un giocatore diventa esausto).
:::
