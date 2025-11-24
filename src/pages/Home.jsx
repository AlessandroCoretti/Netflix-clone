import Carousel from "../components/Carousel";
import Hero from "../components/Hero/Hero";
import Search from "../components/Search";
import { useMovies } from "../context/MovieContext";

export default function Home() {
  const { allContent, allByGenre, genres, isLoading } = useMovies();
  const { search } = useMovies();

  return (
    <>
      {search ? (
        <Search />
      ) : (
        <div className="overflow-hidden">
          <Hero type={allContent} />
          <div className="mt-[-7%]">
            <Carousel type={allContent} isLoading={isLoading} />{" "}
          </div>
          {genres.map((genre) => (
            <Carousel key={genre.id} type={allByGenre[genre.name]} isLoading={isLoading} titleCarousel={genre.name} />
          ))}
        </div>
      )}
    </>
  );
}
