import { task } from 'folktale/concurrency/task'
import { concat, curry } from 'ramda'
import axios from 'axios'

const API_ROOT = process.env.REACT_APP_API_URI
const createApiUrl = endpoint => (endpoint.indexOf(API_ROOT) === -1 ? concat(API_ROOT, endpoint) : endpoint)

const Http = curry((method, endpoint, data) =>
  task(async resolver => {
    try {
      const res = await axios({
        method,
        url: createApiUrl(endpoint),
        data
      })
      resolver.resolve(res)
    } catch (error) {
      resolver.reject(error)
    }
  })
)

export { Http, createApiUrl }
