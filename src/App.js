import { React, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Dashboard from './component/Dashboard/Dashboard';
import Inventory from './component/management/Inventory/Inventory';
import Recipes from './component/management/Recipes/Recipes';
import Profile from './component/user/Profile/Profile';
import "./styles/App.css"

const App = () => {
  const [inventory, setUserInventory] = useState([{
    id: null,
    ingredient: null,
    quantity: null
  }]);

  const [profile, setProfile] = useState({
    allergies: [],
    preferences: [],
    allergiesOptions: [],
    preferencesOptions: [],
  });

  const [recipes, setRecipes] = useState([{}]);;
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeOptions, setRecipeOptions] = useState(null);

  const recipeStates = {
    selectedRecipe, setSelectedRecipe,
    recipeOptions, setRecipeOptions
  }

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={
            <Inventory userInventory={inventory} setUserInventory={setUserInventory} />} />
          <Route path='/profile' element={
            <Profile profile={profile} setProfile={setProfile} />} />
          <Route path="/recipes" element={
            <Recipes recipes={recipes} setRecipes={setRecipes} recipeStates={recipeStates} inventory={inventory} profile={profile}/>} />
        </Routes>
      </div>
  );
}

export default App;