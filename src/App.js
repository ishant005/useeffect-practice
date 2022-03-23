import { React, useState } from "react";
import { CounterContext } from "./CounterContext";
import FComponent from "./FComponent";
function App() {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>context hook</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <CounterContext.Provider value={{ counter, setCounter }}>
        <FComponent />
      </CounterContext.Provider>
    </div>
  );
}
export default App;
