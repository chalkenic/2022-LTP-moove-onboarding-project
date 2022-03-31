import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import {Button, Alert} from '@mui/material';
import React from 'react';



const InviteLandlordComponent = ({}) => {
    const [showSuccess, setShowSuccess] = React.useState(false);
    const [showError, setShowError] = React.useState(false);
    const postPost = () => setShowSuccess(true);    

    const createLandlordInv = () => {
        axios
        .post("/admin-invite-landlord", {
            email: document.getElementById("emailField").value,
        })
        .then(() => {
            postPost();
        })
        .catch((error) => {
            console.log(error.message);
            setShowError(true);
        });
      }
    
    return (
        <div>
            { showSuccess ? <div><Alert severity="success">Email successfully sent, awaiting their response!</Alert><br></br></div> : null }
            { showError ? <div><Alert severity="error">Email failed to send, an error has occurred! Please check your input and try again.</Alert><br></br></div> : null }
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
