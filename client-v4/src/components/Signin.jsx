import React, { Component } from 'react'
import { Input, Button, Page } from 'react-onsenui'
import '../styles/Signin.css'

class Signin extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = event => {
    if (event) {
      event.preventDefault()
    }
    this.props.navigate('dashboard')
  }

  onPasswordKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSubmit()
    }
  }

  handleInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({ [target.name]: value })
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
        />
        <br />
        <Input
          modifier="underbar"
          placeholder="Password"
          value={this.state.password}
          type="password"
          name="password"
          onChange={this.handleInputChange}
          onKeyPress={this.onPasswordKeyPress}
        />
        <Button onClick={this.handleSubmit}>Login</Button>
        <Button>Register new user</Button>
      </Page>
    )
  }
}

export default Signin
