import Carousel from "../components/Carousel";
import Hero from "../components/Hero/Hero";
import Search from "../components/Search";
import { useMovies } from "../context/MovieContext";

export default function Film() {
  const { movies, playingMovies, moviesByGenre, genres, isLoading } = useMovies();
  const { search } = useMovies();

  return (
    <>
      {search ? (
        <Search />
      ) : (
        <div className="overflow-hidden">
          <Hero type={movies} />
          <div className="mt-[-7%]">
            <Carousel type={movies} isLoading={isLoading} />
          </div>

          <Carousel type={playingMovies} isLoading={isLoading} titleCarousel="Ora nelle sale" />

          {genres.map((genre) => (
            <Carousel key={genre.id} type={moviesByGenre[genre.name]} isLoading={isLoading} titleCarousel={genre.name} />
          ))}
        </div>
      )}
    </>
  );
}
