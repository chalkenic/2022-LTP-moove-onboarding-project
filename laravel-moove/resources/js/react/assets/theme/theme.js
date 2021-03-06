import {createTheme} from "@mui/material";

// Colors used match in line with moove's theme on original MVP.
const primaryColor = "#ffc618",
    primaryLightColor = "#ffd34b",
    secondaryColor = "#ff87bc",
    ternaryColor = "#cb9900",
    primaryText = "#fcfcfc",
    secondaryText = "#1b1b00",
    // Link to black text within theme.
    darkText = "#000",
    // Tenant colours (also referenced above) that dictate how a tenant's dashboard will look.
    tenantColors = {
        "main": "#ffc618",
        "light": "#ffd34b",
        "dark": "#4c3f16",
        "darker": "#241e0b"
    },
    // Landlord colours that dictate how a Landlord's dashboard will look.
    landlordColors = {"main": "#0B41DC",
        "light": "#265bf4  ",
        "dark": "#041A58"},
    // Admin user colours that dictate how an Admin's dashboard will look.
    adminColors = {"main": "#7a0a43",
        "light": "#943a68",
        "dark": "#4b0629"},
    logoutColors = {"light": "#fff",
        "dark": "#000"},
    // Dictate custom theme using colours declared.
    AppTheme = createTheme({
        "typography": {
            "fontFamily": [
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol"
            ].join(",")
        },
        "palette": {
            "text": {
                "primary": primaryText,
                "secondary": secondaryText,
                "dark": darkText
            },

            "primary": {
                "main": primaryColor,
                "light": primaryLightColor,
                "dark": ternaryColor
            },

            "secondary": {
                "main": secondaryColor
            },
            "background": {
                "default": secondaryColor,
                "paper": secondaryColor
            },

            "admin": {
                "main": adminColors.main,
                "light": adminColors.light,
                "dark": adminColors.dark
            },

            "tenant": {
                "main": tenantColors.main,
                "light": tenantColors.light,
                "dark": tenantColors.dark,
                "darker": tenantColors.darker
            },
            "landlord": {
                "main": landlordColors.main,
                "light": landlordColors.light,
                "dark": landlordColors.dark
            },
            "logout": {
                "light": logoutColors.light,
                "dark": logoutColors.dark
            }
        },
        "components": {
            "MuiTypography": {
                "styleOverrides": {
                    "body1": {
                        "color": primaryText
                    },
                    "body2": {
                        "color": secondaryText
                    }
                }
            },
            "MuiGrid": {
                "styleOverrides": {
                    "root": {
                        "marginLeft": 0
                    }
                }
            },
            // Custom Navigation bar given colours depending on choice made within.
            "AppNavBar": {
                "styleOverrides": {
                    "root": {
                        "color": primaryText,
                        "backgroundColor": tenantColors.main
                    },

                    "admin": {
                        "color": primaryText,
                        "backgroundColor": adminColors.main
                    },
                    "landlord": {
                        "color": primaryText,
                        "backgroundColor": landlordColors.main
                    }
                }
            },
            // Custom Buttons on Nav bar given colours depending on choice made within.
            "ButtonNav": {
                "styleOverrides": {
                    "root": {
                        "color": darkText,
                        "backgroundColor": tenantColors.light,
                        "border": `1px solid ${tenantColors.light}`,
                        "&:hover": {
                            "border": "1px solid #000",
                            "color": primaryText,
                            "backgroundColor": tenantColors.dark
                        }
                    },

                    "admin": {
                        "color": primaryText,
                        "backgroundColor": adminColors.light,
                        "border": `1px solid ${adminColors.light}`,
                        "&:hover": {
                            "border": "1px solid #000",
                            "color": primaryText,
                            "backgroundColor": adminColors.dark
                        }
                    },
                    "landlord": {
                        "color": primaryText,
                        "backgroundColor": landlordColors.light,
                        "border": `1px solid ${landlordColors.light}`,

                        "&:hover": {
                            "border": "1px solid #000",
                            "color": primaryText,
                            "backgroundColor": landlordColors.dark
                        }
                    }
                }
            }
        }
    });

export default AppTheme;
