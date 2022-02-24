import React from "react";
import { AppBar } from "@mui/material";
import AppTheme from "../../assets/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { styled, useTheme } from "@mui/system";

const AppNavBar = styled(AppBar, {
  shouldForwardProp: (prop) =>
    prop !== "color" && prop !== "variant" && prop !== "sx",
  name: "AppNavBar",
  slot: "Root",
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "primary" && styles.primary,
    props.color === "secondary" && styles.secondary,
  ],
})(({ theme }) => ({
  padding: "20px 40px",
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
  color: "black",
  backgroundColor: theme.palette.primary.primaryColor,
}));

const AppNavBarCustom = (props) => {
  const theme = useTheme(AppTheme);
  return (
    <ThemeProvider theme={theme}>
      <AppNavBar>{props.children}</AppNavBar>
    </ThemeProvider>
  );
};
export default AppNavBarCustom;
