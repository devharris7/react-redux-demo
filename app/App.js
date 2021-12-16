import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addOne,
  substractOne,
  addNumber,
  resetCounter as _reset,
  asyncIncrement as _asyncIncrement,
} from "./actions/counter";
import { changeGreeting } from "./actions/greeting";

const AppComponent = () => {
  const greeting = useSelector((state) => state.greeting);
  const counter = useSelector((state) => state.counter);

  const { text, name } = greeting;

  const [number, setNumber] = React.useState(0);

  const dispatch = useDispatch();

  const handleNameInputChange = (e) => {
    dispatch(changeGreeting(e.target.value));
  };

  const handleAddOne = () => {
    dispatch(addOne());
  };

  const handleAddAny = () => {
    dispatch(addNumber(Number(number)));
  };

  const handleSubstractOne = () => {
    dispatch(substractOne());
  };

  const handleReset = () => {
    dispatch(_reset());
  };

  const handleAsyncIncrement = () => {
    dispatch(_asyncIncrement());
  };

  return (
    <div className="index">
      <p>{text}</p>
      <input defaultValue={name} onChange={handleNameInputChange} />
      <p>{counter}</p>
      <button onClick={handleAddOne}>Plus 1</button>
      <input onChange={(e) => setNumber(e.target.value)} />
      <button onClick={handleAddAny}>Add Any Number</button>
      <button onClick={handleSubstractOne}>Minus 1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAsyncIncrement}>Plus 1 after 1 sec</button>
    </div>
  );
};

// Map Redux state to component props
// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     greeting: state.greeting,
//     counter: state.counter,
//   };
// };

// // Map Redux actions to component props
// const mapDispatchToProps = {
//   onChange: changeGreeting,
//   add: addOne,
//   addAnyNumber: addNumber,
//   substract: substractOne,
//   reset: _reset,
//   asyncIncrement: _asyncIncrement,
// };

export default AppComponent;
