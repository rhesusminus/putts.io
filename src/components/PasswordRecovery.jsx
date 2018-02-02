import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import '../css/PasswordRecovery.css';

const styles = theme => ({
  textField: {
    width: '100%'
  }
});

class PasswordRecovery extends React.Component {
  state = {
    registeredEmail: ''
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;
    const { registeredEmail } = this.state;

    return (
      <div className="PasswordRecovery">
        <Typography type="headline">Password recovery</Typography>
        <Typography type="body1">Gimme yerr registered e-mail so we can give yerr link to reset password!</Typography>
        <TextField
          label="Registered e-mail"
          name="registeredEmail"
          type="email"
          value={registeredEmail}
          inputstyle={{ fontSize: '5rem' }}
          className={classes.textField}
          margin="normal"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default withStyles(styles)(PasswordRecovery);
