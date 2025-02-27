import "./styles/index.css";
const { useState } = require("react");

function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter-container">
      <h3>{counter}</h3>
      <button className="increment-button" onClick={increment}>
        Increment
      </button>
      <button className="decrement-button" onClick={decrement}>
        Decrement
      </button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter;
