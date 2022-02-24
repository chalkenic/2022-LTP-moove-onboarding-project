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
    props.color === "admin" && styles.admin,
    props.color === "landlord" && styles.landlord,
  ],
})(({ theme }) => ({
  padding: "20px 40px",
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
  color: theme.palette.text.primary,
  sticky: "top",
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
