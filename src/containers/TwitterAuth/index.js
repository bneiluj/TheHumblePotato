import React from 'react';
import TwitterLogin from 'react-twitter-auth';
import './TwitterAuth.css';

class TwitterAuth extends React.Component {
  constructor() {
    super();

    this.state = { isAuthenticated: false, user: null, token: ''};
  }

  onSuccess = (response) => {
    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      if (token) {
        this.setState({isAuthenticated: true, user: user, token: token});
      }
    });
  };

  onFailed = (error) => {
    alert(error);
  };

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null})
  };

  render() {
    return (
      <div className="TwitterAuth">
        <header className="TwitterAuth-header">
          <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                        onFailure={this.onFailed} onSuccess={this.onSuccess}
                        requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>
        </header>
     </div>
    );
  }
}

export default TwitterAuth;
