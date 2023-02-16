import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-slate-800	text-slate-300">
      <h1 className="text-5xl font-bold mb-10">Welcome to the Counter App</h1>
      <h4 className="text-4xl">
        The Counter is{" "}
        <span className="border border-slate-100 pt-3 pb-3 pl-6 pr-6">{counter}</span>
      </h4>
      <div className="flex text-5xl mt-10">
        <button onClick={decrement} className="p-7 border border-slate-100">
          -
        </button>
        <button onClick={increment} className="p-5 border border-slate-100">
          +
        </button>
      </div>
    </div>
  );
}

export default App;
