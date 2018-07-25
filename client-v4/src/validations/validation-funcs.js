import v8n from 'v8n'
import { Success, Failure } from 'folktale/validation'

export const isString = s =>
  v8n()
    .string()
    .test(s)

export const isArray = a =>
  v8n()
    .array()
    .test(a)

export const isLength = l => s =>
  v8n()
    .length(l)
    .test(s)

export const validMethod = m =>
  v8n()
    .includes(m.toUpperCase())
    .test(['GET', 'POST']) // Allowed actions for api-middleware

export const minLength = (field, min, value) =>
  v8n()
    .minLength(min)
    .test(value)
    ? Success(value)
    : Failure([`${field} must have at least ${min} characters`])

export const matches = (field, regexp, value, message = '') =>
  v8n()
    .pattern(regexp)
    .test(value)
    ? Success(value)
    : Failure([message || `${field} must match ${regexp}`])

export const notEmpty = (field, value) =>
  v8n()
    .not.empty()
    .test(value)
    ? Success(value)
    : Failure([`${field} can't be empty`])
