const db = require('../data/db-config');

function getResources(){

    return db('resource')
}

function addResource(body_content){

    return db('resource')
        .insert( body_content );

}



module.exports = {

    getResources,
    addResource

}