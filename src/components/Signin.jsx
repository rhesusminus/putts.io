import React from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import googleLogo from '../assests/svg/btn_google_light.svg';
import '../css/Signin.css';

class Signin extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleLogin = event => {
    event.preventDefault();
    localStorage.setItem('putts.io-jwt-token', '...');
    this.props.history.push('/dashboard');
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  register = () => {
    this.props.history.push('/register');
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="Signin">
        <h3>Login to putts.io</h3>
        <div className="Signin-inputs">
          <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleInputChange} />
          <br />
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleInputChange} />
        </div>
        <br />
        <button className="Signin-login-btn btn" onClick={this.handleLogin}>
          Login
        </button>
        <br />
        <button className="Signin-register-btn btn" onClick={this.register}>
          Register
        </button>
        <br />
        <button className="Signin-with-Google-btn btn">
          <img src={googleLogo} alt="Google logo" />Sign in with Google
        </button>
        <br />
        <button className="btn">Continue with Facebook</button>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ errorMessage: auth.errorMessage });
// const mapDispatchToProps = (dispatch) => bindActionCreators({ loginUser }, dispatch);

export default compose(withRouter, connect(mapStateToProps))(Signin);
