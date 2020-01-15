const express = require('express');

const Tasks = require('./task-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    
    Tasks.getTasks()
        .then(task => {
            res.json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
});


router.post('/:id', (req, res) => {

    const project_id  = req.params;
    const body_content = req.body;
    
    Tasks.addTask(project_id, body_content)
    
    .then(task => {
        res.json(task);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to add task' });
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