/* eslint-disable sort-imports */
/* eslint-disable no-ternary */
import AppTheme from "../../assets/theme/theme";
import React from "react";
import {Grid, Typography} from "@mui/material";
import PropTypes from "prop-types";
import * as LandlordTexts from "../../assets/texts/LandlordTexts";
import {useTheme} from "@mui/system";


const ContractHeader = ({type, name}) => {

    const theme = useTheme(AppTheme);
    console.log('in header: ', name);

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
                {type === "create"
                    ? `${LandlordTexts.LandlordAddContTexts.contTitle} ${name}`
                    : `${LandlordTexts.LandlordShowContTexts.contTitle} ${name}` }
            </Typography>
        </Grid>
    );

};

ContractHeader.propTypes = {
    "type": PropTypes.string,
    "name": PropTypes.string
};

export default ContractHeader;
