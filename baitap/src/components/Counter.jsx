import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="counter bg-white p-6 rounded-lg shadow text-center max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-blue-600 mb-4">
        Giá trị hiện tại: {count}
      </h2>
      <div className="flex justify-center gap-4">
        <button
          className="btn red bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="btn green bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
