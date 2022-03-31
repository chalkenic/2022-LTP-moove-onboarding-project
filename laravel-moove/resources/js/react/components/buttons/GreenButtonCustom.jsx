/* eslint-disable sort-imports */
/* eslint-disable no-magic-numbers */
import React from "react";
import styled from "@emotion/styled";
import {green} from "@mui/material/colors";
import {Button} from "@mui/material";

const GreenButton = styled(Button)(() => ({
    "color": "#000",
    "backgroundColor": green[200],
    "&:hover": {
        "backgroundColor": green[500]
    }
}));

const GreenButtonCustom = ({children, onClick}) => <GreenButton variant="outlined" onClick = {onClick}>{children}</GreenButton>;

export default GreenButtonCustom;
