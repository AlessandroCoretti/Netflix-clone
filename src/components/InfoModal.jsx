import { useInfoModal } from "../context/InfoModalContext";

export default function InfoModal() {
  const { selectedMovie, closeModal } = useInfoModal();

  if (!selectedMovie) return null;

  const imgUrl = selectedMovie?.backdrop_path ? `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}` : null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-9999 p-4 ">
      <div className="bg-[#181818] text-white rounded-lg w-full max-w-2xl h-[90%] p-6 relative overflow-y-scroll scrollbar-hide">
        <button onClick={closeModal} className="absolute top-3 right-3 text-white text-2xl">
          ✕
        </button>
        <div className="h-full mb-2">
          <img src={imgUrl} alt={selectedMovie.name} className="h-full w-full object-cover" />
        </div>

        <h2 className="text-3xl font-bold mb-4">{selectedMovie.title || selectedMovie.name}</h2>

        <p className="text-gray-300 mb-4">{selectedMovie.overview}</p>

        {/* Qui puoi mettere altri dati dell'API */}
        <p>Voto: {selectedMovie.vote_average ? selectedMovie.vote_average.toFixed(1) : "N/A"}</p>
        <p>Data: {selectedMovie.release_date || selectedMovie.first_air_date}</p>
        <p>
          {selectedMovie
            ? selectedMovie.runtime
              ? `${selectedMovie.runtime} min`
              : selectedMovie.number_of_seasons
              ? `Numero stagioni: ${selectedMovie.number_of_seasons}`
              : "N/A"
            : "N/A"}
        </p>
      </div>
    </div>
  );
}
