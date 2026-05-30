import { useParams, Link } from "react-router-dom"
import recipesData from "./data"

function RecipeDetails() {

  const { id } = useParams()

  const recipe = recipesData.find((r) => r.id == id)

  // Item not found
  if (!recipe) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold text-red-600">
          Item not found
        </h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-green-50 p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-[400px] object-cover"
        />

        <div className="p-8">

          <h1 className="text-5xl font-bold text-green-700 mb-4">
            {recipe.title}
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            {recipe.description}
          </p>

          <div className="space-y-3 mb-6">

            <h3 className="text-xl">
              <span className="font-bold">
                Category:
              </span> {recipe.category}
            </h3>

            <h3 className="text-xl">
              <span className="font-bold">
                Cooking Time:
              </span> {recipe.cookingTime}
            </h3>

            <h3 className="text-xl">
              <span className="font-bold">
                Difficulty:
              </span> {recipe.difficulty}
            </h3>

          </div>

          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Ingredients
          </h2>

          <ul className="list-disc pl-6 mb-8">

            {recipe.ingredients.map((item, index) => (
              <li
                key={index}
                className="text-lg mb-2"
              >
                {item}
              </li>
            ))}

          </ul>

          <div className="flex gap-4">

            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600" onClick={()=>{
              let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || []

              let alreadySaved = savedRecipes.find((item)=>item.id == recipe.id)

              if(!alreadySaved){
                savedRecipes.push(recipe)
                localStorage.setItem("savedRecipes",JSON.stringify(savedRecipes))

                alert("Recipe Saved")
              }else{
                alert("Recipe Already Saved")
              }
            }}>
              Save Favourite
            </button>

            <Link to="/recipes">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                Back To Recipes
              </button>
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}

export default RecipeDetails