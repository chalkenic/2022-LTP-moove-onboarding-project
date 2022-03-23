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
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import AppTheme from "../../assets/theme/theme";

const useStyles = makeStyles(() => ({
    link: {
        cursor: "pointer",
        color: `${AppTheme.palette.admin.dark} !important`,
        borderBottom: `1px solid ${AppTheme.palette.admin.dark} !important`,
        "&:hover": {
            borderBottom: `1px solid ${AppTheme.palette.admin.light} !important`,
            color: `${AppTheme.palette.admin.light} !important`,
        },
    },
}));

const PropertyRow = ({ property, tenants }) => {
    const styles = useStyles();
    const [open, setOpen] = useState(false);

    const currentTenants = tenants.filter(
        (tenants) => tenants.property_id === property.id
    );

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
                <TableCell align="right">{property.name}</TableCell>
                <TableCell align="right">{property.user_id}</TableCell>
                <TableCell align="right">{property.location}</TableCell>
                <TableCell align="right">{property.status}</TableCell>
            </TableRow>
            {property.status === "occupied" && (
                <TableRow>
                    <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                    >
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    component="div"
                                    align="center"
                                >
                                    Current Tenants
                                </Typography>
                                <Table size="small" aria-label="details">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="right">
                                                Email
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {currentTenants.map((tenant) => {
                                            return (
                                                <TableRow key={tenant.id}>
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                    >
                                                        {tenant.name}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <a
                                                            className={
                                                                styles.link
                                                            }
                                                            onClick={() =>
                                                                (window.location = `mailto:${tenant.email}`)
                                                            }
                                                        >
                                                            {tenant.email}
                                                        </a>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            )}
        </Fragment>
    );
};

PropertyRow.propTypes = {
    property: PropTypes.shape({
        created_at: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        user_id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        updated_at: PropTypes.string,
        verified: PropTypes.number.isRequired,
    }),

    tenants: PropTypes.arrayOf(
        PropTypes.shape({
            property_id: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        })
    ),
    // tenants: PropTypes.arrayOf(PropTypes.object),
};

export default PropertyRow;
