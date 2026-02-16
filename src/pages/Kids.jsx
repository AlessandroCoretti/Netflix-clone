import Carousel from "../components/Carousel";
import Hero from "../components/Hero/Hero";
import Search from "../components/Search";
import { useMovies } from "../context/MovieContext";

export default function Kids() {
    const { kidsContent, kidsMovies, kidsTv, isLoading, search } = useMovies();

    return (
        <>
            {search ? (
                <Search />
            ) : (
                <div className="overflow-hidden">
                    <Hero type={kidsContent} />
                    <div className="mt-3 md:mt-[-7%]">
                        <Carousel type={kidsMovies} isLoading={isLoading} titleCarousel="Film per bambini" />
                    </div>
                    <Carousel type={kidsTv} isLoading={isLoading} titleCarousel="Serie TV per bambini" />
                    <Carousel type={kidsContent} isLoading={isLoading} titleCarousel="Da rivedere" />
                </div>
            )}
        </>
    );
}
