import * as types from "../actions/example-types";

const INITIAL_STATE = {
  exampleValue: -1
};

export default function example(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_EXAMPLE_VALUE:
      return {
        ...state,
        exampleValue: action.exampleValue
      };
    default:
      return state;
  }
}
