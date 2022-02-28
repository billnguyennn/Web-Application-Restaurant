import Navbar from "./component/Navbar/Navbar";
import './App.css';
import React from 'react';
import FoodSelection from "./component/Menu/FoodSelection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Pages/Home";
import SignIn from "./component/Admin/SignIn";
import Admin from "./component/Pages/Admin";
import FunctionAddItem from "./component/FunctionAdmin/FunctionAddItem";
import TableMenuAdmin from "./component/Admin/TableMenuAdmin";


function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="menu" element={<FoodSelection />} />
        <Route exact path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="admin" element={<Admin />} />
        <Route path="admin/add" element={<FunctionAddItem />} />
        <Route path="admin/menu" element={<TableMenuAdmin />} />
      </Routes>
    </BrowserRouter>

    </div>

  );
}

export default App;
