import Button from "@mui/material/Button";
import { useState } from "react";
import axios from 'axios'

const TenantApplication = ({data}) => {

  const [filesOpen, setFilesOpen] = useState(false);
  const [error, setError] = useState(null)

  const filesButtonClick = () => {
    setFilesOpen(!filesOpen)
  }

  const handleApproval = () => {
    setError(null)

    axios.put(data.requestRoute, {
      id: data.tenant.id,
      approved: true
    }).then((res) => {
      window.location.href = data.redirectRoute
    }).catch((err) => {
      setError(err.message)
    })
  }

  const handleRejection = () => {
    setError(null)

    axios.put(data.requestRoute, {
      id: data.tenant.id,
      approved: false
    }).then((res) => {
      window.location.href = data.redirectRoute
    }).catch((err) => {
      setError(err)
    })
  }

  return (
    <div>
      <p>{error ?? ''}</p>

      <h1>Tenant Application Page</h1>

      <h2>Name: {data.tenant.name}</h2>
      <h2>Email: {data.tenant.email}</h2>

      <Button onClick={filesButtonClick}>
        {filesOpen ? 'Hide Files' : 'Show Files'}
      </Button>
  
      <Button onClick={handleApproval}>Approve</Button>
      <Button onClick={handleRejection}>Deny</Button>

      
      
      {filesOpen &&
      <div className="flex justify-left">
        <table className="min-w-full rounded-lg shadow-md border-1 border-sky-500">
          <thead>
            <tr>
              <th>File name</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
          {data.files.map((file, key) => {
            return (
            <tr key={key}>
              <td className="p-3">{file.filename}</td>
              <td className="hover:underline"><a href={file.url}>View File</a></td>
            </tr>
            )
          })}
          </tbody>
        </table>
      </div>}
    </div>
  );
};

export default TenantApplication;
