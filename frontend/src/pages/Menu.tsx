import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import MenuCategoryNav from "../components/MenuCategoryNav";
import "./Menu.css";

function Menu() {
  const { category } = useParams();
  const selectedCategory = category ?? "all";
  return (
    <div className="menu">
      <Navbar />
      
       <MenuCategoryNav />

      <h2>
        {selectedCategory === "all"
          ? "All Foods"
          : selectedCategory.replace("-", " ").replace(
              /^\w/,
              (letter) => letter.toUpperCase()
            )}
      </h2>
    </div>
  );
}

export default Menu;