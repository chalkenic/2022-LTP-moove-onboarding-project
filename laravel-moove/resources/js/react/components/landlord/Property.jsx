import { Grid, Typography } from '@mui/material';
import { property } from 'lodash';
import * as LandlordTexts from '../../assets/texts/LandlordTexts';

const Property = (props) => {
	return (
		<Grid container alignItems={'center'} sx={{ paddingTop: '20px !important', paddingBottom: '20px !important', paddingLeft: '20px !important' }}>
			<Grid
				item
				xs={6}
				md={6}
				justifyContent={'center'}
			>
				image goes here
			</Grid>
			<Grid item xs={5} md={5}>
				<Typography variant="h6" align="center" sx={{ fontWeight: 700 }}>
					{props.property.pName}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1" align="center" sx={{ fontWeight: 700, marginTop: 2 }}>
					{props.property.pDescription}
				</Typography>
			</Grid>

			<Grid item xs={12}>
				<Typography variant="body1" align="center" sx={{ fontWeight: 700, marginInline: 4, marginTop: 5, marginBottom: 2 }} >
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
