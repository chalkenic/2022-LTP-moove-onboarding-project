import { Grid, Card, CardActionArea } from '@mui/material';
import PropertyModal from '../components/landlord/PropertyModal';

const PropertyCard = (props) => {
	
	return (
		<div>
		<Grid item xs={10} sx={{ maxWidth: '350px' }}>

			<Card elevation={20} sx={{ height: 300, marginBlock: 5, borderRadius: 5 }}>
					{props.children}
				
			</Card>
		</Grid>
		</div>
	);
};

export default PropertyCard;
