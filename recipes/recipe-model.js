const db = require('../data/db-config');

function getRecipes(){

    return db('recipes')
}

function getShoppingList(id){

    return db('recipe_ingredients')
        .where( { recipe_id: id } );

}

function getInstructions(id){

    return db('recipe_steps')
        .where( { recipe_id: id } )
        .orderBy('step_number');

}

module.exports = {

    getRecipes,
    getShoppingList,
    getInstructions

}