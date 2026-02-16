import { useEffect, useState, useRef, useMemo } from "react";
import {
  fetchGenres,
  fetchMovieDetail,
  fetchMovies,
  fetchNowMoviePlaying,
  fetchNowTvPlaying,
  fetchPopularMovies,
  fetchPopularSeries,
  fetchTrendingAll,
  fetchTv,

  fetchTvDetail,
  fetchKidsMovies,
  fetchKidsTv,
} from "../api/TmdbApi";
import { MovieContext } from "./MovieContext";

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [allContent, setAllContent] = useState([]);
  const [genres, setGenres] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [trending, setTrending] = useState([]);
  const [playingMovies, setPlayingMovies] = useState([]);
  const [playingTv, setPlayingTv] = useState([]);
  const [kidsMovies, setKidsMovies] = useState([]);
  const [kidsTv, setKidsTv] = useState([]);
  const [kidsContent, setKidsContent] = useState([]);
  const detailsCache = useRef({});
  const [moviesByGenre, setMovieByGenre] = useState({});
  const [tvByGenre, setTvByGenre] = useState({});
  const [allByGenre, setAllByGenre] = useState({});
  const [search, setSearch] = useState("");
  const [myList, setMyList] = useState(() => {
    const saved = localStorage.getItem("myList");
    return saved ? JSON.parse(saved) : [];
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [moviesData, tvData, genresData, popularMovies, popularSeries, trendingData, playingMoviesData, tvPlayingData, kidsMoviesData, kidsTvData] = await Promise.all([
          fetchMovies(),
          fetchTv(),
          fetchGenres(),
          fetchPopularMovies(),
          fetchPopularSeries(),
          fetchTrendingAll(),
          fetchNowMoviePlaying(),
          fetchNowTvPlaying(),
          fetchKidsMovies(),
          fetchKidsTv(),
        ]);

        setMovies(moviesData);
        setPlayingMovies(playingMoviesData);
        setTv(tvData);
        setPlayingTv(tvPlayingData);
        setGenres(genresData);
        setPopularMovies(popularMovies);
        setPopularSeries(popularSeries);
        setTrending(trendingData);
        setKidsMovies(kidsMoviesData);
        setKidsTv(kidsTvData);
        setKidsContent([...kidsMoviesData.map((m) => ({ ...m, type: "movie" })), ...kidsTvData.map((t) => ({ ...t, type: "tv" }))]);

        setAllContent([...moviesData.map((movie) => ({ ...movie, type: "movie" })), ...tvData.map((serie) => ({ ...serie, type: "tv" }))]);

        const groupByGenre = genresData.reduce((acc, genre) => {
          acc[genre.name] = moviesData.filter((movie) => movie.genre_ids?.includes(genre.id));
          return acc;
        }, {});
        setMovieByGenre(groupByGenre);

        const groupTvByGenre = genresData.reduce((acc, genre) => {
          acc[genre.name] = tvData.filter((movie) => movie.genre_ids?.includes(genre.id));
          return acc;
        }, {});
        setTvByGenre(groupTvByGenre);

        const groupedAll = genresData.reduce((acc, genre) => {
          const moviesForGenre = moviesData.filter((m) => m.genre_ids?.includes(genre.id));
          const tvForGenre = tvData.filter((t) => t.genre_ids?.includes(genre.id));

          acc[genre.name] = [...moviesForGenre.map((i) => ({ ...i, type: "movie" })), ...tvForGenre.map((i) => ({ ...i, type: "tv" }))];

          return acc;
        }, {});

        setAllByGenre(groupedAll);
      } catch (error) {
        console.error("Errore nel MovieContext: ", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  function toggleInList(movie) {
    setMyList((prev) => {
      const exist = prev.some((item) => item.id === movie.id);
      if (exist) {
        return prev.filter((item) => item.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  }

  function isInList(id) {
    return myList.some((movie) => movie.id === id);
  }

  function getGenresName(ids) {
    if (!genres.length) return [];
    return ids.map((id) => genres.find((genre) => genre.id === id)?.name).filter(Boolean);
  }

  async function getMovieDetail(id, type) {
    if (detailsCache.current[id]) return detailsCache.current[id];

    let detail;

    if (type === "movie") {
      detail = await fetchMovieDetail(id);
    } else if (type === "tv") {
      detail = await fetchTvDetail(id);
    }

    detailsCache.current[id] = detail;
    return detail;
  }


  const value = useMemo(() => ({
    movies,
    tv,
    allContent,
    genres,
    popularMovies,
    popularSeries,
    trending,
    playingMovies,
    playingTv,
    moviesByGenre,
    tvByGenre,
    allByGenre,
    isLoading,
    getGenresName,
    getMovieDetail,
    search,
    setSearch,
    myList,
    toggleInList,
    isInList,
    kidsMovies,
    kidsTv,
    kidsContent,
  }), [
    movies,
    tv,
    allContent,
    genres,
    popularMovies,
    popularSeries,
    trending,
    playingMovies,
    playingTv,
    moviesByGenre,
    tvByGenre,
    allByGenre,
    isLoading,
    search,
    myList,
    kidsContent,
    kidsMovies,
    kidsTv
  ]);

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
}
