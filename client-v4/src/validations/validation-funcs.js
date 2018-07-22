import v8n from 'v8n'

export const isString = s =>
  v8n()
    .string()
    .test(s)

export const isArray = a =>
  v8n()
    .array()
    .test(a)

export const isLength3 = s =>
  v8n()
    .length(3)
    .test(s)

const allowedMethods = ['GET', 'POST'] // Allowed actions for api-middleware
export const validMethod = m => allowedMethods.includes(m.toUpperCase())
