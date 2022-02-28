import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Dashboard from "./Dashboard";
import TenantList from "./TenantList";
import TenantApplication from "./TenantApplication";
import ViewPdf from "./ViewPdf";

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
          path="/list"
          element={<TenantList setCurrentPage={setCurrentPage} />}
        ></Route>
        <Route
          path="/tenantApplication/:id"
          element={<TenantApplication setCurrentPage={setCurrentPage} />}
        ></Route>
        <Route
          path="/pdf"
          element={<ViewPdf setCurrentPage={setCurrentPage} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
