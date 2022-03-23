import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import PropertiesHeader from "../components/headers/PropertiesHeader";
import React, { Fragment, useState } from "react";

import PropertyRow from "../components/tables/PropertyRow";
import { ViewAgenda } from "@mui/icons-material";
import styled from "@emotion/styled";

const AdminProperties = ({ properties, tenancies }) => {
    console.log("2: ", properties);
    console.log("2: ", tenancies);
    // Source all tenants relating to property on modal open.

    // const handleOpen = (property) => {
    //     setProperty(property);
    //     let propUrl = `/tenants/${property.id}`;
    //     axios.get(propUrl).then((res) => {
    //         setTenants(res.data.tenants);
    //     });
    //     setOpen(true);
    // };

    // Reset states when closing modal.

    // const StyledTableCell = styled(TableCell)(({ theme }) => ({
    //     [`&.${tableCellClasses.head}`]: {
    //         backgroundColor: theme.palette.common.black,
    //         color: theme.palette.common.white,
    //     },
    //     [`&.${tableCellClasses.body}`]: {
    //         fontSize: 14,
    //     },
    // }));

    // const StyledTableRow = styled(TableRow)(({ theme }) => ({
    //     "&:nth-of-type(odd)": {
    //         backgroundColor: theme.palette.action.hover,
    //     },
    //     // hide last border
    //     "&:last-child td, &:last-child th": {
    //         border: 0,
    //     },
    // }));

    return (
        <Fragment>
            <PropertiesHeader role="admin" />
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                ID
                            </TableCell>
                            <TableCell align="right">Property</TableCell>
                            <TableCell align="right">landlord</TableCell>
                            <TableCell align="right">Location</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {properties.map((row, index) => {
                            return (
                                <PropertyRow
                                    key={index}
                                    property={row}
                                    tenants={tenancies}
                                />

                                // <TableRow
                                //     key={index}
                                //     sx={{
                                //         "&:last-child td, &:last-child th": {
                                //             border: 0,
                                //         },
                                //     }}
                                // >
                                //     <TableCell component="th" scope="row">
                                //         {row.id}
                                //     </TableCell>
                                //     <TableCell align="right">
                                //         {row.name}
                                //     </TableCell>
                                //     <TableCell align="right">
                                //         {row.user_id}
                                //     </TableCell>
                                //     <TableCell align="right">
                                //         {row.location}
                                //     </TableCell>
                                //     <TableCell align="right">
                                //         {row.status}
                                //     </TableCell>
                                // </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
};

AdminProperties.propTypes = {
    properties: PropTypes.arrayOf(
        PropTypes.shape({
            created_at: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            user_id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            updated_at: PropTypes.string,
            verified: PropTypes.number.isRequired,
        }).isRequired
    ),
    // tenants: PropTypes.arrayOf(PropTypes.object),
};

export default AdminProperties;
