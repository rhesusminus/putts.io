require('dotenv').config()
// Update with your config settings.
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      user: 'puttsio',
      password: 'mysecretpassword',
      host: 'localhost',
      database: 'puttsio'
    }
  }
  /*
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
*/
}
