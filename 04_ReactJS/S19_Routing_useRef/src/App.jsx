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
import Orders from "./components/orders/Order";
import ChangePassword from "./components/changepassword/ChangePassword";
import Wishlist from "./components/wishlist/WishList";
import Help from "./components/help/Help";
import PersonalDetails from "./components/personaldetails/PersonalDetails";
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

        <Route path={"/profile"} element={<Profile />}>
          <Route path="details" element={<PersonalDetails />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="changepassword" element={<ChangePassword />} />
          <Route path="help" element={<Help />} />
        </Route>

        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </div>
  );
}

export default App;
