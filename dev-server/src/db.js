const { task } = require('folktale/concurrency/task')
const { curry } = require('ramda')

const all = curry((model, query) =>
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
)

const id = curry((model, id) =>
  task(async ({ resolve, reject }) => {
    try {
      const res = await model.query().findById(id)
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
)

module.exports = { all, id }
