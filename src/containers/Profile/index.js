import React from 'react';
import './Profile.css';
import { drizzleConnect } from 'drizzle-react';
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import PersonCard from '../../components/PersonCard';
import * as treeBoxActions from "../../actions/3box";
import Box from '3box';
import potato from './potato.png';

class Profile extends React.Component {
  async componentDidMount() {
    const { accounts, setProfile } = this.props;

    if (accounts.length === 0) {
      throw new Error("No Ethereum web3 account found!");
    }

    const profile = await Box.getProfile(accounts[0]);
    setProfile(profile);
  }
  render() {
    const { profile } = this.props;

    let person = {
      'name': profile.name,
      'description': profile.description,
      'location': profile.location,
      'twitter': !!profile.proof_twitter,
      'email': !!profile.proof_email,
      'github': !!profile.proof_github,
      'eth': !!profile.proof_did,
      'picture': (profile.image && profile.image.length > 0) ? ('https://ipfs.infura.io/ipfs/' + profile.image[0].contentUrl["/"]) : potato
    };

    return (
      <div className="Profile">
        <div>
          <PersonCard person={person} />
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
    accounts: state.accounts,
    profile: state.threeBox.profile
  }),
  dispatch => ({
    setProfile: bindActionCreators(treeBoxActions.setProfile, dispatch)
  })
);
