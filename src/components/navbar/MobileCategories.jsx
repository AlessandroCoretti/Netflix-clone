import { ArrowIcons } from "../../icons";

export default function MobileCategories() {
  return (
    <>
      <button className="flex items-center justify-center hover:cursor-pointer">
        <p className="m-0 text-sm font-semibold">Sfoglia</p>
        <ArrowIcons />
      </button>
    </>
  );
}
