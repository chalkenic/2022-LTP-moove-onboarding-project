/* eslint-disable no-alert */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
/* eslint-disable max-lines */
/* eslint-disable no-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable sort-imports */
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import React, {useEffect, useRef, useState} from "react";
import * as LandlordTexts from "../../../assets/texts/LandlordTexts";
import AppTheme from "../../../assets/theme/theme";
import PropTypes from "prop-types";
import {blue, green, red} from "@mui/material/colors";
import styled from "@emotion/styled";
import RedButtonCustom from "../../buttons/RedButtonCustom";
import GreenButtonCustom from "../../buttons/GreenButtonCustom";
import BlueButtonCustom from "../../buttons/BlueButtonCustom";
import YellowButtonCustom from "../../buttons/YellowButtonCustom";

const useStyles = makeStyles(() => ({
    "titleText": {
        "paddingBottom": "5 !important",
        "color": `${AppTheme.palette.landlord.dark} !important`
    },

    "headerText": {
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
        "padding": "0 !important"
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

const PropertyModal = (props) => {

    const styles = useStyles();

    const [
        scroll,
        setScroll
    ] = useState("paper");
    const handleClose = () => {

        props.setOpen(false);

    };

    const openContract = (chosenProp) => {

        handleClose();

        window.location.href = `/contract/${chosenProp.id}`;

    };

    const createContract = (newProp) => {

        handleClose();

        window.location.href = `/contract/${newProp.id}`;

    };

    const deleteContract = (delPropCont) => {

        if (confirm(`Delete contract for ${delPropCont.name}?`)) {

            axios.post(`/delete-contract/${delPropCont.id}`).
                then(() => {

                    window.location.href="/landlord-properties";

                });

        }

    };

    const openSignature = (propertyId) => {

        window.location.href = `/landlord-sign-tenancy/${propertyId}`;
    }


    const descriptionElementRef = useRef(null);
    useEffect(
        () => {

            if (props.open) {

                setScroll(scroll);

                const {"current": descriptionElement} = descriptionElementRef;
                if (descriptionElement !== null) {

                    descriptionElement.focus();

                }

            }

        },
        [props.open]
    );

    useEffect(
        () => {

            props.setContract(props.contract);

        },
        [props.contract]
    );

    return (
        <div>
            <Dialog
                open={props.open}
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
                            {props.property.name}
                        </DialogTitle>
                        <DialogContent className={styles.divider} />
                    </Grid>
                    <DialogContent
                        dividers={scroll === "paper"}
                        component="div"
                    >
                        <Grid container>
                            <Grid item xs={5}>
                                <DialogContent
                                    id="scroll-dialog-description"
                                    ref={descriptionElementRef}
                                    component="div"
                                    className={styles.headerText}
                                >
                                    {
                                        LandlordTexts.LandlordPropsTexts.
                                            propModalTitle1
                                    }
                                </DialogContent>
                            </Grid>

                            <Grid item xs={7}>
                                <DialogContent
                                    component="div"
                                    className={styles.infoText}
                                >
                                    {props.property.location}
                                </DialogContent>
                            </Grid>
                        </Grid>
                        <DialogContent className={styles.dividerLight} />
                        

                        <Grid container>
                            <Grid item xs={5}>
                                <DialogContent
                                    id="scroll-dialog-description"
                                    ref={descriptionElementRef}
                                    component="div"
                                    className={styles.headerText}
                                >
                                    {
                                        LandlordTexts.LandlordPropsTexts.
                                            propModalTitle2
                                    }
                                </DialogContent>
                            </Grid>

                            <Grid item xs={7}>
                                <DialogContent
                                    component="div"
                                    className={styles.infoText}
                                >
                                    {props.property.status}
                                </DialogContent>
                            </Grid>
                        </Grid>
                        <DialogContent className={styles.dividerLight} />
                        <Grid container>
                            <Grid
                                item
                                xs={12}
                                align="center"
                                sx={{"paddingTop": "20px"}}
                            >
                            <Grid item xs={4}>
                                <YellowButtonCustom
                                    variant="contained"
                                    onClick={() => openSignature(props.property.id)}
                                    
                                    >
                                 Signature
                                </YellowButtonCustom>
                            </Grid>
                            <br></br>
                                {props.contract === null ||
                                props.contract === undefined
                                    ? <GreenButtonCustom
                                        variant="outlined"
                                        onClick={() => createContract(props.property)
                                        }
                                    >
                                        Create Contract
                                    </GreenButtonCustom>

                                    : <Grid container flexDirection={"row"}>
                                        <Grid item xs={6}>
                                            <BlueButtonCustom
                                                variant="contained"
                                                onClick={() => openContract(
                                                    props.property,
                                                    props.contract
                                                )
                                                }
                                            >
                                        Open Contract
                                            </BlueButtonCustom>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <RedButtonCustom
                                                variant="contained"
                                                onClick={() => deleteContract(props.property)
                                                }
                                            >
                                        Delete Contract
                                            </RedButtonCustom>
                                        </Grid>
                                    </Grid>
                                }
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <DialogContent
                                    id="scroll-dialog-description"
                                    ref={descriptionElementRef}
                                    component="div"
                                    className={styles.headerText}
                                    sx={{"textAlign": "center"}}
                                >
                                    {
                                        LandlordTexts.LandlordPropsTexts.
                                            propTenantTitle
                                    }
                                </DialogContent>
                            </Grid>
                            {props.tenants !== null &&
                                <Grid item xs={12}>
                                    {props.tenants.map((tenant, key) => <Grid container key={key}>
                                        <Grid item xs={2}>
                                            <DialogContent
                                                component="div"
                                                id="scroll-dialog-description"
                                                className={styles.infoText}
                                            >
                                                {key + 1}
                                            </DialogContent>
                                        </Grid>
                                        <Grid item xs={10}>
                                            <DialogContent
                                                component="div"
                                                className={styles.infoText}
                                            >
                                                {tenant.name}
                                            </DialogContent>
                                        </Grid>
                                    </Grid>)}
                                </Grid>
                            }
                        </Grid>
                    </DialogContent>
                </Grid>
            </Dialog>
        </div>
    );

};

PropertyModal.propTypes = {
    "tenants": PropTypes.array,
    "setTenants": PropTypes.any,
    "open": PropTypes.bool,
    "setOpen": PropTypes.any,
    "setContract": PropTypes.any,
    "property": PropTypes.object,
    "contract": PropTypes.object
};

export default PropertyModal;
