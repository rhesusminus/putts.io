const { task } = require('folktale/concurrency/task')
var Future = require('fluture')
const { curry } = require('ramda')

const all = model =>
  Future.tryP(() =>
    model
      .query()
      .skipUndefined()
      .orderBy('id')
      .then()
  )

const allByUserId = curry((model, userId) => {
  Future.tryP(() => {
    model
      .query()
      .where('user', userId)
      .then()
  })
})

const findOne = curry((model, id) =>
  Future.tryP(() =>
    model
      .query()
      .findById(id)
      .throwIfNotFound()
  )
)

module.exports = { all, allByUserId, findOne }
