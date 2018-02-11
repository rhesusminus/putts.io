require('dotenv').config();
module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'puttsio',
      password: 'mysecretpassword',
      host: 'localhost',
      database: 'puttsio'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING
  }
}
