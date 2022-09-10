import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Home from "./component/home/Home";
import DataAdd from "./component/dataAdd/DataAdd";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/dataadd" element={<DataAdd/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
