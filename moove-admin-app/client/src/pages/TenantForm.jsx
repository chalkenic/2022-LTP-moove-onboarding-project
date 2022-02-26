import { useEffect } from "react";
import TenantCheckForm from "../components/TenantCheckForm";

const TenantForm = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("TenantForm");
  });
  return <TenantCheckForm currentPage={currentPage}/>;
};

export default TenantForm;
