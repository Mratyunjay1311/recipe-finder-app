import { useContext } from "react"

import { ThemeContext }
from "../context/ThemeContext"

function About() {

  const { theme } =
    useContext(ThemeContext)

  return (

    <div

      className={`

      min-h-screen p-10
      transition-all duration-300

      ${theme === "light"

      ? "bg-green-50 text-black"

      : "bg-gray-900 text-white"}

      `}

    >

      <div
      className={`

      max-w-5xl mx-auto
      rounded-2xl p-10 shadow-lg

      ${theme === "light"

      ? "bg-white"

      : "bg-gray-800"}

      `}
      >

        {/* HEADING */}

        <h1
        className="text-5xl font-bold text-center mb-6 text-orange-500"
        >

          About Flavor Fusion

        </h1>

        {/* DESCRIPTION */}

        <p
        className="text-lg leading-8 text-center mb-10"
        >

          Flavor Fusion is a modern recipe
          finder application created to help
          food lovers discover delicious dishes
          from different cuisines around the world.

          From Indian curries to Italian pasta,
          Chinese noodles to desserts —
          everything is available in one place.

        </p>

        {/* FEATURES */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div
          className={`

          rounded-xl p-6 shadow-md

          ${theme === "light"

          ? "bg-green-100"

          : "bg-gray-700"}

          `}
          >

            <h2
            className="text-2xl font-bold mb-4"
            >

              Features

            </h2>

            <ul className="space-y-3 text-lg">

              <li>
                🍲 Browse 100+ recipes
              </li>

              <li>
                🔍 Search recipes instantly
              </li>

              <li>
                📂 Filter by category
              </li>

              <li>
                ❤️ Save favourite recipes
              </li>

              <li>
                🌙 Light & Dark mode
              </li>

            </ul>

          </div>

          {/* TECHNOLOGIES */}

          <div
          className={`

          rounded-xl p-6 shadow-md

          ${theme === "light"

          ? "bg-orange-100"

          : "bg-gray-700"}

          `}
          >

            <h2
            className="text-2xl font-bold mb-4"
            >

              Technologies Used

            </h2>

            <ul className="space-y-3 text-lg">

              <li>
                ⚛️ React JS
              </li>

              <li>
                🎨 Tailwind CSS
              </li>

              <li>
                🔄 React Router DOM
              </li>

              <li>
                🧠 Context API
              </li>

              <li>
                💾 Local Storage
              </li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  )
}

export default About