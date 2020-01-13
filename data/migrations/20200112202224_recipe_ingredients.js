
exports.up = async function(knex) {
  
    await knex.schema.createTable("recipe_ingredients", (table) =>{
        // translates to "id" INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT
        table.increments("id"); //Short hand for above
        table.integer("recipe_id").notNull();
        table.integer("ingredient_id").notNull();
        table.float("quantity").notNull();
        
    });

};

exports.down = async function(knex) {
  
    await knex.schema.dropTableIfExists("recipe_ingredients");
};