const db = require('../data/db-config');

function getTasks(){

    return db('task as t')
            .join('projects as p', 't.project_id', 'p.id')
            .select('t.description as Task Description',
                    't.completed as Completed',
                    't.notes as Task Notes',
                    'p.name as Project Name',
                    'p.description as Project Description'
                    )
        
}


function addTask(body_content){


    
    return db('task')
        .insert( body_content );
            
  
}

module.exports = {

    getTasks,
    addTask

}