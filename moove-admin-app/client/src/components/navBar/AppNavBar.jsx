import React from "react";
import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

const AppNavBar =
  styled(AppBar) <
  AppBarProps >
  (([theme]) => ({
    padding: "20px 40px",
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    color: "black",
    backgroundColor: "yellow",
  }));

const AppNavBarCustom = (props) => {
  return <AppNavBar>{props.children}</AppNavBar>;
};
export default AppNavBarCustom;
