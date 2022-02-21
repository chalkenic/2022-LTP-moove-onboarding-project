import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavDrawer from "../components/navBar/NavDrawer";
import Dashboard from "./Dashboard";

const AppRoutes = (props) => {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <BrowserRouter>
      <NavDrawer currentPage={currentPage} />
      <Routes>
        <Route
          path="/"
          element={<Dashboard setCurrentPage={setCurrentPage} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
