import "./Counter.css";
import { useState } from "react";

function Counter() {
  var [state, setState] = useState(0);
  function increaseCount() {
    setState(state + 1);
  }

  return (
    <div className="counter">
      <h2>Count Value is : {state}</h2>
      <button onClick={increaseCount}>increaseCount</button>
    </div>
  );
}

export default Counter;
