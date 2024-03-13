const mealDb = "https://www.themealdb.com/api/json/v1/1/"
const listAllIngredients = `${mealDb}list.php?i=list`;
const listAllAreas = `${mealDb}list.php?a=list`
const listAllCategories = `${mealDb}list.php?c=list`

const endPoints = {
    listAllAreas,
    listAllCategories,
    listAllIngredients,
};

export default endPoints;