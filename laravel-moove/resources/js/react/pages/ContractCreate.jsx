/* eslint-disable no-shadow */
/* eslint-disable no-ternary */
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {Box} from "@mui/system";
import React, {Fragment, useState} from "react";
import ContractCard from "../cards/ContractCard";
import ContractHeader from "../components/headers/ContractHeader";
import ContractRow from "../components/tables/ContractRow";

const ContractCreate = (props) => {

    const [
        sections,
        setSections
    ] = useState([]);

    if (sections.length < 1) {

        setSections({
            "title": "",
            "content": ""
        });

    }

    return (
        <Fragment>
            <ContractHeader type="create" name={props.property.name} />
            <Box>

                <ContractCard />
            </Box>
        </Fragment>
    );

};

export default ContractCreate;
