import { Success } from 'folktale/validation'
import { notEmpty, matches } from './validation-funcs'

const field = 'Email'

export const isPasswordValid = password => Success().concat(notEmpty('Password', password))

export const isEmailValid = email =>
  Success()
    .concat(matches(field, /.+@.+\..+/, email, 'Please enter valid email address'))
    .concat(notEmpty(field, email))
