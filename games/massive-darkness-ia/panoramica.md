# Componenti principali

## Tessere e mappa

Il tabellone è composto da **9 tessere modulari a doppia faccia**, assemblate secondo la mappa della missione. Ogni tessera è suddivisa in **Zone**, separate da linee sul pavimento o da pareti.

- **[Zona Stanza]{.def}** — area delimitata da quattro pareti.
- **[Camera]{.def}** — insieme di Zone Stanza collegate da aperture o segnalini Porta Aperta e circondate da pareti. Zone Stanza separate da una Porta Chiusa sono Camere distinte.
- **Zona Corridoio** — tutte le zone che non sono Zone Stanza.

Le zone possono essere **in Luce** (presenza di torce o fuochi) o **in Ombra** (buio completo). Questa distinzione è visivamente indicata sulle tessere.

---

## Carte

| Tipo | Codice | Descrizione |
|---|---|---|
| Tesoro | T1–T176 | Equipaggiamento ottenuto sconfiggendo guardiani o raccogliendo segnalini. Divisi in 5 livelli. |
| Guardia | G1–G50 | Carte nemico delle Orde e degli Agenti. 10 carte per livello (livelli 1–5). |
| Porta | P1–P10 | Si pesca all'apertura di una Camera. Indica cosa c'è nelle prime 3 stanze. |
| Evento | E1–E20 | Si pesca nella Fase degli Eventi. Può generare nemici, pattuglie o benedizioni. |
| Mostro Errante | ME1–ME12 | 6 Minori e 6 Maggiori. Si generano a livello 1–3 (Minore) o 4–5 (Maggiore). |
| Equipaggiamento di Partenza | EP1–EP19 | Carte base distribuite all'inizio. Considerate di livello 1. |
| Artefatto | A1–A6 | Oggetti leggendari, solitamente obiettivi di missione. Considerati di livello 4 in Modalità Storia. |

---

## Plancia Eroe

La Plancia Eroe tiene traccia di tre valori tramite pioli colorati:

- **Salute** — parte a 5, massimo aumentabile a 7 con l'Abilità "Salute Potenziata".
- **Punti Esperienza (PE)** — fino a 30 simultaneamente; quelli in eccesso vanno perduti.
- **Micro-Punti Esperienza** — solo in Modalità Storia (5 Micro-PE = 1 PE).

Gli slot sulla plancia definiscono l'inventario attivo:

- **Slot Mano** (×2) — accetta armi a Una Mano (max 2) o un'arma a Due Mani.
- **Slot Corpo** (×1) — accetta 1 armatura indossata.
- Le carte non impugnate/indossate restano accanto alla plancia (inventario libero, illimitato durante la missione).

---

## Scheda Classe

Ogni classe ha:

- **Potere Personale** — abilità speciale attivabile spendendo 1 PE (una volta per attivazione, dal livello 1).
- **Abilità di Classe Gratuita** — abilità sempre disponibile senza costi.
- **Linee di Abilità** — percorsi di potenziamento acquistabili con PE. Le abilità si acquistano in ordine progressivo; ogni livello superiore sostituisce il precedente nella stessa linea.

---

# Carte Equipaggiamento

## Equipaggiamento da Combattimento

Ogni carta mostra i dadi associati a uno o più tipi di combattimento:

| Simbolo | Tipo | Gittata |
|---|---|---|
| ⚔ Mischia | Corpo a corpo | 0 (stessa zona) |
| 🏹 Distanza | Arco, balestra… | 1+ (qualsiasi zona in LdV) |
| ✨ Magia | Bastone, sfera… | 1–2 (zone in LdV) |
| 🛡 Difesa | Armature, scudi… | Passiva (nessuna azione) |

Una carta può appartenere a più tipi contemporaneamente (es. una spada lunga ha dadi sia in Mischia che in Difesa).

**Armi a Due Mani** — occupano entrambi gli slot Mano; non si possono combinare con altre armi per sommare i dadi.

## Oggetti e Monouso

- **Oggetti** — effetti passivi o attivabili descritti sulla carta; sempre considerati "impugnati".
- **Monouso** — si applica l'effetto e si scarta la carta.

---

# Nemici

## Ruoli

| Ruolo | Caratteristica chiave | PE a tutti gli Eroi |
|---|---|---|
| **Gregario** | Parte di un'Orda; protegge il Boss | 1 PE (solo all'Eroe che uccide) |
| **Boss** | Immune finché ha Gregari nella zona | 3 PE |
| **Agente** | Genera rinforzi ogni round se non eliminato | 4 PE |
| **Mostro Errante** | Creatura solitaria molto potente | 5 PE |

## Guardiani

Boss, Agenti e Mostri Erranti sono tutti **Guardiani**: quando vengono generati, pescano una carta Tesoro del livello attuale e la "impugnano". Possono usare quell'equipaggiamento in combattimento (solo nei tipi di combattimento che già possiedono). La carta passa all'Eroe che infligge il colpo mortale.

> Se la carta pescata ha la parola chiave **Trappola**, scartala senza applicare effetti e pesca un'altra carta.

## Agenti e rinforzi

