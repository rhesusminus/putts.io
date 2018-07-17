const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Knex = require('knex')
const Model = require('objection').Model
const knexConfig = require('../knexfile')

const games = require('./routes/games')

const knex = Knex(knexConfig[process.env.NODE_ENV])
Model.knex(knex)

const app = express()
  .use(cors())
  .use(bodyParser.json())

app.use('/games', games)

const PORT = process.env.PORT || 3090

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
