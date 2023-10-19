import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/landingpage";
import Login from "../pages/login";
import Employee from "../pages/employee";
import Suppliers from "../pages/suppliers";
import Products from "../pages/products";
import Sales from "../pages/sales";
import RawMaterial from "../pages/rawmaterials";
import Customers from "../pages/customers";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/rawmaterials" element={<RawMaterial />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </div>
  );
}

export default Routers;
