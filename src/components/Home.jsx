import { Link } from "react-router-dom"

import { useContext } from "react"

import { ThemeContext }
from "../context/ThemeContext"

function Home() {

  const { theme } =
    useContext(ThemeContext)

  return (

    <div

      className={`

      min-h-screen
      flex flex-col
      justify-center
      items-center
      transition-all duration-300

      ${theme === "light"

      ? "bg-green-50 text-black"

      : "bg-gray-900 text-white"}

      `}

    >

      <h1
      className="text-5xl font-bold mb-4"
      >

        Welcome to Flavor Fusion

      </h1>

      <h4
      className="text-lg mb-6 max-w-2xl text-center"
      >

        Discover delicious recipes
        from around the world with
        easy cooking instructions
        and beautiful food inspiration.

      </h4>

      <Link to="/recipes">

        <button

        className={`

        px-6 py-3 rounded-lg
        transition duration-300

        ${theme === "light"

        ? "bg-orange-500 text-white hover:bg-orange-600"

        : "bg-white text-black hover:bg-gray-300"}

        `}

        >

          Explore Recipes

        </button>

      </Link>

    </div>
  )
}

export default Home