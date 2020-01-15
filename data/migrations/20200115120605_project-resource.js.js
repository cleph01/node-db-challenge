
exports.up = async function(knex) {
  
    await knex.schema.dropTableIfExists("recipes");
    await knex.schema.dropTableIfExists("ingredients");
    await knex.schema.dropTableIfExists("recipe_ingredients");
    await knex.schema.dropTableIfExists("recipe_steps");
    await knex.schema.dropTableIfExists("recipes_ingredients");

     
     await knex.schema.createTable("project-resource", (table) =>{
        // translates to "id" INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT
        table.increments("id"); //Short hand for above
        table.integer("project_id").notNull();
        table.integer("resource_id").notNull();
        
    });
};

exports.down = async function(knex) {
  
    await knex.schema.dropTableIfExists("project-resource");

};
