import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Recipes from './components/Recipes'
import RecipesDetails from './components/RecipeDetails'
import SavedRecipes from './components/SavedRecipes'
import About from './components/About'
import Not404FOund from './components/404NotFound'
import NavBar from './components/Navbar'
import RecipeDetails from './components/RecipeDetails'
import LoginModal from './components/LoginModal'
import { useState } from 'react'
import RegisterModal from './components/RegisterModal'

function App() {

  const [showLogin,setShowLogin] = useState(false)
  const [showRegister,setShowRegister] = useState(false)

  return (
 <>
 
 <NavBar setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>

 <LoginModal showLogin={showLogin} setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>

 <RegisterModal showRegister={showRegister} setShowRegister={setShowRegister} setShowLogin={setShowLogin}/>

  <div className='main-container'>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/recipes' element={<Recipes/>}/>
    <Route path='/recipes/:id' element={<RecipeDetails/>}/>
    <Route path='/savedRecipe' element={<SavedRecipes/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='*' element={<Not404FOund/>}/>
   </Routes>
  </div>
 </>
  )
}

export default App