const db = require('../data/db-config');

function getProjects(){

    return db( 'projects' );
       
}

function addProject(body_content){
    
    return db('projects')
    .insert(

        body_content

    )
}


module.exports = {

    getProjects,
    addProject

}