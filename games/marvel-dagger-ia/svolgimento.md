La partita si svolge in una serie di round, ciascuno composto da due fasi che si ripetono fino allo scontro finale o alla sconfitta degli eroi.

# Fase degli Eroi

Durante questa fase, ogni eroe compie il proprio turno a partire dal primo giocatore, procedendo in senso orario. **Un turno consiste nel spendere un segnalino aspetto per eseguire una singola azione.** Dopo che tutti gli eroi hanno compiuto un turno, si ritorna al primo giocatore e si continua nello stesso ordine finché ogni eroe non ha speso tutti i propri segnalini aspetto.

Gli eroi **non possono passare né conservare** i segnalini aspetto: devono eseguire un'azione ogni volta che è il loro turno e hanno ancora segnalini disponibili.

## Come si esegue un'azione

Per eseguire un'azione, il giocatore posiziona un [segnalino aspetto]{.def} su uno slot disponibile su una delle proprie carte o componenti. Ogni slot può contenere un solo segnalino alla volta.

Se viene speso il **segnalino aspetto potenziato** (bordo colorato), l'eroe risolve l'effetto standard dell'azione **e** il suo effetto **BOOST:** aggiuntivo.

## Azioni del Foglio Aspetto

Il foglio aspetto fornisce quattro azioni base, ciascuna con **2 slot** (quindi eseguibile fino a due volte per fase):

### Muovi
L'eroe sposta il proprio standee di un numero di spazi adiacenti pari al valore **MOVE** indicato sull'azione. Gli spazi adiacenti sono collegati da linee tratteggiate.

### Combatti
L'eroe attacca un nemico nel suo stesso spazio. Esegue un [test]{.def} di **ATK** (Attacco): per ogni successo, il nemico subisce 1 danno.

### Sfida
L'eroe posiziona segnalini progresso su una missione nel suo spazio che richiede un'azione di sfida. Esegue un test di **DFI** (Sfida) e applica i successi come indicato dalla missione.

### Riposa
L'eroe recupera danni e ricarica carte supporto. Esegue un test di **TAC** (Tattica), somma i successi agli automatici dell'azione e distribuisce il totale tra gli effetti **RECOVER** (rimozione danni) e **CHARGE** (ricarica carte supporto) come preferisce.

## Abilità Eroe

Il foglio eroe contiene abilità aggiuntive. Se un'abilità ha uno slot per segnalino aspetto, è un'azione attivabile. Se non ha slot, è un'abilità sempre attiva o innescata automaticamente al verificarsi della condizione descritta.

Alcune abilità richiedono che l'eroe sia [potenziato]{.def} (token EMPOWERED sul foglio eroe) o che un nemico sia [innescato]{.def} (token PRIMED vicino allo standee): sono le **abilità combo**, identificate da un bordo blu e un'icona a stella. Ogni volta che viene risolta un'abilità combo, si avanza la traccia Team-Up di 1.

## Azioni D.A.G.G.E.R.

Se un eroe si trova su una base **operativa** (senza segnalino sovraccarico), può spendere un segnalino aspetto nello slot della base per eseguire un'**azione D.A.G.G.E.R.**: risolve l'effetto D.A.G.G.E.R. della base e può facoltativamente attivare la propria missione eroe nello slot missione eroe (giallo), se libero.

> Le basi sovraccaricate non consentono di risolvere effetti D.A.G.G.E.R. né di attivare missioni eroe, ma l'azione D.A.G.G.E.R. può ancora essere eseguita se richiesta da una missione.

## Effetti D.A.G.G.E.R. dai Test

Ogni volta che un eroe ottiene uno o più risultati **WILD** durante un test di attributo, può risolvere l'effetto D.A.G.G.E.R. associato a una base nella propria regione (uno per simbolo WILD). Se la regione contiene più basi, l'eroe sceglie quale effetto risolvere per ogni simbolo.

## Fine della Fase degli Eroi

Una volta che tutti gli eroi hanno speso tutti i propri segnalini aspetto, si passa alla fase della nemesi. **All'inizio della fase successiva degli eroi**, tutti i segnalini aspetto vengono restituiti alle aree di gioco dei rispettivi giocatori e il segnalino primo giocatore passa al giocatore successivo in senso orario.

---

# Fase della Nemesi

Dopo che tutti gli eroi hanno completato i propri turni, si risolve la fase della nemesi in tre passi nell'ordine indicato.

## Passo 1 — Avanza la Minaccia

La [Minaccia]{.def} avanza di un totale pari alla somma di:

- Il valore Minaccia sul foglio nemesi.
- **+1** per ogni nemico non-nemesi in gioco.
- **+1** per ogni base sovraccaricata.
- Il valore Minaccia di ogni missione secondaria o eroe attiva con un valore minaccia.

Sposta il segnalino Minaccia sulla traccia del valore corrispondente.

## Passo 2 — Verifica la Missione Nemesi

Controlla la carta in cima al mazzo missioni nemesi per stabilire se è completata:

