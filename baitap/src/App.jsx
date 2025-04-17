import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import TodoApp from "./components/TodoList";
import "./App.css";
import { useSelector } from "react-redux";

export default function App() {
  const [active, setActive] = useState("counter");
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={`min-h-screen px-4 py-8 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Navbar active={active} onChange={setActive} />
      {active === "counter" && <Counter />}
      {active === "todo" && <TodoApp />}
    </div>
  );
}
