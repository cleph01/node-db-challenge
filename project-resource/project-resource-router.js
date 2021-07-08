const express = require('express');

const Projects = require('./project-resource-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    
    Projects.getProjectResource()
        .then(recipes => {
            res.json(recipes);
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





module.exports = router;