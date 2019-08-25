import * as types from './twitter-types';

export const setOAuthVerifier = (oAuthVerifier) => (
  {
    oAuthVerifier,
    type: types.SET_OAUTH_VERIFIER
  }
);

export const setOAuthToken = (oAuthToken) => (
  {
    oAuthToken,
    type: types.SET_OAUTH_TOKEN
  }
);
