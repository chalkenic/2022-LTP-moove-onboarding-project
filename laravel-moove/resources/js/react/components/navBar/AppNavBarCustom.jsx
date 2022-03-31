/* eslint-disable sort-imports */
import React from "react";
import {AppBar} from "@mui/material";
import AppTheme from "../../assets/theme/theme";
import {ThemeProvider} from "@emotion/react";
import {styled, useTheme} from "@mui/system";
import PropTypes from "prop-types";

// Handles all navigation bar layouts for users.
const AppNavBar = styled(
    AppBar,
    {
        "shouldForwardProp": (prop) => prop !== "color" && prop !== "variant" && prop !== "sx",
        "name": "AppNavBar",
        "slot": "Root",
        // Colours sourced from App's main theme.
        "overridesResolver": (props, styles) => [
            styles.root,
            props.color === "ADMIN" && styles.admin,
            props.color === "LANDLORD" && styles.landlord
        ]
    }
)(({theme}) => ({
    // Default colours from Moove used if none provided within declaration.
    "padding": "20px 40px",
    "display": "flex",
    "alignContent": "center",
    "justifyContent": "space-between",
    "color": theme.palette.text.primary,
    "backgroundColor": theme.palette.primary.main
}));

const AppNavBarCustom = ({navColor, children}) => {

    const theme = useTheme(AppTheme);
    return (
        <ThemeProvider theme={theme}>
            <AppNavBar color={navColor} position="relative">{children}</AppNavBar>
        </ThemeProvider>
    );

};

AppNavBarCustom.propTypes = {
    "navColor": PropTypes.string,
    "children": PropTypes.any
};
export default AppNavBarCustom;
