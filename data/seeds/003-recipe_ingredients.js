
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert(
        [
          {
            recipe_id: 1,
            ingredient_id: 1,
            quantity: 3,
            unit: 'table spoons'
          },
          {
            recipe_id: 1,
            ingredient_id: 2,
            quantity: 8,
            unit: 'ounces'
          }
        ]
      );
    });
};
