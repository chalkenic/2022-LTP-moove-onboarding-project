import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const TenantList = ({ applicants }) => {
    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-white border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            First
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Last
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-100 border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            1
                                        </td>
                                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                            Mark
                                        </td>
                                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                            Otto
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                            Jacob
                                        </td>
                                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                            Thornton
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="font-bold">Tenant List Page</h1>
            <h2>{applicants.length > 0 ? 'Click a tenant\'s name to view their application'
                : 'No tenants waiting for approval. Nice work!'}</h2>
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
