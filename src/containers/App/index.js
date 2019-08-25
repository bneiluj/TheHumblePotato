import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Box from '3box';
import PropTypes from 'prop-types';
import { drizzleConnect } from 'drizzle-react';

import Start from '../Start';
import Target from '../Target';
import TwitterAuth from '../TwitterAuth';
import Pay from '../Pay';
import Profile from '../Profile';

import './App.css';

class App extends React.Component {
  async componentDidMount() {
    const { accounts } = this.props;

    if (accounts.length === 0) {
      throw new Error("No Ethereum web3 account found!");
    }

    console.log(accounts);
    const box = await Box.openBox(accounts[0], this.context.drizzle.web3);
    // console.log(box);
  }
  render() {
    const { history } = this.props;

    return (
      <div className="App">
        <Router>
          <nav className="App-header">
            <div className="col-md-6">
              <div className="nav-title">
               <a href="/target"><span className="h1-box">The Humble Potato</span></a>
              </div>
            </div>
            <div className="col-md-6 nav-links">
              <Link to="/target">Home</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/pay">Join</Link>
            </div>
          </nav>
          <main className="App-main">
            <Route exact path="/" component={Start} history={history} />
            <Route path="/target" component={Target} />
            <Route path="/twitter-auth" component={TwitterAuth} />
            <Route path="/pay" component={Pay} />
            <Route path="/profile" component={Profile} />
          </main>
        </Router>
      </div>
    );
  }
}

App.contextTypes = {
  drizzle: PropTypes.object
}

export default drizzleConnect(
  App,
  state => ({
    accounts: state.accounts
  })
);
