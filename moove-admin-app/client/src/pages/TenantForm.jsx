import { useEffect } from "react";
import TenantCheckForm from "../components/TenantCheckForm";

const TenantForm = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("TenantForm");
  });
  
  return <div style={{backgroundColor:'white', display: 'flex',  justifyContent:'center', alignItems:'center', width: '900px',
  height: '400px'}}>
  <TenantCheckForm/>
</div>
};

export default TenantForm;
