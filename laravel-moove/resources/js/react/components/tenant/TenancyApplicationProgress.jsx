import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Paper, Alert } from "@mui/material";


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

const TenancyApplicationProgress = () => {
  return (
    <div>
      { !window.noTenancy ? 

      <div id="tenantTable">
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 10,width:'100%',backgroundColor:'white',padding:4,border:"1px solid grey",marginBottom:"4px"}}>
    <div>"image" 80 May Street</div>
    <div>Status: <b>Requires additional forms</b></div>
    <div>View Property</div>
  </div>
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
          {rowData.map((row) => (
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
