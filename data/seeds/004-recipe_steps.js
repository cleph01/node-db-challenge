
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert(
        [
          {
            recipe_id: 1,
            step_number: 1,
            step_description: 'Pour 8oz of Milk into a glass cup'
          },
          {
            recipe_id: 1,
            step_number: 2,
            step_description: 'Put 2 tablespoons of Nestle Quick into cup with milk'
          },
          {
            recipe_id: 1,
            step_number: 3,
            step_description: 'Stir until milk powder is dissolved'
          },
          {
            recipe_id: 1,
            step_number: 4,
            step_description: 'Drink and Fall In Love With Life Again <3'
          },
        ]
      );
    });
};
