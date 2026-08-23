# Componenti Principali

## Tabellone e Mappa

Il **Complesso** è formato da **3 Bordi dei Settori** (A, B, C) collegati ai **3 Bordi del Tracciato dei Turni**. Le Stanze vengono rivelate durante la partita e collegate tramite Corridoi.

**Tessere Stanza (23 in totale):**

| Tipo | Quantità | Stanze Fisse |
|---|---|---|
| Settore A | 3 | Zona d'Atterraggio, Sala di Perforazione, Supporto Vitale A, Sala Operatoria |
| Settore B | 3 | Hibernatorium, Impianto di Raffreddamento, Supporto Vitale B, Sala Server |
| Settore C | 4 | Supporto Vitale C, Il Nido, Il Reattore, Navetta d'Emergenza |
| Casuali "?" | 13 | Varie, possono apparire in qualsiasi Settore |

**Tessere Corridoio (40 in totale):** 10 per ogni valore di Rumore (1, 2, 3, 4). Ogni Corridoio ha un lato Fronte (con valore Rumore) e un lato Retro Rinforzato (valore 0). Alcuni Corridoi hanno uno spazio Portellone.

---

## Struttura delle Carte

**Carte Grandi:**

| Carte | Quantità |
|---|---|
| Carte Azione (10 per Personaggio) | 60 |
| Carte Obiettivo (7 di Missione + 15 Privati) | 22 |
| Carte Evento | 20 |
| Carte Compito di Missione | 8 |
| Carte Compito di Missione Solitario/Coop | 12 |
| Carte Esplorazione | 12 |
| Carte Aiuto | 5 |
| Carte Scelta Personaggio | 6 |
| Carte Attacco dell'Intruso | 20 |
| Carte Contaminazione | 27 |

**Carte Piccole:**

| Carte | Quantità |
|---|---|
| Carte Strumento (30 per colore: rosso, verde, giallo) | 90 |
| Carte Strumento del Personaggio | 7 |
| Carte Equipaggiamento di Supporto | 24 |
| Carte Ferita Grave | 27 |
| Carte Robot | 6 |
| Carte Salute della Regina | 12 |

---

## Plancia Personaggio

Ogni plancia è composta da una **plancia generica** e una **tessera Personaggio** inserita. La plancia mostra:

- **Nome e Grado** del Personaggio (il Grado influenza alcune carte Azione che permettono comandi gerarchici).
- **Tracciato Salute** con 3 stati: *Illeso*, *Ferito*, *Gravemente Ferito*. Il segnalino Salute scorre da sinistra verso il Teschio (morte). Le **Ferite Gravi** sono carte piazzate sugli stati del tracciato che ne riducono il massimo e introducono penalità.
- **Cintura Tattica** con 4 spazi Dispositivo Tattico (tutti grigi = accettano qualsiasi tipo).
- **Riserva di Ossigeno** (manopola da 0 a 7).
- **2 spazi Mano** per gli Strumenti Pesanti.
- **Lista delle Azioni** con relativi costi.
- **Spazio Zaino Portacarte** per il mazzetto delle carte Azione.

---

# Concetti Chiave

## Salute e Ferite

Il [tracciato Salute]{.def} ha 3 stati: **Illeso**, **Ferito**, **Gravemente Ferito**. Perdere Punti Salute fa avanzare il segnalino verso il Teschio; recuperarne lo fa arretrare.

**Ferite Gravi:** carte pescate casualmente dal mazzo Ferite Gravi e piazzate sullo stato più a sinistra non ancora occupato. Ogni Ferita Grave blocca quello spazio del tracciato (il segnalino non può occuparlo). Se il segnalino si trova già in quello stato, si sposta al primo spazio libero dello stato successivo (potrebbe costare il sacrificio di un'Armatura).

:::indent
- Un Personaggio può avere 2 Ferite Gravi identiche: è lecito, ma gli effetti non si cumulano.
- Scartare una Ferita Grave non sposta il segnalino Salute.
- I Personaggi possono sempre scegliere di recuperare *meno* Salute di quanta indicata da un effetto.
:::

**Morte:** quando il segnalino avanza oltre l'ultimo spazio (il Teschio), il Personaggio muore, viene rimosso dalla mappa e tutti i suoi Strumenti vengono rimossi dal gioco.

## Ossigeno

Il [Complesso]{.def} contiene ossigeno contaminato non purificabile senza il Supporto Vitale. Ogni Personaggio inizia con **Ossigeno 7** (massimo). Alla fine di ogni proprio turno, se ti trovi in un Settore con Supporto Vitale **Inattivo**, perdi 1 Ossigeno.

Quando l'Ossigeno raggiunge 0 ottieni un **segnalino Soffocare**: la prossima volta che perdi Ossigeno, muori. Il segnalino si scarta quando ottieni Ossigeno o termini il movimento in un Settore con Supporto Vitale Attivo.

Permanere in un Settore con Supporto Vitale **Attivo** non reintegra l'Ossigeno automaticamente: servono Strumenti o segnalini Ossigeno.

## Strumenti

Gli Strumenti si dividono in:

- **Ordinari:** carta verticale, vanno nello Zaino (Portacarte). Nessun limite alla quantità nello Zaino. Contenuto segreto.
- **Pesanti:** carta orizzontale, vanno in uno dei 2 spazi Mano (1 per spazio). Le Armi a Distanza sono necessarie per Sparare a Colpo Singolo e a Raffica.
- **Armature:** contengono la parola chiave "Armatura", vanno nello spazio Gravemente Ferito del tracciato Salute. Funzione passiva: quando il segnalino Salute dovrebbe avanzare nello spazio occupato dall'Armatura, essa si rompe e viene scartata; solo allora il segnalino avanza.
- **Monouso:** vengono scartati dopo l'uso.
- **Non richiede Munizioni:** possono sparare senza segnalini Munizioni (contano come aventi sempre 1 Munizione).

Gli Strumenti si ottengono principalmente con l'Azione **Ricerca** (carta Azione dell'Ingegnere Militare e altri): per ogni icona Strumento nella Stanza attuale, pesca 1 carta del tipo corrispondente; tienine al massimo 1 e scarta le altre.

