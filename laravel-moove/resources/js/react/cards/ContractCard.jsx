import React from "react";
// Import { Grid, Card, CardActionArea } from "@mui/material";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";

const ContractCard = (props) =>

/*
 * <div>
 *     <Grid
 *         Item
 *         Xs={11}
 *         Display="flex"
 *         JustifyContent="center"
 *         Sx={{ minWidth: {xs: "150px", md: '145px'} }}
 *     >
 *         <CardActionArea
 *             Sx={{ height: 200, marginBlock: 3, borderRadius: 5 }}
 *             OnClick={onClick}
 *         >
 *             <Card elevation={10} sx={{ height: 200, borderRadius: 5 }}>
 *                 {children}
 *             </Card>
 *         </CardActionArea>
 *     </Grid>
 * </div>
 */
    <Paper sx={{"maxWidth": 936,
        "margin": "auto",
        "overflow": "hidden"}}>
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{"borderBottom": "1px solid rgba(0, 0, 0, 0.12)"}}
        >
            <Toolbar>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <AddIcon color="inherit" sx={{"display": "block"}} />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            fullWidth
                            placeholder="Enter Section Title"
                            InputProps={{
                                "disableUnderline": true,
                                "sx": {"fontSize": "default"}
                            }}
                            variant="standard"
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="success">
                Add Section
                        </Button>

                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{"borderBottom": "1px solid rgba(0, 0, 0, 0.12)"}}
        >
            <Toolbar>
                <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                        <AddIcon color="inherit" sx={{"display": "block"}} />
                    </Grid>
                    <Grid item xs>
                        
                        <TextField
                            fullWidth
                            multiline
                            placeholder="Enter section content"
                            hiddenLabel
                            InputProps={{
                                "disableUnderline": true,
                                "sx": {"fontSize": "default"}
                            }}
                            variant="standard"
                        />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar >
    </Paper>;
ContractCard.propTypes = {

};

export default ContractCard;
