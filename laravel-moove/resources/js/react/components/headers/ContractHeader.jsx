/* eslint-disable sort-imports */
/* eslint-disable no-ternary */
import AppTheme from "../../assets/theme/theme";
import React, {Fragment} from "react";
import {Grid, Link, Typography} from "@mui/material";
import PropTypes from "prop-types";
import * as LandlordTexts from "../../assets/texts/LandlordTexts";
import {useTheme} from "@mui/system";

const ContractHeader = ({type, name}) => {

    const theme = useTheme(AppTheme);
    console.log(
        "in header: ",
        name
    );

    return (
        <Grid
            item
            container
            xs={12}
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ paddingBottom: 3}}
            
        >
            <Typography
                color={theme.palette.text.dark}
                sx={{"fontWeight": 800}}
                textAlign="center"
                variant="h4"
            >
                {type === "create"
                    ? `${LandlordTexts.LandlordAddContTexts.contTitle} ${name}`
                    : `${LandlordTexts.LandlordShowContTexts.contTitle} ${name}`}
            </Typography>
            <Grid item xs={12} sx={{paddingTop: 3}} align="center">
                {type === "create"
                    ? <Fragment>
                        <Typography>
                            {LandlordTexts.LandlordAddContTexts.contDesc1}
                        </Typography>
                        <Typography>
                            {LandlordTexts.LandlordAddContTexts.contDesc2}
                            <a href="rgrdg" style={{"color": "red"}}>here</a>
                        </Typography>
                    </Fragment>

                    : `${LandlordTexts.LandlordShowContTexts.contDesc1}`
                }
            </Grid>
        </Grid>
    );

};

ContractHeader.propTypes = {
    "type": PropTypes.string,
    "name": PropTypes.string
};

export default ContractHeader;
