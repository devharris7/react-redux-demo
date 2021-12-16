import { CHANGE } from "../actionType";

export const changeGreeting = (payload) => {
  console.log("changeGreeting");
  console.log(payload);
  return {
    type: CHANGE,
    payload: payload,
  };
};
