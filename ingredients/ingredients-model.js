const db = require('../data/db-config');

function getRecipesWithThisIngredient(ingredient_id){

    return db(  'recipes'  )
        .join( 'recipe_igredients', 'recipes.id', 'recipe_ingredients.recipe_id' )
        .where( 'recipe_ingredients.id', ingredient_id )
        .select('recipes.name');
       
}


module.exports = {

    getRecipesWithThisIngredient

}