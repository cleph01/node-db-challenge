
exports.up = async function(knex) {
  
    await knex.schema.createTable("ingredients", (table) =>{
        // translates to "id" INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT
        table.increments("id"); //Short hand for above
        table.text("name").notNull().unique()
    
    });

};

exports.down = async function(knex) {
  
    await knex.schema.dropTableIfExists("ingredients");
};