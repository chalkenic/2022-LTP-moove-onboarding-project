import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Dashboard from "./Dashboard";
import TenantForm from "./TenantForm";

const AppRoutes = (props) => {
  const [currentPage, setCurrentPage] = useState("");
  return (
    <BrowserRouter>
      <NavBar currentPage={currentPage} />
      <Routes>
        <Route
          path="/"
          element={<Dashboard setCurrentPage={setCurrentPage} />}
        ></Route>
        <Route
          path="/tenantCheckForm"
          element={<TenantForm setCurrentPage={setCurrentPage} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
