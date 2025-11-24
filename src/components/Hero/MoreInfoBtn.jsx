import MoreInfoIcon from "../icons/MoreInfoIcon";

export default function MoreInfoBtn() {
  return (
    <button className="flex gap-2 items-center px-7 py-3 rounded-sm bg-[#7f7f7f] cursor-pointer hover:bg-[#7f7f7f74]">
      <MoreInfoIcon color="white" size={30} />
      <p className="text-lg text-white font-bold">Altre info</p>
    </button>
  );
}
