import { NavLink } from "react-router-dom";
import "./MenuCategoryNav.css";

const categories = [
  { name: "Breakfast", path: "/menu/breakfast" },
  { name: "Lunch", path: "/menu/lunch" },
  { name: "Dinner", path: "/menu/dinner" },
  { name: "Short Eats", path: "/menu/short-eats" },
];

function MenuCategoryNav() {
  return (
    <nav className="menu-category-nav">
      {categories.map((category) => (
        <NavLink
          key={category.path}
          to={category.path}
          className={({ isActive }) =>
            isActive ? "category-link active" : "category-link"
          }
        >
          {category.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default MenuCategoryNav;