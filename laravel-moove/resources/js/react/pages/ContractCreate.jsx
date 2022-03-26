/* eslint-disable no-shadow */
/* eslint-disable no-ternary */
import {
    Card,
    CardContent,
    DialogContent,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Box} from "@mui/system";
import React, {Fragment, useEffect, useState} from "react";
import * as LandlordTexts from "../assets/texts/LandlordTexts";
import AppTheme from "../assets/theme/theme";
import ContractCard from "../cards/ContractCard";
import ContractHeader from "../components/headers/ContractHeader";
import ContractRow from "../components/tables/ContractRow";

const useStyles = makeStyles(() => ({
    "titleText": {
        "fontFamily": "sans-serif",
        "paddingBottom": "5 !important",
        "align": "center"
    },

    "headerText": {
        "paddingTop": "8px !important",
        "fontWeight": "600 !important",
        "fontSize": 22,
        "color": `${AppTheme.palette.landlord.dark} !important`
    },
    "dividerLight": {
        "borderBottom": "1px solid #808080 !important",
        "padding": "0 !important",
        "marginLeft": "5%",
        "marginRight": "5%"
    }

}));

const ContractCreate = (props) => {

    const styles = useStyles();

    const [
        sections,
        setSections
    ] = useState([]);


    return (
        <Fragment>
            <ContractHeader type="create" name={props.property.name} />
            <Box>

                <ContractCard setSections = {setSections} sections = {sections}/>
                <Grid container spacing={2}justifyContent="center">
                    <Grid item xs={12} >
                        <Typography variant="h4" align="center" sx={{"paddingTop": "15px",
                            "paddingBottom": "15px",
                            "fontWeight": "600",
                            "textDecoration": "underline"}}>
                            {LandlordTexts.LandlordAddContTexts.contPrevTitle}
                        </Typography>
                    </Grid>
                    <Box className={styles.dividerLight} />
                    <Grid item xs={12} justifyContent="center">
                        {sections.length > 0
                            ? <Paper variant="outlined" sx={{"paddingBottom": "30px"}}>
                                <Grid container justifyContent="center" paddingTop="30px">
                                    <Grid item xs={12}>
                                        <Typography variant="h4" textAlign="center" sx={{"fontWeight": 600,
                                            "textDecoration": "underline"}}>
                                            {LandlordTexts.LandlordAddContTexts.prevTitle}
                                        </Typography>
                                        <Grid item xs={12} justifyContent="center" paddingBottom = "20px">
                                            <Typography style={{"display": "table",
                                                "margin": "0 auto"}} align="center" >
                                                {LandlordTexts.LandlordAddContTexts.prevDisclaimer1}
                                            </Typography>
                                            <Typography style={{"display": "table",
                                                "margin": "0 auto"}} align="center" >
                                                {LandlordTexts.LandlordAddContTexts.prevDisclaimer2}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Typography paragraph>
                                            {"The tenants known as __________________ hereby agree to rent the dwelling located at: "}

                                        </Typography>

                                        <Typography paragraph>
                                            <b>{` ${props.property.name}.`}</b>

                                        </Typography >

                                        <Typography paragraph>
                                            {"The premises are to be occupied by the above named tenants only. Tenant may not sublet premises."}

                                        </Typography>


                                    </Grid>
                                    <Grid item xs={11}>
                                        { sections.map((section, index) => <div key = {index}>
                                            <Typography variant="h4"align="center" >
                                                {section.header}
                                            </Typography>
                                            <Typography paragraph >
                                                {section.title !== undefined && section.title.length > 0
                                                    ? <><b>{section.title}: </b>{section.content}</>
                                                    : section.content }
                                            </Typography>
                                        </div>)}
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Typography paragraph>
                                            <b>{LandlordTexts.LandlordAddContTexts.prevAcknowledgementTitle}</b>
                                            {LandlordTexts.LandlordAddContTexts.prevAcknowledgementContent}

                                        </Typography>

                                    </Grid>
                                </Grid>
                                <Grid container paddingLeft="10px" justify="center" style={{"maxWidth": "100%"}}>
                                    <Grid item xs={6}>
                                        <Grid container flexDirection="column" >
                                            <Card align="center">
                                                <Grid item xs={12}>
                                                    <CardContent >
                                                        <b>LANDLORD SIGNATURE</b>
                                                    </CardContent>
                                                </Grid>

                                                <CardContent className={styles.divider} />
                                                <Grid item xs={12}>
                                                    <CardContent>
                                                        <Typography>
                                                            {props.landlord.name.toUpperCase()}

                                                        </Typography>
                                                    </CardContent>
                                                </Grid>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Grid container flexDirection="column" padding="0 10px">
                                            <Card align="center">
                                                <Grid item xs={12}>
                                                    <CardContent >
                                                        <b>TENANT SIGNATURE</b >
                                                    </CardContent>
                                                </Grid>

                                                <CardContent className={styles.divider} />
                                                <Grid item xs={12}>
                                                    <CardContent>
                                                        <Typography>
                                                            ...

                                                        </Typography>
                                                    </CardContent>
                                                </Grid>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Paper>
                            : <Typography align="center">Contract and content will be added here after first section submission</Typography>}


                    </Grid>
                </Grid>


            </Box>
        </Fragment>
    );

};

export default ContractCreate;
