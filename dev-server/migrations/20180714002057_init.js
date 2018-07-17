exports.up = knex =>
  knex.schema
    .createTable('Game', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('shortDesc')
      table.string('longDesc')
      table.string('image')
    })
    .createTable('User', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('email')
      table.string('displayName')
      table.string('image')
    })
    .createTable('Result', table => {
      table.increments('id').primary()
      table.integer('user')
      table.string('result')
    })

exports.down = knex =>
  knex.schema
    .dropTableIfExists('Game')
    .dropTableIfExists('User')
    .dropTableIfExists('Result')
