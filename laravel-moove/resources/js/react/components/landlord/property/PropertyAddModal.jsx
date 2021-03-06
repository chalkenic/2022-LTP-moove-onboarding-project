/* eslint-disable require-unicode-regexp */
/* eslint-disable prefer-named-capture-group */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines */
/* eslint-disable no-undefined */
/* eslint-disable no-use-before-define */
/* eslint-disable sort-imports */
/* eslint-disable no-return-assign */
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {FormControlUnstyled} from "@mui/base";
import React, {useEffect, useRef, useState} from "react";
import * as LandlordTexts from "../../../assets/texts/LandlordTexts";
import AppTheme from "../../../assets/theme/theme";
import PropTypes from "prop-types";
import {Box} from "@mui/system";
import axios from "axios";

const useStyles = makeStyles(() => ({
    "titleText": {
        "paddingBottom": "5 !important",
        "color": `${AppTheme.palette.landlord.dark} !important`
    },

    "headerText": {
        "paddingTop": "8px !important",
        "fontWeight": "600 !important",
        "fontSize": 22,
        "color": `${AppTheme.palette.landlord.dark} !important`
    },

    "infoText": {
        "fontSize": 22,
        "textAlign": "right !important"
    },

    "tenantBox": {
        "border": "1px solid #000",
        "borderRadius": "2px",
        "padding": "10px"
    },

    "tenantText": {
        "padding": "10px"
    },

    "divider": {
        "borderBottom": "2px solid black !important",
        "padding": "0 !important",
        "marginLeft": "5%",
        "marginRight": "5%"
    },
    "dividerLight": {
        "borderBottom": "1px solid #808080 !important",
        "padding": "0 !important",
        "marginLeft": "5%",
        "marginRight": "5%"
    }
}));

export function useIsMounted() {

    const isMounted = useRef(false);

    useEffect(
        () => {

            isMounted.current = true;
            return () => isMounted.current = false;

        },
        []
    );

    return isMounted;

}

