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

      transition-all duration-300

      ${theme === "light"

      ? "bg-green-50 text-black"

      : "bg-gray-900 text-white"}

      `}

    >

      {/* HERO SECTION */}

      <div
      className="min-h-screen flex flex-col justify-center items-center px-6"
      >

        <h1
        className="text-6xl font-extrabold mb-6 text-center leading-tight"
        >

          Welcome to Flavor Fusion

        </h1>

        <h4
        className="text-xl mb-8 max-w-3xl text-center leading-relaxed"
        >

          Discover delicious recipes
          from around the world with
          easy cooking instructions,
          fresh ingredients, and
          beautiful food inspiration.

        </h4>

        <Link to="/recipes">

          <button

          className={`

          px-8 py-4 rounded-xl
          text-lg font-semibold
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

      {/* FEATURE SECTION */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <h2
        className="text-4xl font-bold text-center mb-14"
        >
          Why Choose Flavor Fusion?
        </h2>

        <div
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >

          {/* CARD 1 */}

          <div
          className={`

          rounded-2xl p-6 shadow-lg

          ${theme === "light"

          ? "bg-white"

          : "bg-gray-800"}

          `}
          >

            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Healthy Food"
              className="w-full h-56 object-cover rounded-xl mb-5"
            />

            <h3 className="text-2xl font-bold mb-3">
              Fresh Recipes
            </h3>

            <p className="leading-relaxed">
              Explore healthy and tasty
              dishes made with fresh
              ingredients and easy
              cooking methods.
            </p>

          </div>

          {/* CARD 2 */}

          <div
          className={`

          rounded-2xl p-6 shadow-lg

          ${theme === "light"

          ? "bg-white"

          : "bg-gray-800"}

          `}
          >

            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
              alt="Cooking"
              className="w-full h-56 object-cover rounded-xl mb-5"
            />

            <h3 className="text-2xl font-bold mb-3">
              Easy Cooking
            </h3>

            <p className="leading-relaxed">
              Step-by-step instructions
              help beginners and food
              lovers cook confidently.
            </p>

          </div>

          {/* CARD 3 */}

          <div
          className={`

          rounded-2xl p-6 shadow-lg

          ${theme === "light"

          ? "bg-white"

          : "bg-gray-800"}

          `}
          >

            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
              alt="Restaurant Food"
              className="w-full h-56 object-cover rounded-xl mb-5"
            />

            <h3 className="text-2xl font-bold mb-3">
              Global Cuisine
            </h3>

            <p className="leading-relaxed">
              From Indian to Italian,
              Chinese to Japanese,
              discover flavors from
              all around the world.
            </p>

          </div>

        </div>

      </div>

      {/* STATS SECTION */}

      <div
      className={`

      py-20 px-6

      ${theme === "light"

      ? "bg-orange-100"

      : "bg-gray-800"}

      `}
      >

        <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center"
        >

          <div>
            <h1 className="text-5xl font-bold mb-2">
              100+
            </h1>

            <p className="text-lg">
              Recipes
            </p>
          </div>

          <div>
            <h1 className="text-5xl font-bold mb-2">
              20+
            </h1>

            <p className="text-lg">
              Categories
            </p>
          </div>

          <div>
            <h1 className="text-5xl font-bold mb-2">
              50K+
            </h1>

            <p className="text-lg">
              Food Lovers
            </p>
          </div>

          <div>
            <h1 className="text-5xl font-bold mb-2">
              4.9★
            </h1>

            <p className="text-lg">
              User Rating
            </p>
          </div>

        </div>

      </div>

      {/* FOOTER */}

      <footer
      className={`

      py-10 px-6

      ${theme === "light"

      ? "bg-black text-white"

      : "bg-black text-gray-300"}

      `}
      >

        <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
        >

          {/* ABOUT */}

          <div>

            <h2 className="text-3xl font-bold mb-4 text-orange-400">
              Flavor Fusion
            </h2>

            <p className="leading-relaxed">
              Flavor Fusion helps food
              lovers discover amazing
              dishes, cooking ideas,
              and recipes from around
              the globe.
            </p>

          </div>

          {/* LINKS */}

          <div>

            <h2 className="text-2xl font-bold mb-4">
              Quick Links
            </h2>

            <div className="flex flex-col gap-3">

              <Link to="/">
                Home
              </Link>

              <Link to="/recipes">
                Recipes
              </Link>

              <Link to="/savedRecipe">
                Saved Recipes
              </Link>

              <Link to="/about">
                About
              </Link>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h2 className="text-2xl font-bold mb-4">
              Contact
            </h2>

            <p className="mb-2">
              📧 brahman.mratyunjay1311@gmail.com
            </p>

            <p className="mb-2">
              📍 Aliganj, India
            </p>

            <p>
              ☎ +91 7300881306
            </p>

          </div>

        </div>

        <div
        className="border-t border-gray-700 mt-10 pt-6 text-center"
        >

          <p>
            © 2026 Flavor Fusion.
            All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  )
}

export default Home