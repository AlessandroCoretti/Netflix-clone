import Carousel from "../components/Carousel";
import { useMovies } from "../context/MovieContext";

export default function Search() {
  const { allContent, allByGenre, genres, search, isLoading } = useMovies();

  const normalizedQuery = (search || "").toLowerCase().trim();

  if (!normalizedQuery) return null;

  const byTitle = allContent.filter((item) => (item.title || item.name || "").toLowerCase().includes(normalizedQuery));

  const filteredByGenre = genres
    .filter((g) => (g.name || "").toLowerCase().includes(normalizedQuery))
    .map((g) => ({
      genreName: g.name,
      items: allByGenre[g.name] || [],
    }))
    .filter((g) => g.items.length > 0);

  if (byTitle.length === 0 && filteredByGenre.length === 0) {
    return <p className="text-gray-300 text-lg">Nessun risultato trovato.</p>;
  }

  return (
    <>
      {byTitle.length > 0 && <Carousel type={byTitle} titleCarousel="Titoli" isLoading={isLoading} />}
      {filteredByGenre.length > 0 &&
        filteredByGenre.map((g) => <Carousel key={g.genreName} type={g.items} titleCarousel={g.genreName} isLoading={isLoading} />)}
    </>
  );
}
