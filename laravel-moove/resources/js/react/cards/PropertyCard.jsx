import React from "react";
import { Grid, Card, CardActionArea } from "@mui/material";
import PropTypes from "prop-types";

const PropertyCard = ({ onClick, children }) => {
    return (
        <div>
            <Grid
                item
                xs={11}
                display="flex"
                justifyContent="center"
                sx={{ maxWidth: "350px" }}
            >
                <CardActionArea
                    sx={{ height: 200, marginBlock: 3, borderRadius: 5 }}
                    onClick={onClick}
                >
                    <Card elevation={10} sx={{ height: 200, borderRadius: 5 }}>
                        {children}
                    </Card>
                </CardActionArea>
            </Grid>
        </div>
    );
};

PropertyCard.propTypes = {
    onClick: PropTypes.any,
    children: PropTypes.any,
};

export default PropertyCard;
