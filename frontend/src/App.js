import UserNavBar from "./component/Navbar/UserNavbar/UserNavBar";
import './App.css';
import React from 'react';
import FoodSelection from "./component/Menu/FoodSelection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Pages/Home";
import Admin from "./component/Pages/Admin";
import TableMenuAdmin from "./component/Admin/TableMenuAdmin";
import AdminNavBar from "./component/Navbar/AdminNavbar/AdminNavBar";
import FunctionUpdateItem from "./component/FunctionAdmin/FunctionUpdateItem";
import FunctionAddItem from "./component/FunctionAdmin/FunctionAddItem";
import ValidationSignIn from "./component/Admin/ValidationSignIn"
import Contact from "./component/Pages/Contact";
import Order from "./component/Pages/Order";

function App() {

  const logIn = localStorage.getItem('logInStatus');
  return (
    
    <div className="App">
        
      <BrowserRouter >
        
        {logIn ? <AdminNavBar /> : <UserNavBar />}
        <Routes>
          <Route path="menu" element={<FoodSelection />} />
          <Route exact path="/" element={<Home />} />
          {/* <Route path="signin" element={<SignIn />} /> */}
          <Route path="admin" element={<Admin />} />
          <Route path="admin/add" element={<FunctionAddItem />} />
          <Route path="admin/menu" element={<TableMenuAdmin />} />
          <Route path="admin/menu/update/:id" element={<FunctionUpdateItem />} />
          <Route path="signin" element={<ValidationSignIn />} />
          <Route path="contact" element={<Contact />} />
          <Route path="order" element={<Order />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
