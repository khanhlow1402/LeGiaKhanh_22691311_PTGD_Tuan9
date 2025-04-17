import React, { useState } from "react";
import Counter from "./components/Counter";
import TodoApp from "./components/TodoList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./redux/themeSlice";

import "./App.css";

export default function App() {
  const [active, setActive] = useState("counter");
  const theme = useSelector((state) => state.theme); // Truy xuất theme trực tiếp từ state.theme
  const dispatch = useDispatch();

  return (
    <div
      className={
        theme === "dark"
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-gray-100 text-black min-h-screen"
      }
    >
      <div className="max-w-2xl mx-auto py-10 px-4">
        <Navbar active={active} onChange={setActive} />
        <div className="mb-4 text-center">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600"
          >
            Chuyển Theme
          </button>
        </div>
        {active === "counter" && <Counter />}
        {active === "todo" && <TodoApp />}
        {active === "cart" && <Cart />}
      </div>
    </div>
  );
}
