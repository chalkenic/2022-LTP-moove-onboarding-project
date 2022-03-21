import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";

import PropertiesHeader from "../components/headers/PropertiesHeader";
import React, { Fragment, useState } from "react";

import PropertyRow from "../components/tables/PropertyRow";

const AdminProperties = ({ properties }) => {
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


    return (
        <Fragment>
            <PropertiesHeader role="admin" />
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Property</TableCell>
                            <TableCell align="right">landlord</TableCell>
                            <TableCell align="right">Location</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {properties.map((property) => {
                            <>
                                <view>{console.log(property)}</view>
                                <PropertyRow
                                    key={property.id}
                                    propertyData={property}
                                />
                                ;
                            </>;
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
};

AdminProperties.propTypes = {
    properties: PropTypes.any.isRequired,
    // tenants: PropTypes.arrayOf(PropTypes.object),
};

export default AdminProperties;
