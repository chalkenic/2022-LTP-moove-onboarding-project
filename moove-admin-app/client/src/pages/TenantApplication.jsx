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

        <Box component="span" sx={{ p: 1 }}>

            <h1>Tenant Application Page</h1>

            <h2>First Name: {tenants[id].fName}</h2>
            <h2>Last Name: {tenants[id].lName}</h2>
            <h2>Email: {tenants[id].email}</h2>

            <Button>Approve</Button>                                 
            <Button>Deny</Button>

        </Box>
    ) 
}                                             

export default TenantApplication;