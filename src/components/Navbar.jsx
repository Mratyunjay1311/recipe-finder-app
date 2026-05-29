import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function NavBar() {

    const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <nav className={`

px-6 py-4 shadow-md transition-all duration-300

${theme === "light"

? "bg-white text-black"

: "bg-gray-800 text-white"}

`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500">
          Flavor Fusion
        </h1>

        {/* Links */}
        <div className={`

flex items-center gap-6 font-medium

${theme === "light"

? "text-gray-700"

: "text-gray-200"}

`}>
          <Link
            to="/"
            className="hover:text-orange-500 transition duration-200"
          >
            Home
          </Link>

          <Link
            to="/recipes"
            className="hover:text-orange-500 transition duration-200"
          >
            Recipes
          </Link>

          <Link
            to="/savedRecipe"
            className="hover:text-orange-500 transition duration-200"
          >
            Saved
          </Link>

          <Link
            to="/about"
            className="hover:text-orange-500 transition duration-200"
          >
            About
          </Link>
    
        </div>
              <button
  onClick={toggleTheme}
  className="bg-black text-white px-4 py-2 rounded-lg"
>

  {theme === "light"
    ? "Switch to Dark Mode"
    : "Switch to Light Mode"}

</button>
      </div>
    </nav>
  );
}

export default NavBar;