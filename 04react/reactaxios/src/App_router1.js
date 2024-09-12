import React from "react";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import HomeComp from "./components/home/HomeComp";
import AboutComp from "./components/AboutComp";
import ProductComp from "./components/ProductComp";

function App() {
  return (
    <div>
      <nav>
        <Link to={"/"}>home</Link>|
        <NavLink to={"/about"} activeClassName="active">
          about
        </NavLink>
        |<Link to={"/product"}>product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/about" element={<AboutComp />} />
        <Route path="/product/:num" element={<ProductComp />}></Route>
      </Routes>
      <footer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
        quaerat?
      </footer>
    </div>
  );
}

export default App;
