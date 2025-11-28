import Carousel from "../components/Carousel";
import Hero from "../components/Hero/Hero";
import Search from "../components/Search";
import { useMovies } from "../context/MovieContext";

export default function Serie() {
  const { tv, playingTv, tvByGenre, genres, isLoading } = useMovies();
  const { search } = useMovies();

  return (
    <>
      {search ? (
        <Search />
      ) : (
        <div className="overflow-hidden">
          <Hero type={tv} />
          <div className="mt-3 md:mt-[-7%]">
            <Carousel type={tv} isLoading={isLoading} />
          </div>

          <Carousel type={playingTv} isLoading={isLoading} titleCarousel="In uscita" />

          {genres.map((genre) => (
            <Carousel key={genre.id} type={tvByGenre[genre.name]} isLoading={isLoading} titleCarousel={genre.name} />
          ))}
        </div>
      )}
    </>
  );
}
