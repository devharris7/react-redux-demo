import { ADD, ADD_NUMBER, SUBSTRACT, RESET } from "../actionType";

const initialState = 10;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return state + 1;
    }
    case ADD_NUMBER: {
      return state + action.number;
    }
    case SUBSTRACT: {
      return state - 1;
    }
    case RESET: {
      return 0;
    }
    default:
      return state;
  }
};
