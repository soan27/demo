import React, { useReducer } from "react";

// init state
const initCount = 0;

// action
const UP_ACTION = "UP";
const DOWN_ACTION = "DOWN";

//reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid Action");
  }
};
function CountDown() {
  const [count, dispatch] = useReducer(reducer, initCount);
  return (
    <div>
      <h1>useReducer</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
}

export default CountDown;
