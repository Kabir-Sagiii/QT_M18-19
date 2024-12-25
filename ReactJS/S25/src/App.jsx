import "./App.css";
import Nav from "./components/nav/Nav";
import NameC from "./components/redux/NameC";
import Details from "./components/redux/Details";
import User2 from "./components/redux/User2";
function App() {
  return (
    <div>
      <Nav />
      <div className="d-flex">
        <NameC />
        <User2 />
      </div>
      {/* <Details /> */}
    </div>
  );
}

export default App;
