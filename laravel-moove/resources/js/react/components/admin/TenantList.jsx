import { Button } from "@mui/material";

const TenantList = ({ applicants }) => {
    return (
        <>
            <h1 className="font-medium leading-tight text-3xl mt-0 mb-2">
                Pending Applications
            </h1>
            <h2>{applicants.length > 0 ? 'The below tenants are waiting for approval'
                : 'No tenants waiting for approval. Nice work!'}</h2>
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
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            View
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {applicants.map((tenant, key) => (
                                        <tr key={key} className="bg-gray-100 border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {tenant.id}
                                            </td>
                                            <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                                {tenant.name}
                                            </td>
                                            <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                                <Button size="small" variant="contained" onClick={() => window.location.href = `/admin-tenant-application/${tenant.id}`}>View</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TenantList
