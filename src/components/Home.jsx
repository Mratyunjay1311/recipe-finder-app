import { Link } from "react-router-dom"

function Home() {
  return (
    <>
  <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Flavor Fusion</h1>
      <h4 className="text-lg mb-6">Discover delicious recipes from around the world with easy cooking instructions and beautiful food inspiration.</h4>
     <Link to='/recipes'>
      <button  className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600">Explore Recipes</button>
     </Link>
  </div>
    </>
  )
}

export default Home