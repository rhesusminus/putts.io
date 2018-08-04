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

const post = curry((model, data) => {
  Future.tryP(() =>
    model
      .query()
      .insert(data)
      .then()
  )
})

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
      .then()
  )
)

module.exports = { all, post, allByUserId, findOne }
