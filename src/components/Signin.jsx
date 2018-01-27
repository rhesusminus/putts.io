import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { loginUser } from '../actions/auth-actions';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import '../css/Signin.css';

const styles = theme => ({
  textField: {
    width: '100%'
  },
  button: {
    width: '100%'
  }
});

class Signin extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    this.props.loginUser({
      email: this.state.email,
      password: this.state.password
    });
  };

  onPasswordKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
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
    const { errorMessage, classes } = this.props;

    return (
      <div className="Signin">
        {errorMessage && <div className="Signin-errormsg">{errorMessage}</div>}
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={email}
            inputstyle={{ fontSize: '5rem' }}
            className={classes.textField}
            margin="normal"
            onChange={this.handleInputChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={password}
            className={classes.textField}
            margin="normal"
            onChange={this.handleInputChange}
            onKeyPress={this.onPasswordKeyPress}
          />
          <div className="Signin-buttons">
            <Button raised color="primary" onClick={this.handleSubmit} className={classes.button}>
              Login
            </Button>
            <br />
            <br />
            <Button raised color="primary" onClick={this.register} className={classes.button}>
              Register
            </Button>
            <br />
            <br />
            <Button raised color="secondary" disabled className={classes.button}>
              Sign in with Google
            </Button>
            <br />
            <br />
            <Button raised color="secondary" disabled className={classes.button}>
              Continue with Facebook
            </Button>
            <br />
            <br />
            <Link to="/password-recovery">
              <Typography type="body1">Forgot password?</Typography>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

Signin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

const mapStateToProps = ({ auth }) => ({ errorMessage: auth.errorMessage });
const mapDispatchToProps = dispatch => bindActionCreators({ loginUser }, dispatch);

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin)));
