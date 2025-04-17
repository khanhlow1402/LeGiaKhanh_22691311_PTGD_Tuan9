import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";
import "../Counter.css";

export default function CounterToolkit() {
  const count = useSelector((state) => state.toolkitCount.count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>Redux Toolkit</h2>
      <p>{count}</p>
      <div>
        <button className="btn-red" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button className="btn-green" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
    </div>
  );
}
