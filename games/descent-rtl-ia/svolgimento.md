# Struttura di un Round

Un'avventura si svolge attraverso una serie di **round**. Ogni round è un alternarsi di **turni degli eroi** e **attivazioni dei mostri**: prima un eroe agisce, poi l'app attiva un gruppo di mostri, e così via finché tutti gli eroi e tutti i gruppi di mostri hanno completato il loro turno o attivazione. Quindi inizia un nuovo round.

**Ordine di gioco all'interno di un round:**

1. Il gruppo sceglie insieme quale eroe svolgerà il suo turno
2. Quell'eroe esegue le sue azioni
3. Al termine, selezionate nell'app l'immagine dell'eroe e premete **"Fine Turno"**
4. L'app seleziona casualmente un gruppo di mostri e fornisce istruzioni su come attivarlo
5. Il gruppo attiva tutti i mostri di quel tipo seguendo le istruzioni
6. Si ripete dalla fase 1 con un altro eroe non ancora attivato

Se una fazione (eroi o mostri) ha già terminato tutti i propri turni, l'altra continua da sola finché non ha finito. Al termine di ogni round, l'app può mostrare messaggi aggiuntivi o attivare **[effetti pericolo]{.def}**.

> **Partita con 2 eroi:** una volta per turno di ogni eroe, quell'eroe può eseguire un attacco gratuito che non richiede un'azione. Se non lo usa, può invece recuperare **2 danni** alla fine del turno.

---

# Turno di un Eroe

## Inizio del Turno

All'inizio del proprio turno, un eroe:
- **Rigenera** tutte le carte esauste (le raddrizza)
- Può **cambiare l'equipaggiamento** che sta utilizzando

## Azioni Disponibili

Un eroe svolge **massimo 2 azioni** per turno, scegliendole tra le seguenti:

| Azione | Descrizione |
|---|---|
| **Muovere** | Guadagni punti movimento pari alla tua Velocità; ogni punto sposto la miniatura di uno spazio (ortogonale o diagonale) |
| **Attaccare** | Dichiari un'arma e un bersaglio ostile, poi tirate i dadi di attacco e difesa |
| **Riposare** | Alla fine del turno recuperi tutta la [fatica]{.def} accumulata |
| **Esplorare** | Interagisci con un segnalino Esplorazione nel tuo spazio o adiacente |
| **Aprire una Porta** | Apri una porta adiacente; l'app rivelerà nuove tessere, mostri e obiettivi |
| **Rianimare un Eroe** | Fai rialzare un eroe svenuto adiacente (tira 2 dadi rossi: recupera danni pari ai simboli danno e fatica pari ai simboli fatica) |
| **Rialzarsi** | Se sei svenuto, ti rialzi da solo; il turno termina immediatamente |
| **Azione Speciale** | Effetti specifici di carte o abilità, segnalati dal simbolo azione |

I punti movimento possono essere spesi in qualsiasi momento durante il turno, prima o dopo altre azioni. Puoi anche subire [fatica]{.def} volontariamente (fino al tuo valore di Resistenza) per guadagnare punti movimento aggiuntivi: **1 fatica = 1 punto movimento**.

## Movimento

Una miniatura si muove spendendo punti movimento: **1 punto = 1 spazio** (ortogonale o diagonale). Non puoi attraversare spazi occupati da nemici né fermarti su spazi occupati da qualsiasi altra miniatura. I bordi neri delle tessere non bloccano i movimenti diagonali agli angoli.

## Attacco

Quando attacchi:

