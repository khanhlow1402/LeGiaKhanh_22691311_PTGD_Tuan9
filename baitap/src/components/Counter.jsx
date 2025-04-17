import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>Giá trị hiện tại: {count}</h2>
      <div>
        <button className="btn red" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button className="btn green" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
    </div>
  );
}
