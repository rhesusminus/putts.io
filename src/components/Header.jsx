import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth-actions';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import '../css/Header.css';

const styles = {
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends React.Component {
  state = {
    anchorEl: null
  };

  handleLogout = () => {
    localStorage.removeItem('putts.io-jwt-token');
    this.props.history.push('/');
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleProfileClick = () => {
    this.setState({ anchorEl: null });
    this.props.history.push('/dashboard/profile');
  };

  render() {
    const { classes, logoutUser } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <header>
        <AppBar>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography
              type="title"
              color="inherit"
              className={classes.flex}
              onClick={() => this.props.history.push('/dashboard')}
            >
              putts.io
            </Typography>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleProfileClick}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                <MenuItem onClick={logoutUser}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({ isAuthenticated: auth.isAuthenticated });
const mapDispatchToProps = dispatch => bindActionCreators({ logoutUser }, dispatch);

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Header)));
