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




const TenantList = () => {

    const tenants = [
        {name: "Rob Robson"},
        {name: "John Johnson"},
        {name: "Bobby Bobbs"},
        {name: "Sam Samuels"}
    ];

    return (
        <List>
            <div>
            <h1>Tenant List Page</h1>
            {tenants.map(tenant => (
                <ListItem onClick={event => window.location.href='/tenantApplication'}>{tenant.name}</ListItem>
            ))}
            </div>
        </List>
    );
}

export default TenantList;

