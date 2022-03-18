import { CardActionArea, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { DUMMY_PROPERTIES } from "../assets/texts/LandlordTexts";
import LandlordHeader from "../components/headers/LandlordHeader";
import PropertyCard from "../cards/PropertyCard";
import Property from "../components/landlord/Property";
import { useState, useEffect, useRef } from "react";
import PropertyModal from "../components/landlord/PropertyModal";
import axios from "axios";
import { data } from "autoprefixer";

const LandlordProperties = () => {
    const isMounted = useRef(false);
    const properties = window.properties;
    const [open, setOpen] = useState(false);
    const [property, setProperty] = useState({});
    const [tenants, setTenants] = useState([]);
    const [error, setError] = useState(null);

    // const setModalState = (props) =>{
    // 	setOpen(props);
    // }

    const handleOpen = (property) => {
        setProperty(property);
        let propUrl = `/tenants/${property.id}`;
        axios.get(propUrl).then(res => {
            setTenants(res.data.tenants);
        });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setProperty({});
        setTenants();
    };

    // useEffect(() => {
    //     if (isMounted.current) {
    //         // .then((res) => {
    //         //     const tenants = parse(res.data);
    //         //     setTenants(tenants);
    //         // })
    //         // .catch((err) => {
    //         //     setError(err.message);
    //         // });
    //     } else {
    //         isMounted.current = true;
    //     }
    // }, [property]);

    return (
        <div>
            <LandlordHeader />

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
                                    onClick={() =>
                                        handleOpen(property, tenants)
                                    }
                                >
                                    <Property property={property} />
                                </PropertyCard>
                            </Grid>
                        );
                    })}
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
        </div>
    );
};

export default LandlordProperties;
