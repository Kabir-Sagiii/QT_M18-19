import "./Counter.css";
import { useState } from "react";
function Counter() {
  var myArray = useState("Niks"); //myArray = [state,setState]

  var countValue = 0;

  function increaseCountValue() {
    countValue = countValue + 1;
    // countValue++;
    // ++countValue;
    console.log(countValue);
  }

  return (
    <div className="counter">
      <h2>Count Value : {myArray[0]} </h2>
      <br />
      <button onClick={increaseCountValue}>incCount</button>
    </div>
  );
}

export default Counter;
