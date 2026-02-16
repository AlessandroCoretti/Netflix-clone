const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BEARER = import.meta.env.VITE_TMDB_BEARER;

const BASE_URL = "https://api.themoviedb.org/3";

/* generi */
export async function fetchGenres() {
  const url = `${BASE_URL}/genre/movie/list?language=it-IT`;

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER}`,
    },
  });

  if (!res.ok) {
    console.error("Errore HTTP genres", res.status);
    throw new Error(`TMDB error Genres ${res.status}`);
  }

  const data = await res.json();
  return data.genres;
}

/* sia film che serie in hype */
export async function fetchTrendingAll() {
  const url = `${BASE_URL}/trending/all/day?language=it-IT`;

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER}`,
    },
  });

  if (!res.ok) {
    console.error("Errore HTTP trending", res.status);
    throw new Error(`TMDB error Trending All ${res.status}`);
  }

  const data = await res.json();
  return data.results;
}

/* FILM */
/* film */
export async function fetchMovies() {
  const url = `${BASE_URL}/discover/movie?language=it-IT&page=2&sort_by=primary_release.desc`;

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER}`,
    },
  });

  if (!res.ok) {
    console.error("Errore HTTP movies:", res.status);
    throw new Error(`TMDB Error ${res.status}`);
  }

  const data = await res.json();
  console.log(data);
  return data.results;
}

/* Film piu popolari */
export async function fetchPopularMovies() {
  const url = `${BASE_URL}/trending/movie/day?language=it-IT`;

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER}`,
    },
  });

  if (!res.ok) {
    console.error("Errore HTTP trending", res.status);
    throw new Error(`TMDB error Popular Movies ${res.status}`);
  }

  const data = await res.json();
  return data.results;
}

/* dettagli sui film */
export async function fetchMovieDetail(id) {
  const url = `${BASE_URL}/movie/${id}?language=it-IT`;

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Errore nel recupero dei dettagli sui film`);
  }

  const data = await res.json();
  return data;
}

/* Ora al cinema */
export async function fetchNowMoviePlaying() {
  const url = `${BASE_URL}/movie/now_playing?language=it-IT&sort_by=popularity.desc`;

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER}`,
    },
  });

  if (!res.ok) {
    console.error("Errore HTTP now playing:", res.status);
    throw new Error(`TMDB Error ${res.status}`);
  }

  const data = await res.json();
  console.log(data);
  return data.results;
}

/* SERIE-TV */
/* Serie tv */
export async function fetchTv() {
  const url = `${BASE_URL}/discover/tv?language=it-IT&sort_by=popularity.desc`;

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER}`,
    },
  });

  if (!res.ok) {
    console.error("Errore HTTP tv:", res.status);
    throw new Error(`TMDB Error ${res.status}`);
  }

  const data = await res.json();
  console.log(data);
  return data.results;
}

/* serietv piu popolari */
export async function fetchPopularSeries() {
  const url = `${BASE_URL}/trending/tv/day?language=it-IT`;

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER}`,
    },
  });

  if (!res.ok) {
    console.error("Errore HTTP trending", res.status);
    throw new Error(`TMDB error Popular Series ${res.status}`);
  }

  const data = await res.json();
  return data.results;
}

/* dettagli sulle serie */
export async function fetchTvDetail(id) {
  const url = `${BASE_URL}/tv/${id}?language=it-IT`;

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Errore nel recupero dei dettagl sulle serie-tv`);
  }

  const data = await res.json();
  return data;
}

/* Oggi in onda */
export async function fetchNowTvPlaying() {
  const url = `${BASE_URL}/tv/airing_today?language=it-IT&sort_by=popularity.desc`;

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER}`,
    },
  });

  if (!res.ok) {
    console.error("Errore HTTP now playing:", res.status);
    throw new Error(`TMDB Error ${res.status}`);
  }

  const data = await res.json();
  console.log(data);
  return data.results;
}
/* KIDDIE CONTENT */
export async function fetchKidsMovies() {
  const url = `${BASE_URL}/discover/movie?language=it-IT&sort_by=popularity.desc&certification_country=IT&certification.lte=T&with_genres=16,10751`;

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER}`,
    },
  });

  if (!res.ok) {
    console.error("Errore HTTP Kids Movies:", res.status);
    throw new Error(`TMDB Error ${res.status}`);
  }

  const data = await res.json();
  return data.results;
}

export async function fetchKidsTv() {
  const url = `${BASE_URL}/discover/tv?language=it-IT&sort_by=popularity.desc&with_genres=10762`;

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BEARER}`,
    },
  });

  if (!res.ok) {
    console.error("Errore HTTP Kids TV:", res.status);
    throw new Error(`TMDB Error ${res.status}`);
  }

  const data = await res.json();
  return data.results;
}
