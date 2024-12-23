import React from "react";

function B({ data }) {
  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ color: "blue" }}>B Component</h2>
      <h6 style={{ color: "red" }}>{data}</h6>
    </div>
  );
}

export default B;
