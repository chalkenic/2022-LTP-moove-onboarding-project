import React from "react";
import { Button } from "@mui/material";
import AppTheme from "../../assets/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { styled, useTheme } from "@mui/system";

const ButtonNav = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== "color" && prop !== "variant" && prop !== "sx",
  name: "ButtonNavCustom",
  slot: "Root",
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "primary" && styles.primary,
    props.color === "secondary" && styles.secondary,
  ],
})(({ theme }) => ({
  padding: "10px 25px",
  borderRadius: "12px !important",
  marginRight: "5px !important",
  fontSize: "11px !important",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.dark,
  },
  backgroundColor: theme.palette.primary.main,
}));

const ButtonNavCustom = (props) => {
  const theme = useTheme(AppTheme);
  return (
    <ThemeProvider theme={theme}>
      <ButtonNav>{props.children}</ButtonNav>
    </ThemeProvider>
  );
};
export default ButtonNavCustom;
