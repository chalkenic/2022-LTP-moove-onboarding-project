/* eslint-disable no-nested-ternary */
/* eslint-disable sort-imports */
/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
/* eslint-disable no-ternary */
import {
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import AppTheme from "../../assets/theme/theme";
import {Box} from "@mui/system";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropTypes from "prop-types";
import React, {Fragment, useState} from "react";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles(() => ({
    "link": {
        "cursor": "pointer",
        "color": `${AppTheme.palette.admin.dark} !important`,
        "borderBottom": `1px solid ${AppTheme.palette.admin.dark} !important`,
        "&:hover": {
            "borderBottom": `1px solid ${AppTheme.palette.admin.light} !important`,
            "color": `${AppTheme.palette.admin.light} !important`
        }
    }
}));

const PropertyRow = ({property, tenants}) => {

    const styles = useStyles();
    const [
        open,
        setOpen
    ] = useState(false);

    const currentTenants = tenants.filter((tenants) => tenants.property_id === property.id);

    return (
        <Fragment>
            <TableRow sx={{"& > *": {"borderBottom": "unset"},
                "cursor": "pointer"}} onClick={() => setOpen(!open)}>
                <TableCell >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                    >
                        {open
                            ? property.status === "occupied"
                                ? <KeyboardArrowUpIcon sx={{"color": "green"}}/>
                                : <KeyboardArrowUpIcon sx={{"color": "red"}}/>

                            : property.status === "occupied"
                                ? <KeyboardArrowDownIcon sx={{"color": "green"}}/>
                                : <KeyboardArrowDownIcon sx={{"color": "red"}}/>
                        }
                    </IconButton>
                </TableCell>
                <TableCell align="right">{property.name}</TableCell>
                <TableCell align="right">{property.user_id}</TableCell>
                <TableCell align="right">{property.location}</TableCell>
                <TableCell align="right">{property.status}</TableCell>
            </TableRow>
            {property.status === "occupied" &&
                <TableRow sx={{"backgroundColor": "#f6f6f6"}}>
                    <TableCell
                        style={{"paddingBottom": 0,
                            "paddingTop": 0}}
                        colSpan={6}
                    >
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{"margin": 1}}>
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
                                        {currentTenants.map((tenant) => <TableRow key={tenant.id}>
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
                                                    onClick={() => window.location = `mailto:${tenant.email}`
                                                    }
                                                >
                                                    {tenant.email}
                                                </a>
                                            </TableCell>
                                        </TableRow>)}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            }
        </Fragment>
    );

};

PropertyRow.propTypes = {
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

    "tenants": PropTypes.arrayOf(PropTypes.shape({
        "property_id": PropTypes.number.isRequired,
        "id": PropTypes.number.isRequired,
        "name": PropTypes.string.isRequired,
        "email": PropTypes.string.isRequired
    }))
    // Tenants: PropTypes.arrayOf(PropTypes.object),
};

export default PropertyRow;
