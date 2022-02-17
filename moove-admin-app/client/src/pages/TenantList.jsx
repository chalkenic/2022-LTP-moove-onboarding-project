import react, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TenantApplication from './TenantApplication';


export const tenants = [
    {id: 0, fName: "Rob", lName: "Robson"},
    {id: 1, fName: "John", lName: "Johnson"},
    {id: 2, fName: "Bobby", lName:  "Bobbs"},
    {id: 3, fName: "Sam", lName: "Samuels"}
];


const TenantList = () => {

    
    return (
        <List>
            <div>
            <h1>Tenant List Page</h1>
            {tenants.map(tenant => (
                <ListItem onClick={event => window.location.href=`/tenantApplication/${tenant.id}`}>{tenant.fName} {tenant.lName}</ListItem>
            ))}
            </div>
        </List>
    );
}

export default TenantList;

