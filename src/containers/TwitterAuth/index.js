import React from 'react';
import TwitterLogin from 'react-twitter-auth';
import { drizzleConnect } from 'drizzle-react';
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import * as twitterActions from "../../actions/twitter";
import './TwitterAuth.css';

// For obtaining the GET variables from a URL
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  // eslint-disable-next-line
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

class TwitterAuth extends React.Component {
  onSuccess = (response) => {
    const { setOAuthVerifier, setOAuthToken } = this.props;

    // Get oauth fields from the response
    const oauth_verifier = getParameterByName('oauth_verifier', response.url);
    const oauth_token = getParameterByName('oauth_token', response.url);

    // Store the oauth fields into Redux
    setOAuthVerifier(oauth_verifier);
    setOAuthToken(oauth_token);
  };

  onFailed = (error) => {
    console.error("The following error occured while ");
    console.error(error);
  };

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null})
  };

  render() {
    return (
      <div className="TwitterAuth">
        <header className="TwitterAuth-header">
          <TwitterLogin 
            loginUrl="./"
            onFailure={this.onFailed}
            onSuccess={this.onSuccess}
            requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
          />
        </header>
     </div>
    );
  }
}

TwitterAuth.contextTypes = {
  oAuthVerifier: PropTypes.string,
  oAuthToken: PropTypes.string,
  setOAuthVerifier: PropTypes.func,
  setOAuthToken: PropTypes.func
}

export default drizzleConnect(
  TwitterAuth,
  state => ({
    oAuthVerifier: state.twitter.oAuthVerifier,
    oAuthToken: state.twitter.oAuthToken
  }),
  dispatch => ({
    setOAuthVerifier: bindActionCreators(twitterActions.setOAuthVerifier, dispatch),
    setOAuthToken: bindActionCreators(twitterActions.setOAuthToken, dispatch)
  })
);
