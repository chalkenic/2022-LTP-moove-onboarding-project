import React from "react";
import { AppBar } from "@mui/material";
import AppTheme from "../../assets/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { styled, useTheme } from "@mui/system";

// handles all navigation bar layouts for users.
const AppNavBar = styled(AppBar, {
  shouldForwardProp: (prop) =>
    prop !== "color" && prop !== "variant" && prop !== "sx",
  name: "AppNavBar",
  slot: "Root",
  // Colours sourced from App's main theme.
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "admin" && styles.admin,
    props.color === "landlord" && styles.landlord,
  ],
})(({ theme }) => ({
  //Default colours from Moove used if none provided within declaration.
  padding: "20px 40px",
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.primary.main,
}));

const AppNavBarCustom = (props) => {
  const theme = useTheme(AppTheme);
  return (
    <ThemeProvider theme={theme}>
      <AppNavBar color={props.navColor}>{props.children}</AppNavBar>
    </ThemeProvider>
  );
};
export default AppNavBarCustom;
