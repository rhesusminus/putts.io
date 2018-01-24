import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../actions/auth-actions';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import '../css/Signin.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    //marginLeft: theme.spacing.unit,
    //marginRight: theme.spacing.unit,
    width: '100%'
  },
  menu: {
    width: 200
  },
  button: {
    // margin: theme.spacing.unit,
    width: '100%'
  },
  input: {
    display: 'none'
  }
});

class Signin extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUser({
      email: this.state.email,
      password: this.state.password
    });
  };

  onPasswordKeyPress = event => {
    if (event.keyCode === 13) {
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
            <br /><br />
            <Button raised color="secondary" disabled className={classes.button}>
              Continue with Facebook
            </Button>
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
