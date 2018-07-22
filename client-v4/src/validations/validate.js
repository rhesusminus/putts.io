import { isString, isArray, isLength3, validMethod } from '../validations/validation-funcs'

export const validateAction = ({ endpoint, types, method }) => {
  if (!isString(endpoint)) {
    throw new Error('Specify a string endpoint URL.')
  }

  if (!isArray(types) || !isLength3(types)) {
    throw new Error('Expected an array of three action types.')
  }

  if (!types.every(type => isString(type))) {
    throw new Error('Expected action types to be strings.')
  }

  if (!isString(method) || !validMethod(method)) {
    throw new Error(`Method should be a string.`)
  }
}
