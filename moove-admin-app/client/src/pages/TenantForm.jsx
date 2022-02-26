import { useEffect } from "react";
import TenantCheckForm from "../components/TenantCheckForm";

const TenantForm = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("TenantForm");
  });
  return <div><TenantCheckForm/></div>;
};

export default TenantForm;
