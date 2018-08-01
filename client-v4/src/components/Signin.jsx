import React, { Component } from 'react'
import { Input, Button, Page } from 'react-onsenui'
import { isPasswordValid, isEmailValid } from '../validations/signin-validations'
import '../styles/Signin.css'

const errorMessages = {
  email: 'Please enter valid email.',
  password: 'Please enter password.'
}

class Signin extends Component {
  state = {
    email: '',
    password: '',
    touched: {
      email: false,
      password: false
    },
    error: {
      email: false,
      password: false
    }
  }

  signinButtonEnabled = () => this.state.email.length > 0 && this.state.password.length > 0

  handleBlur = ({ target }) => {
    if (target.name !== undefined) {
      this.setState({ touched: { ...this.state.touched, [target.name]: true } })
    }
  }

  handleSubmit = () => {
    if (!this.state.error.email && !this.state.error.password) {
      this.props.navigate('dashboard')
    }
  }

  onPasswordKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSubmit()
    }
  }

  validateInput = () => {
    const { email, password } = this.state
    const emailError = isEmailValid(email).matchWith({
      Success: () => false,
      Failure: () => true
    })
    const passwordError = isPasswordValid(password).matchWith({
      Success: () => false,
      Failure: () => true
    })

    return { emailError, passwordError }
  }

  handleInputChange = ({ target }) => {
    const { email, password, error } = this.state

    const emailError = isEmailValid(email).matchWith({
      Success: () => false,
      Failure: () => true
    })
    const passwordError = isPasswordValid(password).matchWith({
      Success: () => false,
      Failure: () => true
    })
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({ [target.name]: value, error: { ...error, email: emailError, password: passwordError } })
  }

  render() {
    return (
      <Page className="Signin">
        <Input
          modifier="underbar"
          placeholder="Email"
          value={this.state.email}
          type="email"
          name="email"
          onChange={this.handleInputChange}
          onBlur={this.handleBlur}
          float
        />
        <span className="error error__email">
          {this.state.touched.email && this.state.error.email && errorMessages.email}
        </span>
        <br />
        <Input
          modifier="underbar"
          placeholder="Password"
          value={this.state.password}
          type="password"
          name="password"
          onChange={this.handleInputChange}
          onKeyPress={this.onPasswordKeyPress}
          onBlur={this.handleBlur}
          float
        />
        <span className="error error__password">
          {this.state.error.password && this.state.touched.password && errorMessages.password}
        </span>
        <Button onClick={this.handleSubmit} disabled={!this.signinButtonEnabled()}>
          Login
        </Button>
        <Button>Register new user</Button>
      </Page>
    )
  }
}

export default Signin
