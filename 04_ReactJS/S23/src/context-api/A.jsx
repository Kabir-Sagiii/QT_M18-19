import { useState, useRef } from "react";
import B from "./B";
import myContext from "./context";

function A() {
  const [state, setState] = useState("No Data");
  let inputRef = useRef();

  const getInputData = () => {
    //1.get or access the data from input box
    var inputDomValue = inputRef.current.value;

    //2.store that data inside the state
    setState(inputDomValue);
  };

  return (
    <div style={{ padding: "10px", width: "800px" }}>
      <h2 style={{ color: "green" }}>A Component</h2>
      <input ref={inputRef} type="text" placeholder="Enter Name" />
      <button onClick={getInputData}>Submit</button>
      <br />
      <hr />

      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;
