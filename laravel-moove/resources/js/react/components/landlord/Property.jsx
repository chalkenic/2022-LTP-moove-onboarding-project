import { Grid, Typography } from "@mui/material";

/*
	Handle presentation of data on summary property card component.
*/
const Property = (props) => {
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
                    {props.property.name}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Property;
