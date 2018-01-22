import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../actions/auth-actions';
import '../css/Signin.css';

class Signin extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleLogin = () => {
    this.props.loginUser({
      email: this.state.email,
      password: this.state.password
    });
  };

  onKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleLogin();
    }
  }

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
    const { errorMessage } = this.props;

    return (
      <div className="Signin">
        {errorMessage && <div className="Signin-errormsg">{errorMessage}</div> }
        <div className="Signin-inputs">
          <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleInputChange} />
          <br />
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleInputChange} onKeyPress={this.onKeyPress} />
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
        <button className="Signin-with-Google-btn btn" disabled>
          Sign in with Google
        </button>
        <br />
        <button className="btn" disabled>Continue with Facebook</button>
      </div>
    );
  }
}

Signin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

const mapStateToProps = ({ auth }) => ({ errorMessage: auth.errorMessage });
const mapDispatchToProps = dispatch => bindActionCreators({ loginUser }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin));
