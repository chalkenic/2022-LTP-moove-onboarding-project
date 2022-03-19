import React from 'react';
import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

/*
	Handle presentation of data on summary property card component.
*/


const Property = ({property}) => {

    


    return (
        <Grid
            container
            alignItems="center"
            sx={{
                paddingTop: "40px !important",
                paddingBottom: "20px !important",
            }}
        >
            <Grid item xs={12} md={12} align={"center"}>
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
    property: PropTypes.object
}



export default Property;
