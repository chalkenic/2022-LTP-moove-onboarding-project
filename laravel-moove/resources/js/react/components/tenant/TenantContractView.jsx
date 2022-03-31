import React, {Fragment, useEffect, useState} from "react";
import * as TenantTexts from "../../assets/texts/TenantTexts"
import {
    Box,
    Button,
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
import axios from "axios";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

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

    const getBackgroundColor = (section) => {
    let color;
    if (section.accepted == 1) {
        color = '#dcedc8';
    } else {
        color = 'white';
    }
    return color;
};

    const getContractBackground = (bool) => {
    let color;
    if (bool == true) {
        color = "#c8e6c9";
    } else {
        color = 'white';
    }
    return color;
};

     const styles = useStyles();

     const [ complete, setComplete] = useState(false);

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

    const handleUpdate = () => {
        
        axios.put(data.requestRoute, {
            id: data.contract.id,
            sections: sections
        }).then((res) => {
            window.location.href = data.redirectRoute
        }).catch((err) => {
            console.log(err)
        });

    }
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
        [setSections]
    );

    useEffect(
        () => {

            let headerCount = 0;
            let acceptCount = 0;
            for (let index = 0; index < data.details.length; index++) {

                if (data.details[index].header !== undefined && sections[index].header.length > 0) {

                    headerCount++;

                }

            }
            

            // Increment label for sections accepted by data parsed into component.
            for (let acc = 0; acc < sections.length; acc++) {
                if (sections[acc].accepted === 1) {

                    acceptCount++;

                    
                    
                }
            }
            setheaderCount(headerCount);
            setAccepted(acceptCount);

            if (headerCount === acceptCount) {
                setComplete(true);
            }


        },
        []
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
            <Grid item xs={12} justifyContent="center" >
                {sections.length > 0
                    ? <>
                        <Paper variant="outlined" sx={{"paddingBottom": "30px"}} style={{"backgroundColor": getContractBackground(complete)}}>
                            <Grid container justifyContent="center" paddingTop="30px">

                                <ContractTitle property={data.property}/>

                                <Grid item xs={11}>
                                    { sections.map((section, index) => <div key = {index}>
                                        <Grid container style={{"backgroundColor": getBackgroundColor(section) }}>
                                        {section.header !== undefined && section.header.length > 0
                                            ? <Grid container flexDirection="row" style={{"backgroundColor": getContractBackground(complete)}}>
                                                <Grid item xs={11}>
                                                    <Typography variant="h4"align="center" >
                                                        {section.header}
                                                    </Typography>
                                                </Grid>
                                            <Grid item xs={1} alignContent={"right"} style={{"backgroundColor": getContractBackground(complete)}}>

                                        {section.accepted === 0 ? <RadioGroup
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
                                                label={<DoneIcon></DoneIcon>}
                                            />
                                            <FormControlLabel
                                                
                                                value={0}
                                                control={<Radio />}
                                                label={<CloseIcon></CloseIcon>}
                                            />
                                        </RadioGroup> : < Grid item xs={1} style={{"backgroundColor": getContractBackground(complete)}}/>}
                                        

                                                </Grid>
                                            </Grid>


                                            : <></>}

                                        <Grid container style={{"backgroundColor": getContractBackground(complete)}}>
                                        <Typography paragraph  >
                                            {section.title !== undefined && section.title.length > 0
                                                ? <><b>{section.title}: </b>{section.value}</>
                                                : section.value }
                                        </Typography>
                                        </Grid>
                                        </Grid>
                                    </div>)}
                                </Grid>
                                <Grid item xs={11 }>
                                    <Typography paragraph>
                                        <b>{TenantTexts.TenantContTexts.acknowledgementTitle}</b>
                                        {TenantTexts.TenantContTexts.acknowledgementContent}

                                    </Typography>

                                </Grid>
                            </Grid>
                            <Grid container paddingLeft="10px" justify="center" style={{"maxWidth": "100%"}} style={{"backgroundColor": getContractBackground(complete)}}>
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

                        <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Box textAlign="center" padding={(2, 2, 2, 2)}>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleUpdate}
                                size="large"
                            >
                                {
                                    TenantTexts.TenantContTexts.
                                        buttonAccept
                                }
                            </Button>
                        </Box>
                    </Grid>
                    </Grid>

                    </>
                    : <Typography align="center">{TenantTexts.TenantContTexts.noContentMsg}</Typography>
                    }


            </Grid>
        </Grid>
    );

};

export default TenantContractView;