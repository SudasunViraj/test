import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import Landingpage from "../pages/landingpage";
import Login from "../pages/login";
import Employee from "../pages/employee";
import Suppliers from "../pages/suppliers";
import Products from "../pages/products";
function Routers() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Navigate to='/home'/>}/>
        <Route path="/home" element={<Landingpage />} />
        <Route path="/login"element={<Login/>}/>
        <Route path="/employee"element={<Employee/>}/>
        <Route path="/suppliers"element={<Suppliers/>}/>
        <Route path="/products"element={<Products/>}/>
        </Routes>
    </div>
  )
}

export default Routers