const express = require('express')
const { Result } = require('../models/Game')
const { allByUserId, findOne } = require('../db')

const router = express.Router()

router.get('/', (req, res) =>
  allByUserId(Result, req.params.user)
    .run()
    .listen({
      onResolved: result => res.send(result),
      onRejected: error => res.send(error)
    })
)

router.get('/:id', (req, res) =>
  findOne(Result, req.params.id)
    .run()
    .listen({
      onResolved: result => res.send(result),
      onRejected: error => res.send(error)
    })
)

module.exports = router
