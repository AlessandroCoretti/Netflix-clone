import { NavLink } from "react-router";
import Netflix from "../../../public/netflix_logo.png";
import { useEffect, useState } from "react";
import { BellIcons, SearchIcons } from "../../icons";
import Categories from "./Categories";
import MobileCategories from "./MobileCategories";
import { useMovies } from "../../context/MovieContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { search, setSearch } = useMovies();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`h-fit fixed px-[2rem] top-0 left-0 w-full z-10 transition-colors duration-50 ${
        isScrolled ? "bg-linear-to-t from-[#161616] to-[#060606]" : "bg-linear-to-t from-transparent to-[#151414b0]"
      }`}
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center justify-start gap-4 lg:gap-10">
          <NavLink to="/">
            <img src={Netflix} alt="Netflix-Logo" className="h-13" />
          </NavLink>
          <div className="hidden lg:block">
            <Categories />
          </div>
          <div className="lg:hidden">
            <MobileCategories />
          </div>
        </div>
        <div className="flex items-center justify-end gap-6 w-100 ">
          <div className="flex items-center gap-2">
            <SearchIcons onClick={() => setShowSearch(!showSearch)} className="cursor-pointer transition" />
            {showSearch && (
              <input type="text" placeholder="Titoli, genere" className="border border-white px-1" value={search} onChange={(e) => setSearch(e.target.value)} />
            )}
          </div>
          <NavLink className="text-sm font-semibold">Bambini</NavLink>
          <BellIcons />
        </div>
      </div>
    </nav>
  );
}
