import React from 'react';
import '../css/GoogleLoginButton.css';

class GoogleLoginButton extends React.Component {
  handleSuccess = user => {
    console.log('user:', user);
  };

  handleFailure = () => {};

  componentDidMount() {
    /*
    window.gapi.load('auth2', () => {
      this.setState({ disabled: false });
      if (!window.gapi.auth2.getAuthInstance()) {
        window.gapi.auth2.init({
          clientId: process.env.REACT_APP_GOOGLE_APP_ID,
          // https://developers.google.com/people/v1/how-tos/authorizing
          scope: 'profile email'
        })
        .then(res => {
        })
      }
    });
    */
    window.gapi.signin2.render('google-signin', {
      scope: 'profile email',
      width: this.googleLogin.offsetWidth,
      height: 40,
      longtitle: true,
      theme: 'dark',
      onsuccess: this.handleSuccess,
      onfailure: this.handleFailure,
    });
  }

  render() {
    return (
      <div className="GoogleLoginButton" ref={div => (this.googleLogin = div)}>
        <div id="google-signin" />
      </div>
    );
  }
}

export default GoogleLoginButton;
