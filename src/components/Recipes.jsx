// Recipes.jsx

import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import recipesData from "./data"

import {

  useMemo,
  useRef,
  useState,
  useCallback

} from "react"

import RecipeCard from "./RecipeCard"

function Recipes() {
const { theme } = useContext(ThemeContext)
  // SEARCH TEXT STORE KARNE KE LIYE
  const [recipe, setRecipe] = useState("")

  // CATEGORY FILTER
  const [category, setCategory] = useState("All")

  // INPUT KO FOCUS KARNE KE LIYE
  const searchInputRef = useRef(null)

  // FILTERED RECIPES
  // useMemo unnecessary filtering rokta hai
  const filteredRecipe = useMemo(() => {

    return recipesData.filter((r) => {

      // SEARCH MATCH
      let matchTitle =
        r.title
          .toLowerCase()
          .includes(recipe.toLowerCase())

      // CATEGORY MATCH
      let matchCategory =
        category === "All" ||
        r.category === category

      // DONO TRUE HONE CHAHIYE
      return matchTitle && matchCategory

    })

  }, [recipe, category])

  // SAVE FUNCTION
  // useCallback function ko memoize karta hai
  const saveRecipe = useCallback((recipe) => {

    // LOCAL STORAGE SE OLD DATA
    let savedRecipes =
      JSON.parse(
        localStorage.getItem("savedRecipes")
      ) || []

    // CHECK ALREADY SAVED YA NAHI
    let alreadySaved =
      savedRecipes.find(
        (item) => item.id === recipe.id
      )

    // AGAR SAVED NAHI HAI
    if (!alreadySaved) {

      // PUSH NEW RECIPE
      savedRecipes.push(recipe)

      // LOCAL STORAGE UPDATE
      localStorage.setItem(
        "savedRecipes",
        JSON.stringify(savedRecipes)
      )

      alert("Recipe Saved")

    } else {

      alert("Recipe Already Saved")

    }

  }, [])

  return (

    <div className={`

min-h-screen p-8 transition-all duration-300

${theme === "light"

? "bg-green-50 text-black"

: "bg-gray-900 text-white"}

`}>

      {/* PAGE TITLE */}
      <h1 className="text-5xl font-bold text-center text-green-800 mb-4">
        Recipe Page
      </h1>

      {/* DESCRIPTION */}
      <p className="text-center text-gray-600 text-lg mb-8">
        Explore healthy, delicious, and colorful dishes made with fresh ingredients.
      </p>

      {/* SEARCH + FILTER SECTION */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">

        {/* SEARCH INPUT */}
        <input
          type="text"
          placeholder="Search Recipe..."
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          ref={searchInputRef}
          className="w-[350px] px-4 py-3 rounded-xl border border-green-300 outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* FOCUS BUTTON */}
        <button
          onClick={() => searchInputRef.current.focus()}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Focus Search
        </button>

        {/* CATEGORY FILTER */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-3 rounded-xl border"
        >

          <option value="All">All</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
          <option value="Dessert">Dessert</option>

        </select>

      </div>

      {/* RESULT COUNT */}
      <h2 className="text-xl font-semibold mb-6 text-center">

        Showing {filteredRecipe.length} results

      </h2>

      {/* RECIPE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredRecipe.map((recipe) => (

          <RecipeCard

            // UNIQUE KEY
            key={recipe.id}

            // RECIPE OBJECT
            recipe={recipe}

            // SAVE FUNCTION
            saveRecipe={saveRecipe}

          />

        ))}

      </div>

    </div>
  )
}

export default Recipes