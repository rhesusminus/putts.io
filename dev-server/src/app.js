const express = require('express')
const Knex = require('knex')
const Model = require('objection').Model
const cors = require('cors')
const bodyParser = require('body-parser')
const knexConfig = require('../knexfile')

const games = require('./routes/games')

const knex = Knex(knexConfig[process.env.NODE_ENV])
Model.knex(knex)

const app = express()
  .use(cors())
  .use(bodyParser.json())

app.use('/games', games)

const PORT = process.env.PORT || 3090

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
