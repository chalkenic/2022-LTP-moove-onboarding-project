/* eslint-disable no-shadow */
/* eslint-disable no-ternary */
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {Box} from "@mui/system";
import React, {Fragment, useEffect, useState} from "react";
import ContractCard from "../cards/ContractCard";
import ContractHeader from "../components/headers/ContractHeader";
import ContractRow from "../components/tables/ContractRow";

const ContractCreate = (props) => {

    const [
        sections,
        setSections
    ] = useState([]);


    return (
        <Fragment>
            <ContractHeader type="create" name={props.property.name} />
            <Box>

                <ContractCard setSections = {setSections} sections = {sections}/>
                <Typography align="center" variant="h4" sx={{"paddingTop": "10px",
                    "paddingBottom": "10px"}}>Preview</Typography>

                {sections.length > 0
                    ? sections.map((section, index) => <div key = {index}><Typography>{section.title}</Typography><Typography>{section.content}</Typography></div>)
                    : <Typography align="center">Sections you add will be shown here</Typography>}


            </Box>
        </Fragment>
    );

};

export default ContractCreate;
