/* eslint-disable no-ternary */
/* eslint-disable sort-imports */
import React, {Fragment} from "react";
import PropTypes from "prop-types";
import CircleIcon from "@mui/icons-material/Circle";

// Handles all navigation bar layouts for users.


const CircleIconCustom = ({statusColor}) => <Fragment>
    {statusColor === 0
        ? <CircleIcon style={{"color": "red"}}></CircleIcon>
        : <CircleIcon style={{"color": "#1CE815"}}></CircleIcon>
    }
</Fragment>;
CircleIconCustom.propTypes = {
    "statusColor": PropTypes.number
};
export default CircleIconCustom;
