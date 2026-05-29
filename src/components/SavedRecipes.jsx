// SavedRecipes.jsx

import {

  useEffect,
  useState,
  useMemo,
  useCallback

} from "react"

import RecipeCard from "./RecipeCard"

function SavedRecipes() {

  // SAVED RECIPES STATE
  const [saved, setSaved] = useState([])

  // PAGE LOAD PE LOCAL STORAGE DATA LOAD
  useEffect(() => {

    let data =
      JSON.parse(
        localStorage.getItem("savedRecipes")
      ) || []

    setSaved(data)

  }, [])

  // REMOVE FUNCTION
  const removeRecipe = useCallback((id) => {

    // FILTER REMOVE
    let updatedRecipes =
      saved.filter(
        (item) => item.id !== id
      )

    // STATE UPDATE
    setSaved(updatedRecipes)

    // LOCAL STORAGE UPDATE
    localStorage.setItem(
      "savedRecipes",
      JSON.stringify(updatedRecipes)
    )

  }, [saved])

  // TOTAL COOKING TIME
  const totalCookingTime = useMemo(() => {

    return saved.reduce((total, recipe) => {

      // STRING KO NUMBER BANAYA
      let time =
        parseInt(recipe.cookingTime)

      return total + time

    }, 0)

  }, [saved])

  // EMPTY STATE
  if (saved.length === 0) {

    return (

      <div className="min-h-screen flex justify-center items-center">

        <h1 className="text-4xl font-bold text-gray-500">
          No saved items yet
        </h1>

      </div>

    )
  }

  return (

    <div className="min-h-screen bg-green-50 p-8">

      {/* TITLE */}
      <h1 className="text-5xl font-bold text-center text-green-700 mb-4">

        Saved Recipes

      </h1>

      {/* TOTAL SAVED */}
      <h2 className="text-2xl text-center mb-4">

        Total Saved: {saved.length}

      </h2>

      {/* TOTAL COOKING TIME */}
      <h2 className="text-2xl text-center mb-10 text-green-700 font-bold">

        Total Cooking Time:
        {" "}
        {totalCookingTime}
        {" "}
        mins

      </h2>

      {/* SAVED CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {saved.map((recipe) => (

          <RecipeCard

            key={recipe.id}

            recipe={recipe}

            // REMOVE FUNCTION
            removeRecipe={removeRecipe}

            // YE SAVED PAGE HAI
            isSavedPage={true}

          />

        ))}

      </div>

    </div>
  )
}

export default SavedRecipes