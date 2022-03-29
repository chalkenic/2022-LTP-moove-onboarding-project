import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableContainer, tableCellClasses, TableHead, TableRow, TableCell, Paper, Alert,AlertTitle, Button } from "@mui/material";
import { View } from 'react-native-web';
import { convertStatusId, capitalizeFirstLetter } from "../helpers/helper";
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
  
  const onRowClick = event => {
    const tenantName = event.currentTarget.getAttribute("data-rowid");
    setSelectedTenantName(tenantName);
    handleShow();
  };


  return (
    <div>
      { !window.noTenancy ? 

      <div id="tenantTable">

      <View id = "tableHeader" style={{justifyContent: 'space-between', alignItems:'center',flexDirection:'row'}}>
        <div>{window.property.name}</div>
        <div>Status: <b>{capitalizeFirstLetter(window.property.status)}</b></div>
        <Button variant="outlined">View Property</Button>
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
            <StyledTableRow key={row.id} data-rowid={row.name} onClick={onRowClick}>
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

    <Modal onClose={handleClose} show={show} tenantName={tenantName}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
          fuga omnis a sed impedit explicabo accusantium nihil doloremque
          consequuntur.
        </Modal>
    </div>
  );
}
export default TenancyApplicationProgress;
