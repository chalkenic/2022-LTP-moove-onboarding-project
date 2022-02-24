import React from "react";
import { Button } from "@mui/material";
import AppTheme from "../../assets/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { styled, useTheme } from "@mui/system";

const ButtonNav = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== "color" && prop !== "variant" && prop !== "sx",
  name: "ButtonNav",
  slot: "Root",
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "admin" && styles.admin,
    props.color === "landlord" && styles.landlord,
  ],
})(({ theme }) => ({
  padding: "10px 25px",
  borderRadius: "12px !important",
  marginRight: "5px !important",
  fontSize: "11px !important",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  backgroundColor: theme.palette.primary.main,
}));

const ButtonNavCustom = (props) => {
  const theme = useTheme(AppTheme);
  return (
    <ThemeProvider theme={theme}>
      <ButtonNav color={props.navColor}>{props.children}</ButtonNav>
    </ThemeProvider>
  );
};
export default ButtonNavCustom;
