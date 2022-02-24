import React from "react";
import { capitalizeFirstLetter } from "../helpers/helper";
import { Typography } from "@mui/material";

// Header presented on main window, changes depending on user logged in.
const NavBarHeader = (props) => {
  const dashboardTitle = capitalizeFirstLetter(props.name);

  return (
    // Text of title differs depending on background colour used for different dashboards.
    <Typography variant="h4" color={props.name === "" ? "#000" : "#fff"}>
      {dashboardTitle ? dashboardTitle : "Tenant"} Dashboard
    </Typography>
  );
};
export default NavBarHeader;
