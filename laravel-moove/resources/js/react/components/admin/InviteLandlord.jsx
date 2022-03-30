import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import React from 'react';


const createLandlordInv = () => {
    axios
    .post("/landlord-sign-tenancy", {
        email: document.getElementById("emailField").value,
    })
    .then(() => {
        console.log("send");
    })
    .catch((error) => {
        console.log(error.message);
    });
  }

const InviteLandlordComponent = ({}) => {
    return (
        <div>
            <h1>Invite Landlord to Moove and Automatically Setup as Landlord</h1><br></br>
            <FormControl sx={{ width: '25ch' }}>
  <OutlinedInput id="emailField" placeholder="Landlord Email" />
  <FormHelperText>Email (verify before submitting!)</FormHelperText>
</FormControl><br></br><br></br>
<Button variant="outlined" onClick={createLandlordInv}>Send Email</Button>

        </div>
    )
}

export default InviteLandlordComponent