Se un Agente è ancora in gioco alla fine della Fase dei Nemici, pesca una carta Guardia del suo livello e colloca il nemico indicato sulla tessera dell'Agente, nella zona con il segnalino Livello. Questo accade ogni round finché l'Agente non è eliminato.

---

# Dadi di Combattimento

| Colore | Tipo | Forza |
|---|---|---|
| Rosso | Attacco | Migliore |
| Giallo | Attacco | Standard |
| Verde | Difesa | Migliore |
| Blu | Difesa | Standard |

Oltre ai simboli **Colpo** (⚔) e **Scudo** (◯), i dadi mostrano **Bam** (☆) e **Diamante** (◆) usati per innescare gli Incantamenti.

- **Attacco ☆** — Bam con dado di attacco giallo o rosso.
- **Attacco ◆** — Diamante con dado di attacco rosso.
- **Difesa ☆** — Bam con dado di difesa blu o verde.
- **Difesa ◆** — Diamante con dado di difesa verde.

---

# Carte Porta in dettaglio

Quando apri una Camera per la prima volta, pesca 1 carta Porta per l'intera Camera. La carta è divisa in 3 sezioni (Zona 1, 2, 3):

- **Zona 1** — la stanza direttamente collegata alla porta aperta.
- **Zona 2** — la stanza successiva.
- **Zona 3** — la stanza oltre la seconda.

Ogni sezione indica se generare una carta Guardia (del livello attuale) e quanti/quali segnalini Tesoro collocare. Se la Camera ha meno di 3 stanze, ignora le sezioni extra. Se ne ha più di 3, nelle stanze oltre la terza non accade nulla (salvo indicazioni della missione).

> Alcune sezioni riportano la dicitura **Imboscata!**: il nemico viene generato direttamente nella zona dell'Eroe attivo.

---

# Stordimento

L'effetto **Stordimento** mette temporaneamente fuori combattimento un personaggio (miniatura coricata su un fianco).

- Un **Eroe stordito** deve spendere 1 azione per rialzarsi prima di poter fare altro.
- Un **Nemico stordito** trascorre la sua intera attivazione successiva a rialzarsi (non può muoversi né attaccare).
- I personaggi storditi **non bloccano il movimento**: gli Eroi possono uscire da zone con nemici storditi, e i nemici possono uscire da zone con Eroi storditi.
- Se un'intera Orda è stordita, il Boss può essere ferito direttamente (i Gregari storditi non lo proteggono).
- I bersagli storditi tirano comunque i dadi di difesa normalmente e non possono essere storditi di nuovo.

---

# Abilità — Riferimento rapido

Alcune abilità particolarmente rilevanti da conoscere:

- **Sfuggente** — l'Eroe può uscire da zone contenenti nemici.
- **Carica** — spendi 1 azione di combattimento: muoviti di 1–2 zone verso un nemico ed effettua un'azione in mischia gratuita.
- **Tiro Sicuro** — spendi 1 azione: muoviti di 1 zona (con Sfuggente) ed effettua un'azione a distanza gratuita.
- **Provocare** — l'Eroe è sempre considerato quello con più PE sul tabellone (attira i nemici).
- **Comando** — 1 volta per attivazione, spendi 1 azione per far eseguire immediatamente 1 azione gratuita a un altro Eroe (senza innescare contrattacchi).
- **Ritorsione X** — se il difensore riceve più Scudi che Colpi, infligge X Ferite all'attaccante.
- **Rigenerazione X** — all'inizio della propria attivazione, l'Eroe si cura di X Ferite.

---

# Modalità Storia — Approfondimento

In Modalità Storia l'esperienza si guadagna più lentamente tramite i **Micro-PE**: ogni PE standard corrisponde a 5 Micro-PE. Il contatore si azzera automaticamente ogni volta che raggiunge 5, convertendosi in 1 PE.

Il **livello dell'Eroe** in Modalità Storia è definito dall'abilità più alta che ha acquisito: ogni missione inizia al livello corrispondente al livello del personaggio più avanzato del gruppo.

## Fase del Mercato Cittadino

Si svolge tra una missione e l'altra (dalla seconda in poi). Per prepararlo:

1. Pesca tante carte Tesoro di livello 1 quanti sono gli Eroi.
2. Pesca altrettante carte del livello dell'Eroe meno avanzato.
3. Per ogni Eroe, pesca 1 carta pari al suo livello.

Ogni Eroe può effettuare **uno** dei seguenti scambi:

- **Equipaggiamento → PE** — scarta 1 carta per ottenere PE pari alla metà del suo livello (arrotondato per eccesso).
- **Equipaggiamento → Equipaggiamento** — scambia carte di pari o superiore livello totale con quelle del Mercato (1 per 1, 2 per 1, o 1 per 2, con le regole di livello).

Al termine: tutti gli Eroi si curano completamente; ogni Eroe lascia il Mercato con al massimo **6 carte** in inventario (incluso non più di 1 Artefatto).

---

:::glossary
[Zona Stanza]: Area delimitata da quattro pareti su una tessera. Può essere in luce o in ombra.

[Camera]: Insieme di una o più Zone Stanza collegate da aperture (prive di porta) o da segnalini Porta Aperta, circondate da pareti. Camere separate da una Porta Chiusa sono considerate distinte.
:::
