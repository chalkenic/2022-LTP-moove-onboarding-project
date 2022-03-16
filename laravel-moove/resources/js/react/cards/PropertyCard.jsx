import { Grid, Card, CardActionArea } from '@mui/material';
import PropertyModal from '../components/landlord/PropertyModal';

const PropertyCard = (props) => {
	
	return (
		<div>
		<Grid item xs={12} sx={{ maxWidth: '350px' }}>

		<CardActionArea sx={{height: 200, marginBlock: 3, borderRadius: 5}} onClick={props.onClick}>
			<Card elevation={10} sx={{ height: 200, borderRadius: 5}}>
				
					{props.children}
				
				
			</Card>
			</CardActionArea>
			
		</Grid>
		</div>
	);
};

export default PropertyCard;
