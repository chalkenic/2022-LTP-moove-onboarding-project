import Button from "@mui/material/Button";
import { useState } from "react";
import axios from 'axios'

const TenantApplication = ({ data }) => {

  const [filesOpen, setFilesOpen] = useState(false);
  const [error, setError] = useState(null);
  const [aboutToReject, setAboutToReject] = useState(false);
  const [reason, setReason] = useState("");

  const filesButtonClick = () => {
    setFilesOpen(!filesOpen)
  }

  const handleApproval = () => {
    if (confirm('Really approve this application?')) {
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
  }

  const handleRejection = () => {
    if (confirm('Really reject this application?')) {
      setError(null)

      axios.put(data.requestRoute, {
        id: data.tenant.id,
        approved: false,
        notes: reason
      }).then((res) => {
        window.location.href = data.redirectRoute
      }).catch((err) => {
        setError(err)
      })
    }
  }

  const handleDelete = () => {
    if (confirm('Really delete this application?')) {
      setError(null)

      axios.delete(data.deleteRoute).then((res) => {
        window.location.href = data.redirectRoute
      }).catch((err) => {
        setError(err)
      })
    }
  }

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  }

  return (
    <div>
      <p>{error ?? ''}</p>

      <h1 className="font-medium leading-tight text-3xl mt-0 mb-2">
        Viewing Application
      </h1>

      <h4>{data.tenant.name}</h4>
      <h4>{data.tenant.email}</h4>

      {
        data.files.length > 0 &&
        <Button onClick={filesButtonClick}>
          {filesOpen ? 'Hide Files' : 'Show Files'}
        </Button>
      }

      <Button onClick={handleApproval}>Approve</Button>
      <Button onClick={() => setAboutToReject(!aboutToReject)}>Reject</Button>
      <Button onClick={handleDelete}>Delete</Button>

      {aboutToReject &&
        <div className="p-4 border border-solid border-gray-300">
          <p className="mb-4 flex">You're about to deny {data.tenant.name}'s application.
            Please provide some notes below so they know why their application was denied.
          </p>
          <input
            placeholder="Reason for rejection"
            type="text"
            className="
              form-control
              block
              w-1/3
              px-3
              py-1.5
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              mb-4
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
            onChange={handleReasonChange}></input>

          <Button onClick={handleRejection}>Submit</Button>
        </div>}

      {
        filesOpen &&
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
        </div>
      }

      {
        data.files.length === 0 &&
        <div className="mt-4 text-sm">
          This tenant hasn't uploaded any files yet.
        </div>
      }
    </div >
  );
};

export default TenantApplication;
