import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function NavBar({setShowLogin,setShowRegister}) {

    const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <nav className={` className="
  sticky
  top-0
  z-40
  px-6
  py-4
  shadow-md
"

px-6 py-4 shadow-md transition-all duration-300

${theme === "light"

? "bg-white text-black"

: "bg-gray-800 text-white"}

`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
       <Link to="/">
  <h1 className="text-2xl font-bold text-orange-500">
    Flavor Fusion
  </h1>
</Link>

        {/* Links */}
        <div className={`

flex items-center gap-6 font-medium

${theme === "light"

? "text-gray-700"

: "text-gray-200"}

`}>
         <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "hover:text-orange-500 transition duration-200"
  }
>
  Home
</NavLink>

        <NavLink
  to="/recipes"
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "hover:text-orange-500 transition duration-200"
  }
>
  Recipes
</NavLink>

          <NavLink
  to="/savedRecipe"
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "hover:text-orange-500 transition duration-200"
  }
>
  Saved
</NavLink>
<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "hover:text-orange-500 transition duration-200"
  }
>
  About
</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={()=>setShowLogin(true)} className="px-4 py-2 border rounded-lg bg-orange-500 text-white">Login</button>
        
        <button onClick={()=>setShowRegister(true)} className="px-4 py-2 bg-green-600 text-white rounded-lg" >Register</button>

              <button
  onClick={toggleTheme}
  className="bg-black text-white px-4 py-2 rounded-lg"
>

  {theme === "light"
    ? "🌙 Mode"
    : "☀️ Mode"}

</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;