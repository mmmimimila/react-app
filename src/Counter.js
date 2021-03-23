import React, { useState } from "react";
import PropTypes from "prop-types";

function Counter(props) {
  console.log(props);
  const [counter, setCounter] = useState(props.value);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  const isDisabledPlus = counter >= props.max;
  const isDisabledMinus = counter <= props.min;

  return (
    <span>
      <button onClick={increment} disabled={isDisabledPlus}>
        +
      </button>
      <span onChange={counter}> {counter} times </span>
      <button onClick={decrement} disabled={isDisabledMinus}>
        -
      </button>
    </span>
  );
}

// function getCounterValue(){
//   return
// }

// const counter = {
//   onChange: () =>,
// };

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func
};

Counter.defaultProps = {
  min: -10,
  max: 10,
  value: 5
  // onChange: () =>,
};

export default Counter;