## Segnalini Malfunzionamento

I segnalini Malfunzionamento rappresentano componenti rotti. Possono essere piazzati su:

- **Stanze:** l'Azione della Stanza non è disponibile (le icone Strumento e Computer restano accessibili).
- **Strumenti Pesanti:** lo Strumento non può essere usato in alcun modo; i Dispositivi Tattici su di esso sono ancora utilizzabili. Se ne arriva un secondo, lo Strumento viene scartato.
- **Robot:** il Robot non può essere usato; i Dispositivi Tattici sul Robot restano usabili.

Se i segnalini Malfunzionamento si esauriscono, piazza invece un segnalino Fuoco nella Stanza.

## Segnalini Fuoco

Il fuoco è pericoloso sia per i Personaggi che per gli Intrusi. Ogni Stanza può contenere **1 solo segnalino Fuoco**. Gli effetti:

1. Alla fine del tuo turno in una Stanza con Fuoco, perdi **1 Punto Salute**.
2. Durante la Fase Intruso, ogni Intruso nella Stanza subisce **1 Colpo** (non usa dadi, non uccide tranne le Larve). Se è nel Nido, distrugge 1 Uovo.
3. Può propagarsi a Stanze vicine per effetto di alcune carte Evento (i Portelloni Chiusi bloccano la propagazione).

:::accent
Se i segnalini Fuoco si esauriscono e dovrebbe essere piazzato un altro, il Complesso viene **Distrutto**.
:::

## Segnalini Sicuro

Proteggono i Personaggi dagli Attacchi di Intrusi che *entrano* nella Stanza (non da quelli già presenti). Massimo **3 per Stanza**. Non puoi piazzarli in una Stanza con Intrusi già presenti. Alcune Stanze non possono mai essere messe in sicurezza (es. Il Nido); alcune lo sono sempre (es. Il Rifugio).

:::accent
Lo stato "sempre in sicurezza" del **Rifugio** è uno stato **permanente della Stanza**, non un segnalino Sicuro. Non può essere rimosso da Strumenti o effetti che scartano segnalini Sicuro, e non conta per effetti che richiedono la presenza di segnalini Sicuro. Nella Stanza si possono comunque aggiungere fino a **3 segnalini Sicuro** normali: questi vengono scartati per primi in caso di Attacchi o effetti, prima che lo stato permanente agisca.
:::

## Il Nido

Il Nido (Settore C) ospita i **5 segnalini Uova** sul Bordo del Settore C, considerato un'estensione della Stanza. Le Uova sono **Strumenti Pesanti** e si raccolgono con l'Azione della Stanza Nido. Quando tutte le Uova sono rimosse, piazza un segnalino universale: il Nido è distrutto (anche se effetti successivi aggiungono nuove Uova, rimane considerato distrutto).

## Il Robot

Una **carta Robot** casuale viene selezionata durante la Preparazione e rimane segreta finché una Stanza non viene connessa all'Hibernatorium. Esistono **6 tipi diversi** di Robot, ognuno con un effetto unico. Il Robot è ignorato dagli Intrusi. Può essere attivato:

- **Localmente:** se sei nella stessa Stanza del Robot (costo: 1 carta Azione).
- **Da Remoto:** se sei in una Stanza con un Computer e hai un segnalino Dati (o spendendo 1 carta Azione aggiuntiva).

Il Robot si muove sempre da Stanza a Stanza vicina, ignora gli Intrusi ma non attraversa Portelloni Chiusi né Corridoi Inesplorati (eccetto il Robot Esploratore).

