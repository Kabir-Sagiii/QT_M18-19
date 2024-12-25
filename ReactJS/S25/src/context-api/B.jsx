import React from "react";
import C from "./C";

function B() {
  return (
    <div style={{ padding: "10px", width: "600px" }}>
      <h2 style={{ color: "blue" }}>B Component</h2>
      <br />
      <hr />

      <C />
    </div>
  );
}

export default B;
