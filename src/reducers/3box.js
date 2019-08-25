import * as types from "../actions/3box-types";

const INITIAL_STATE = {
  profile: {}
};

export default function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
}
