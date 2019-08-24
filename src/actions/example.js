import * as types from './example-types';

export const setExampleValue = (exampleValue) => (
  {
    exampleValue,
    type: types.SET_EXAMPLE_VALUE
  }
);
