const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    
    Projects.getProjects()
        .then(project => {
            
            let data = project;

            for(i = 0; i < data.length; i++){

                if(data[i].completed === 0){

                    data[i].completed = false

                }else{

                    data[i].completed = true

                }
            }

            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});


router.post('/', (req, res) => {
    
    const body_content = req.body;

    Projects.addProject(body_content)
        .then(project => {
            res.json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add project' });
        });
});


// router.get('/', async (req, res) => {

//     const { id } = req.params;

//     const data = await Recipes.getProjects()

//     try{

//         res.json(data)

//     }catch(error){

//         console.log(error, "Error:")

//     }

    
    // Recipes.getRecipesWithThisIngredient(id)
    // .then(recipes => {
    //     res.json(recipes);
        
    //     console.log(recipes)

    // })
    // .catch(err => {
    //     res.status(500).json({ message: 'Failed to get recipe list' });
    // });
// });



module.exports = router;