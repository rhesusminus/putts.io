const express = require('express')
const { Game } = require('../models/Game')
const { all, id } = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  all(Game, {})
    .run()
    .listen({
      onResolved: result => {
        console.log('result:', result)
        res.send(result)
      },
      onRejected: error => res.send(error)
    })
})

router.get('/:id', (req, res) => {
  id(Game, req.params.id)
    .run()
    .listen({
      onResolved: result => res.send(result),
      onRejected: error => res.send(error)
    })
})

module.exports = router
