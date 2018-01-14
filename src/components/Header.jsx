import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class Header extends React.Component {
  state = {
    showMenu: false,
  };

  handleLogout = () => {
    localStorage.removeItem('putts.io-jwt-token');
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="Header">
        <FontAwesomeIcon icon="user-circle" size="lg" /> displayName
        <FontAwesomeIcon icon="cog" size="lg" pull="right" onClick={this.handleLogout} />
      </div>
    )
  }
}

export default compose(withRouter)(Header)
