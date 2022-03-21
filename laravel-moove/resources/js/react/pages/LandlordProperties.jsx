import {  Grid, Typography } from "@mui/material";

import PropertiesHeader from "../components/headers/PropertiesHeader";
import PropertyCard from "../cards/PropertyCard";
import Property from "../components/landlord/Property";
import React, { useState } from "react";
import PropertyModal from "../components/landlord/PropertyModal";
import PropertyAddModal from "../components/landlord/PropertyAddModal";
import axios from "axios";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

const LandlordProperties = () => {
    const properties = window.properties;
    const [open, setOpen] = useState(false);
    const [add, setAdd] = useState(false);
    const [property, setProperty] = useState({});
    const [tenants, setTenants] = useState([]);

    // Source all tenants relating to property on modal open.
    const handleOpen = (property) => {
        setProperty(property);
        let propUrl = `/tenants/${property.id}`;
        axios.get(propUrl).then((res) => {
            setTenants(res.data.tenants);
        });
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
    };

    return (
        <div>
            <PropertiesHeader role="landlord"/>

            <Grid container justifyContent="center">
                <Grid
                    container
                    itemxs={12}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{ paddingLeft: { xs: "10px", sm: "20px", md: "20px" } }}
                    style={{ width: "100vw", overflow: "hidden" }}
                >
                    {properties.map((property, key) => {
                        return (
                            <Grid
                                key={key}
                                item
                                container
                                md={4}
                                sm={6}
                                xs={12}
                                justifyContent="center"
                                alignItems={"center"}
                            >
                                <PropertyCard
                                    name="modalClick"
                                    onClick={() =>
                                        handleOpen(property, tenants)
                                    }
                                >
                                    <Property property={property} />
                                </PropertyCard>
                            </Grid>
                        );
                    })}

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
                            onClick={() => handleAdd(property, tenants)}
                        >
                            <Typography
                                variant="h6"
                                paddingTop="20px"
                                align="center"
                                sx={{ fontWeight: 700 }}
                            >
                                New Property
                            </Typography>
                            <div
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -30%",
                                }}
                            >
                                <AddCircleOutlineSharpIcon
                                    color="success"
                                    align="center"
                                    sx={{ fontSize: 80 }}
                                />
                            </div>
                        </PropertyCard>
                    </Grid>
                </Grid>
            </Grid>
            {open && (
                <PropertyModal
                    open={open}
                    setOpen={setOpen}
                    onClose={handleClose}
                    property={property}
                    tenants={tenants}
                    setTenants={setTenants}
                />
            )}
            {add && (
                <PropertyAddModal
                    add={add}
                    setAdd={setAdd}
                    onClose={handleClose}
                    setProperty={setProperty}
                />
            )}
        </div>
    );
};

export default LandlordProperties;
