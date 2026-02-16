import { NavLink } from "react-router";
import Netflix from "../../../public/netflix_logo.png";
import NetflixIcon from "../../../public/netflix-1-logo.svg";
import Avatar from "../../assets/Avatar-1.png";
import { useEffect, useState } from "react";
import { BellIcons, SearchIcons } from "../../icons";
import Categories from "./Categories";
import { useMovies } from "../../context/MovieContext";
import { useProfile } from "../../context/ProfileContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { search, setSearch } = useMovies();
  const { activeProfile, profiles, switchProfile, logout } = useProfile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const otherProfiles = profiles.filter(p => p.id !== activeProfile?.id);

  return (
    <nav
      className={`md:h-fit fixed px-3 pe-5 md:px-8 top-0 left-0 w-full z-10 transition-colors duration-100 ease-in-out ${isScrolled ? "bg-linear-to-t from-[#161616] to-[#060606]" : "bg-linear-to-t from-transparent to-[#151414b0]"
        }`}
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center justify-start gap-4 lg:gap-10">
          <NavLink to="/home" className="block md:hidden">
            <img src={NetflixIcon} alt="Netflix-Logo-2" className="h-16" />
          </NavLink>
          <NavLink to="/home" className="hidden md:block">
            <img src={Netflix} alt="Netflix-Logo-1" className="h-13" />
          </NavLink>
          <div className="hidden lg:block">
            <Categories />
          </div>
        </div>
        <div className="flex items-center justify-end gap-6 w-100 ">
          <div className="flex items-center gap-2">
            <SearchIcons onClick={() => setShowSearch(!showSearch)} className="cursor-pointer transition" />
            {showSearch && (
              <input
                type="text"
                placeholder="Titoli, genere"
                className="w-30 h-10 md:w-60 border border-white px-2 bg-black/80 text-white focus:outline-none transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            )}
          </div>
          <NavLink to="/kids" className="hidden md:block text-sm font-semibold">Bambini</NavLink>
          <span className="hidden md:block">
            <BellIcons />
          </span>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden relative">
            <div className="cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img
                src={activeProfile?.avatar?.image || activeProfile?.avatar || Avatar}
                alt="Profile"
                className="w-8 h-8 rounded border border-transparent hover:border-white transition"
                style={activeProfile?.avatar?.style || {}}
              />
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
              <div className="absolute top-12 right-0 w-64 bg-[#141414] border border-[#333] shadow-2xl flex flex-col p-5 gap-5 animate-fade-in z-50 rounded-md">

                {/* Profiles */}
                <div className="flex flex-col gap-2 border-b border-[#333] pb-3">
                  <span className="text-gray-400 text-xs uppercase">Profili</span>
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {profiles.map(p => (
                      <img
                        key={p.id}
                        src={p.avatar?.image || p.avatar}
                        alt={p.name}
                        className={`w-9 h-9 rounded cursor-pointer transition border-2 ${activeProfile?.id === p.id ? 'border-white' : 'border-transparent opacity-60 hover:opacity-100'}`}
                        style={p.avatar?.style || {}}
                        onClick={() => { switchProfile(p.id); setIsMenuOpen(false); }}
                      />
                    ))}
                  </div>
                </div>

                {/* Links */}
                <ul className="flex flex-col gap-3 text-white text-base font-medium">
                  <li><NavLink to="/home" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
                  <li><NavLink to="/serie-tv" onClick={() => setIsMenuOpen(false)}>Serie TV</NavLink></li>
                  <li><NavLink to="/film" onClick={() => setIsMenuOpen(false)}>Film</NavLink></li>
                  <li><NavLink to="/new" onClick={() => setIsMenuOpen(false)}>Nuovi e popolari</NavLink></li>
                  <li><NavLink to="/my-list" onClick={() => setIsMenuOpen(false)}>La mia lista</NavLink></li>
                  <li><NavLink to="/kids" onClick={() => setIsMenuOpen(false)}>Bambini</NavLink></li>
                </ul>

                <div className="pt-2 border-t border-[#333] flex flex-col gap-3">
                  <NavLink to="/manage-profiles" className="text-gray-300 text-sm" onClick={() => setIsMenuOpen(false)}>Gestisci profili</NavLink>
                  <NavLink to="/" onClick={logout} className="text-white font-bold text-sm">Esci da Netflix</NavLink>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Profile Dropdown */}
          <div className="group relative cursor-pointer hidden md:block">
            <div className="flex items-center gap-2">
              <img
                src={activeProfile?.avatar?.image || activeProfile?.avatar || Avatar}
                alt="Profile"
                className="w-8 h-8 rounded transition"
                style={activeProfile?.avatar?.style || {}}
              />
              <img
                src={activeProfile?.avatar?.image || activeProfile?.avatar || Avatar}
                alt="Profile"
                className="w-8 h-8 rounded absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0"
                style={activeProfile?.avatar?.style || {}}
              />
              <span className="text-xs transition-transform duration-200 group-hover:rotate-180">▼</span>
            </div>

            <div className="absolute right-0 top-full pt-4 hidden group-hover:block">
              <div className="bg-black/90 border border-[#333] w-56 p-4 rounded shadow-lg flex flex-col gap-4">
                <ul className="flex flex-col gap-3 pb-3 border-b border-[#333]">
                  {otherProfiles.map((profile) => (
                    <li key={profile.id} className="flex items-center gap-3 hover:underline" onClick={() => switchProfile(profile.id)}>
                      <img
                        src={profile.avatar?.image || profile.avatar}
                        alt={profile.name}
                        className="w-8 h-8 rounded opacity-50"
                        style={profile.avatar?.style || {}}
                      />
                      <span className="text-sm font-normal">{profile.name}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-3 hover:underline">
                    <NavLink to="/manage-profiles" className="text-sm font-normal">Gestisci i profili</NavLink>
                  </li>
                </ul>

                <ul className="flex flex-col gap-3 pb-3 border-b border-[#333]">
                  {["Trasferisci profilo", "Account", "Centro assistenza"].map((item, i) => (
                    <li key={i} className="text-sm hover:underline font-bold md:font-semibold">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <NavLink to="/" onClick={logout} className="text-sm hover:underline cursor-pointer">Esci da Netflix</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
}
