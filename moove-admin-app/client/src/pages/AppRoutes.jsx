import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import NavDrawer from "../components/navBar/NavDrawer";
import Dashboard from "./Dashboard";

const AppRoutes = (props) => {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <BrowserRouter>
      <NavBar theme={props.theme} />
      {/* <NavDrawer currentPage={currentPage} /> */}
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
