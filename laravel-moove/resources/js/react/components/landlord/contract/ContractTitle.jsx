/* eslint-disable sort-imports */
import {Grid, Typography} from "@mui/material";
import React from "react";
import * as LandlordTexts from "../../../assets/texts/LandlordTexts";
import PropTypes from "prop-types";


const ContractTitle = ({property}) => <>
    <Grid item xs={12}>
        <Typography variant="h4" textAlign="center" sx={{"fontWeight": 600,
            "textDecoration": "underline"}}>
            {LandlordTexts.LandlordAddContTexts.prevTitle}
        </Typography>
    </Grid>

    <Grid>
        <Grid item xs={12} justifyContent="center" paddingBottom = "20px">
            <Typography style={{"display": "table",
                "margin": "0 auto"}} align="center" >
                {LandlordTexts.LandlordAddContTexts.prevDisclaimer1}
            </Typography>
        </Grid>
    </Grid>
    <Grid item xs={11}>
        <Typography paragraph>
            {"The tenants known as __________________ hereby agree to rent the dwelling located at: "}

        </Typography>

        <Typography paragraph>
            <b>{` ${property.name}.`}</b>

        </Typography >

        <Typography paragraph>
            {"The premises are to be occupied by the above named tenants only. Tenant may not sublet premises."}

        </Typography>


    </Grid>
</>;


ContractTitle.propTypes = {
    "property": PropTypes.shape({
        "created_at": PropTypes.string.isRequired,
        "id": PropTypes.number.isRequired,
        "user_id": PropTypes.number.isRequired,
        "name": PropTypes.string.isRequired,
        "location": PropTypes.string.isRequired,
        "status": PropTypes.string.isRequired,
        "updated_at": PropTypes.string,
        "verified": PropTypes.number.isRequired
    })
};
export default ContractTitle;
