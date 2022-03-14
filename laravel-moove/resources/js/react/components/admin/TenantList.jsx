import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const TenantList = ({applicants}) => {
    return (
        <>
            <h1 className="font-bold">Tenant List Page</h1>
            <h2>Click a tenant's name to view their application</h2>
            <List>
                {applicants.map((tenant, key) => (
                    <a key={`a${key}`} href={`/admin-tenant-application/${tenant.id}`}>
                        <ListItem key={key} className="list-item">
                            <p>{tenant.name}</p>
                        </ListItem>
                    </a>
                ))}
            </List>
        </>
    )
}

export default TenantList
