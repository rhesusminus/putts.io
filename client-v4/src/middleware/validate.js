export const validateAction = ({ endpoint, types, method }) => {
  const allowedMethods = ['GET', 'POST']
  const isString = s => typeof s === 'string'
  const isArray = x => Array.isArray(x)
  const lengthIs3 = x => x.length === 3
  const validMethod = m => allowedMethods.includes(m.toUpperCase())

  if (!isString(endpoint)) {
    throw new Error('Specify a string endpoint URL.')
  }

  if (!isArray(types) || !lengthIs3(types)) {
    throw new Error('Expected an array of three action types.')
  }

  if (!types.every(type => isString(type))) {
    throw new Error('Expected action types to be strings.')
  }

  if (!isString(method) || !validMethod(method)) {
    throw new Error(`Method should be a string. Allowed methods at the moment are: ${allowedMethods}`)
  }
}
