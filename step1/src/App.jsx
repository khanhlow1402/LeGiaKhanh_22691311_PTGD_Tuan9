import React from "react";
import CounterUseReducer from "./components/CounterUseReducer";
import CounterRedux from "./components/CounterRedux";
import CounterToolkit from "./components/CounterToolKit";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="counters">
        <CounterUseReducer />
        <CounterRedux />
        <CounterToolkit />
      </div>
    </div>
  );
}

export default App;
