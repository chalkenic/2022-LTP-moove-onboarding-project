import React from "react";
import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

/*
	Handle presentation of data on summary property card component.
*/

const useStyles = makeStyles(() => ({
    verification: {
        marginBlock: 5,
    },

    propertyVerified: {
        fontWeight: "600 !important",
        fontSize: 22,
        color: 'green !important',
    },

    propertyUnverified: {
        color: 'red !important'
    },

    dividerLight: {
        borderBottom: "1px solid #808080 !important",
        padding: "0 !important",
        marginLeft: "5%",
        marginRight: "5%",
    },
}));

const Property = ({ property }) => {
    const styles = useStyles();

    return (
        <Grid
            container
            alignItems="center"
            sx={{
                paddingTop: "10px !important",
                paddingBottom: "20px !important",
            }}
        >
            <Grid item xs={12} md={12} align={"center"}>
                <Typography
                    className={clsx(
                        styles.verification,
                        property.verified
                            ? styles.propertyVerified
                            : styles.propertyUnverified
                    )}
                >
                    {property.verified ? "Verified" : "Not Verified"}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography className={styles.dividerLight} />
            </Grid>
            <Grid item xs={12} md={12} align={"center"} sx={{paddingTop: '10px !important'}}>
                image goes here
            </Grid>
            <Grid item xs={12} md={12}>
                <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: 700 }}
                >
                    {property.name}
                </Typography>
            </Grid>
        </Grid>
    );
};

Property.propTypes = {
    property: PropTypes.object,
};

export default Property;
