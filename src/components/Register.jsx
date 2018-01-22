import React from 'react';
import { withRouter } from 'react-router-dom';
import '../css/Register.css';

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    displayName: ''
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleCancel = event => {
    this.props.history.push('/');
  }

  render() {
    const { name, email, displayName } = this.state;
    return (
      <div className="Register">
        <h1>Register</h1>
        <input type="text" placeholder="Name" name="name" value={name} onChange={this.handleInputChange} />
        <br />
        <input type="text" placeholder="Email" name="email" value={email} onChange={this.handleInputChange} />
        <br />
        <input
          type="text"
          placeholder="Display name"
          name="displayName"
          value={displayName}
          onChange={this.handleInputChange}
        />
        Picture selection goes here!<br />
        <br />
        <div className="Register-buttons">
          <button className="Register-buttons__register btn">Register</button>
          <button className="Register-buttons__cancel btn" onClick={this.handleCancel}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
