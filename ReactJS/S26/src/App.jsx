import "./App.css";
import { lazy, Suspense } from "react";
import Nav from "./components/nav/Nav";
// import Electroics from "./components/electronics/Electroics";
// import Jewelery from "./components/jewelery/Jewelery";
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
import UseRef from "./concepts/UseRef";
import DOMRef from "./concepts/DOMRef";
import Loading from "./components/loading/Loading";
import Cart from "./components/add-to-cart/Cart";
const Electronics = lazy(() => {
  return import("./components/electronics/Electroics");
});

const Jewelery = lazy(() => {
  return import("./components/jewelery/Jewelery");
});

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/electronics"}
          element={
            <Suspense fallback={<Loading />}>
              <Electronics />
            </Suspense>
          }
        />
        <Route
          path={"/jewelery"}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Jewelery />
            </Suspense>
          }
        />
        <Route path={"/mens"} element={<Mens />} />
        <Route path={"/womens"} element={<Womens />} />

        <Route path={"/profile"} element={<Profile />}>
          <Route path="cart" element={<Cart />} />
          <Route
            path={"useref"}
            element={
              <div>
                <UseRef />
                <DOMRef />
              </div>
            }
          />

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
