import React from "react";
import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useRef, useState } from "react";
import * as LandlordTexts from "../../assets/texts/LandlordTexts";
import AppTheme from "../../assets/theme/theme";
import PropTypes from "prop-types";

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
        marginLeft: "5%",
        marginRight: "5%",
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

const PropertyModal = (props) => {
    const styles = useStyles();

    const [scroll, setScroll] = useState("paper");
    const handleClose = () => {
        props.setAdd(false);
    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (props.add) {
            setScroll(scroll);

            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [props.add]);

    // useEffect(() => {
    //     if (props.tenants !== undefined) {
    //         props.setTenants(props.tenants);
    //     }
    // }, [props.tenants]);

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
                            sx={{ fontSize: "26px", fontWeight: "800" }}
                        >
                            Add property
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
                                    Cardiff Borough
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
                                    Property Status
                                </DialogContent>
                            </Grid>
                        </Grid>
                        <DialogContent className={styles.dividerLight} />
                    </DialogContent>
                </Grid>
            </Dialog>
        </div>
    );
};

PropertyModal.propTypes = {
    tenants: PropTypes.array,
    setTenants: PropTypes.array,
    add: PropTypes.bool,
    setAdd: PropTypes.bool,
    property: PropTypes.object,
};

export default PropertyModal;
