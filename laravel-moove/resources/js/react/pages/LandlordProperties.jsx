/* eslint-disable max-statements */
/* eslint-disable no-ternary */
/* eslint-disable sort-imports */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-shadow */
import {Alert, Grid, Snackbar, Typography} from "@mui/material";

import PropertiesHeader from "../components/headers/PropertiesHeader";
import PropertyCard from "../cards/PropertyCard";
import Property from "../components/landlord/property/Property";
import React, {useEffect, useState} from "react";
import PropertyModal from "../components/landlord/property/PropertyModal";
import PropertyAddModal from "../components/landlord/property/PropertyAddModal";
import axios from "axios";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

const LandlordProperties = ({properties}) => {

    const [
        snackUp,
        setSnackUp
    ] = useState(false);

    const handleSnackOpen = () => {


        setSnackUp(true);

    };

    const handleSnackclose = () => {

        setSnackUp(false);

    };

    const [
        open,
        setOpen
    ] = useState(false);
    const [
        add,
        setAdd
    ] = useState(false);
    const [
        property,
        setProperty
    ] = useState({});
    const [
        tenants,
        setTenants
    ] = useState([]);
    const [
        contract,
        setContract
    ] = useState({});

    // Source all tenants relating to property on modal open.
    const handleOpen = (property) => {

        setProperty(property);
        const propUrl = `/tenants/${property.id}`;
        const contUrl = `/get-contract/${property.id}`;
        axios.get(propUrl).then((res) => {

            setTenants(res.data.tenants);

        });
        axios.get(contUrl).then((res) => {

            setContract(res.data.contract);

        }).
            catch(() => setContract(null));

        setOpen(true);

    };

    const handleAdd = () => {

        setAdd(true);

    };

    // Reset states when closing modal.

    const handleClose = () => {

        setOpen(false);
        setAdd(false);
        setProperty();
        setTenants();
        setContract();

    };

    useEffect(
        () => {

            if (window.parent.location.href.includes("contract")) {

                handleSnackOpen();

            }

        },
        []
    );
    return (
        <div>


            <PropertiesHeader role="landlord" />

            <Grid container justifyContent="center">
                <Grid
                    container
                    itemxs={12}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{"paddingLeft": {"xs": "10px",
                        "sm": "20px",
                        "md": "20px"}}}
                    style={{"width": "100vw",
                        "overflow": "hidden"}}
                >
                    {properties.map((property, key) => <Grid
                        key={key}
                        item
                        container
                        xl={2}
                        lg={3}
                        md={4}
                        sm={6}
                        xs={12}
                        justifyContent="center"
                        alignItems={"center"}
                    >
                        <PropertyCard
                            name="modalClick"
                            onClick={() => handleOpen(
                                property,
                                tenants
                            )}
                        >
                            <Property property={property} />
                        </PropertyCard>
                    </Grid>)}

                    <Grid
                        item
                        container
                        md={4}
                        sm={6}
                        xs={12}
                        justifyContent="center"
                        alignItems={"center"}
                    >
                        <PropertyCard
                            onClick={() => handleAdd(
                                property,
                                tenants
                            )}
                        >
                            <Typography
                                variant="h6"
                                paddingTop="20px"
                                align="center"
                                sx={{"fontWeight": 700}}
                            >
                                New Property
                            </Typography>
                            <div
                                style={{
                                    "position": "absolute",
                                    "left": "50%",
                                    "top": "50%",
                                    "transform": "translate(-50%, -30%"
                                }}
                            >
                                <AddCircleOutlineSharpIcon
                                    color="success"
                                    align="center"
                                    sx={{"fontSize": 80}}
                                />
                            </div>
                        </PropertyCard>
                    </Grid>
                </Grid>
            </Grid>
            {open &&
                <PropertyModal
                    open={open}
                    setOpen={setOpen}
                    onClose={handleClose}
                    property={property}
                    tenants={tenants}
                    setTenants={setTenants}
                    contract={contract}
                    setContract={setContract}
                />
            }
            {add &&
                <PropertyAddModal
                    add={add}
                    setAdd={setAdd}
                    onClose={handleClose}
                    setProperty={setProperty}
                />
            }
            <Snackbar open={snackUp} autoHideDuration={4000} onClose={handleSnackclose} sx={{"width": 600,
                "height": 200}}>
                <Alert onClose={handleSnackclose} severity="success" sx={{"width": "100%"}}>A new contract has been created! </Alert>
            </Snackbar>

        </div>
    );

};

export default LandlordProperties;
