/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
import AppTheme from "../assets/theme/theme";
import React, {useEffect, useRef, useState} from "react";
// Import { Grid, Card, CardActionArea } from "@mui/material";
import PropTypes from "prop-types";
import {FormControlUnstyled} from "@mui/base";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import * as LandlordTexts from "../assets/texts/LandlordTexts";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import {makeStyles} from "@mui/styles";
import {Box} from "@mui/system";

const useStyles = makeStyles(() => ({
    "titleText": {
        "fontFamily": "sans-serif",
        "paddingBottom": "5 !important",
        "color": `${AppTheme.palette.landlord.dark} !important`
    },

    "headerText": {
        "paddingTop": "8px !important",
        "fontWeight": "600 !important",
        "fontSize": 22,
        "color": `${AppTheme.palette.landlord.dark} !important`
    },
    "dividerLight": {
        "borderBottom": "1px solid #808080 !important",
        "padding": "0 !important",
        "marginLeft": "5%",
        "marginRight": "5%"
    }

}));


const ContractCard = (props) => {


    const styles = useStyles();

    const [
        title,
        setTitle
    ] = useState();
    const [
        content,
        setContent
    ] = useState();

    const [
        error,
        setError
    ] = useState();

    const validate = (event) => {

        if (title === null || title === undefined) {

            setError(LandlordTexts.LandlordAddContTexts.contErr1);

        } else if (content === null || content === undefined) {

            setError(LandlordTexts.LandlordAddContTexts.contErr2);

        } else {


            props.setSections([
                ...props.sections,
                {
                    title,
                    content
                }
            ]);

            setTitle("");
            setContent("");


        }

    };

    useEffect(
        () => {

            document.getElementById("title").value = "";
            document.getElementById("content").value = "";

        },
        [props.sections]
    );

    return (

        <Paper sx={{"maxWidth": 936,
            "margin": "auto",
            "overflow": "hidden"}}>
            <FormControlUnstyled
                component="fieldset"
                variant="filled"
                disabled
            >
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{"borderBottom": "1px solid rgba(0, 0, 0, 0.12)"}}
                >
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <AddIcon color="inherit" sx={{"display": "block"}} />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    id="title"
                                    defaultValue={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter Section Title"
                                    InputProps={{
                                        "disableUnderline": true,
                                        "sx": {"fontSize": "default"}
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    sx={{"borderBottom": "1px solid rgba(0, 0, 0, 0.12)"}}
                >
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <AddIcon color="inherit" sx={{"display": "block"}} />
                            </Grid>
                            <Grid item xs>

                                <TextField
                                    fullWidth
                                    multiline
                                    id="content"
                                    defaultValue={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Enter section content"
                                    hiddenLabel
                                    InputProps={{
                                        "disableUnderline": true,
                                        "sx": {"fontSize": "default"}
                                    }}
                                    variant="standard"
                                />
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar >
                {error && error !== undefined &&
                            <>
                                <Typography
                                    className={styles.dividerLight}
                                />
                                <Typography
                                    align="center"
                                    component="div"
                                    className={styles.headerText}
                                >
                                    {
                                        error
                                    }
                                </Typography>
                            </>
                }
                <Grid item xs={12}>
                    <Box textAlign="center" padding={(2, 2, 2, 2)}>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                onClick={validate}
                            >

                                        Add Section

                            </Button>

                        </Grid>
                    </Box>

                </Grid>
            </FormControlUnstyled>

        </Paper>
    );

};
ContractCard.propTypes = {

};

export default ContractCard;
