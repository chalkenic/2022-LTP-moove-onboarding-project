import React, { useEffect } from "react";
import Button from "@mui/material/Button";

const tenants = [
  {id: 0, fName: "Rob", lName: "Robson", email: "rob@hotmail.com"},
  {id: 1, fName: "John", lName: "Johnson", email: "john@hotmail.com"},
  {id: 2, fName: "Bobby", lName:  "Bobbs", email: "bob@gmail.com"},
  {id: 3, fName: "Sam", lName: "Samuels", email: "sam@protonmail.gov"}
]

const TenantApplication = ({id}) => { 

  return (
    <div>
      <h1>Tenant Application Page</h1>

      <h2>First Name: {tenants[id].fName}</h2>
      <h2>Last Name: {tenants[id].lName}</h2>
      <h2>Email: {tenants[id].email}</h2>

    {/* <div>
        <button onClick={event => window.location.href=`/pdf`}>View Tenant Application PDF</button>
    </div> */}

      <Button>Approve</Button>
      <Button>Deny</Button>
      
    </div>
  );
};

export default TenantApplication;
