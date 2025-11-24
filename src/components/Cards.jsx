import { useEffect, useRef, useState } from "react";
import { AddIcon, DeleteIcon, Play } from "../icons";
import { useMovies } from "../context/MovieContext";
import { useInfoModal } from "../context/InfoModalContext";
import MoreInfoBtn from "./MoreInfoBtn";

export default function Card({ movie }) {
  const [details, setDetails] = useState({});
  const [expanded, setExpanded] = useState(false);

  const imgUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;

  const { getGenresName, getMovieDetail, toggleInList, isInList } = useMovies();
  const { openModal } = useInfoModal();

  const genres = getGenresName(movie.genre_ids);

  const hoverTimeout = useRef(null);

  useEffect(() => {
    async function load() {
      const mediaType = movie.media_type || (movie.title ? "movie" : "tv");
      const info = await getMovieDetail(movie.id, mediaType);
      setDetails(info);
    }
    load();
  }, [movie.id, movie.media_type, movie.title, getMovieDetail]);

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setExpanded(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setExpanded(false);
  };

  const handleToggleList = () => {
    toggleInList(movie);
  };

  return (
    <div
      className="relative flex-shrink-0 w-40 transition-transform duration-300 cursor-pointer "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card espandibile */}
      <div
        className={`relative overflow-hidden  rounded-sm text-white transition-all duration-300 ease-in-out ${
          expanded ? "scale-105 z-100 absolute w-[200px]" : "scale-100"
        }`}
      >
        <img src={imgUrl} alt="immagine prova1" className="w-full h-full object-cover" />

        {/* Testo e overlay sotto */}
        <div className={`transition-all duration-100 overflow-hidden ${expanded ? "max-h-[150px] opacity-100 p-3" : "max-h-0 opacity-0"} bg-[#101010]`}>
          <div className="flex items-center gap-1 mb-2">
            <Play size={40} />
            <button onClick={handleToggleList} className="cursor-pointer">
              {isInList(movie.id) ? <DeleteIcon size={33} /> : <AddIcon size={40} />}
            </button>

            <button onClick={() => openModal(details)}>
              <MoreInfoBtn />
            </button>
          </div>
          <p className="text-xs text-[#B3B3B3] mb-1 leading-snug">
            {details
              ? details.runtime
                ? `${details.runtime} min`
                : details.number_of_seasons
                ? `${details.number_of_seasons} stagioni`
                : "N/A"
              : "Caricamento"}
          </p>
          <div className="flex justify-start items-center">
            <p className="text-xs">{genres.join(" • ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