const PropertyAddModal = (props) => {

    const styles = useStyles();

    const [
        scroll,
        setScroll
    ] = useState("paper");
    const [
        propName,
        setPropName
    ] = useState();
    const [
        propPostcode,
        setPropPostcode
    ] = useState("");
    const [
        occupied,
        setOccupied
    ] = useState();
    const [
        nameError,
        setNameError
    ] = useState();
    const [
        postError,
        setPostError
    ] = useState();
    const [
        occuError,
        setOccuError
    ] = useState();
    const handleClose = () => {

        props.setAdd(false);

    };

    const validate = () => {

        if (propName === null || propName === undefined) {

            setNameError(true);
            setPostError(false);
            setOccuError(false);

        } else if (!validPostCode.test(propPostcode)) {

            setNameError(false);
            setPostError(true);
            setOccuError(false);

        } else if (occupied === null || occupied === undefined) {

            setNameError(false);
            setPostError(false);
            setOccuError(true);

        } else {

            setNameError(false);
            setPostError(false);
            setOccuError(false);

            props.setAdd(false);
            axios.
                post(
                    "/properties",
                    {
                        "name": propName,
                        "location": propPostcode,
                        "status": occupied
                    }
                ).
                then(() => {

                    window.location.reload();

                });

        }

    };

    const descriptionElementRef = useRef(null);
    useEffect(
        () => {

            if (props.add) {

                setScroll(scroll);

                const {"current": descriptionElement} = descriptionElementRef;
                if (descriptionElement !== null) {

                    descriptionElement.focus();

                }

            }

        },
        [props.add]
    );

    return (
        <div>
            <Dialog
                open={props.add}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scrolled-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <Grid container>
                    <Grid item xs={12}>
                        <DialogTitle
                            id="scroll-dialog-title"
                            component="div"
                            align="center"
                            className={styles.titleText}
                            sx={{"fontSize": "26px",
                                "fontWeight": "800"}}
                        >
                            {LandlordTexts.LandlordAddPropsTexts.addModalTitle1}
                        </DialogTitle>
                        <DialogContent className={styles.divider} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlUnstyled
                            component="fieldset"
                            variant="filled"
                            disabled
                        >
                            <DialogContent
                                dividers={scroll === "paper"}
                                component="div"
                            >
                                <Grid container justify="center">
                                    <Grid item xs={6}>
                                        <DialogContent
                                            id="scroll-dialog-description"
                                            htmlFor="prop-name"
                                            ref={descriptionElementRef}
                                            component="div"
                                            className={styles.headerText}
                                        >
                                            {
                                                LandlordTexts.
                                                    LandlordAddPropsTexts.
                                                    addModalTitle2
                                            }
                                        </DialogContent>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            required={true}
                                            id="prop-name"
                                            label={
                                                LandlordTexts.
                                                    LandlordAddPropsTexts.
                                                    addModalContent2
                                            }
                                            className={styles.infoText}
                                            onChange={(e) => setPropName(e.target.value)
                                            }
                                        ></TextField>
                                    </Grid>
                                </Grid>

                                <Grid
                                    container
                                    justify="center"
                                    sx={{"paddingTop": "10px"}}
                                >
                                    <Grid item xs={6}>
                                        <DialogContent
                                            id="scroll-dialog-description"
                                            htmlFor="prop-postcode"
                                            ref={descriptionElementRef}
                                            component="div"
                                            className={styles.headerText}
                                        >
                                            {
                                                LandlordTexts.
                                                    LandlordAddPropsTexts.
                                                    addModalTitle3
                                            }
                                        </DialogContent>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            required={true}
                                            id="prop-postcode"
                                            label={
                                                LandlordTexts.
                                                    LandlordAddPropsTexts.
                                                    addModalContent3
                                            }
                                            className={styles.infoText}
                                            onChange={(e) => setPropPostcode(e.target.value)
                                            }
                                        ></TextField>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    justify="center"
                                    sx={{"paddingTop": "10px"}}
                                >
                                    <Grid item xs={6}>
                                        <DialogContent
                                            id="scroll-dialog-description"
                                            htmlFor="prop-postcode"
                                            ref={descriptionElementRef}
                                            component="div"
                                            className={styles.headerText}
                                        >
                                            {
                                                LandlordTexts.
                                                    LandlordAddPropsTexts.
                                                    addModalTitle4
                                            }
                                        </DialogContent>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <RadioGroup
                                            row
                                            name="row-radio-occupied"
                                            required={true}
                                            id="prop-postcode"
                                            defaultValue={false}
                                            className={styles.infoText}
                                            onChange={(e) => setOccupied(e.target.value)
                                            }
                                        >
                                            <FormControlLabel
                                                value="Occupied"
                                                control={<Radio />}
                                                label="Yes"
                                            />
                                            <FormControlLabel
                                                defaultChecked="true"
                                                value="Vacant"
                                                control={<Radio />}
                                                label="No"
                                            />
                                        </RadioGroup>
                                    </Grid>
                                </Grid>
                            </DialogContent>
                        </FormControlUnstyled>
                    </Grid>
                    <Grid item xs={12}>
                        <Box textAlign="center" padding={(2, 2, 2, 2)}>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={validate}
                                size="large"
                            >
                                {
                                    LandlordTexts.LandlordAddPropsTexts.
                                        AddModalButton
                                }
                            </Button>
                        </Box>
                        {postError && postError !== undefined &&
                            <>
                                <DialogContent
                                    className={styles.dividerLight}
                                />
                                <DialogContent
                                    align="center"
                                    ref={descriptionElementRef}
                                    component="div"
                                    className={styles.headerText}
                                >
                                    {
                                        LandlordTexts.LandlordAddPropsTexts.
                                            AddModalPostError
                                    }
                                </DialogContent>
                            </>
                        }
                        {occuError &&
                            <>
                                <DialogContent
                                    className={styles.dividerLight}
                                />
                                <DialogContent
                                    align="center"
                                    ref={descriptionElementRef}
                                    component="div"
                                    className={styles.headerText}
                                >
                                    {
                                        LandlordTexts.LandlordAddPropsTexts.
                                            AddModalOccuError
                                    }
                                </DialogContent>
                            </>
                        }
                        {nameError &&
                            <>
                                <DialogContent
                                    className={styles.dividerLight}
                                />
                                <DialogContent
                                    align="center"
                                    ref={descriptionElementRef}
                                    component="div"
                                    className={styles.headerText}
                                >
                                    {
                                        LandlordTexts.LandlordAddPropsTexts.
                                            AddModalNameError
                                    }
                                </DialogContent>
                            </>
                        }
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );

};

PropertyAddModal.propTypes = {
    "tenants": PropTypes.array,
    "setTenants": PropTypes.any,
    "add": PropTypes.bool,
    "setAdd": PropTypes.any,
    "setProperty": PropTypes.any
};

export const validPostCode = /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;

export default PropertyAddModal;
