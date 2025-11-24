import Carousel from "../components/Carousel";
import Hero from "../components/Hero/Hero";
import Search from "../components/Search";

import { useMovies } from "../context/MovieContext";

export default function NuoviEPopolari() {
  const { trending, popularMovies, popularSeries, isLoading, genres, allByGenre } = useMovies();
  const { search } = useMovies();

  return (
    <>
      {search ? (
        <Search />
      ) : (
        <div className="overflow-hidden">
          <Hero type={trending} />
          <div className="mt-[-7%]">
            <Carousel type={trending} isLoading={isLoading} titleCarousel="Popolari oggi" />
          </div>
          <Carousel type={popularMovies.slice(0, 10)} isLoading={isLoading} titleCarousel="Film popolari di oggi" />
          <Carousel type={popularSeries.slice(0, 10)} isLoading={isLoading} titleCarousel="Serie popolari oggi" />

          {genres.map((genre) => (
            <Carousel key={genre.id} type={allByGenre[genre.name]} isLoading={isLoading} titleCarousel={genre.name} />
          ))}
        </div>
      )}
    </>
  );
}
