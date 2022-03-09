import react, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { tenants } from "./TenantList";
import { useParams } from "react-router-dom";
import ViewPdf from './ViewPdf';



const TenantApplication = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Tenant Application Page</h1>,<h2>First Name: {tenants[id].fName}</h2>
      <h2>Last Name: {tenants[id].lName}</h2>
      <h2>Email: {tenants[id].email}</h2>

    <div>
        <button onClick={event => window.location.href=`/pdf`}>View Tenant Application PDF</button>
    </div>

      <Button>Approve</Button>
      <Button>Deny</Button>
      
    </div>
  );
};

export default TenantApplication;
