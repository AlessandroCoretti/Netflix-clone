import { useEffect, useState } from "react";
import { useInfoModal } from "../../context/InfoModalContext";
import MoreInfoBtn from "./MoreInfoBtn";
import PlayerBtn from "./PlayerBtn";
import LoadingHero from "./LoadingHero";

const IMG_URL =
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Hero({ type }) {
  const { openModal } = useInfoModal();
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
    <section className="border border-[#7f7f7f] h-max rounded-xl overflow-hidden md:border-none md:rounded-none md:w-full md:h-screen">
      <div className="h-90 md:w-full md:absolute md:top-0 md:left-0 md:h-screen">
        <img src={imgUrl} alt={programs.title || programs.name} className="h-full w-full object-cover mask-b-from-95% mask-b-to-100%" />
      </div>
      <div className=" px-3 md:px-0 md:w-[40%] md:absolute md:bottom-[25%] md:left-10">
        <img src="./netflix_logo.png" alt="Netflix-logo-1" className="hidden md:block -ms-6 -mb-6 h-25" />
        <img src="./netflix-1-logo.svg" alt="Netflix-logo-2" className="absolute top-20 left-5 md:hidden h-8" />
        <h3 className="text-xl justify-self-center md:justify-self-start my-2 md:my-0 md:text-[4rem] font-bold md:leading-16">
          {programs.title || programs.name}
        </h3>
        <p className="hidden md:block text-md font-bold">
          {programs.overview
            ? programs.overview.length > 100
              ? programs.overview.slice(0, 250) + "..."
              : programs.overview
            : "In arrivo prossimamente su Netflix"}
        </p>
        <div className="flex items-center justify-between md:justify-start md:gap-3 my-3 md:mt-5">
          <PlayerBtn onClick={() => openModal(programs, { playImmediately: true })} />
          <MoreInfoBtn onClick={() => openModal(programs, { playImmediately: false })} />
        </div>
      </div>
    </section>
  );
}
