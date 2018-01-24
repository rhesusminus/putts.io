import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import '../css/Header.css';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends React.Component {
  state = {
    showMenu: false,
  };

  handleLogout = () => {
    localStorage.removeItem('putts.io-jwt-token');
    this.props.history.push('/');
  }

  render() {
    const { classes } = this.props;

    return (
      <AppBar>
        <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>
            putts.io
          </Typography>
          <Button color="inherit" onClick={this.handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
      /*
      <div className="Header">
        <div className="Header-nav-icon">
          <FontAwesomeIcon className="Header-icon" icon="bars" size="lg" />
        </div>
        <div className="Header-title">putts.io</div>
        <div className="Header-action-icons">
          <button onClick={this.handleLogout}>logout</button>
        </div>
      </div>
      */
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Header));
