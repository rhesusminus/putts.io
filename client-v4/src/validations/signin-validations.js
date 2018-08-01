import { Success } from 'folktale/validation'
import { notEmpty, matches } from './validation-funcs'

export const isPasswordValid = password => Success().concat(notEmpty('Password', password))

export const isEmailValid = email =>
  Success()
    .concat(matches('Email', /.+@.+\..+/, email, 'Please enter valid email address'))
    .concat(notEmpty('Email', email))
