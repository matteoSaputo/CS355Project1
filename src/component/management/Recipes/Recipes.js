import React, { useEffect } from "react"; 
import NavigationBar from "../../NavigationBar.js";
import RecipesBody from "./RecipesBody.js";
import DashboardFooter from "../../DashboardFooter.js";
import RecipeInfo from "./RecipeInfo.js";
import lists from "../../../config/list.js";

const Recipes = (props) => {
    const { recipes, setRecipes, inventory, profile } = props;
    const {
        selectedRecipe, setSelectedRecipe,
        recipeOptions, setRecipeOptions
    } = props.recipeStates;

    useEffect(() => {
        const updateRecipes = async () => {
            const recipes = lists.recipes;

            props.setRecipes(recipes);

            let opts = []
            recipes.forEach(recipe => {
                opts = [...opts, { label: recipe.name, value: recipe }];
            });
            setRecipeOptions(opts);
        }
        updateRecipes();
    }, []);

    return (
        <div>
            <NavigationBar />
            {selectedRecipe ?
                <RecipeInfo
                    recipes={recipes} setRecipes={setRecipes}
                    selectedRecipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe}
                    inventory={inventory} profile={profile}
                />
                : 
                <RecipesBody
                    recipes={recipes} setRecipes={setRecipes}
                    recipeOptions={recipeOptions}
                    selectedRecipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe}
                    inventory={inventory} profile={profile}
                />
            }
            <DashboardFooter />
        </div>
    )
}

export default Recipes;