
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', function(table) {
  	table.increments('id').primary();
  	table.string('name');
  	table.string('content');
  	table.integer('user_id');
  	table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artciles');
};
