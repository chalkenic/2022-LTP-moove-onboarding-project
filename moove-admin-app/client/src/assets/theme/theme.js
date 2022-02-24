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

// Link to black text within theme.
const darkText = "#000";

// Tenant colours (also referenced above) that dictate how a tenant's dashboard will look.
const tenantColors = {
  main: "#ffc618",
  light: "#ffd34b",
  dark: "#4c3f16",
  darker: "#241e0b",
};

// Landlord colours that dictate how a Landlord's dashboard will look.
const landlordColors = { main: "#0B41DC", light: "#265bf4  ", dark: "#041A58" };

// Admin user colours that dictate how an Admin's dashboard will look.
const adminColors = { main: "#7a0a43", light: "#943a68", dark: "#4b0629" };

// Dictate custom theme using colours declared.
const AppTheme = createTheme({
  palette: {
    text: {
      primary: primaryText,
      secondary: secondaryText,
      dark: darkText,
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
      main: adminColors.main,
      light: adminColors.light,
      dark: adminColors.dark,
    },

    tenant: {
      main: tenantColors.main,
      light: tenantColors.light,
      dark: tenantColors.dark,
      darker: tenantColors.darker,
    },
    landlord: {
      main: landlordColors.main,
      light: landlordColors.light,
      dark: landlordColors.dark,
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
    // Custom Navigation bar given colours depending on choice made within.
    AppNavBar: {
      styleOverrides: {
        root: {
          color: primaryText,
          backgroundColor: tenantColors.main,
        },

        admin: {
          color: primaryText,
          backgroundColor: adminColors.main,
        },
        landlord: {
          color: primaryText,
          backgroundColor: landlordColors.main,
        },
      },
    },
    // Custom Buttons on Nav bar given colours depending on choice made within.
    ButtonNav: {
      styleOverrides: {
        root: {
          color: darkText,
          backgroundColor: tenantColors.light,
          border: `1px solid ` + tenantColors.light,
          "&:hover": {
            border: "1px solid #000",
            color: primaryText,
            backgroundColor: tenantColors.dark,
          },
        },

        admin: {
          color: primaryText,
          backgroundColor: adminColors.light,
          border: `1px solid ` + adminColors.light,
          "&:hover": {
            border: "1px solid #000",
            color: primaryText,
            backgroundColor: adminColors.dark,
          },
        },
        landlord: {
          color: primaryText,
          backgroundColor: landlordColors.light,
          border: `1px solid ` + landlordColors.light,

          "&:hover": {
            border: "1px solid #000",
            color: primaryText,
            backgroundColor: landlordColors.dark,
          },
        },
      },
    },
  },
});

export default AppTheme;
