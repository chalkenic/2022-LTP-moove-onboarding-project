/* eslint-disable no-magic-numbers */
/* eslint-disable sort-imports */
/* eslint-disable object-shorthand */
/* eslint-disable no-shadow */
/* eslint-disable no-ternary */
import {
    Button,
    Grid
} from "@mui/material";
import {Box} from "@mui/system";
import axios from "axios";
import React, {Fragment, useState} from "react";
import * as LandlordTexts from "../assets/texts/LandlordTexts";
import ContractCard from "../cards/ContractCard";
import ContractHeader from "../components/headers/ContractHeader";
import Contract from "../components/landlord/contract/Contract";


const ContractCreate = ({property, landlord}) => {


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
            <ContractHeader type="create" name={property.name} />
            <Box>
                <ContractCard setSections = {setSections} sections = {sections}/>
                <Contract sections = {sections} landlord = {landlord} property={property} />
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

ContractCreate.propTypes = {
    "property": PropTypes.shape({
        "created_at": PropTypes.string.isRequired,
        "id": PropTypes.number.isRequired,
        "user_id": PropTypes.number.isRequired,
        "name": PropTypes.string.isRequired,
        "location": PropTypes.string.isRequired,
        "status": PropTypes.string.isRequired,
        "updated_at": PropTypes.string,
        "verified": PropTypes.number.isRequired
    }),

    "landlord": PropTypes.shape({
        "id": PropTypes.number.isRequired,
        "name": PropTypes.string.isRequired,
        "role": PropTypes.string.isRequired

    })
};

export default ContractCreate;