## Modulo da Sbarco e Antiaerea

Il **Modulo da Sbarco** tenta di atterrare al round 10. Il sistema **Antiaerea** (2 segnalini sovrapposti in ordine casuale) determina l'esito:

- Segnalino in cima **Inattivo** → il Modulo atterra nella Zona d'Atterraggio; i segnalini Antiaerea vengono rimossi definitivamente.
- Segnalino in cima **Attivo** → il Modulo è distrutto.

I giocatori possono controllare (in segreto) e riordinare i segnalini Antiaerea usando la Stanza **Supporto Vitale B**.

Una volta atterrato, i Personaggi possono salire a bordo con l'Azione della Zona d'Atterraggio. Chi è a bordo salta i propri turni ma non è considerato aver Passato, non consuma Ossigeno e non può subire danni. All'inizio della Fase Evento, uno qualsiasi dei giocatori a bordo può decidere il **Lancio**: il Modulo parte e tutti i passeggeri sono Scappati.

## Procedure di Emergenza

**Procedura di Autodistruzione:** avviata nell'Impianto di Raffreddamento. Piazza il segnalino Autodistruzione 5 spazi avanti al Segnaturno. Quando il Segnaturno lo raggiunge, il Complesso esplode. Può essere interrotta **solo** spegnendo il Complesso dalla Stanza del Reattore.

**Scappare tramite la Navetta d'Emergenza:** 1 solo posto disponibile nel Settore C. I sistemi Antiaerei non la colpiscono mai. Chi sale è Scappato.

**Ibernarsi nell'Hibernatorium:** richiede che l'Hibernatorium sia Attivo (attivabile dalla Stanza Supporto Vitale C). Chi si iberna è Sopravvissuto ma non è considerato Scappato.

## Stanze Chiave per Settore

**Settore A:**
- **Zona d'Atterraggio:** punto di partenza; permette di salire sul Modulo da Sbarco e reintegrare le scorte (segnalini Dispositivo Tattico dagli appositi spazi).
- **Supporto Vitale A:** attiva/disattiva il Supporto Vitale nel Settore A e spegne gli incendi in qualsiasi Stanza del Complesso.
- **Sala Operatoria:** scarta Ferite Gravi e rimuove l'Infezione da Larva.

