import { tryP } from 'fluture'
import { curry } from 'ramda'
import axios from 'axios'

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URI || 'http://localhost:3090/'
})

const Http = curry((method, endpoint, data) =>
  tryP(() =>
    request(endpoint, {
      method,
      data
    })
  )
)

const preventDefault = event => event.preventDefault()

export { Http, preventDefault }
