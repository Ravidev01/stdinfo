import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Home from "./component/home/Home";
import DataAdd from "./component/dataAdd/DataAdd";
// import Navbar from "./component/navbar/Navbar";
import Withoutnav from "./component/layout/Withoutnav";
import Withnav from "./component/layout/Withnav";
import "./App.css";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Withoutnav />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<Withnav  />}>
            <Route path="/home" element={<Home />} />
            <Route path="/dataadd" element={<DataAdd />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
