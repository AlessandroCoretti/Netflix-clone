import PlayerIcon from "../icons/PlayerIcon";

export default function PlayerBtn() {
  return (
    <button className="flex gap-2 items-center px-7 py-3 rounded-sm bg-white cursor-pointer hover:bg-[#e6e6e6f8]">
      <PlayerIcon color="#141414" size={30} />
      <p className="text-lg text-[#141414] font-bold">Riproduci</p>
    </button>
  );
}
