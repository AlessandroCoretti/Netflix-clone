import { Link } from "react-router";
import Avatar from "../assets/Avatar-1.png";
import { AddReverse } from "../icons";

export default function ProfileChoice() {
  return (
    <section className="h-[calc(100vh-50px)] flex flex-col justify-center items-center gap-4">
      <h2 className="text-5xl mb-2">Chi vuole guardare Netflix?</h2>
      <div className="flex justify-center items-center mb-8 gap-8">
        <Link to="/home" className="h-40 w-40 cursor-pointer transition-all duration-50 ease-in-out  hover:border-3 hover:border-white">
          <img src={Avatar} alt="" className="h-full w-full object-cover" />
          <p>Ciao</p>
        </Link>
        <span className="flex justify-center items-center rounded-md overflow-hidden h-40 w-40 bg-transparent cursor-pointer transition-all duration-50 ease-in-out hover:bg-[#fcfafa]">
          <AddReverse size={110} color="gray" />
        </span>
      </div>
      <button className="px-8 py-1 text-lg border-2 border-gray-400 text-gray-400 cursor-pointer hover:border-white hover:text-white">
        Gestisci i profili
      </button>
    </section>
  );
}
