# La Mappa

La mappa dei Boschi è composta da **12 radure** collegate da **sentieri** bianchi. Ogni radura ha un simbolo (topo, coniglio o volpe) e un numero di **spazi edificio** (riquadri bianchi) in cui possono essere costruiti edifici.

- **Rovine**: le 4 rovine occupano spazi edificio contrassegnati da "R". Non possono essere rimosse (salvo dall'azione Esplorazione del Vagabondo).
- **Foreste**: le aree racchiuse dai sentieri e dalle radure. Solo il Vagabondo può accedervi con la Scorciatoia.
- **Fiumi**: collegamenti blu tra radure. Non sono sentieri e non dividono le foreste (usati dalla Compagnia del Fiume).

:::indent
**Adiacenza**: una radura è adiacente a un'altra se un sentiero le connette direttamente. Una foresta è adiacente alle radure che la toccano senza attraversare un sentiero.
:::

---

# Componenti

## Plance Fazione

Ogni plancia fazione descrive le regole della fazione su entrambi i lati:

- **Fronte**: le regole delle tre fasi (Alba, Giorno, Crepuscolo) e le abilità speciali.
- **Retro**: l'elenco completo dei pezzi e le istruzioni di preparazione standard.

## Il Mazzo Condiviso

**54 carte** suddivise per simbolo (topo, coniglio, volpe, uccello). Ogni carta ha:

- Un **simbolo** in alto (identifica la corrispondenza con le radure).
- Un **costo di produzione** in basso a sinistra (simbolo/i necessari per far produrre la carta).
- Un **effetto** in basso a destra: immediato (sfondo color carta) o permanente (sfondo color pietra).

Tipi speciali non producibili: **carte imboscata** (5) e **carte dominio** (4).

## Oggetti

Gli oggetti sono pezzi di cartone neutri (non appartengono a nessuna fazione). Vengono costruiti tramite la produzione di carte e sono fondamentali per il Vagabondo. Tipi presenti nella riserva iniziale:

| Oggetto | Quantità | Simbolo |
|---|---|---|
| Sacco | 2 | M (monete) |
| Stivale | 2 | B (boot) |
| Balestra | 1 | X (crossbow) |
| Torcia | 1 | F (flashlight) |
| Martello | 2 | H (hammer) |
| Tè | 2 | T (tea) |
| Pila di monete | 2 | C (coins) |

---

# Concetti Chiave

## Impatto (Selezione Fazioni)

Ogni fazione ha un valore di [Impatto]{.def} che indica quanto è forte. Per partite equilibrate, la somma dell'Impatto delle fazioni scelte deve essere almeno:

| Giocatori | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|
| Impatto minimo | 17 | 18 | 21 | 25 | 28 |

:::indent
**Valori di Impatto:** Marchesa 10, Orda 9, Custodi 8, Ducato 8, Aquile 7, Vagabondo (1°) 5, Vagabondo (2°) 2, Compagnia 5, Alleanza 3, Corvidi 3, Lucertole 2.
:::

> Il sistema Impatto è stato **sostituito** dalla Preparazione Avanzata nelle edizioni più recenti. Con la Preparazione Avanzata non è necessario calcolarlo.

## Regole d'Oro

- Se il testo su una carta **contraddice** il regolamento, prevale la carta.
- Se puoi applicare sia una regola generale sia una regola di fazione, **applica entrambe**; se non puoi, prevale la regola di fazione.
- Il termine **non può** è assoluto: non può essere annullato da altre regole salvo esplicita deroga.
- Le azioni non richiedono il consenso degli altri giocatori.
- Se non è chiaro l'ordine di risoluzione degli effetti simultanei, decide il **giocatore di turno**.

## Informazioni Pubbliche e Private

- Il numero di carte in mano è sempre **pubblico**.
- Il contenuto delle carte in mano è **privato** (salvo abilità specifiche).
- Le carte nella **pila degli scarti** possono essere guardate in qualsiasi momento.

## Accordi tra Giocatori

I giocatori possono stringere alleanze verbali, ma **nessun accordo è vincolante**. Le carte possono essere date ad altri giocatori solo se esplicitamente indicato dalle regole.

## Limiti dei Pezzi

Il numero di pezzi nel gioco è un **limite fisso**. Se si esauriscono non si sostituiscono. Se devi posizionare pezzi ma non puoi farlo completamente, posiziona il massimo possibile.

---

# Variante Mappe

## Mappa Invernale

Sul retro della mappa autunnale. Prima di giocare, mescola i **12 indicatori simbolo** a faccia in giù e posizionane uno vicino a ogni radura, poi girali tutti. I simboli sono quindi distribuiti casualmente. Il **fiume divide le foreste** come se fosse un sentiero.

## Mappa del Lago (espansione Il Mondo Sotterraneo)

Il lago al centro è considerato un fiume e collega tutte le radure costiere tra loro. Le foreste costiere (che toccano il lago) sono adiacenti alle due foreste costiere più vicine separate da una radura costiera invece che da un sentiero. Il **Traghetto** permette un movimento speciale (una volta per turno) verso qualsiasi radura costiera, poi si sposta lì e il giocatore pesca una carta.

> **Con i bot:** i bot usano il Traghetto seguendo le normali regole di movimento, trattando la radura con il Traghetto e tutte le altre radure costiere come collegate da un sentiero. Ottengono 1 punto vittoria invece di pescare una carta, come sempre per i bot.

## Mappa della Montagna (espansione Il Mondo Sotterraneo)

**Sentieri nascosti**: i sentieri arancioni sono coperti da indicatori. Le radure collegate da sentieri nascosti **non sono adiacenti**. Durante la propria fase Giorno, un giocatore può scartare una carta per rimuovere permanentemente un indicatore sentiero nascosto (deve avere almeno un pezzo in una delle due radure collegate) e ottenere 1 punto vittoria. Il **Valico** (radura con la Torre) vale 1 punto vittoria per chi lo controlla alla fine della propria fase Crepuscolo.

> **Con i bot:** i bot trattano i sentieri chiusi come sentieri normali e ignorano le regole per riaprirli. Quando un bot deve scegliere una radura in base alla priorità più alta o più bassa, il **Valico** soddisfa sempre questa condizione: i bot tenderanno quindi a puntare al Valico, che vince ogni parità di priorità.

---

# ![puzzle]{.icon} Mazzo Esuli e Partigiani

Sostituisce integralmente il mazzo standard da 54 carte. Contiene le stesse tipologie di carte (effetti immediati, permanenti, imboscate, dominio) ma con testi diversi. La carta **Esule delle Aquile** ha un effetto permanente **obbligatorio** (non opzionale).

---

# ![puzzle]{.icon} Kit del Vagabondo

Aggiunge **7 pedine Vagabondo** aggiuntive (per più personaggi in gioco) e **3 nuovi personaggi** con oggetti iniziali e azioni speciali diverse da quelle dei personaggi base.

---

# ![puzzle]{.icon} Combattenti — Kit Il Mondo Sotterraneo e Kit La Compagnia del Fiume

Aggiungono combattenti neutri specifici per le espansioni corrispondenti, utilizzabili con le regole standard dei combattenti descritte in Svolgimento.

---

# ![puzzle]{.icon} Regole dei Bot (Legge della Rootbotica)

I bot seguono le stesse regole della Legge di Root, con le modifiche e le regole aggiuntive descritte qui sotto, comuni a **tutti** i bot. Le regole specifiche di ogni bot sono nella rispettiva sezione fazione.

## Terminologia

Il termine "giocatore" include sia gli [umani]{.def} sia i **bot**. Ogni turno, un bot pesca e rivela una **carta ordine**, che ne determina alcune azioni: il termine [ordinato]{.def} significa "che corrisponde al simbolo della carta ordine attuale". L'espressione "**tale radura**" (o "tale giocatore") indica "la radura (o il giocatore) che soddisfa tutti i criteri di bersaglio elencati dall'azione".

## Priorità e Legalità del Bersaglio

- **Priorità Radura.** Se un bot deve scegliere tra più radure da bersagliare, segue tutte le regole indicate dall'azione. Se queste non bastano a decidere, il bot bersaglia la radura di [priorità]{.def} più alta tra quelle possibili.
- **Priorità Giocatore.** Analogamente, se deve scegliere tra più giocatori, segue le regole dell'azione; altrimenti bersaglia il giocatore con priorità di preparazione più alta, a partire dalla Marchesa con "A".
- **Legalità del Bersaglio.** Un bot può bersagliare solo una radura o un giocatore consentiti dall'azione richiesta. Se il bersaglio individuato non è legale, il bot prova con l'altra radura/giocatore a pari priorità; se le ha già tentate tutte, prova con la radura/giocatore successivo in ordine di priorità, e così via finché non trova un bersaglio legale o li ha tentati tutti.
- **Ordine delle Azioni.** Se un bot deve compiere più azioni con bersagli diversi che potrebbero produrre risultati differenti a seconda dell'ordine, le esegue partendo dal bersaglio di priorità più alta. Per il movimento, si considera la priorità della radura di origine, non quella di destinazione.

## Abilità Comuni a Tutti i Bot

- **Scarsa Manualità.** I bot non hanno una mano di carte e non possono scartare. Se un umano dovrebbe prendere una carta da un bot, l'umano pesca una carta invece. Se un umano dovrebbe dare una carta a un bot, la scarta e il bot ottiene **1 punto vittoria**.
- **Odia le Sorprese.** Le [carte imboscata]{.def} non possono mai essere giocate contro un bot.

## Modifiche Generali alla Legge

:::accent
- I bot **fabbricano** oggetti senza attivare unità di produzione (l'oggetto deve comunque essere disponibile nella riserva) e ottengono sempre **1 solo punto vittoria** per la fabbricazione, indipendentemente da quanti ne indica la carta. Non possono fabbricare carte con effetti permanenti.
- Quando un bot **subisce danni** in battaglia, rimuove prima tutti i propri pezzi dalla radura, poi eventuali edifici (se ne ha di più tipi, sceglie casualmente quale rimuovere).
- I bot **non possono** attivare carte dominio per cambiare le proprie condizioni di vittoria.
:::

---

# ![puzzle]{.icon} Scenari Fanmade (Riverfolk) — Panoramica Elementi

**Feline Frenzy.** Margot è una pedina speciale che non può essere rimossa: se qualcosa la rimuovesse, viene spostata in una radura adiacente. È considerata un guerriero per movimento e battaglia, ma non è un giocatore (non può controllare radure). Non può essere usata con altri setup della Marchesa.

**Eyrie Leaders.** I Leader delle Aquile sono token speciali che contano come guerrieri per il controllo (pareggio incluso). Non possono essere attaccati o rimossi. Non compatibile con altri setup delle Aquile (Electric Eyrie, Last Dynasty, Bluebird Nobles, ecc.).

**Mischief Makers.** I Makers hanno ognuno la propria radura (non possono condividerne una). Sono considerati difensori in battaglia. Il **Leading Player** è quello con più punti vittoria nella radura; il **Trailing Player** è quello con meno. I Mischief Makers non possono essere usati con altri Maker già in gioco.

**Giant Bear.** L'Orso è una pedina (non un guerriero). Va per ultimo nell'ordine di turno. Il tracciato VP inutilizzato indica il suo stato: i valori da 0 a 30 indicano quanto è vicino al risvegliarsi (0–30), e quando sveglio i valori da 30 a 0 indicano la sua salute. Non compatibile con altri setup dell'Orso.

**Fort of Forts.** I segnalini Fortification non occupano spazi edificio e non possono essere mossi o rimossi. Ogni Fortification può contenere al massimo 1 guerriero/pedina Fortified. I guerrieri Fortified possono essere rimossi solo con la balestra (crossbow) o convertiti dalla Lizard Cult se sono l'ultimo della loro fazione in quella radura.

**Otter Salesmen.** I Salesmen non possono essere attaccati o rimossi. Quando tutti i pezzi nemici vengono rimossi da una radura con un Salesman, il Salesman può spostarsi in una radura adiacente collegata dal fiume. Non compatibile con altri setup dei Riverfolk (Riverfolk Company, Rivetfolk, Riverfolk Flotilla, Otter Divers).

:::glossary
[Impatto]: Valore numerico di ogni fazione che indica la sua efficacia nel gioco. Usato per bilanciare la selezione delle fazioni nella preparazione standard.

[umani]: I giocatori umani, per distinguerli dai bot nelle regole che si applicano solo a uno dei due gruppi.

[ordinato]: Che corrisponde al simbolo della carta ordine rivelata dal bot in quel turno.

[priorità]: Il segnalino (da 1 a 12, uno per radura) posizionato durante il setup con i bot, usato per risolvere le scelte di bersaglio quando le regole di un'azione non bastano a decidere.

[carte imboscata]: Le 5 carte speciali (una topo, una coniglio, una volpe, due uccello) che il difensore può giocare per infliggere danni immediati all'inizio di una battaglia.
:::
