/* eslint-disable no-plusplus */
/* eslint-disable no-undefined */
/* eslint-disable sort-imports */
/* eslint-disable no-ternary */
import React, {Fragment, useEffect, useState} from "react";
import * as LandlordTexts from "../../../assets/texts/LandlordTexts";
import {
    Box,
    Card,
    CardContent,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import PropTypes from "prop-types";
import AppTheme from "../../../assets/theme/theme";
import CircleIconCustom from "../../icons/CircleIconCustom";
import ContractTitle from "./ContractTitle";

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

const LandlordContractView = ({sections, landlord, property, contract}) => {

    const styles = useStyles();

    const [
        accepted,
        setAccepted
    ] = useState(0);

    const [
        headerCount,
        setheaderCount
    ] = useState(0);

    const [
        isShown,
        setIsShown
    ] = useState(false);

    // Use effect checks how many sections have been approved by tenants.
    useEffect(
        () => {

            let count = 0;
            let acceptCount = 0;

            for (let index = 0; index < sections.length; index++) {

                if (sections[index].header !== undefined && sections[index].header.length > 0) {

                    count++;

                }

            }
            setheaderCount(count);

            for (let acc = 0; acc < sections.length; acc++) {

                if (sections[acc].accepted === 1) {
                    acceptCount++;

                    

                }

            }
            setAccepted(acceptCount);
            setheaderCount(count);
        },
        []
    );

    return (
        <Grid container spacing={2}justifyContent="center">

            <Grid container item xs = {12} textAlign="center" flexDirection={"row"} >
                <Grid item xs={4}>
                    {contract.tenant_signed === 0
                        ? <b>{"Signed by tenant: FALSE"}</b>
                        : <b>{"Signed by tenant: TRUE"}</b>}

                </Grid>
                <Grid item xs={4}>
                    {contract.landlord_signed === 0
                        ? <b>{"Signed by landlord: FALSE"}</b>
                        : <b>{"Signed by landlord: TRUE"}</b>}

                </Grid>
                <Grid item xs={4}>
                    <b> {`Sections accepted: ${accepted}/${headerCount}` }</b>
                </Grid>
            </Grid>

            <Box className={styles.dividerLight} />
            <Grid item xs={12} justifyContent="center">
                {sections.length > 0
                    ? <>
                        <Paper variant="outlined" sx={{"paddingBottom": "30px"}}>
                            <Grid container justifyContent="center" paddingTop="30px">

                                <ContractTitle property={property}/>

                                <Grid item xs={11}>
                                    { sections.map((section, index) => <div key = {index}>
                                        {section.header !== undefined && section.header.length > 0
                                            ? <Grid container flexDirection="row">
                                                <Grid item xs={11}>
                                                    <Typography variant="h4"align="center" >
                                                        {section.header}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={1} alignContent={"right"} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>

                                                    <CircleIconCustom statusColor={section.accepted} />
                                                    {isShown &&
                                                        <>
                                                            {section.accepted === 0
                                                                ? <Typography position="absolute" variant="caption" sx={{"paddingTop": "4px",
                                                                    "paddingLeft": "0.1%"}}>Declined</Typography>
                                                                : <Typography position="absolute" variant="caption" sx={{"paddingTop": "4px",
                                                                    "paddingLeft": "0.1%"}}>Approved</Typography>}
                                                        </>
                                                    }

                                                </Grid>
                                            </Grid>


                                            : <></>}


                                        <Typography paragraph >
                                            {section.title !== undefined && section.title.length > 0
                                                ? <><b>{section.title}: </b>{section.value}</>
                                                : section.value }
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
                                                    <b>{LandlordTexts.LandlordAddContTexts.prevLandSigTitle}</b>
                                                </CardContent>
                                            </Grid>

                                            <CardContent className={styles.divider} />
                                            <Grid item xs={12}>
                                                <CardContent>
                                                    <Typography>
                                                        <img src= {property.landlord_signature_blob} />
                                                        

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
                                                    <b>{LandlordTexts.LandlordAddContTexts.PrevTenSigTitle}</b >
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

                    </>
                    : <Typography align="center">{LandlordTexts.LandlordAddContTexts.prevNoContentMsg}</Typography>}


            </Grid>
        </Grid>
    );

};

LandlordContractView.propTypes = {
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

    "landlord": PropTypes.shape({
        "id": PropTypes.number.isRequired,
        "name": PropTypes.string.isRequired,
        "role": PropTypes.string.isRequired

    }),
    "sections": PropTypes.arrayOf(PropTypes.shape({
        "map": PropTypes.any,
        "length": PropTypes.any,
        "header": PropTypes.string,
        "title": PropTypes.string,
        "value": PropTypes.string.isRequired,
        "accepted": PropTypes.number.isRequired
    })),

    "contract": PropTypes.shape({
        "id": PropTypes.number.isRequired,
        "property_id": PropTypes.number.isRequired,
        "landlord_signed": PropTypes.number.isRequired,
        "tenant_signed": PropTypes.number.isRequired

    }),

    "type": PropTypes.string
};
export default LandlordContractView;
