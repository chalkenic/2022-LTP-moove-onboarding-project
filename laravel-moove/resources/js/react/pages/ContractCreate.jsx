/* eslint-disable object-shorthand */
/* eslint-disable no-shadow */
/* eslint-disable no-ternary */
import {
    Button,
    Card,
    CardContent,
    DialogContent,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Box} from "@mui/system";
import axios from "axios";
import React, {Fragment, useEffect, useState} from "react";
import * as LandlordTexts from "../assets/texts/LandlordTexts";
import AppTheme from "../assets/theme/theme";
import ContractCard from "../cards/ContractCard";
import ContractHeader from "../components/headers/ContractHeader";
import Contract from "../components/landlord/contract/Contract";
import ContractRow from "../components/tables/ContractRow";

const useStyles = makeStyles(() => ({
    "titleText": {
        "fontFamily": "sans-serif",
        "paddingBottom": "5 !important",
        "align": "center"
    },

    "headerText": {
        "paddingTop": "8px !important",
        "fontWeight": "600 !important",
        "fontSize": 22,
        "color": `${AppTheme.palette.landlord.dark} !important`
    },
    "dividerLight": {
        "borderBottom": "1px solid #808080 !important",
        "padding": "0 !important",
        "marginLeft": "5%",
        "marginRight": "5%"
    }

}));

const ContractCreate = (props) => {

    const styles = useStyles();

    const {property} = props;

    const [
        sections,
        setSections
    ] = useState([]);

    const handleCreate = () => {

        const contractSuccess = "contract";


        axios.post(
            "/create-contract",
            {
                "property_id": property.id,
                "property_name": property.name,
                "sections": sections

            }
        ).then(window.location.href = `/properties?success=${contractSuccess}`);

    };

    const handleReset = () => {

        setSections([]);

    };

    return (
        <Fragment>
            <ContractHeader type="create" name={props.property.name} />
            <Box>
                <ContractCard setSections = {setSections} sections = {sections}/>
                <Contract sections = {sections} landlord = {props.landlord} property={props.property} />
            </Box>
            {sections.length > 0
                ? <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box textAlign="center" padding={(2, 2, 2, 2)}>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleCreate}
                                size="large"
                            >
                                {
                                    LandlordTexts.LandlordAddContTexts.
                                        prevAddContractBtn
                                }
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box textAlign="center" padding={(2, 2, 2, 2)}>
                            <Button
                                variant="contained"
                                color="warning"
                                onClick={handleReset}
                                size="large"
                            >
                                {
                                    LandlordTexts.LandlordAddContTexts.
                                        prevResetContractBtn
                                }
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                : <></>}
        </Fragment>
    );

};

export default ContractCreate;
