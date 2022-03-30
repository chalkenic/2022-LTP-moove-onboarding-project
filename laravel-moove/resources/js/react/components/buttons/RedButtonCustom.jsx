/* eslint-disable sort-imports */
/* eslint-disable no-magic-numbers */
import React from "react";
import styled from "@emotion/styled";
import {red} from "@mui/material/colors";
import {Button} from "@mui/material";


const RedButton = styled(Button)(() => ({
    "color": "#000",
    "backgroundColor": red[200],
    "&:hover": {
        "backgroundColor": red[500]
    }
}));

const RedButtonCustom = ({children, onClick}) => <RedButton variant="contained" onClick = {onClick}>{children}</RedButton>;

export default RedButtonCustom;
