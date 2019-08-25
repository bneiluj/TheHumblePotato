import React from 'react';
import './Profile.css';
import { drizzleConnect } from 'drizzle-react';
// import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import TargetCard from '../../components/TargetCard';
// import * as 3boxActions from "../../actions/3box";
import Box from '3box';

class Profile extends React.Component {
  async componentDidMount() {
    const { accounts } = this.props;

    if (accounts.length === 0) {
      throw new Error("No Ethereum web3 account found!");
    }

    const profile = await Box.getProfile(accounts[0]);
    console.log(profile);
  }
  render() {
    let target = {
      'name': 'Emin Gün Sirer',
      'followers': '75,823',
      'pot': '5,495',
      'number': '18'
    };

    return (
      <div className="Profile">
        <div>
          <TargetCard target={target} />
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  accounts: PropTypes.object,
  // setOAuthVerifier: PropTypes.func
}

export default drizzleConnect(
  Profile,
  state => ({
    accounts: state.accounts
  }),
  // dispatch => ({
  //   setOAuthVerifier: bindActionCreators(twitterActions.setOAuthVerifier, dispatch)
  // })
);
