# Il Ruolo dell'App

L'app **Road to Legend** è il cuore del gioco: fa da narratore, gestisce i mostri e determina la struttura di ogni avventura. Gestisce automaticamente:

- La preparazione della mappa (tessere, porte, segnalini)
- Il posizionamento e l'attivazione dei mostri
- La progressione della storia e i messaggi narrativi
- Il salvataggio automatico della campagna (all'inizio di ogni avventura, ogni round, alla fine di ogni avventura e ogni volta che si lascia una città)

L'app **non** tiene traccia della posizione delle miniature, dei danni e delle condizioni subite: questi vengono gestiti con i componenti fisici. I giocatori invece devono informare l'app quando un eroe sviene (tasto **KO**), quando si riprende (tasto **Recupera**) e quando un gruppo di mostri viene sconfitto (**Sconfiggi Gruppo**).

> L'app può salvare fino a **5 partite** contemporaneamente. Se si interrompe una partita a metà avventura, i giocatori devono annotare autonomamente la situazione fisica sulla mappa.

# Salute, Danno e Fatica

Ogni miniatura ha un valore di **Salute** (sulla scheda Eroe o sulla carta Mostro): quando i danni accumulati raggiungono quel valore, la miniatura viene sconfitta. Per i mostri significa rimozione dalla mappa; per gli eroi significa **svenire** (vedi sotto).

Gli eroi hanno anche un valore di **Resistenza**: possono subire fatica volontariamente fino a quel limite. Fatica oltre la Resistenza si converte immediatamente in danni. Danno e fatica si tracciano con i rispettivi segnalini sulla scheda Eroe.

# Eroi Svenuti

Quando un eroe accumula danni pari alla sua Salute:

- La miniatura viene sostituita sulla mappa con un **segnalino Eroe**
- L'eroe subisce immediatamente fatica fino al suo valore di Resistenza
- Le carte Condizione e i danni in eccesso tornano nella riserva
- I giocatori informano l'app (tasto **KO**)
- Il **morale** del gruppo scende di 1

Un eroe svenuto può solo **rialzarsi** (terminando il turno immediatamente) oppure essere **rianimato** da un eroe adiacente. In entrambi i casi, si tirano **2 dadi rossi** e si recuperano danni pari ai simboli danno e fatica pari ai simboli fatica. Al recupero, il segnalino viene sostituito dalla miniatura e l'eroe agisce normalmente dal turno successivo.

# Equipaggiamento e Carte

## Tipi di Slot

| Simbolo | Slot | Limite |
|---|---|---|
| Mani | Armi e scudi | Max 2 simboli mano totali |
| Armatura | Armatura | Max 1 pezzo |
| Altro | Oggetti vari | Max 2 |

L'equipaggiamento attivo si cambia solo all'inizio del proprio turno. Le carte non equipaggiate si tengono a faccia in giù e non possono essere usate.

## Esaurire e Rigenerare

Alcune carte si **esauriscono** quando vengono usate (ruotate di 90°): possono essere usate solo una volta per round. All'inizio del proprio turno si **rigenerano** tutte automaticamente (riportate in posizione verticale).

## Gesto Eroico

Ogni eroe ha un Gesto Eroico sulla propria scheda: una potente abilità usabile **una sola volta per avventura**. Dopo l'uso, la scheda viene girata dall'altro lato per segnalarne l'esaurimento.

# Mostri: Servitori ed Evoluti

Ogni tipo di mostro ha una **carta Mostro** con le statistiche di **servitori** (miniature beige) nella parte superiore e **mostri evoluti** (miniature rosse) in quella inferiore. Le abilità descritte sulla fronte della carta sono spiegate nel dettaglio sul retro.

Ogni gruppo ha un numero massimo di miniature contemporaneamente in gioco (**limiti di gruppo**), che varia in base al numero di eroi. Quando si posizionano mostri, si posizionano prima gli evoluti fino al loro limite, poi i servitori.

# Luogotenenti

I luogotenenti sono nemici speciali e molto potenti. Seguono le stesse regole dei mostri, ma le loro statistiche (Velocità, Salute, Difesa) variano in base al numero di eroi in gioco. Come gli eroi, possono eseguire prove di caratteristica.

# Atto I e Atto II

Ogni mostro e luogotenente ha due versioni: **Atto I** e **Atto II**. Si inizia sempre con l'Atto I. Quando l'app lo indica, si effettua la transizione: le carte Atto I vengono riposte e si usano le versioni Atto II (con statistiche e abilità più potenti) per il resto della campagna.

# Condizioni

Le condizioni sono effetti negativi che influenzano una miniatura finché non vengono rimosse. Un eroe tiene la carta Condizione accanto alla propria scheda; per le altre miniature si usa un segnalino sulla mappa. Una miniatura può avere al massimo **una copia di ogni condizione** per volta. Le condizioni inflitte durante un attacco richiedono che l'attacco abbia causato almeno 1 danno.

# Parole Chiave degli Attacchi

- **Esplosione:** l'attacco colpisce anche tutti gli spazi adiacenti al bersaglio. Il danno pieno va al bersaglio principale, metà (arrotondata per eccesso) a ogni miniatura adiacente; ognuna tira i propri dadi di difesa separatamente
- **Perforare X:** l'attacco ignora X risultati scudo del difensore; i valori di Perforare si sommano
- **Raggiungere:** permette attacchi corpo a corpo fino a 2 spazi di distanza (con linea di vista)

# Prove di Caratteristica

Gli eroi hanno quattro caratteristiche: **Forza**, **Conoscenza**, **Volontà** e **Consapevolezza**. Per superare una prova, tira **1 dado grigio + 1 dado nero**: se i simboli scudo ottenuti sono ≤ al valore della caratteristica, la prova è superata. I mostri privi di caratteristiche falliscono automaticamente qualsiasi prova.

# Terreni Speciali

| Bordo | Tipo | Effetto |
|---|---|---|
| Blu | Acqua | Entrare costa 2 punti movimento invece di 1 |
| Verde | Fossa | Entrare causa 2 danni; impossibile spendere punti movimento dalla fossa; linea di vista limitata agli spazi adiacenti |
| Giallo | Spazio Pericoloso | Entrare causa 1 danno; terminare il turno nello spazio causa sconfitta immediata |
| Rosso | Ostacolo | Blocca movimento e linea di vista |

# Famigli

Alcune carte assegnano a un eroe il controllo di un **famiglio**, rappresentato da un segnalino con una carta dedicata. Durante il proprio turno, l'eroe può attivare ogni famiglio che possiede (prima o dopo le proprie azioni): il famiglio svolge 1 azione di movimento + eventuali azioni aggiuntive descritte sulla sua carta.

I famigli **trattati come miniature** bloccano linea di vista e movimento, possono ricevere condizioni e sono bersagli validi per i mostri. I famigli **non trattati come miniature** non bloccano linea di vista né movimento e subiscono solo gli effetti specificati sulla loro carta.

# Miniature Giganti

Alcune miniature occupano più spazi. Quando si muovono, si "restringono" idealmente a uno spazio per contare il movimento, poi si "espandono" nella posizione finale. Durante l'espansione non subiscono effetti degli spazi in cui si espandono, ma subiscono normalmente quelli degli spazi attraversati.

# Fama e Progressione

La **[fama]{.def}** misura la notorietà del gruppo e viene tracciata nell'app. Influenza gli oggetti disponibili nelle città e può sbloccare opzioni negli eventi di viaggio. L'**oro** si guadagna completando obiettivi e si spende nelle città. Gli **XP** si guadagnano alla fine delle avventure e si spendono in qualsiasi momento durante la fase campagna per acquistare carte Classe dalla schermata di Addestramento.

# Regole d'Oro

:::accent
Le regole dell'app hanno la priorità su carte e manuale. Le carte e le loro abilità hanno la precedenza sulle regole del manuale. In caso di parità o conflitti nelle decisioni, i giocatori decidono insieme. Il numero di segnalini fisici non è un limite: se si esauriscono, si usano sostituti.
:::

:::glossary
[fama]: Valore che misura la notorietà del gruppo nella campagna. Determina la disponibilità di certi oggetti nelle città e può sbloccare opzioni negli eventi di viaggio e nelle avventure.
:::
