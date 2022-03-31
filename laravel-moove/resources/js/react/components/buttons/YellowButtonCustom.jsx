/* eslint-disable sort-imports */
/* eslint-disable no-magic-numbers */
import React from "react";
import styled from "@emotion/styled";
import { yellow} from "@mui/material/colors";
import {Button} from "@mui/material";

const YellowButton = styled(Button)(() => ({
    "color": "#000",
    "backgroundColor": yellow[200],
    "&:hover": {
        "backgroundColor": yellow[500]
    }
}));

const YellowButtonCustom = ({children, onClick}) => <YellowButton variant="outlined" onClick = {onClick}>{children}</YellowButton>;

export default YellowButtonCustom;
