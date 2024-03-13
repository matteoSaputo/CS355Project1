import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/RecipesBody.css';

const MealItem = (props) => {
    const {recipe, setSelectedRecipe} = props;
    return (
        <div>
            <button
                className="list-group-item list-group-item-action meal-item"
                onClick={(e) => {
                    setSelectedRecipe(recipe)
                }}
            >
                <img className="meal-img" loading="lazy" key={recipe.name} src={recipe.thumbnail} alt="Meal pic" />
                <h4 className="recipe-list-item-name">{recipe.name}</h4>
                <h6 className={`strength-${recipe.strength}`}>{recipe.strength}</h6>
            </button>
        </div>
    );
}

export default MealItem;