import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Profile extends React.Component {
  state = {};

  render() {
    const { email } = this.props;

    return (
      <div className="Profile">
        <h3>user profile</h3>
        <p>{email}</p>
      </div>
    );
  }
}

Profile.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ auth }) => ({ email: auth.user.email });
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
