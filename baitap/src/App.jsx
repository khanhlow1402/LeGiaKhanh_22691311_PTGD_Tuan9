import React, { useState } from "react";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [view, setView] = useState("counter");

  return (
    <div className="app">
      <Navbar active={view} onChange={setView} />
      {view === "counter" && <Counter />}
      {view === "todo" && <TodoList />}
    </div>
  );
}

export default App;
