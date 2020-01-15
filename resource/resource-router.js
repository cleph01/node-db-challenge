const express = require('express');

const Resources = require('./resource-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    
    Resources.getResources()
        .then(resource => {
            res.json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
});


router.post('/', (req, res) => {

    const body_content = req.body;

    Resources.addResource(body_content)
    .then(resource => {
        res.json(resource);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to add resource' });
    });
});



module.exports = router;