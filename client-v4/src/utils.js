import { task } from 'folktale/concurrency/task'
import { curry } from 'ramda'
import axios from 'axios'

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URI
})

const Http = curry((method, endpoint, data) =>
  task(async ({ resolve, reject }) => {
    try {
      const res = await request(endpoint, {
        method,
        data
      })
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
)

const preventDefault = event => event.preventDefault()

export { Http, preventDefault }
