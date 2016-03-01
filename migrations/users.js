
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
  	table.increments('id').primary();
  	table.string('email');
  	table.string('firstName');
  	table.string('lastName');
    table.string('displayName');
  	table.string('password');
    table.string('salt');
  	table.string('username');
  	table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
