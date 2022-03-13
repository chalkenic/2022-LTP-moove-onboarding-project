import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { DUMMY_PROPERTIES } from '../assets/texts/LandlordTexts';
import LandlordHeader from '../components/headers/LandlordHeader';
import PropertyCard from '../cards/PropertyCard';
import Property from '../components/landlord/Property';

const LandlordProperties = (props) => {

	const properties = window.properties;
	return (
		<div>
			<LandlordHeader />

			<Grid container justifyContent="center">
				<Grid
					container
					itemxs={12}
					justifyContent="center"
					alignItems="center"
					spacing={2}
					sx={{ paddingLeft: { xs: '10px', sm: '20px', md: '20px' } }}
					style={{ width: '100vw', overflow: 'hidden' }}
				>
					{/* <Grid container justifyContent={'center'}  item xs={12} > */}
					{properties.map((property) => {
						return (
							<Grid key={property.name} item container md={4} sm={6} xs={12} spacing={2} justifyContent="center" alignItems={'center'}>
								<PropertyCard>
									<Property property={property} />
								</PropertyCard>
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</div>
	);
};

export default LandlordProperties;
