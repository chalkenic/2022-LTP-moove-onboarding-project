import { Grid, Paper } from '@mui/material';

const PropertyCard = (props) => {
	return (
		<Grid item xs={10} sx={{ maxWidth: '350px' }}>
			<Paper elevation={20} sx={{ height: 300, marginBlock: 5, borderRadius: 5 }}>
                
				{props.children}
			</Paper>
		</Grid>
	);
};

export default PropertyCard;
