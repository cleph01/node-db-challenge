
exports.up = async function(knex) {

    await knex.schema.dropTableIfExists("recipes");
    await knex.schema.dropTableIfExists("ingredients");
    await knex.schema.dropTableIfExists("recipe_ingredients");
    await knex.schema.dropTableIfExists("recipe_steps");
    await knex.schema.dropTableIfExists("recipes_ingredients");

    
    await knex.schema.dropTableIfExists("projects");
  
    await knex.schema.createTable("projects", (table) =>{
        // translates to "id" INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT
        table.increments("id"); //Short hand for above
        table.text("name").notNull();
        table.text("description");
        table.boolean("completed").notNullable().defaultTo(false);
        
    });

};

exports.down = async function(knex) {
  
    await knex.schema.dropTableIfExists("projects");
};