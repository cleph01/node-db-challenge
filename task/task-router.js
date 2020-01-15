const express = require('express');

const Tasks = require('./task-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    
    Tasks.getTasks()
        .then(task => {

            let data = task;

            for(i = 0; i < data.length; i++){

                if(data[i]['Completed'] === 0){

                    data[i]['Completed'] = false

                }else{

                    data[i].completed = true

                }
            }

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



module.exports = router;