exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        { name: 'Johns Boxing Gym',
          description: 'Training Center'
             
      }
      ]);
    });
};
