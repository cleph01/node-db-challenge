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


function addTask(proj_id, body_content){

    const { project_id } = proj_id

    const { description, notes } = body_content;

    return db('task')
        .insert( body_content );
            
    // return db('task')
    //     .insert({
    //             project_id: project_id,
    //             description: description,
    //             notes: notes
    //         });

}

module.exports = {

    getTasks,
    addTask

}