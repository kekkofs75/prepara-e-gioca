# Struttura di un Round

Ogni round si svolge in 5 fasi, nell'ordine seguente:

1. **Fase degli Eroi**
2. **Fase dei Nemici**
3. **Fase di Esperienza**
4. **Fase degli Eventi**
5. **Fase Finale**

---

# Fase degli Eroi

Il Primo Giocatore attiva il suo Eroe, poi si procede in senso orario finché tutti gli Eroi non hanno completato la propria attivazione.

## Azioni per attivazione

Ogni Eroe dispone di **3 Azioni** per attivazione (più eventuali bonus da Abilità). Le azioni disponibili sono:

| Azione | Costo | Prerequisito |
|---|---|---|
| Combattimento (Mischia/Distanza/Magia) | 1 azione | Arma corrispondente impugnata |
| Movimento | 1 azione | — |
| Rialzarsi | 1 azione | Essere storditi |
| Riorganizzare/Scambiare | 1 azione | — |
| Non Fare Niente | Tutte le rimanenti | — |
| **Potere Personale** | 0 azioni (costa 1 PE) | Max 1 per attivazione |
| **Trasmutare** | 0 azioni (gratuita) | Almeno 3 carte da scartare |

---

## Azione di Combattimento

Scegli il tipo in base all'arma impugnata:

- **Mischia** — colpisci i nemici nella tua stessa zona (Gittata 0).
- **Distanza** — colpisci qualsiasi nemico entro [Linea di Vista]{.def}, ma non nella tua zona (Gittata 1+).
- **Magia** — colpisci nemici entro Linea di Vista a 1–2 zone di distanza (Gittata 1–2).

Dopo aver completato tutte le azioni, i nemici sopravvissuti che hai attaccato possono immediatamente **[Contrattaccare]{.def}**.

:::accent
**Evitare il Contrattacco:** se al termine della tua attivazione ti trovi fuori Linea di Vista dal nemico attaccato **e** in una Zona di Ombra, il nemico non si attiva per contrattaccare.
:::

---

## Azione di Movimento

Spendi 1 azione per ottenere **2 Punti Movimento**, da usare in qualsiasi combinazione tra:

- **Muoversi** (1 PM) — spostati in una zona adiacente. Non puoi uscire da una zona che contiene un nemico (salvo abilità speciali). Non puoi muoverti in diagonale.
- **Aprire una Porta** (1 PM) — apri una porta nella tua zona. Se è la prima volta che quella Camera viene aperta, pesca una **Carta Porta** e applica il suo contenuto alle prime 3 stanze. Le porte aperte non si richiudono.
- **Raccogliere** (1 PM) — prendi tutti i segnalini Tesoro e Obiettivo nella tua zona (solo se non ci sono nemici).

:::indent
**Segnalino Tesoro normale** → pesca una carta Tesoro del livello della tessera in cui ti trovi.

**Segnalino Tesoro Speciale** → pesca una carta Tesoro di 1 livello superiore (al livello 5: pesca 2 carte di livello 5).

Puoi cedere immediatamente l'equipaggiamento appena raccolto a un altro Eroe nella tua zona; chi riceve equipaggiamento può riorganizzare gratuitamente il proprio inventario.
:::

---

## Trasmutare (gratuita)

Scarta **3 carte Equipaggiamento** e pesca **1 carta Tesoro di 1 livello superiore** rispetto alla carta di livello più basso tra quelle scartate. L'Eroe può riorganizzare gratuitamente l'inventario e usare subito il nuovo equipaggiamento.

> Le carte Equipaggiamento di Partenza sono considerate di livello 1 ai fini di Trasmutare.

---

## Riorganizzare / Scambiare

Con 1 azione, puoi cambiare le carte impugnate/indossate nel tuo inventario. Tutti gli Eroi nella tua stessa zona possono contemporaneamente scambiarsi equipaggiamento liberamente (anche con Eroi morti). Ogni Eroe coinvolto può riorganizzare il proprio inventario gratuitamente.

---

# Fase dei Nemici

Tutti i nemici sul tabellone si attivano uno alla volta (in ordine scelto dai giocatori), seguendo questi 4 passi:

**Passo 1** — Il nemico tenta di attaccare un Eroe in gittata.
**Passo 2** — Se non riesce, si sposta di 1 zona verso il bersaglio.
**Passo 3** — Tenta di nuovo di attaccare.
**Passo 4** — Se non riesce ancora, si sposta di un'altra zona.

