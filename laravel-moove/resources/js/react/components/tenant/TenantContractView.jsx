import React, {Fragment, useEffect, useState} from "react";
import * as TenantTexts from "../../assets/texts/TenantTexts"
import {
    Box,
    Card,
    CardContent,
    FormControlLabel,
    Grid,
    Paper,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import PropTypes from "prop-types";
import AppTheme from "../../assets/theme/theme";
import ContractTitle from "../landlord/contract/ContractTitle";

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

const TenantContractView = ({ data })=> {

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

    const [sections,
        setSections
    ] = useState(data.details);

    // Use effect checks how many sections have been approved by tenants.
    useEffect(
        () => {

            let count = 0;
            let acceptCount = 0;

            for (let index = 0; index < data.details.length; index++) {

                if (data.details[index].header !== undefined && data.details[index].header.length > 0) {

                    count++;

                }

            }
            setheaderCount(count);

            for (let acc = 0; acc < sections.length; acc++) {

                if (sections[acc].accepted === "1") {


                   acceptCount++;

                }

            }

            setAccepted(acceptCount);

        },
        [sections]
    );

    return (
        <Grid container spacing={2}justifyContent="center">

            <Grid container item xs = {12} textAlign="center" flexDirection={"row"} >
                <Grid item xs={4}>
                    {data.contract.tenant_signed === 0
                        ? <b>{"Signed by tenants: FALSE"}</b>
                        : <b>{"Signed by tenants: TRUE"}</b>}

                </Grid>
                <Grid item xs={4}>
                    {data.contract.landlord_signed === 0
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

                                <ContractTitle property={data.property}/>

                                <Grid item xs={11}>
                                    { sections.map((section, index) => <div key = {index}>
                                        {section.header !== undefined && section.header.length > 0
                                            ? <Grid container flexDirection="row">
                                                <Grid item xs={11}>
                                                    <Typography variant="h4"align="center" >
                                                        {section.header}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={1} alignContent={"right"}>

                                        <RadioGroup
                                            row
                                            name="row-radio-occupied"
                                            required={true}
                                            id="prop-postcode"
                                            className={styles.infoText}
                                            onChange={(e) => {section.accepted = e.target.value;
                                            setSections([...sections])}
                                            }
                                        >
                                            <FormControlLabel
                                                value={1}
                                                control={<Radio />}
                                                label="Approve"
                                            />
                                            <FormControlLabel
                                                defaultChecked="true"
                                                value={0}
                                                control={<Radio />}
                                                label="Deny"
                                            />
                                        </RadioGroup>

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
                                        <b>{TenantTexts.TenantContTexts.acknowledgementTitle}</b>
                                        {TenantTexts.TenantContTexts.acknowledgementContent}

                                    </Typography>

                                </Grid>
                            </Grid>
                            <Grid container paddingLeft="10px" justify="center" style={{"maxWidth": "100%"}}>
                                <Grid item xs={6}>
                                    <Grid container flexDirection="column" >
                                        <Card align="center">
                                            <Grid item xs={12}>
                                                <CardContent >
                                                    <b>{TenantTexts.TenantContTexts.landSigTitle}</b>
                                                </CardContent>
                                            </Grid>

                                            <CardContent className={styles.divider} />
                                            <Grid item xs={12}>
                                                <CardContent>
                                                    <Typography>
                                                        {data.landlord.name.toUpperCase()}

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
                                                    <b>{TenantTexts.TenantContTexts.tenSigTitle}</b >
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
                    : <Typography align="center">{TenantTexts.TenantContTexts.noContentMsg}</Typography>
                    }


            </Grid>
        </Grid>
    );

};

export default TenantContractView;