import { Link } from "react-router";
import Avatar from "../assets/Avatar-1.png";
import { AddReverse } from "../icons";

export default function ProfileChoice() {
  return (
    <section className="h-[calc(100vh-50px)] flex flex-col justify-center items-center gap-8 animate-fade-in">
      <h2 className="text-4xl md:text-5xl text-white font-normal mb-4">Chi vuole guardare Netflix?</h2>

      <div className="flex flex-wrap justify-center items-start gap-4 md:gap-8">
        {/* User Profile */}
        <div className="group flex flex-col items-center gap-3 cursor-pointer">
          <Link to="/home" className="w-24 h-24 md:w-40 md:h-40 rounded overflow-hidden border-2 border-transparent group-hover:border-white transition-all duration-200">
            <img src={Avatar} alt="Profilo utente" className="w-full h-full object-cover" />
          </Link>
          <span className="text-gray-400 text-lg md:text-xl group-hover:text-white transition-colors duration-200">
            Ciao
          </span>
        </div>

        {/* Add Profile */}
        <div className="group flex flex-col items-center gap-3 cursor-pointer">
          <div className="w-24 h-24 md:w-40 md:h-40 flex justify-center items-center rounded bg-transparent border-2 border-transparent group-hover:bg-white/10 group-hover:border-white transition-all duration-200">
            <AddReverse className="w-12 h-12 md:w-20 md:h-20 text-gray-400 group-hover:text-white transition-colors duration-200" />
          </div>
          <span className="text-gray-400 text-lg md:text-xl group-hover:text-white transition-colors duration-200">
            Aggiungi profilo
          </span>
        </div>
      </div>

      <button className="mt-8 px-6 py-2 text-gray-400 border border-gray-400 text-lg tracking-widest hover:text-white hover:border-white transition-all duration-200">
        GESTISCI I PROFILI
      </button>
    </section>
  );
}
