import React from "react";
import Button from "@mui/material/Button";
import { tenants } from "./TenantList";
import { useParams } from "react-router-dom";




const TenantApplication = () => {
  

  return (
    <div>
      <h1>Tenant Application Page</h1>

      {/* <h2>First Name: {tenants[id].fName}</h2>
      <h2>Last Name: {tenants[id].lName}</h2>
      <h2>Email: {tenants[id].email}</h2> */}

    {/* <div>
        <button onClick={event => window.location.href=`/pdf`}>View Tenant Application PDF</button>
    </div> */}

      <Button>Approve</Button>
      <Button>Deny</Button>
      
    </div>
  );
};

export default TenantApplication;
