import { CHANGE } from "../actionType";

const initialState = {
  name: "",
  text: "Hello World",
};

export const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        name: action.payload,
        text: "Hello " + action.payload,
      };
    default:
      return state;
  }
};
