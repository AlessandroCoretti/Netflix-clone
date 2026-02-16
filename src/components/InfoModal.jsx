import { useEffect, useState } from "react";
import { useInfoModal } from "../context/InfoModalContext";
import { fetchMovieVideos, fetchTvVideos } from "../api/TmdbApi";

export default function InfoModal() {
  const { selectedMovie, closeModal } = useInfoModal();
  const [trailerKey, setTrailerKey] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    if (selectedMovie) {
      setShowTrailer(false);
      setTrailerKey(null);

      const fetchVideo = async () => {
        try {
          let videos = [];
          if (selectedMovie.media_type === "movie") {
            videos = await fetchMovieVideos(selectedMovie.id);
          } else if (selectedMovie.media_type === "tv") {
            videos = await fetchTvVideos(selectedMovie.id);
          }

          const trailer = videos.find(
            (v) => v.type === "Trailer" && v.site === "YouTube"
          );
          if (trailer) setTrailerKey(trailer.key);
        } catch (error) {
          console.error("Error fetching trailer", error);
        }
      };

      fetchVideo();
    }
  }, [selectedMovie]);

  useEffect(() => {
    let timer;
    if (trailerKey) {
      timer = setTimeout(() => {
        setShowTrailer(true);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [trailerKey]);

  if (!selectedMovie) return null;

  const imgUrl = selectedMovie?.backdrop_path ? `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}` : null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[100] p-4 animate-fadeIn">
      <div className="bg-[#181818] text-white rounded-lg w-full max-w-3xl max-h-[90vh] relative overflow-y-auto scrollbar-hide shadow-2xl">

        <button onClick={closeModal} className="absolute top-4 right-4 z-10 bg-[#181818] rounded-full p-1 hover:bg-[#333] transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative w-full aspect-video">
          {showTrailer && trailerKey ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img src={imgUrl} alt={selectedMovie.title || selectedMovie.name} className="w-full h-full object-cover" />
          )}

          {!showTrailer && (
            <>
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#181818] to-transparent"></div>
              <div className="absolute bottom-10 left-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">{selectedMovie.title || selectedMovie.name}</h2>
              </div>
            </>
          )}

        </div>

        <div className="p-8 md:flex gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6 text-sm md:text-base">
              <span className="text-green-400 font-bold">98% Match</span>
              <span className="text-gray-400">{selectedMovie.release_date ? selectedMovie.release_date.substring(0, 4) : selectedMovie.first_air_date?.substring(0, 4)}</span>
              <span className="border border-gray-500 px-2 rounded-sm text-xs py-0.5">HD</span>
              <span>{selectedMovie.runtime ? `${Math.floor(selectedMovie.runtime / 60)}h ${selectedMovie.runtime % 60}m` : `${selectedMovie.number_of_seasons} Stagioni`}</span>
            </div>

            <p className="text-white text-base md:text-lg leading-relaxed mb-6">
              {selectedMovie.overview}
            </p>
          </div>

          <div className="md:w-1/3 text-sm flex flex-col gap-3 text-gray-400">
            <p><span className="text-gray-500">Cast:</span> <span className="text-white">Cast Dati N/A</span></p>
            <p><span className="text-gray-500">Generi:</span> <span className="text-white">Genere Dati N/A</span></p>
            <p><span className="text-gray-500">Voto:</span> <span className="text-white">{selectedMovie.vote_average?.toFixed(1)}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
