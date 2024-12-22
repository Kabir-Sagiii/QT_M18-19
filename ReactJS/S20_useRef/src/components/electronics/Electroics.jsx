import "./Electronics.css";
import Products from "../products/Products";
function Electroics() {
  return (
    <div id="electronics">
      <Products url={"http://localhost:3000/electronics"} />
    </div>
  );
}

export default Electroics;
