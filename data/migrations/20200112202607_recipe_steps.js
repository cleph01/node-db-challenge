
exports.up = async function(knex) {
  
    await knex.schema.createTable("recipe_steps", (table) =>{
        // translates to "id" INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT
        table.increments("id"); //Short hand for above
        table.integer("recipe_id").notNull();
        table.integer("step_number").notNull();
        table.text("step_description").notNull();
        
        
    });

};

exports.down = async function(knex) {
  
    await knex.schema.dropTableIfExists("recipe_steps");
};