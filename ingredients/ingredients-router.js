const express = require('express');

const Recipes = require('./ingredients-model.js');

const router = express.Router();



router.get('/:id/recipes', (req, res) => {

    const { ingredient_id } = req.params;

    Recipes.getRecipesWithThisIngredient(ingredient_id)
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipe list' });
    });
});



module.exports = router;