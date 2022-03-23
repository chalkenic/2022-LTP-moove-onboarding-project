import React from "react";
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useRef, useState } from "react";
import * as LandlordTexts from "../../../assets/texts/LandlordTexts";
import AppTheme from "../../../assets/theme/theme";
import PropTypes from "prop-types";
import axios from "axios";

const useStyles = makeStyles(() => ({
    titleText: {
        paddingBottom: "5 !important",
        color: `${AppTheme.palette.landlord.dark} !important`,
    },

    headerText: {
        fontWeight: "600 !important",
        fontSize: 22,
        color: `${AppTheme.palette.landlord.dark} !important`,
    },

    infoText: {
        fontSize: 22,
        textAlign: "right !important",
    },

    tenantBox: {
        border: "1px solid #000",
        borderRadius: "2px",
        padding: "10px",
    },

    tenantText: {
        padding: "10px",
    },

    divider: {
        borderBottom: "2px solid black !important",
        padding: "0 !important",
    },
    dividerLight: {
        borderBottom: "1px solid #808080 !important",
        padding: "0 !important",
        marginLeft: "5%",
        marginRight: "5%",
    },
}));

export function useIsMounted() {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        return () => (isMounted.current = false);
    }, []);

    return isMounted;
}

const newContract = (property) => {};

const PropertyModal = (props) => {
    const styles = useStyles();
    const [property, setProperty] = useState(props.property);
    const [contract, setContract] = useState(props.contract);

    console.log(props.property);
    console.log(props.contract);

    const [scroll, setScroll] = useState("paper");
    const handleClose = () => {
        props.setOpen(false);
    };

    const openContract = (chosenProp, chosenCont) => {
        // sanity check
        console.log(chosenProp, " &&", chosenCont);
        axios.get(`/contract/",${chosenProp.id}`);

        // axios({
        //     url: 'open-contract',
        //     headers: {},
        //     data: {property: props.property, contract: props.contract},
        // }).then((res) =>{console.log('data: ', res.propData);})
        // .catch((err) => {console.log(err.message);})

        // let propUrl = `/contracts/${property.id}`;
        // axios.get(propUrl);
        // let propUrl = `/tenants/${property.id}`;
        // axios.get(propUrl).then((res) => {
        //     setTenants(res.data.tenants);
        // });
        // setOpen(true);
    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (props.open) {
            setScroll(scroll);

            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [props.open]);

    useEffect(() => {
        if (props.tenants !== undefined) {
            props.setContract(props.contract);
        }
    }, [props.contract]);


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
                            sx={{ fontSize: "26px", fontWeight: "800" }}
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
                                        LandlordTexts.LandlordPropsTexts
                                            .propModalTitle1
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
                                        LandlordTexts.LandlordPropsTexts
                                            .propModalTitle2
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
                            <Grid item xs={9}>
                                <DialogContent
                                    id="scroll-dialog-description"
                                    ref={descriptionElementRef}
                                    component="div"
                                    className={styles.headerText}
                                    sx={{ textAlign: "center" }}
                                >
                                    {
                                        LandlordTexts.LandlordPropsTexts
                                            .propTenantTitle
                                    }
                                </DialogContent>
                            </Grid>
                            <Grid item xs={3}>
                                {props.contract == undefined ||
                                props.contract == null ? (
                                    <Button>Create Contract</Button>
                                ) : (
                                    <Button onClick={() => openContract(props.property, props.contract)}>
                                        Open Contract
                                    </Button>
                                )}
                            </Grid>

                            {props.tenants !== undefined && (
                                <Grid item xs={12}>
                                    {props.tenants.map((tenant, key) => {
                                        return (
                                            <Grid container key={key}>
                                                <Grid item xs={2}>
                                                    <DialogContent
                                                        component="div"
                                                        id="scroll-dialog-description"
                                                        className={
                                                            styles.infoText
                                                        }
                                                    >
                                                        {key + 1}
                                                    </DialogContent>
                                                </Grid>
                                                <Grid item xs={10}>
                                                    <DialogContent
                                                        component="div"
                                                        className={
                                                            styles.infoText
                                                        }
                                                    >
                                                        {tenant.name}
                                                    </DialogContent>
                                                </Grid>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            )}
                        </Grid>
                    </DialogContent>
                </Grid>
            </Dialog>
        </div>
    );
};

PropertyModal.propTypes = {
    tenants: PropTypes.array,
    setTenants: PropTypes.any,
    open: PropTypes.bool,
    setOpen: PropTypes.any,
    setContract: PropTypes.any,
    property: PropTypes.object,
    contract: PropTypes.object,
};

export default PropertyModal;
