# Prepara & Gioca 🎲

PWA per la gestione di riassunti strutturati di giochi da tavolo.

**URL live:** https://kekkofs75.github.io/prepara-e-gioca

---

## Struttura del Progetto

```
prepara-e-gioca/
├── index.html          ← App SPA completa (HTML + CSS + JS)
├── manifest.json       ← Configurazione PWA
├── sw.js               ← Service Worker (cache offline)
├── games.json          ← Database dei giochi ← MODIFICA QUI
├── icon.png            ← Favicon (64×64)
├── icon-192.png        ← Icona app (192×192)
├── icon-512.png        ← Icona app (512×512)
└── games/
    ├── war-chest/
    │   ├── preparazione.md
    │   ├── obiettivo.md
    │   ├── svolgimento.md
    │   ├── finepartita.md
    │   ├── panoramica.md
    │   └── img/
    │       ├── cover.png       ← Immagine box (card home, ~200×200)
    │       └── copertina.png   ← Banner orizzontale (~800×300)
    └── thunder-road-vendetta/
        ├── (stessa struttura)
        └── img/
            ├── cover.png
            └── copertina.png
```

---

## Aggiungere un Nuovo Gioco

### 1. Crea la cartella

```
games/nome-gioco/
├── preparazione.md
├── obiettivo.md
├── svolgimento.md
├── finepartita.md
├── panoramica.md
└── img/
    ├── cover.png       (immagine quadrata, ~300×300)
    └── copertina.png   (banner orizzontale, ~900×350)
```

### 2. Aggiungi il gioco a `games.json`

```json
{
  "id": "nome-gioco",
  "title": "Nome del Gioco",
  "subtitle": "Sottotitolo opzionale",
  "themeColor": "#RRGGBB",
  "bggRank": 123,
  "bggScore": 8.5,
  "duration": "60-90",
  "players": "2-5",
  "folder": "games/nome-gioco",
  "cover":    "games/nome-gioco/img/cover.png",
  "copertina":"games/nome-gioco/img/copertina.png"
}
```

> **`themeColor`** è il campo più importante: determina i colori dell'interfaccia per quel gioco (titoli, pulsanti, bordi, header). Usa un esadecimale in formato `#RRGGBB`.

### 3. Aggiorna il Service Worker (versione cache)

In `sw.js`, incrementa il numero di versione della cache:

```javascript
const CACHE_VERSION = 'v2'; // era 'v1'
```

Questo forza tutti i client a scaricare i nuovi file.

---

## Markdown dei Riassunti

I file `.md` supportano la sintassi Markdown completa: titoli, liste, tabelle, grassetto, corsivo, citazioni, immagini.

### Immagini nel Markdown

Referenzia le immagini relative alla cartella `img/` del gioco:

```markdown
![Descrizione](img/nome-immagine.png)
```

L'app risolve automaticamente i percorsi relativi.

### Formato Consigliato

Ogni file markdown dovrebbe aprirsi con un titolo `# Nome Sezione` e usare `## Sottosezione` per organizzare i contenuti.

---

## Pubblicazione su GitHub Pages

1. Crea il repository `prepara-e-gioca` su GitHub
2. Carica tutti i file in questo archivio nella root del repo
3. Vai su **Settings → Pages → Source → Branch: main, / (root)**
4. L'app sarà disponibile su `https://kekkofs75.github.io/prepara-e-gioca`

### Aggiornamenti

Ogni volta che aggiungi un gioco o modifichi i contenuti:

1. Fai il commit e push su GitHub
2. Incrementa `CACHE_VERSION` in `sw.js` per forzare l'aggiornamento della cache sui dispositivi degli utenti

---

## Funzionalità PWA

- ✅ Installabile su iOS (Safari → Condividi → Aggiungi a Home)
- ✅ Installabile su Android (Chrome → Installa app)
- ✅ Funziona completamente offline dopo la prima visita
- ✅ Icona e nome personalizzati: "Prepara & Gioca"
- ✅ Splash screen automatica sui dispositivi mobili

---

## Personalizzazione

### Colori dell'App

Il colore di base (arancione tenue) si trova in `index.html`:

```css
:root {
  --primary:       #EE8860;
  --primary-light: #F5AA88;
  --bg:            #FFF8F3;
}
```

### Sezioni del Regolamento

Le sezioni (Preparazione, Obiettivo, ecc.) sono definite nell'array `SECTIONS` in `index.html`. Puoi aggiungerne, rinominarle o cambiarle a piacere, ricordando di aggiornare anche i nomi dei file `.md`.
