const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });
});


router.get('/:id/shoppingList', (req, res) => {

    const { id } = req.params;

    Recipes.getShoppingList(id)
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get shopping list' });
    });
});


router.get('/:id/instructions', (req, res) => {
    
    const { id } = req.params;

    Recipes.getInstructions(id)
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipe instructions' });
        });
});


router.get('/ingredients/:id/recipes', (req, res) => {
    
    const { id } = req.params;

    Recipes.getRecipes(id)
        .then(recipes => {
            res.json(recipes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes' });
        });
});


module.exports = router;