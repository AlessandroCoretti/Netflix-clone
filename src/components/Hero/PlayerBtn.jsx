import PlayerIcon from "../icons/PlayerIcon";

export default function PlayerBtn() {
  return (
    <button className="flex items-center gap-1 px-4 py-2 md:gap-2 md:px-7 md:py-3 rounded-xs md:rounded-sm bg-white cursor-pointer hover:bg-[#e6e6e6f8]">
      <span className="block md:hidden">
        <PlayerIcon color="#141414" size={18} />
      </span>
      <span className="hidden md:block">
        <PlayerIcon color="#141414" size={30} />
      </span>
      <p className="text-xl text-[#141414] font-bold">Riproduci</p>
    </button>
  );
}