1. Dichiara l'**arma** (o attacco a mani nude con solo dado blu) e il **bersaglio** ostile
2. Verifica la **[linea di vista]{.def}**: traccia una linea retta da un qualsiasi angolo del tuo spazio a un angolo dello spazio nemico; non deve passare attraverso muri, porte o spazi con miniature
3. Tira contemporaneamente i **dadi di attacco** (blu + rossi/gialli dell'arma) e il dado di **difesa** del bersaglio
4. Calcola i danni: **simboli danno ottenuti − simboli scudo** = danni subiti dal bersaglio
5. Per gli attacchi a distanza, verifica che la **gittata** (somma dei numeri sui dadi) sia ≥ alla distanza dal bersaglio

**Risultati speciali sui dadi:**
- **Onda di Potere (simbolo speciale):** puoi spendere questi risultati per attivare abilità sull'arma (max 1 abilità per simbolo per attacco). Spendere 1 onda di potere può anche farti recuperare 1 fatica
- **X su dado blu:** l'attacco fallisce, nessun danno e nessun effetto aggiuntivo
- **Numeri sui dadi:** determinano la gittata per gli attacchi a distanza

## Esplorazione e Porte

Puoi esaminare un segnalino Esplorazione o una porta selezionandola nell'app in qualsiasi momento, senza spendere un'azione. L'azione viene spesa solo se selezioni **"Esplora"** o **"Conferma"** per interagire effettivamente con l'elemento.

## Scambiare Oggetti

Dopo aver eseguito un'azione di movimento, puoi in qualsiasi momento dare, ricevere o scambiare con un eroe adiacente oggetti, reliquie e carte Esplorazione. Non puoi scambiare carte Classe e puoi cambiare l'equipaggiamento solo all'inizio del tuo turno.

---

# Attivazione dei Mostri

Dopo il turno di ogni eroe, l'app seleziona casualmente un gruppo di mostri e mostra una **finestra di attivazione**, divisa in:

- **Effetto Speciale:** un vantaggio o comportamento speciale valido per questa attivazione
- **Elenco di Attivazione:** una lista di azioni (ognuna contrassegnata dal simbolo azione speciale) che ogni mostro risolve dall'alto verso il basso fino a raggiungere **2 azioni**

Ogni mostro del tipo indicato (prima gli evoluti, poi i servitori, o viceversa come mostrato) svolge le azioni in lista. Se un'azione non può essere risolta, viene saltata e si passa alla successiva. Se si arriva in fondo alla lista, si ricomincia dall'inizio fino a completare 2 azioni.

:::indent
Un mostro **non può attaccare più di una volta** per attivazione. Le abilità degli eroi usabili "una volta per turno" **non possono essere usate** durante le attivazioni dei mostri.
:::

**Termini di movimento dei mostri:**
- **Ingaggiare:** il mostro si muove adiacente al bersaglio indicato
- **Individuare:** il mostro si muove nello spazio più vicino entro 3 spazi dal bersaglio e in linea di vista con esso
- **Ritirarsi:** il mostro spende tutti i punti movimento rimasti per allontanarsi dal nemico più vicino

Quando un intero gruppo di mostri viene sconfitto, selezionate nell'app **"Sconfiggi Gruppo"** per informarla: questo può sbloccare eventi importanti nell'avventura.

---

# Fine del Round e Avanzamento

Dopo che tutti gli eroi e tutti i gruppi di mostri hanno agito, il round termina. L'app può mostrare effetti pericolo o altri messaggi. Poi inizia immediatamente il round successivo.

Le condizioni di fine avventura sono stabilite dall'app: quando si verificano, l'avventura termina automaticamente. Al termine:
- Ogni eroe recupera tutti i danni e la fatica
- Ogni eroe gira la scheda Eroe a faccia in su
- Si scartano tutte le carte Condizione e Esplorazione
- Tutti i componenti tornano nelle riserve

Poi l'app mostra la **mappa della campagna** per la fase campagna.

---

# Fase Campagna

Tra un'avventura e l'altra puoi:

- **Viaggiare verso una nuova avventura** (principale o secondaria)
- **Visitare una città** (richiede 1 settimana): acquista oggetti nell'emporio, vendi oggetti in tuo possesso, risolvi l'azione unica della città, aumenta il morale
- **Spendere XP** per acquistare nuove carte Classe dalla schermata di Addestramento (non richiede settimane)

Ogni attività che richiede una settimana fa avanzare il contatore della campagna. Quando un'avventura principale non ha più settimane rimanenti, il gruppo **deve affrontarla** prima di fare altro.

:::glossary
[fatica]: Risorsa negativa che un eroe accumula subendo sforzo. Fino al valore di Resistenza, la fatica non causa danni. Se la fatica supera la Resistenza, ogni punto in eccesso diventa 1 danno. Si recupera con l'azione Riposare o con alcuni effetti di gioco.

[effetti pericolo]: Effetti negativi che si attivano al termine di alcuni round se il gruppo non avanza abbastanza velocemente. Possono far apparire mostri aggiuntivi o infliggere danni agli eroi.

[linea di vista]: Condizione necessaria per gli attacchi a distanza. Esiste se è possibile tracciare una linea retta da un angolo del proprio spazio a un angolo dello spazio del bersaglio, senza attraversare muri, porte, ostacoli o spazi occupati da miniature.
:::
