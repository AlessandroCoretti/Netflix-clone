import { NavLink } from "react-router";
import categories from "../../data/categories.json";

export default function Categories() {
  return (
    <ul className="h-12 flex gap-2 md:gap-8 items-center overflow-x-auto overflow-y-hidden scrollbar-hide md:overflow-hidden">
      {categories.map((categorie) => (
        <li key={categorie.path} className="whitespace-nowrap">
          <NavLink
            to={categorie.path}
            className={({ isActive }) =>
              [
                "border border-[#aaa5aa] rounded-3xl px-4 py-2  md:border-none text.md md:text-sm font-semibold transition ease-in-out hover:text-[#aaa5aa]",
                isActive ? "hover:text-[#f8f8f8] text-[#f8f8f8]" : "text-[#B3B3B3]",
              ].join(" ")
            }
          >
            {categorie.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
