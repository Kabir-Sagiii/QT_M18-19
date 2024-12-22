import "./App.css";
import Nav from "./components/nav/Nav";
import Electroics from "./components/electronics/Electroics";
import Jewelery from "./components/jewelery/Jewelery";
import Mens from "./components/mens/Mens";
import Womens from "./components/womens/Womens";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import PageNotfound from "./components/pagenotfound/PageNotfound";
import ProductDetails from "./components/productdetails/ProductDetails";
import Profile from "./components/profile/Profile";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/electronics"} element={<Electroics />} />
        <Route path={"/jewelery"} element={<Jewelery />} />
        <Route path={"/mens"} element={<Mens />} />
        <Route path={"/womens"} element={<Womens />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </div>
  );
}

export default App;
