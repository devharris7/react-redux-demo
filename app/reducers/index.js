import { combineReducers } from "redux";
import { counterReducer as counter } from "./counter";
import { greetingReducer as greeting } from "./greeting";

const reducer = combineReducers({
  counter,
  greeting,
});

export default reducer;
