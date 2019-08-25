import * as types from "../actions/twitter-types";

const INITIAL_STATE = {
  oAuthVerifier: '',
  oAuthToken: ''
};

export default function twitter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_OAUTH_VERIFIER:
      return {
        ...state,
        oAuthVerifier: action.oAuthVerifier
      };
    case types.SET_OAUTH_TOKEN:
      return {
        ...state,
        oAuthToken: action.oAuthToken
      };
    default:
      return state;
  }
}
