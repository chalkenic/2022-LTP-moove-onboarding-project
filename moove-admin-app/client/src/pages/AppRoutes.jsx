import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Dashboard from "./Dashboard";
import Test from "./Test";

// TEMPORARY ROUTING. WILL BE REMOVED UPON LARAVEL TRANSFER.
const AppRoutes = (props) => {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <BrowserRouter>
      <NavBar theme={props.theme} navigationColor="admin" />
      <Routes>
        <Route
          path="/"
          element={<Dashboard setCurrentPage={setCurrentPage} />}
        ></Route>
        <Route
          path="/test"
          element={<Test setCurrentPage={setCurrentPage} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
