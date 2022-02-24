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

    admin: {
      main: "#7a0a43",
      light: "#BD85A2",
      dark: "#240314",
    },

    tenant: { main: "#ffc618", light: "#ffd34b", dark: "#4c3f16" },
    landlord: { main: "#14FF8A", light: "#47FFA3", dark: "#04331b" },
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
    AppNavBar: {
      styleOverrides: {
        root: {
          color: "#000",
          backgroundColor: "#ffc618",
        },

        primary: {
          color: "#fff",
          backgroundColor: "#7a0a43",
        },
        secondary: { color: "#000", backgroundColor: "#14FF8A" },
      },
    },
  },
});

export default AppTheme;
