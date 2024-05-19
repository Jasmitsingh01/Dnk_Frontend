import React from "react";

import { Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Login,
  Singup,
  Cart,
  Productpage,
  SingleProduct,
  Order,
} from "./Pages/user/index";
import Layout from "./layout/UserLayout";
import {
  AddProduct,
  AllProducts,
  Dashbord,
  Invoice,
  Orderhistory,
} from "./Pages/Admin";
import { Profile } from "./Pages/Profile";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="/store/:id" element={<Productpage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/admin" element={<Dashbord />} />
        <Route path="/admin/signin" element={<Login />} />
        <Route path="/admin/singup" element={<Singup />} />
        <Route path="/admin/addProduct" element={<AddProduct />} />
        <Route path="/admin/allProduct" element={<AllProducts />} />
        <Route path="/admin/invoice" element={<Invoice />} />
        <Route path="/admin/allorder" element={<Orderhistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
export default App;
