import { Grid, Paper } from '@mui/material';
import PropertyModal from '../components/landlord/PropertyModal';

const PropertyCard = (props) => {
	return (
		<div>
		<PropertyModal/>
		<Grid item xs={10} sx={{ maxWidth: '350px' }}>
			<Paper elevation={20} sx={{ height: 300, marginBlock: 5, borderRadius: 5 }}>
                
				{props.children}
			</Paper>
		</Grid>
		</div>
	);
};

export default PropertyCard;
