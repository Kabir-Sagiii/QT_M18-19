import { useContext } from "react";
import myContext from "./context";
function D() {
  var contextData = useContext(myContext);
  return (
    <div style={{ width: "300px", padding: "10px" }}>
      <h2>D Component</h2>
      <p>{contextData}</p>
    </div>
  );
}

export default D;
