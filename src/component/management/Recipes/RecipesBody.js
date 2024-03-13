import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/RecipesBody.css';
import MealItem from "./MealItem";
import Select from "react-select";

const RecipesBody = (props) => {
    const { selectedRecipe, setSelectedRecipe, recipeOptions, profile } = props;
    const { allergies, preferences } = profile;
    
    const filteredRecipes = props.recipes.filter(recipe => {
        const containsAllergicIngredients = !recipe.ingredients ? false : recipe.ingredients.some(ingredient => allergies.includes(ingredient));
        const isPreferred = preferences.length > 0 ? preferences.includes(recipe.area) || preferences.includes(recipe.category) : true;
        return !containsAllergicIngredients && isPreferred;
    });

    return (
        <div className="recipes-body">
            <div className="row items">
                <div className="recipe-list">
                    <h1 className="recipe-list-title">Recipes</h1>
                    <div className="sub-div">
                        <Select
                            options={recipeOptions}
                            onChange={(e) => setSelectedRecipe(e.value)}
                        />
                        <div className="list-group recipe-list-items">
                            {filteredRecipes && filteredRecipes.map((recipe) => (
                                <MealItem
                                    recipe={recipe} selectedRecipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RecipesBody;