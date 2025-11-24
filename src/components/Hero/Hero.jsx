import { useEffect, useState } from "react";
/* import { useMovies } from "../../context/MovieContext";
 */ import MoreInfoBtn from "./MoreInfoBtn";
import PlayerBtn from "./PlayerBtn";
import LoadingHero from "./LoadingHero";

const IMG_URL =
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Hero({ type }) {
  /* const { trending, isLoading } = useMovies(); */
  const [programs, setPrograms] = useState(null);

  useEffect(() => {
    if (type.length > 0) {
      const randomIndex = Math.floor(Math.random() * type.length);
      setPrograms(type[randomIndex]);
    }
  }, [type]);

  const imgUrl = programs?.backdrop_path ? `https://image.tmdb.org/t/p/original${programs.backdrop_path}` : IMG_URL;

  if (!programs) return <LoadingHero />;

  return (
    <section className="w-full h-screen">
      <div className="w-full absolute top-0 left-0 h-screen">
        <img src={imgUrl} alt="prova2" className="h-full w-full object-cover mask-b-from-95% mask-b-to-100%" />
      </div>
      <div className="w-[40%] absolute bottom-[25%] left-10">
        <img src="./netflix_logo.png" alt="" className="ms-[-1.5rem] mb-[-1.5rem] h-25" />
        <h3 className="text-[4rem] font-bold leading-16">{programs.title || programs.name}</h3>
        <p className="text-md font-bold">
          {programs.overview
            ? programs.overview.length > 100
              ? programs.overview.slice(0, 250) + "..."
              : programs.overview
            : "In arrivo prossimamente su Netflix"}
        </p>
        <div className="flex items-center gap-3 mt-5">
          {<PlayerBtn />}
          {<MoreInfoBtn />}
        </div>
      </div>
    </section>
  );
}
