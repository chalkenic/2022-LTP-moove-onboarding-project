import { createTheme } from "@mui/material";

// Colors used match in line with moove's theme on original MVP.
const primaryColor = "#ffc618";
const primaryLightColor = process.env.REACT_APP_SECONDARY_COLOR
  ? process.env.REACT_APP_SECONDARY_COLOR
  : "#ffd34b";

const secondaryColor = process.env.REACT_APP_SECONDARY_COLOR
  ? process.env.REACT_APP_SECONDARY_COLOR
  : "#ff87bc";

const ternaryColor = process.env.REACT_APP_TERNARY_COLOR
  ? process.env.REACT_APP_TERNARY_COLOR
  : "#cb9900";

const primaryText = process.env.REACT_APP_TEXT_PRIMARY
  ? process.env.REACT_APP_TEXT_PRIMARY
  : "#fcfcfc";

const secondaryText = process.env.REACT_APP_TEXT_SECONDARY
  ? process.env.REACT_APP_TEXT_SECONDARY
  : "#1b1b00";

const AppTheme = createTheme({
  palette: {
    text: {
      primary: primaryText,
      secondary: secondaryText,
    },

    primary: {
      main: primaryColor,
      light: primaryLightColor,
      dark: ternaryColor,
    },

    secondary: {
      main: secondaryColor,
    },
    background: {
      default: secondaryColor,
      paper: secondaryColor,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          color: primaryText,
        },
        body2: {
          color: secondaryText,
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
  },
});

export default AppTheme;