Se il nemico riesce ad attaccare al Passo 1 o al Passo 3, la sua attivazione termina immediatamente.

## Priorità del bersaglio

I nemici scelgono il bersaglio in quest'ordine:

1. Eroe entro gittata con più [PE]{.def} non spesi.
2. Eroe entro Linea di Vista con più PE non spesi.
3. Eroe in una zona di Luce con più PE non spesi.
4. Zona di Partenza (poi Zona di Uscita, alternando).

> Un Eroe fuori Linea di Vista **e** in una [Zona di Ombra]{.def} è completamente ignorato dai nemici nella determinazione del bersaglio.

## Tipi di combattimento dei nemici

- **Mischia** — attacca solo Eroi nella sua zona.
- **Distanza** — attacca Eroi entro Linea di Vista, ma non nella sua zona.
- **Magia** — attacca Eroi entro Linea di Vista a Gittata 1–2.

I nemici che possiedono più tipi di combattimento preferiscono quello a distanza; passano alla mischia solo se costretti dalla posizione.

---

# Combattimento

Il combattimento avviene in 3 passi:

## Passo 1 — Tirare i dadi

Raccogli i **dadi di Attacco** dell'attaccante e i **dadi di Difesa** del difensore. Tirali tutti insieme in un unico tiro.

:::indent
Massimo **3 dadi per colore** (giallo, rosso, blu, verde): i dadi in eccesso vengono ignorati. Le penalità ai dadi si applicano *dopo* aver raggiunto il limite di 3.

**Dadi rossi** > dadi gialli (Attacco). **Dadi verdi** > dadi blu (Difesa).

Per gli Eroi: somma i dadi di combattimento di tutte le carte impugnate/indossate del tipo usato, più eventuali bonus da Abilità, Poteri Personali, Oggetti o Monouso.
:::

## Passo 2 — Risolvere gli Incantamenti

Prima si risolvono gli **[Incantamenti]{.def} di Difesa** (simboli Bam/Diamante sui dadi di difesa), poi gli **Incantamenti di Attacco** (sui dadi di attacco).

I simboli Bam (☆) e Diamante (◆) ottenuti si spendono per innescare gli incantamenti sull'equipaggiamento o sulle abilità. Ogni incantamento si innesca **una sola volta** per azione di combattimento, salvo la proprietà **Ripetizione X** (innescabile fino a X volte).

I nemici innescano i loro incantamenti automaticamente; devono prima usare i simboli per gli incantamenti sulla propria carta, poi per quelli sull'eventuale equipaggiamento.

## Passo 3 — Infliggere Ferite

Somma tutti i **Colpi** (⚔) dell'attaccante, sottrai tutti gli **Scudi** (◯) del difensore. Il difensore subisce un numero di Ferite pari al risultato (minimo 0).

Quando un nemico scende a 0 Salute è eliminato. Se era un **Guardiano** (Agente, Boss o Mostro Errante), l'Eroe che infligge il colpo mortale riceve la sua carta Equipaggiamento e può riorganizzare l'inventario gratuitamente.

---

# Regole dell'Orda

Un'[Orda]{.def} è composta da un **Boss** e dai suoi **Gregari**.

- Il Boss **non può essere ferito** finché almeno 1 Gregario si trova nella sua stessa zona.
- Quando si attacca un'Orda, le ferite vengono distribuite 1 alla volta ai Gregari (eliminandone uno prima di passare al successivo). Le ferite in eccesso sull'ultimo Gregario **non si trasferiscono** al Boss.
- L'intera Orda usa gli stessi dadi di combattimento e incantamenti indicati sulla carta Nemico, a prescindere dal numero di Gregari.
- Se il Boss porta un'arma compatibile con il tipo di attacco in corso, i suoi dadi si aggiungono all'attacco/difesa dell'Orda.
- Un'Orda non può mai essere divisa in gruppi separati.

---

# Fase di Esperienza

Durante questa fase ogni giocatore può spendere i PE accumulati per acquistare nuove **Abilità** dalla propria Scheda Classe.

- Le Abilità si acquistano seguendo l'ordine della relativa **Linea di Abilità** (non si possono saltare livelli).
- Un'Abilità acquistata diventa utilizzabile non appena la partita raggiunge il livello corrispondente.
- Ogni Abilità superiore nella stessa linea **sostituisce** la precedente.
- Il **Potere Personale** si attiva spendendo 1 PE durante la propria attivazione (max 1 volta per attivazione).

