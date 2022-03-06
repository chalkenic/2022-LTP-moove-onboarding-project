import { Grid, Typography } from '@mui/material';
import { property } from 'lodash';
import * as LandlordTexts from '../../assets/texts/LandlordTexts';

const Property = (props) => {
	return (
		<Grid container alignItems={'center'}>
			<Grid
				item
				xs={4}
				md={4}
				justifyContent={'center'}
				sx={{ paddingTop: '40px !important', paddingBottom: '40px !important', paddingLeft: '10px !important' }}
			>
				image goes here
			</Grid>
			<Grid item xs={7} md={7}>
				<Typography variant="h6" align="center" sx={{ fontWeight: 700 }}>
					{props.property.pName}
				</Typography>
			</Grid>
			<Grid item xs={11}>
				<Typography variant="body1" align="center" sx={{ fontWeight: 700 }}>
					{props.property.pDescription}
				</Typography>
			</Grid>

			<Grid item xs={11}>
				<Typography variant="body1" align="center" sx={{ fontWeight: 700 }}>
					{LandlordTexts.LandlordPropsTexts.propertyTenantTitle}
				</Typography>
				<Grid container direction={'column'}>
					{props.property.pTenants.map((tenant) => {
						return (
							<Grid item xs={6} align="center" key={tenant.name}>
								{tenant.name}
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Property;
