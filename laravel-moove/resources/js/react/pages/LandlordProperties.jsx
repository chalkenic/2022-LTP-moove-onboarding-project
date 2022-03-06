import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { DUMMY_PROPERTIES } from '../assets/texts/LandlordTexts';
import LandlordHeader from '../components/headers/LandlordHeader';
import PropertyCard from '../cards/PropertyCard';
import Property from '../components/landlord/Property';

const LandlordProperties = (props) => {
	return (
		<Grid container>
			<LandlordHeader />
			<Grid container justifyContent={'center'}  item xs={12} spacing={2} justifyContent={'center'} alignItems="center">
				{DUMMY_PROPERTIES.map((propertyItem) => {
					return (
						<Grid key={propertyItem.pName} item sm={6} md={4}alignItems={'center'}>
							<PropertyCard>
								<Property property={propertyItem} />
							</PropertyCard>
						</Grid>
					);
				})}
			</Grid>
		</Grid>
	);
};

export default LandlordProperties;
