import MoreInfoIcon from "../icons/MoreInfoIcon";

export default function MoreInfoBtn(props) {
  return (
    <button {...props} className="flex items-center gap-1 px-4 py-2 md:gap-2 md:px-7 md:py-3 rounded-xs md:rounded-sm bg-[#7f7f7f] cursor-pointer hover:bg-[#7f7f7f74]">
      <span className="block md:hidden">
        <MoreInfoIcon color="white" size={18} />
      </span>
      <span className="hidden md:block">
        <MoreInfoIcon color="white" size={30} />
      </span>
      <p className="text-xl text-white font-bold">Altre info</p>
    </button>
  );
}
