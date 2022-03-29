/* eslint-disable sort-imports */
/* eslint-disable no-ternary */
import React from "react";
import AppTheme from "../../assets/theme/theme";
import {useTheme} from "@mui/system";
import {Grid, Typography} from "@mui/material";
import * as LandlordTexts from "../../assets/texts/LandlordTexts";
import * as AdminTexts from "../../assets/texts/AdminTexts";
import PropTypes from "prop-types";

const PropetiesHeader = ({role}) => {

    const theme = useTheme(AppTheme);

    return (
        <Grid
            item
            xs={12}
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Typography
                color={theme.palette.text.dark}
                sx={{"fontWeight": 800}}
                textAlign="center"
                variant="h4"
            >
                {role === "landlord"
                    ? LandlordTexts.LandlordPropsLandingTitle.title
                    : AdminTexts.AdminPropsLandingTitle.title}
            </Typography>
        </Grid>
    );

};

PropetiesHeader.propTypes = {
    "role": PropTypes.string
};

export default PropetiesHeader;
