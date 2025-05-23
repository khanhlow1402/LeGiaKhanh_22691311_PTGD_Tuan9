import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterActions";
import "../Counter.css";

export default function CounterRedux() {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>Redux</h2>
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
