import react, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {tenants} from './TenantList'
import {useParams} from 'react-router-dom';


const TenantApplication = () => {
   
    const { id } = useParams();

    

    return(
        <h1>Tenant Application Page</h1>,

        <h2>{tenants[id].fName} {tenants[id].lName}</h2>
    ) 
}

export default TenantApplication;