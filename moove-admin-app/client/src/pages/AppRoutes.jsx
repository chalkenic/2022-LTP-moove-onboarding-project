import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Dashboard from "./Dashboard";
import TenantList from './TenantList';

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
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
