import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";
import Product from "./Components/Product";

const App = () => {
  return (
    <>
      <nav className=" flex items-center justify-center gap-10 mt-10 ">
        <Link to="/">Home </Link>
        <Link to="/user">User </Link>
        <Link to="/products">Products </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
