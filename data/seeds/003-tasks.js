exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        { 
          project_id: 1,
          description: 'Do Plyo inlieu of Sprinting',
          notes:'Give it all you have, it will work'

             
      }
      ]);
    });
};
