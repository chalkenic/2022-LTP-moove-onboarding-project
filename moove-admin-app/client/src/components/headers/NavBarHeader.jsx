import React from "react";
import { capitalizeFirstLetter } from "../helpers/helper";
import AppTheme from "../../assets/theme/theme";
import { ThemeProvider, useTheme } from "@mui/system";
import { Typography } from "@mui/material";

const NavBarHeader = (props) => {
  const theme = useTheme(AppTheme);
  const dashboardTitle = capitalizeFirstLetter(props.name);

  return (
    <Typography variant="h4" color={props.name === "" ? "#000" : "#fff"}>
      {dashboardTitle ? dashboardTitle : "Tenant"} Dashboard
    </Typography>
  );
};
export default NavBarHeader;
