const { task } = require('folktale/concurrency/task')
const { curry } = require('ramda')

const all = curry((model, query) =>
  task(async resolver => {
    try {
      const res = await model
        .query()
        .skipUndefined()
        .orderBy('id')
      resolver.resolved(res)
    } catch (error) {
      resolver.reject(error)
    }
  })
)

const id = curry((model, id) =>
  task(async resolver => {
    try {
      const res = await model.query().findById(id)
      resolver.resolved(res)
    } catch (error) {
      resolver.reject(error)
    }
  })
)

module.exports = { all, id }
