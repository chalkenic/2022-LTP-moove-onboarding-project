import {
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

const PropertyRow = ({ propertyData }) => {
    const [open, setOpen] = useState(false);
    console.log(propertyData);

    return (
        <Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {propertyData.id}
                </TableCell>
                <TableCell align="right">{propertyData.name}</TableCell>
                <TableCell align="right">{propertyData.user_id}</TableCell>
                <TableCell align="right">{propertyData.location}</TableCell>
                <TableCell align="right">{propertyData.status}</TableCell>
            </TableRow>
            {/* {property.status === "occupied" && (
                <TableRow>
                    <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                    >
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                >
                                    Details
                                </Typography>
                                <Table size="small" aria-label="details">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Email</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {tenants.map((tenant) => {
                                            <TableRow key={tenant.id}>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    {tenant.name}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {tenant.email}
                                                </TableCell>
                                            </TableRow>;
                                        })}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            )} */}
        </Fragment>
    );
};

PropertyRow.propTypes = {
    propertyData: PropTypes.object.isRequired,
    // tenants: PropTypes.arrayOf(PropTypes.object),
};

export default PropertyRow;
