/* eslint-disable sort-imports */
import {
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import PropTypes from "prop-types";
import PropertiesHeader from "../components/headers/PropertiesHeader";
import React, {Fragment} from "react";
import TableCell from "@mui/material/TableCell";
import PropertyRow from "../components/tables/PropertyRow";

const AdminProperties = ({properties, tenancies}) => <Fragment>
    <PropertiesHeader role="admin" />
    <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
            <TableHead>
                <TableRow>
                    <TableCell component="th" scope="row" sx={{"fontWeight": 800}}>
                                ID
                    </TableCell>
                    <TableCell align="right"sx={{"fontWeight": 800}}>Property</TableCell>
                    <TableCell align="right"sx={{"fontWeight": 800}}>landlord</TableCell>
                    <TableCell align="right"sx={{"fontWeight": 800}}>Location</TableCell>
                    <TableCell align="right"sx={{"fontWeight": 800}}>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {properties.map((row, index) => <PropertyRow
                    key={index}
                    property={row}
                    tenants={tenancies}
                />)}
            </TableBody>
        </Table>
    </TableContainer>
</Fragment>;
AdminProperties.propTypes = {
    "properties": PropTypes.arrayOf(PropTypes.shape({
        "created_at": PropTypes.string.isRequired,
        "id": PropTypes.number.isRequired,
        "user_id": PropTypes.number.isRequired,
        "name": PropTypes.string.isRequired,
        "location": PropTypes.string.isRequired,
        "status": PropTypes.string.isRequired,
        "updated_at": PropTypes.string,
        "verified": PropTypes.number.isRequired
    }).isRequired),

    "tenancies": PropTypes.any
    // Tenants: PropTypes.arrayOf(PropTypes.object),
};

export default AdminProperties;
