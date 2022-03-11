import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";



//A temporary list of tenants to use as dummy data

export const tenants = [
    {id: 0, fName: "Rob", lName: "Robson", email: "rob@hotmail.com"},
    {id: 1, fName: "John", lName: "Johnson", email: "john@hotmail.com"},
    {id: 2, fName: "Bobby", lName:  "Bobbs", email: "bob@gmail.com"},
    {id: 3, fName: "Sam", lName: "Samuels", email: "sam@protonmail.gov"}
]


//Returns list of tenants

const TenantList = (props) => {

    return (
        
        <List>
            <div>
            <h1>Tenant List Page</h1>
            {tenants.map(tenant => (
                <ListItem className="list-item" onClick={event => window.location.href=`/tenantApplication/${tenant.id}`}>{tenant.fName} {tenant.lName}</ListItem>
            ))}
            </div>
        </List> 
        
        
    )
}

export default TenantList

