import react, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


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
            {tenants.map(tenant => (
                <ListItem>{tenant.name}</ListItem>
            ))}
            </div>
        </List>
    );
}

export default TenantList;

