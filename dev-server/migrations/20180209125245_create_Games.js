
exports.up = knex => {
  return knex.schema
    .createTable('Game', table => {
      table.increments('id').primary();
      table.string('title');
      table.string('description');
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('Games');
};
