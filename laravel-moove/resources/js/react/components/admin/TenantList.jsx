import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const TenantList = ({applicants}) => {
    return (
        <>
            <h1>Tenant List Page</h1>
            <List>
                {applicants.map((tenant, key) => (
                    <a href={`/admin-tenant-application/${tenant.id}`}>
                        <ListItem key={key} className="list-item">aa</ListItem>
                    </a>
                ))}
            </List>
        </>
    )
}

export default TenantList
