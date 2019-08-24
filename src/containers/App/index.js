import React from 'react';
import logo from './logo.svg';
import TwitterLogin from 'react-twitter-auth';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <TwitterLogin
            loginUrl="https://api.twitter.com/oauth/"
            onFailure={console.log}
            onSuccess={console.log}
            requestTokenUrl="http://127.0.0.1:8080/login"
            credentials="include"
            customHeaders={{
              // "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Origin": "http://127.0.0.1:8080",
              "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
              // "Access-Control-Expose-Headers": "X-My-Custom-Header",
              'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS'
            }}
          />
        </header>
      </div>
    );
  }
}

export default App;
