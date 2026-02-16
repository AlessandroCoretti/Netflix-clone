# 🍿 Netflix Clone

Un clone fedele dell'interfaccia di Netflix realizzato con **React**, **Vite** e **Tailwind CSS**. Il progetto ricrea l'esperienza utente della piattaforma di streaming, integrando dati reali tramite l'API di TMDB (The Movie Database).

---

## 🇮🇹 Funzionalità e Caratteristiche

Ecco cosa puoi fare all'interno dell'applicazione:

### 👤 Gestione Profili
- **Creazione e Modifica**: Puoi creare nuovi profili scegliendo un nome e un avatar personalizzato.
- **Switch Profili**: Passa facilmente da un profilo all'altro.
- **Persistenza**: I profili e le loro preferenze sono salvati nel `localStorage`, quindi non perderai i tuoi dati ricaricando la pagina.

### 🏠 Home Page e Navigazione
- **Design Immersivo**: Hero section con sfondi dinamici e layout responsivo identico all'originale.
- **Caroselli Scorrevoli**: Sfoglia i titoli divisi per categorie (I più visti, Nuove uscite, ecc.).
- **Navbar Dinamica**: Effetto di trasparenza che cambia durante lo scroll.

### 🎬 Scoperta Contenuti
- **Catalogo Reale**: I film e le serie TV sono caricati dinamicamente tramite le API di TMDB.
- **Categorie**: Pagine dedicate per **Film**, **Serie TV**, **Nuovi e Popolari** e una sezione **Bambini**.
- **Ricerca**: Una barra di ricerca funzionante per trovare velocemente i tuoi titoli preferiti.

### 📝 La Mia Lista
- **Watchlist Personale**: Ogni profilo ha la sua lista personale ("La mia lista").
- **Aggiungi/Rimuovi**: Puoi aggiungere o rimuovere titoli dalla tua lista direttamente dalle card o dal modale info.

### ℹ️ Dettagli e Anteprime
- **Card Interattive**:
    - **Desktop**: Passa il mouse (hover) su una locandina per vedere un'anteprima espansa dopo un breve ritardo.
    - **Mobile**: Tocca la card per espanderla immediatamente.
- **Modale Informativo**: Cliccando sui dettagli si apre un modale con:
    - Trailer del film/serie (da YouTube).
    - Trama, cast, generi, durata/stagioni e punteggio di compatibilità ("Match").

### 🛠️ Tecnologie Utilizzate
- **Frontend**: React.js, Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API (`MovieContext`, `ProfileContext`, `InfoModalContext`)
- **API**: TMDB (The Movie Database)
- **Icons**: Heroicons / Custom SVG

---

## 🇬🇧 Features (English Version)

A faithful clone of the Netflix interface built with **React**, **Vite**, and **Tailwind CSS**. The project recreates the streaming platform's user experience, integrating real data via the TMDB (The Movie Database) API.

### 👤 Profile Management
- **Create & Edit**: Create new profiles with custom names and avatars.
- **Profile Switching**: Easily switch between different user profiles.
- **Persistence**: Profiles and their preferences are saved in `localStorage`, so data persists across reloads.

### 🏠 Home Page & Navigation
- **Immersive Design**: Hero section with dynamic backgrounds and a fully responsive layout matching the original.
- **Sliding Carousels**: Browse titles organized by categories (Trending, New Releases, etc.).
- **Dynamic Navbar**: Transparency effect that adapts as you scroll.

### 🎬 Content Discovery
- **Real Catalog**: Movies and TV shows are dynamically fetched from TMDB APIs.
- **Categories**: Dedicated pages for **Movies**, **TV Series**, **New & Popular**, and a **Kids** section.
- **Search**: Functional search bar to quickly find your favorite titles.

### 📝 My List
- **Personal Watchlist**: Each profile manages its own "My List".
- **Add/Remove**: Quickly add or remove titles from your list via cards or the info modal.

### ℹ️ Details & Previews
- **Interactive Cards**:
    - **Desktop**: Hover over a poster to see an expanded preview after a short delay.
    - **Mobile**: Tap a card to expand it immediately.
- **Info Modal**: Clicking details opens a modal featuring:
    - Movie/Series trailer (YouTube).
    - Plot, cast, genres, runtime/seasons, and match score.

### 🛠️ Tech Stack
- **Frontend**: React.js, Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API (`MovieContext`, `ProfileContext`, `InfoModalContext`)
- **API**: TMDB (The Movie Database)
- **Icons**: Heroicons / Custom SVG

---

## 🚀 Come avviare il progetto / How to run

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd Netflix-clone
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```
