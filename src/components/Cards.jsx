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
  const isHovered = useRef(false);

  useEffect(() => {
    // Lazy load rimosso dall'inizializzazione
  }, []);

  const fetchMovieData = async () => {
    if (details.runtime || details.number_of_seasons) return;

    const mediaType = movie.media_type || (movie.title ? "movie" : "tv");
    try {
      const info = await getMovieDetail(movie.id, mediaType);
      if (isHovered.current || window.innerWidth < 768) setDetails(info);
    } catch (error) {
      console.error("Failed to load movie details", error);
    }
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
    fetchMovieData();

    if (!isHovered.current) return;

    hoverTimeout.current = setTimeout(() => {
      if (isHovered.current) setExpanded(true);
    }, 800);
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setExpanded(false);
  };

  const handleClick = () => {
    if (window.innerWidth < 768) {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
      fetchMovieData();
      setExpanded(true);
    }
  };

  const handleToggleList = (e) => {
    e.stopPropagation(); // Prevent card toggle/click
    toggleInList(movie);
  };

  const handleOpenModal = (e) => {
    e.stopPropagation();
    openModal(details);
  };

  return (
    <div
      className="relative shrink-0 w-25 md:w-40 transition-transform duration-300 cursor-pointer "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Card espandibile */}
      <div
        className={`relative overflow-hidden  rounded-sm text-white transition-all duration-300 ease-in-out ${expanded ? "scale-105 z-[100] absolute w-[150px] md:w-[200px]" : "scale-100"
          }`}
      >
        <img src={imgUrl} alt={movie.title || movie.name} className="w-full h-full object-cover" />

        {/* Testo e overlay sotto */}
        <div className={`transition-all duration-100 overflow-hidden ${expanded ? "max-h-[150px] opacity-100 p-3" : "max-h-0 opacity-0"} bg-[#101010]`}>
          <div className="flex items-center gap-1 mb-2">
            <Play size={40} />
            <button onClick={handleToggleList} className="cursor-pointer">
              {isInList(movie.id) ? <DeleteIcon size={33} /> : <AddIcon size={40} />}
            </button>

            <button onClick={handleOpenModal}>
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
