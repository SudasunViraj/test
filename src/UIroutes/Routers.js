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
import Orders from "../pages/orders"
import DailyOrdersSummaryReport from "../pages/dailysalesreport";
import ManagerDetailsReport from "../pages/employeedetailesreort";
import OrderDetailsReport from "../pages/orderdetailsreport";
import Report from "../pages/reports";

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
        <Route path="/orders" element={<Orders />} />
        <Route path="/dailysalesreport" element={<DailyOrdersSummaryReport />} />
        <Route path="/employeedetailsreport" element={<ManagerDetailsReport />} />
        <Route path="/orderdetailsreport" element={<OrderDetailsReport />} />
        <Route path="/reports" element={<Report />} />
      </Routes>
    </div>
  );
}

export default Routers;
