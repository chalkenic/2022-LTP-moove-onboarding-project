import React from "react";
import { capitalizeFirstLetter } from "../helpers/helper";
import { Typography } from "@mui/material";

// Header presented on main window, changes depending on user logged in.
const NavBarHeader = ({colorName}) => {
  const dashboardTitle = capitalizeFirstLetter(colorName);
  
  return (
    // Text of title differs depending on background colour used for different dashboards.
    <Typography variant="h4" color={colorName === "" | colorName === "tenant" ? "#000" : "#fff"}>
      {dashboardTitle ?? "Tenant"}
    </Typography>
  );
};
export default NavBarHeader;
