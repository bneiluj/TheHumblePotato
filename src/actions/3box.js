import * as types from './3box-types';

export const setProfile = (profile) => (
  {
    profile,
    type: types.SET_PROFILE
  }
);
