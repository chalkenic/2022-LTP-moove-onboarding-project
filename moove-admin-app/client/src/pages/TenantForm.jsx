import { useEffect } from "react";
import TenantCheckForm from "../components/TenantCheckForm";

const TenantForm = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("TenantForm");
  });
  
  return <div style={{backgroundColor:'yellow', display: 'flex',  justifyContent:'center', alignItems:'center',
  }}>
  <div style={{backgroundColor:'white', display: 'flex',  justifyContent:'center', alignItems:'center', width: '700px',height:'400px'}}><TenantCheckForm/></div>
</div>
};

export default TenantForm;
