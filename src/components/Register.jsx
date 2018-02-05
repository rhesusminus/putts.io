import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import '../css/Register.css';

const styles = theme => ({
  textField: {
    width: '100%',
  },
  button: {
    width: '100%',
  },
});

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    displayName: '',
    file: null,
  };

  handleFileChange = event => {
    this.setState({ file: event.target.files[0] });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleCancel = event => {
    this.props.history.push('/');
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // send action from here
  };

  render() {
    const { name, email, displayName } = this.state;
    const { classes } = this.props;

    return (
      <div className="Register">
        <h2>Register new user</h2>
        <TextField
          label="Name"
          name="name"
          type="text"
          value={name}
          inputstyle={{ fontSize: '5rem' }}
          className={classes.textField}
          margin="normal"
          onChange={this.handleInputChange}
        />
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
          label="Display name"
          name="displayName"
          type="text"
          value={displayName}
          inputstyle={{ fontSize: '5rem' }}
          className={classes.textField}
          margin="normal"
          onChange={this.handleInputChange}
        />
        Picture:
        <Input type="file" onChange={this.handleFileChange} />
        <br />
        <br />
        <div className="Register-buttons">
          <Button raised color="primary" className={classes.button}>
            Register new user
          </Button>
          <br />
          <br />
          <Button raised color="secondary" onClick={this.handleCancel} className={classes.button}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Register));
