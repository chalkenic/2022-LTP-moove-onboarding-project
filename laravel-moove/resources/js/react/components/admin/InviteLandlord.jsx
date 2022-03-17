import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';


const InviteLandlordComponent = ({}) => {
    return (
        <div>
            <h1>Invite Landlord to Moove and Automatically Setup as Landlord</h1><br></br>
            <FormControl sx={{ width: '25ch' }}>
  <OutlinedInput placeholder="Landlord Email" />
  <FormHelperText>Email (verify before submitting!)</FormHelperText>
</FormControl><br></br><br></br>
<Button variant="outlined">Send Email</Button>

        </div>
    )
}

export default InviteLandlordComponent
