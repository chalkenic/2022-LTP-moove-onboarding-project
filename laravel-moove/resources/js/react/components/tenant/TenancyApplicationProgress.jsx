import React from 'react';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableContainer, tableCellClasses, TableHead, TableRow, TableCell, Paper, Alert,AlertTitle, Button } from "@mui/material";
import { View } from 'react-native-web';


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

/*
const rowData = [
  {
    id: '1',
    name: 'Johnny Ive',
    status: "Application Approved",
    date: "20/20/2021",
  },
  {
    id: '2',
    name: 'Pippin Penner',
    status: "Application Submitted",
    date: "19/20/2021",
  }
];
console.log(window.noTenancy + " tenancy ");
console.log(window.tenants);*/

const TenancyApplicationProgress = () => {
  return (
    <div>
      { !window.noTenancy ? 

      <div id="tenantTable">

      <View id = "tableHeader" style={{justifyContent: 'space-between', alignItems:'center',flexDirection:'row'}}>
        <div>{window.property.name}</div>
        <div>Status: <b>{window.property.status}</b></div>
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
            <StyledTableRow key={row.id}>
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
    </div>
  );
}
export default TenancyApplicationProgress;
