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


router.post('/:id', async (req, res) => {
    
    const data = await Tasks.addTask(req.body)
    
    
    try {
        
        res.status(201).json(data)

    } catch (error) {
        console.log(error)
    }
    
    // data.then(task => {
    //     res.json(task);
    // })
    // .catch(err => {
    //     res.status(500).json({ message: 'Failed to add task' });
    // });
});



module.exports = router;