- **Superata:** se il numero di segnalini progresso sulla missione è pari o superiore al suo valore progresso (stampato nell'angolo in alto a destra; se accompagnato dall'icona "per giocatore", moltiplicalo per il numero di eroi). Capovolgi la missione e falla scorrere sotto il bordo superiore del tabellone mostrando solo l'effetto con il segno di spunta verde; risolvi quell'effetto.
- **Fallita:** se la missione non è stata superata e il livello di minaccia raggiunge o supera il valore minaccia della missione. Capovolgi la missione mostrando solo l'effetto con la X rossa; risolvi quell'effetto.

Se la carta completata era la **prima mossa**, rimuovila dal gioco rivelando la prima missione nemesi. Se era una **missione nemesi**, risolvi anche l'icona di comparsa missione secondaria presente sullo slot in cima al tabellone.

In entrambi i casi, **resetta la traccia Minaccia a 0**. Se tutte e tre le missioni nemesi sono state completate (superate o fallite), il foglio nemesi viene capovolto e **inizia immediatamente lo scontro finale**.

## Passo 3 — Risolvi la Carta Evento

Pesca la carta in cima al mazzo eventi e risolvila in ordine:

**A — Risolvi l'Evento:** leggi e applica il testo della carta evento.

**B — Risolvi le Icone Evento** (da sinistra verso destra, dall'alto verso il basso):
- **Icona "ongoing":** risolvi gli effetti permanenti di tutte le missioni attive che li hanno.
- **Icona "spawn missione secondaria":** pesca la prima carta del mazzo missioni secondarie e posizionala in uno slot libero sul tabellone. Se non ci sono slot liberi, avanza la minaccia di 1 più il numero di eroi.
- **Icone abilità nemesi** (tre tipi diversi): risolvi l'abilità corrispondente sul foglio nemesi.

**C — Attiva i Nemici** nell'ordine indicato dall'evento: Rango 1, Rango 2, Rango 3, Elite, Nemesi. In caso di parità di rango, gli eroi scelgono l'ordine. Ogni nemico risolve solo la **prima azione disponibile** tra:
1. **Attacca un eroe** nel suo spazio (infligge danni pari al suo valore POWER). Se più eroi occupano lo spazio, gli eroi scelgono quale viene attaccato. La nemesi attacca **tutti** gli eroi nel suo spazio.
2. **Sovraccarica una base** nel suo spazio (se non ci sono eroi): posiziona un segnalino sovraccarico sulla base.
3. **Si sposta** di uno spazio verso la base operativa più vicina nella sua regione.

Se la nemesi è **stordita**, invece di agire normalmente rimuove il segnalino stordimento e termina la propria attivazione.

**D — Fai Comparire i Nemici:** risolvi le icone di comparsa nemici in fondo alla carta evento. Per ogni icona con pip pari o inferiore al numero di eroi, posiziona un nemico del rango indicato nello spazio indicato. Se tutti i nemici di quel rango sono già in gioco, avanza la minaccia del rango del nemico (o del valore Minaccia del foglio nemesi per nemici specifici della nemesi).

Scarta la carta evento e procedi con la fase degli eroi successiva.

> **Attenzione:** se all'inizio del Passo 3 il mazzo eventi è esaurito, **gli eroi perdono immediatamente la partita**.

---

# Lo Scontro Finale

Quando l'ultima missione nemesi viene completata, il foglio nemesi viene capovolto immediatamente sul lato dello scontro finale. Scarta il segnalino stordimento e tutti i segnalini danno dalla nemesi; tutti gli altri segnalini rimangono. La nemesi ripristina tutti i propri danni con nuovi meccanismi descritti sul retro del foglio.

Il valore Salute della nemesi durante lo scontro finale è **il valore stampato moltiplicato per il numero di eroi**. Il gioco continua con le fasi normali finché la nemesi non viene sconfitta o gli eroi perdono.

:::glossary
[segnalino aspetto]: Token speso per eseguire un'azione. Ogni eroe inizia con 2 standard e 1 potenziato (3 standard e 1 potenziato in partite a 2 giocatori/solitario). Vengono restituiti all'inizio di ogni fase degli eroi.

[test]: Meccanica di risoluzione delle azioni: il giocatore lancia un numero di dadi pari al valore dell'attributo testato (ATK, DFI o TAC). Ogni dado che mostra l'icona corrispondente conta come 1 successo; il risultato WILD vale 1 successo per qualsiasi test.

[potenziato]: Stato di un eroe con un token EMPOWERED sul foglio. Permette di aggiungere 1 successo a un test o di attivare abilità combo. Il token può essere conservato e speso in qualsiasi momento.

[innescato]: Stato di un nemico con un token PRIMED vicino al proprio standee. Permette di aggiungere 1 successo dopo un attacco contro quel nemico o di attivare abilità combo. Il token viene scartato quando speso.

[Minaccia]: Risorsa del gioco tracciata sul tabellone. Se raggiunge il valore di soglia della missione nemesi attiva, la missione viene fallita. Se raggiunge 20, gli eroi perdono immediatamente.
:::
