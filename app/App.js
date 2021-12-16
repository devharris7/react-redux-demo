import React from "react";
import { connect, useSelector } from "react-redux";
import {
  addOne,
  substractOne,
  addNumber,
  resetCounter as _reset,
  asyncIncrement as _asyncIncrement,
} from "./actions/counter";
import { changeGreeting } from "./actions/greeting";

const AppComponent = ({
  greeting,
  counter,
  onChange,
  add,
  addAnyNumber,
  substract,
  reset,
  asyncIncrement,
}) => {
  // useSelector((state) => {
  //   console.log(state);
  //   return state.greeting;
  // });

  const { text, name } = greeting;
  // const [greeting, setGreeting] = useState({ text: "", name: "" });
  const [number, setNumber] = React.useState(0);
  console.log(number);

  return (
    <div className="index">
      <p>{text}</p>
      <input defaultValue={name} onChange={onChange} />
      <p>{counter}</p>
      <button onClick={add}>Plus 1</button>
      <input onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => addAnyNumber(Number(number))}>
        Add Any Number
      </button>
      <button onClick={substract}>Minus 1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={asyncIncrement}>Plus 1 after 1 sec</button>
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => {
  console.log(state);
  return {
    greeting: state.greeting,
    counter: state.counter,
  };
};

// Map Redux actions to component props
const mapDispatchToProps = {
  onChange: changeGreeting,
  add: addOne,
  addAnyNumber: addNumber,
  substract: substractOne,
  reset: _reset,
  asyncIncrement: _asyncIncrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
