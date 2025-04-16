import React, { useReducer } from "react";
import "../Counter.css";

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function CounterUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="counter">
      <h2>useReducer</h2>
      <p>{state.count}</p>
      <div>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      </div>
    </div>
  );
}
