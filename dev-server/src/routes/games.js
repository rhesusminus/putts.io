const express = require('express')
const { Game } = require('../models/Game')
const { all, findOne } = require('../db')

const router = express.Router()

router.get('/', (_, res) => all(Game).fork(error => console.log(error), result => res.send(result)))

router.get('/:id', (req, res) =>
  findOne(Game, req.params.id).fork(error => res.send(error), result => res.send(result))
)

module.exports = router