:::indent
**Punti Esperienza guadagnati per nemico sconfitto:**

| Nemico | PE guadagnati | Da chi |
|---|---|---|
| Gregario | 1 PE | Solo all'Eroe che infligge il colpo mortale |
| Boss | 3 PE | A tutti gli Eroi |
| Agente | 4 PE | A tutti gli Eroi |
| Mostro Errante | 5 PE | A tutti gli Eroi |

Un Eroe può accumulare al massimo **30 PE** contemporaneamente.
:::

---

# Fase degli Eventi

Il Primo Giocatore pesca **1 carta Evento**, la legge ad alta voce e ne applica gli effetti nell'ordine di lettura.

Gli eventi più comuni sono:

- **Pattuglie** — generano nuovi nemici su zone specifiche in base al livello attuale.
- **Benedizioni** — effetti positivi per gli Eroi.

---

# Fase Finale

- Tutti gli effetti temporanei con durata "fino alla Fase Finale" terminano (in qualsiasi ordine scelto dai giocatori).
- Il segnalino Primo Giocatore passa al giocatore alla sinistra.
- Inizia un nuovo round.

---

# Sistema dei Livelli

La partita ha 5 livelli. Il **livello attuale** è determinato dal segnalino Livello Attivo più alto raggiunto dagli Eroi. La partita avanza di livello quando un Eroe entra in una tessera con un segnalino di livello superiore (o quando viene aperta una porta che conduce a una tessera di livello superiore).

Il livello influenza: le Abilità utilizzabili, il livello delle Guardie generate, le Pattuglie degli eventi, il tipo di Mostro Errante (Minore per livelli 1–3, Maggiore per livelli 4–5) e l'equipaggiamento dei Guardiani.

:::accent
Il livello **non scende mai**: anche se gli Eroi tornano su tessere di livello inferiore, il livello attuale rimane il massimo raggiunto.
:::

---

# Resurrezione

Quando un Eroe scende a 0 Salute è ucciso (miniatura coricata). All'inizio del round successivo, tutti gli Eroi morti risorgono: rimuovi 1 segnalino dalla carta del Latore di Vita per ogni Eroe riportato in vita, rimetti la miniatura in piedi nella stessa zona, ripristina la sua Salute al massimo.

:::accent
Se un Eroe deve risorgere e il Latore di Vita non ha più segnalini, la partita è **immediatamente persa**.
:::

---

# Modalità Ombra

Una zona priva di fonti di luce è una **Zona di Ombra**. Un Eroe in una Zona di Ombra è in **Modalità Ombra** e:

- Può usare le Abilità con la condizione `[Modalità Ombra]`.
- Se si trova **anche** fuori Linea di Vista da un nemico, quel nemico lo ignora completamente (niente attacchi, niente contrattacchi).

---

:::glossary
[Linea di Vista]: Linee rette parallele ai bordi del tabellone. Si estendono da zona a zona finché non incontrano una parete, una porta chiusa o il bordo del tabellone. Non sono influenzate dall'oscurità. **Non esistono linee di vista diagonali.**

[Contrattacco]: Al termine dell'attivazione di un Eroe, tutti i nemici sopravvissuti che ha attaccato si attivano e cercano di attaccarlo. Seguono le stesse regole della Fase dei Nemici, ma bersagliano solo quell'Eroe.

[PE]: Punti Esperienza. Si guadagnano sconfiggendo nemici o raccogliendo segnalini Obiettivo. Si spendono nella Fase di Esperienza per acquisire Abilità o usare il Potere Personale.

[Zona di Ombra]: Zona priva di fonti di luce. Un Eroe in una Zona di Ombra è in Modalità Ombra e, se anche fuori Linea di Vista dai nemici, è invisibile a tutti gli avversari.

[Incantamenti]: Effetti speciali sulle carte nemico o sull'equipaggiamento, innescati quando si ottengono i simboli Bam (☆) o Diamante (◆) nel tiro di combattimento.

[Orda]: Un gruppo nemico composto da un Boss e dai suoi Gregari. Conta come un singolo nemico. Il Boss è immune alle ferite finché almeno un Gregario si trova nella sua zona.
:::
