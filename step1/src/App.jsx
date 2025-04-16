import React from "react";
import CounterUseReducer from "./components/CounterUseReducer";
import CounterRedux from "./components/CounterRedux";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="counters">
        <CounterUseReducer />
        <CounterRedux />
      </div>
    </div>
  );
}

export default App;
