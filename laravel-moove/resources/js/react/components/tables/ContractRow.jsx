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

const ContractRow = ({section, tenants}) => {

    const styles = useStyles();
    const [
        open,
        setOpen
    ] = useState(false);


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
                            ? section !== null && section !== undefined
                                ? <KeyboardArrowUpIcon sx={{"color": "green"}}/>
                                : <KeyboardArrowUpIcon sx={{"color": "red"}}/>

                            : section !== null && section !== undefined
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

export default ContractRow;
