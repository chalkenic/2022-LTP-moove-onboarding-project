import React from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
    Button,
    RadioGroup,
    Radio,
    FormControlLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormControlUnstyled } from "@mui/base";
import { useEffect, useRef, useState } from "react";
import * as LandlordTexts from "../../assets/texts/LandlordTexts";
import AppTheme from "../../assets/theme/theme";
import PropTypes from "prop-types";
import { Box } from "@mui/system";

const useStyles = makeStyles(() => ({
    titleText: {
        paddingBottom: "5 !important",
        color: `${AppTheme.palette.landlord.dark} !important`,
    },

    headerText: {
        paddingTop: "8px !important",
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
    const [propName, setPropName] = useState("");
    const [propPostcode, setPropPostcode] = useState("");
    const [occupied, setOccupied] = useState(false);
    const [postError, setPostError] = useState();
    const handleClose = () => {
        props.setAdd(false);
    };

    const validate = () => {
        if (!validPostCode.test(propPostcode)) {
            setPostError(true);
        } else {
            setPostError(false);
            props.setAdd(false);
        }
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
                                                LandlordTexts
                                                    .LandlordAddPropsTexts
                                                    .addModalTitle2
                                            }
                                        </DialogContent>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            required={true}
                                            id="prop-name"
                                            label={
                                                LandlordTexts
                                                    .LandlordAddPropsTexts
                                                    .addModalContent2
                                            }
                                            className={styles.infoText}
                                            onChange={(e) =>
                                                setPropName(e.target.value)
                                            }
                                        ></TextField>
                                    </Grid>
                                </Grid>

                                <Grid
                                    container
                                    justify="center"
                                    sx={{ paddingTop: "10px" }}
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
                                                LandlordTexts
                                                    .LandlordAddPropsTexts
                                                    .addModalTitle3
                                            }
                                        </DialogContent>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            required={true}
                                            id="prop-postcode"
                                            label={
                                                LandlordTexts
                                                    .LandlordAddPropsTexts
                                                    .addModalContent3
                                            }
                                            className={styles.infoText}
                                            onChange={(e) =>
                                                setPropPostcode(e.target.value)
                                            }
                                        ></TextField>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    justify="center"
                                    sx={{ paddingTop: "10px" }}
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
                                                LandlordTexts
                                                    .LandlordAddPropsTexts
                                                    .addModalTitle4
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
                                            onChange={(e) =>
                                                setOccupied(e.target.value)
                                            }
                                        >
                                            <FormControlLabel
                                                value={true}
                                                control={<Radio />}
                                                label="Yes"
                                            />
                                            <FormControlLabel
                                                defaultChecked="true"
                                                value={false}
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
                                    LandlordTexts.LandlordAddPropsTexts
                                        .AddModalButton
                                }
                            </Button>
                        </Box>
                        {postError && postError !== undefined && (
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
                                        LandlordTexts.LandlordAddPropsTexts
                                            .AddModalPostError
                                    }
                                </DialogContent>
                            </>
                        )}
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );
};

PropertyModal.propTypes = {
    tenants: PropTypes.array,
    setTenants: PropTypes.any,
    add: PropTypes.bool,
    setAdd: PropTypes.any,
    property: PropTypes.object,
};

export const validPostCode = new RegExp(
    "^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$"
);

export default PropertyModal;
