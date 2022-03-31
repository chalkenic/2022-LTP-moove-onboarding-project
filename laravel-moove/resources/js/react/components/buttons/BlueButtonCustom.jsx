/* eslint-disable sort-imports */
/* eslint-disable no-magic-numbers */
import React from "react";
import styled from "@emotion/styled";
import {blue} from "@mui/material/colors";
import { Button } from "@mui/material";

const BlueButton = styled(Button)(() => ({
    "color": "#000",
    "backgroundColor": blue[200],
    "&:hover": {
        "backgroundColor": blue[500]
    }
}));

const BlueButtonCustom = ({children, onClick}) => <BlueButton variant="contained" onClick = {onClick}>{children}</BlueButton>;

export default BlueButtonCustom;
