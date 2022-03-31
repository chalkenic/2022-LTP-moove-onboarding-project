import {Alert, Card, CardContent, CardMedia, Grid, Paper, Snackbar, Typography} from "@mui/material";

import PropertiesHeader from "../components/headers/PropertiesHeader";
import PropertyCard from "../cards/PropertyCard";
import Property from "../components/landlord/property/Property";
import React, {Fragment, useEffect, useState} from "react";
import PropertyModal from "../components/landlord/property/PropertyModal";
import PropertyAddModal from "../components/landlord/property/PropertyAddModal";
import axios from "axios";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import theme from "../assets/theme/theme";
import PropTypes from "prop-types";
import {Box} from "@mui/system";
import mooveLogo from "../assets/images/moove_logo_nobg.png";
import GreenButtonCustom from "../components/buttons/GreenButtonCustom";


const TenantProperty = ({property, tenants, contract}) => {

    console.log(contract);

    const openContract = (propId) => {
        

        window.location.href = `/tenant-contract/${propId}`;

    };
 return (
<Fragment>
    <Paper>
        <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12}>

                <PropertiesHeader name = {property.name}/>
            </Grid>
            <Grid item lg ={6} md={12} sm={12} xs={12}>
                <Grid container flexDirection="column" align="center" >
                    <Grid container></Grid>
                    <Grid item xs={12} marginBottom="10%">
                        <Typography variant="h5"><u>Housemates</u></Typography>
                    </Grid>
                    <Grid container item xs={12} alignItems="center" justifyContent={"space-evenly"} flexDirection="column">
                        {tenants.map((tenant, index) => <Grid item key={index} paddingBottom="30px">
                            {tenant.name}
                        </Grid>)}
                    </Grid>
                    <Grid>

                    </Grid>
                </Grid>
            </Grid>
            <Grid container item lg ={6} md={12} sm={12} xs={12} marginBottom= "40px" sx={{"paddingRight": {"xl": "40px",
                "md": "20px",
                "sm": "0",
                "xs": "0"},
            "justifyContent": {"lg": "flex-end",
                "md": "center",
                "sm": "center",
                "xs": "center"}}}>

                <Box style={{"position": "relative"}} display="flex">

                    <Card style={{"align": "right",
                        "borderRadius": "50%"}} sx={{"width": {"md": "400px",
                        "sm": "350px",
                        "xs": "150px"},
                    "height": {"md": "350px",
                        "sm": "250px",
                        "xs": "150px"}}}>

                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            // Style={{"minHeight": "25vh"}}
                            sx={{"minHeight": {"md": "27vh",
                                "sm": "20vh",
                                "xs": "10vh"}}}
                        >

                            <Grid item xs={3}>
                                <Box
                                    component="img"
                                    sx={{"height": {"sx": "10px",
                                        "sm": "76%"}}}
                                    alt="moove logo"
                                    src={mooveLogo}
                                />
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
            </Grid>
            {contract !== "" 
                ?   <Grid container flexDirection="column" paddingLeft="25px" alignItems="center" paddingBottom="3%">
                        <Grid item xs={12}><GreenButtonCustom onClick={() => window.location.href = `/property-contract/${property.id}`}>View Contract</GreenButtonCustom></Grid>
                    </Grid> 
                : <Grid container flexDirection="column" paddingLeft="25px" alignItems="center" paddingBottom="3%">
                    <Grid item xs={12}><Typography>No Contract has been created! Maybe speak to your landlord?</Typography></Grid>
                </Grid> }


        </Grid>
    </Paper>
</Fragment>

 );

 TenantProperty.propTypes = {
    "property": PropTypes.shape({
        "created_at": PropTypes.string.isRequired,
        "id": PropTypes.number.isRequired,
        "user_id": PropTypes.number.isRequired,
        "name": PropTypes.string.isRequired,
        "location": PropTypes.string.isRequired,
        "status": PropTypes.string.isRequired,
        "updated_at": PropTypes.string,
        "verified": PropTypes.number.isRequired
    }),

    "tenants": PropTypes.array

};

 }



export default TenantProperty;
