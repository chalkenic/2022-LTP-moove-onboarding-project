import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableContainer, tableCellClasses, TableHead, TableRow, TableCell, Paper, Alert,AlertTitle, Button } from "@mui/material";
import { View } from 'react-native-web';
import { convertStatusId, capitalizeFirstLetter, descFromStatusId} from "../helpers/helper";
import Modal from ".//TenancyApplicationModal";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

var tenantsClone = window.tenants;

if (window.tenants){ 
  window.tenants.forEach(function(tenantino) {
    tenantino.status = convertStatusId(tenantino.status)
    console.log(tenantino.status);
  });
}

const TenancyApplicationProgress = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedTenantName, setSelectedTenantName] = useState("");
  const [selectedTenantStatus, setSelectedTenantStatus] = useState("");
  const [showError, setShowError] = React.useState(false);

  const hasPropertyImage = ((window.property.image).length > 0);
  const hasPropertyUrl = ((window.property.moove_url).length > 0);

  const onRowClick = event => {
    const tenantName = event.currentTarget.getAttribute("data-tenantname");
    const tenantStatus = event.currentTarget.getAttribute("data-tenantstatus");
    setSelectedTenantName(tenantName);
    setSelectedTenantStatus(descFromStatusId(tenantStatus));
    handleShow();
  };

  const onSuccessClick = event=> {
    window.open(window.property.moove_url, '_blank').focus();
  }
  const onFailClick = event=> {
    setShowError(true);
  }

  return (
    <div>
       { showError ? <div><Alert severity="warning">No property URL associated, listing may have been removed from moove</Alert><br></br></div> : null }

      { !window.noTenancy ? 

      <div id="tenantTable">

      <View id = "tableHeader" style={{justifyContent: 'space-between', alignItems:'center',flexDirection:'row'}}>
        <div style={{display:'flex'}}>{ hasPropertyImage ?
        <div>
          <img src={window.property.image} style={{borderRadius: 50 + '%',marginRight:20+"px"}} height={50} width={40} alt="property image"></img>
        </div>
        : <div>
          <img src="https://cdn.pixabay.com/photo/2013/07/13/12/10/building-159338_960_720.png" style={{borderRadius: 50 + '%',marginRight:20+"px"}} height={50} width={40} alt="property image"></img>
          </div>
        }<p style={{marginTop:6+"px"}}>{window.property.name}</p></div>
        <div>Status: <b>{capitalizeFirstLetter(window.property.status)}</b></div>
        {
        hasPropertyUrl ? <Button onClick={onSuccessClick} variant="outlined">View Property</Button>
        : <Button onClick={onFailClick} variant="outlined">View Property</Button>
        }
    </View>
    <br></br>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="right">Tenant Name</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Date Completed</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {window.tenants.map((row) => (
            <StyledTableRow key={row.id} data-tenantname={row.name} data-tenantstatus={row.status} onClick={onRowClick}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    : <div id="no-application-started">
      <Alert severity="warning">
        <AlertTitle>Notice</AlertTitle>
        You have not yet started an application — <strong>moove out of here!</strong>
      </Alert>
    </div> }

    <Modal onClose={handleClose} show={show} tenantName={selectedTenantName}>
          {selectedTenantStatus}
        </Modal>
    </div>
  );
}
export default TenancyApplicationProgress;
