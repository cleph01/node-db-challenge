const db = require('../data/db-config');

function getRecipesWithThisIngredient(ingredient_id){

    return db(  'recipes as r'  )
        .join( 'recipe_igredients as ri', 'r.id', 'ri.recipe_id' ) 
        // .select('r.name')
        .where('ri.recipe_id', '=', ingredient_id);
       
}


module.exports = {

    getRecipesWithThisIngredient

}