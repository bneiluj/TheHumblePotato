import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Start from '../Start';
import Target from '../Target';
import TwitterAuth from '../TwitterAuth';
import Pay from '../Pay';

import './App.css';

class App extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Route exact path="/" component={Start} history={history} />
            <Route path="/target" component={Target} />
            <Route path="/twitter-auth" component={TwitterAuth} />
            <Route path="/pay" component={Pay} />
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
