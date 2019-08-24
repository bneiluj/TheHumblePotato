import React from 'react';
import logo from './potato.png';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p></p><p></p><p></p>
          <p>
            <a data-v-0d4e4b2a="" href="/target" class="btn btn-secondary btn-lg">
                LOADING
            </a>
          </p>

        </header>
      </div>
    );
  }
}

export default App;
