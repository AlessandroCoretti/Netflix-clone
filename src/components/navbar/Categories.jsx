import { NavLink } from "react-router";
import categories from "../../data/categories.json";

export default function Categories() {
  return (
    <ul className="flex gap-8 align-self-start">
      {categories.map((categorie) => (
        <li key={categorie.path}>
          <NavLink
            to={categorie.path}
            className={({ isActive }) =>
              ["text-sm font-semibold transition ease-in-out hover:text-[#aaa5a5]", isActive ? "hover:text-[#f8f8f8] text-[#f8f8f8]" : "text-[#B3B3B3]"].join(
                " "
              )
            }
          >
            {categorie.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
