import "./App.css";
import Electroics from "./components/electronics/Electroics";
import Jewelery from "./components/jewelery/Jewelery";
import Mens from "./components/mens/Mens";
import Womens from "./components/womens/Womens";
function App() {
  return (
    <div>
      <h2 className="text-white text-center mt-5 bg-dark p-3">
        <i class="bi bi-card-heading"></i> All Category Products Information{" "}
        <i class="bi bi-card-heading"></i>
      </h2>
      <Electroics />
      <Jewelery />
      <Mens />
      <Womens />
    </div>
  );
}

export default App;
