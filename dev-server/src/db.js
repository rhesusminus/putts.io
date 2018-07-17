const { task } = require('folktale/concurrency/task')
const { curry } = require('ramda')

const all = model =>
  task(async ({ resolve, reject }) => {
    try {
      const res = await model
        .query()
        .skipUndefined()
        .orderBy('id')
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })

const allWhere = curry((model, where) => {
  task(async ({ resolve, reject }) => {
    try {
      const res = await model.query().where(where)
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
})

const allByUserId = curry((model, userId) => {
  task(async ({ resolve, reject }) => {
    try {
      const res = await model.query().where('user', userId)
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
})

const findOne = curry((model, id) =>
  task(async ({ resolve, reject }) => {
    try {
      const res = await model
        .query()
        .findById(id)
        .throwIfNotFound()
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
)

module.exports = { all, allByUserId, allWhere, findOne }
