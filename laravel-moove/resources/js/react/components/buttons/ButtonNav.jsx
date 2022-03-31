import AppTheme from "../../assets/theme/theme";
import {Button} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import {styled, useTheme} from "@mui/system";
import {ThemeProvider} from "@emotion/react";


// Handles all buttons that appear within navigation bar.

// Custom Mui button that contains overrides depending on color prop provided on declaration.
const ButtonNav = styled(
    Button,
    {
        "shouldForwardProp": (props) => props !== "color" &&
        props !== "variant" &&
        props !== "sx" &&
        props !== "href" &&
        props !== "to" &&
        props !== "type" &&
        props !== "key",
        "name": "ButtonNav",
        "slot": "Root",
        // Colours sourced from App's main theme.
        "overridesResolver": (props, styles) => [
            styles.root,
            props.color === "ADMIN" && styles.admin,
            props.color === "LANDLORD" && styles.landlord
        ]
    }
)(({theme}) => ({
    // Default colours (Moove Yellow) if no colour provided.
    "padding": "10px 25px",
    "borderRadius": "12px !important",
    "marginRight": "5px !important",
    "fontSize": "11px !important",
    "&:hover": {
        "backgroundColor": theme.palette.primary.dark
    },
    "backgroundColor": theme.palette.primary.main
}));

const ButtonNavCustom = ({disabled, navColor, page, children}) => {

    const theme = useTheme(AppTheme);
    return (
        <ThemeProvider theme={theme}>
            <ButtonNav
                color={navColor}
                // Href={props.page.link}
                disabled={disabled}
                type={page.type}
                to={page.to}
                key={page.key}
            >
                {children}
            </ButtonNav>
        </ThemeProvider>
    );

};

ButtonNavCustom.propTypes = {
    "disabled": PropTypes.bool,
    "navColor": PropTypes.string,
    "page": PropTypes.object,
    "children": PropTypes.any
};
export default ButtonNavCustom;