**Settore B:**
- **Hibernatorium:** luogo di salvezza. Il Robot parte da qui.
- **Supporto Vitale B:** attiva/disattiva il Supporto Vitale del Settore B e permette di sbirciare/riordinare i segnalini Antiaerea.
- **Impianto di Raffreddamento:** avvia la Procedura di Autodistruzione.
- **Sala Server:** fornisce il segnalino Dati (richiesto da alcuni Obiettivi e per l'attivazione remota del Robot senza costi aggiuntivi).

**Settore C:**
- **Supporto Vitale C:** attiva/disattiva il Supporto Vitale del Settore C e attiva l'Hibernatorium.
- **Il Nido:** contiene le Uova. Non può essere messo in sicurezza.
- **Il Reattore:** spegne definitivamente il Complesso (disattiva Supporti Vitali, Autodistruzione e Antiaerea).
- **Navetta d'Emergenza:** via di fuga con 1 solo posto.

---

---

# ![puzzle]{.icon} Mercenari

## I Personaggi Mercenario

I Mercenari di questa espansione sostituiscono le 5 carte "Mercenario: Consulente" del gioco base con 5 carte proprie. Le tessere Personaggio sono a doppia faccia. I Mercenari disponibili sono: Hacker, Soldato, Esploratore, Meccanico, Sentinella, Cavia. Ogni Mercenario ha le proprie 2 carte Strumento del Personaggio e parte con entrambe (non partecipa alla Selezione dell'Equipaggiamento).

---

---

# ![puzzle]{.icon} Culto della Nuova Carne

## Scheda Aiuto del Culto

La scheda ha 2 lati: **"La Regina non è sulla mappa"** e **"La Regina è sulla mappa"**. Usa sempre il lato corretto.

## Carte Abilità

Le 6 carte Abilità sono numerate; il numero indica l'ordine di spareggio. Vengono disattivate (capovolte) quando il Cultista corrispondente viene sconfitto. Se un Cultista muore senza che sia un Personaggio ad ucciderlo, disattiva l'ultima Abilità in ordine. Se l'**Abilità dei Cultisti** non è ancora stata disattivata, viene disattivata per prima.

## Tessera Corpi Assorbiti

La tessera si attacca al tracciato Ferite della Regina sul Bordo Settore B. Ogni corpo assorbito rivela un nuovo spazio del tracciato, ampliando la vita effettiva della Cerebromadre. I segnalini Cerebromadre presenti sulla tessera verranno aggiunti al Sacchetto man mano che i Corpi vengono assorbiti.

## Segnalini Intruso del Culto

I segnalini Intruso del Culto indicano sul retro i tipi **e le quantità specifiche** di Intrusi da piazzare nel Corridoio (es. 1 Dilaniatore + 1 Ferromanto + 2 Scavastriscio). Se non c'è spazio sufficiente, segui la Regola d'Oro del Culto: piazza quanti puoi nell'ordine di priorità indicato dalle carte Abilità (prima il Dilaniatore, poi lo Scavastriscio, ecc.).

---

---

# ![puzzle]{.icon} Infiltrata

## Mazzo Storia

Le 55 carte Storia sono divise in mazzetti, ciascuno relativo a una Stanza specifica. In ogni partita viene usato un solo mazzetto (la storia che si attiva dipende da quale carta Esplorazione con il simbolo viene pescata per prima). Le carte non usate tornano nella scatola.

## Carta Infiltrata

La carta Infiltrata è a doppia faccia (Amichevole / Ostile). Descrive lo stato di salute attuale dell'Infiltrata, l'Azione disponibile per spostarla e le regole di interazione. Se l'Infiltrata è sulla mappa ma la carta non è stata preparata, non è possibile interagire con lei in alcun modo.

---

---

# ![puzzle]{.icon} Intrusi Xyriani

## Carte Stato

Gli Xyriani possono applicare ai Personaggi delle **carte Stato** (non sono Ferite Gravi). Ogni carta Stato ha effetti specifici attivi finché la carta è visibile, e può essere scartata se la carta lo prevede (rimescolata nel mazzo Stato). Un Personaggio può avere **1 sola carta Stato** alla volta. Se dovrebbe ottenerne una seconda o le carte sono finite, ottiene invece 1 Ferita Grave.

## Strumenti Xyriani

Si raccolgono da un segnalino Strumento Xyriano (lato capovolto del segnalino Xyriano Ferito dopo la morte definitiva di uno Xyriano). Per raccoglierli: stai nella stessa Stanza, non sei in Combattimento, scarta **2 carte Azione**. Quando raccogli:

1. Scarta 1 Ferita Grave e ripristina 3 Punti Salute *prima* di prendere lo Strumento.
2. Pesca 1 carta Strumento Xyriano casuale.

Gli Strumenti Xyriani contano come **Armature** a tutti gli effetti.

## Retro delle Carte Xyriane

Le carte degli Xyriani hanno un retro diverso da quello delle carte ordinarie: sono riconoscibili quando si trovano in cima al mazzo. È vietato sbirciare il mazzo per anticiparne la posizione.

## Xyriani e Modulo da Sbarco

Se un effetto degli Xyriani rimuove il Modulo da Sbarco dalla mappa mentre ci sono Personaggi a bordo, questi vengono **espulsi**: tornano nella Zona d'Atterraggio e riprendono ad agire normalmente dal proprio turno successivo.

---

---

# ![puzzle]{.icon} Sanguivori

## Tipi di Intruso Sanguivori

I Sanguivori non hanno Larve. La gerarchia è:

| Tipo | Equivalente Base |
|---|---|
| **Ghoul** | Adulto |
| **Spettro Sanguinario** | Fuco |
| **Re** | Regina |

Le loro carte Attacco ed Evento seguono schemi differenti dal gioco base.

## Mazzo Ombra

Il mazzo Ombra contiene 13 carte, ciascuna con 3 effetti diversi (1, 2 o 3 segnalini Ombra attraversati). Quando si esaurisce, rimescola la pila degli scarti e riprendi a pescare.

## Salute del Re

La salute del Re funziona esattamente come quella della Regina nel gioco base. Le carte Salute del Re si pescano allo stesso modo.

---

---

# ![puzzle]{.icon} Squadra di Supporto

## Tiratore Scelto

Personaggio specializzato nel combattimento a distanza. Le sue carte Azione si concentrano su Colpi Singoli potenziati e capacità di mira.

## Operatore Droni

Il Drone è un componente separato (modello proprio) controllato esclusivamente dalle carte Azione dell'Operatore. Non va in Combattimento, non interagisce con gli Intrusi e non effettua Tiri Rumore. La complessità di questo personaggio è maggiore rispetto ai personaggi standard: non consigliato per la prima partita.

:::glossary
[tracciato Salute]: Tracciato sulla plancia Personaggio che mostra i 3 stati di salute (Illeso, Ferito, Gravemente Ferito). Il segnalino universale si muove da sinistra (salute piena) verso destra (Teschio = morte).

[Complesso]: Il luogo di gioco: l'insieme di Stanze e Corridoi che emergono durante la partita, diviso in 3 Settori (A, B, C). I suoi confini sono delimitati dai Bordi dei Settori e dai Bordi del Tracciato dei Turni.
:::
