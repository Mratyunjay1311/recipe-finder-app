// RecipeCard.jsx

import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
function RecipeCard({

  // Parent se recipe object aayega
  recipe,

  // Save function parent se aayega
  saveRecipe,

  // Remove function parent se aayega
  removeRecipe,

  // Check karne ke liye ki saved page hai ya nahi
  isSavedPage

}) {
const { theme } = useContext(ThemeContext)
  return (

    // CARD CONTAINER
    <div className={`

rounded-2xl shadow-lg overflow-hidden
hover:scale-105 transition duration-300

${theme === "light"

? "bg-white text-black"

: "bg-gray-800 text-white"}

`}
>

      {/* DETAILS PAGE PE LE JANE KE LIYE */}
      <Link to={`/recipes/${recipe.id}`}>

        {/* RECIPE IMAGE */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-56 object-cover"
        />

        {/* TEXT SECTION */}
        <div className="p-5">

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            {recipe.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-4">
            {recipe.description}
          </p>

          {/* DETAILS BUTTON */}
          <button
            type="button"
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
          >
            View Recipe Details
          </button>

        </div>

      </Link>

      {/* BUTTON SECTION */}
      <div className="flex gap-3 p-5 pt-0">

        {/* AGAR SAVED PAGE NAHI HAI TO SAVE BUTTON DIKHAO */}
        {!isSavedPage && (

          <button

            // SAVE FUNCTION CALL
            onClick={() => saveRecipe(recipe)}

            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
          >
            Save
          </button>

        )}

        {/* AGAR SAVED PAGE HAI TO REMOVE BUTTON DIKHAO */}
        {isSavedPage && (

          <button

            // REMOVE FUNCTION CALL
            onClick={() => removeRecipe(recipe.id)}

            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
          >
            Remove
          </button>

        )}

      </div>

    </div>
  )
}

export default RecipeCard