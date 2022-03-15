import { Grid, Typography } from '@mui/material';
import { property } from 'lodash';
import { useState } from 'react';
import * as LandlordTexts from '../../assets/texts/LandlordTexts';

const Property = (props) => {

	// const tenants = Array.from(props.property.tenants);
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
					{props.property.name}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1" align="center" sx={{ fontWeight: 700, marginTop: 2 }}>
					{props.property.location}
				</Typography>
			</Grid>


			<Grid item xs={12}>
				<Typography variant="body1" align="center" sx={{ fontWeight: 700, marginInline: 4, marginTop: 2, marginBottom: 1 }} >
					{LandlordTexts.LandlordPropsTexts.propertyTenantTitle}
				</Typography>
				{/* <Grid container direction={'column'}>
					{tenants.map((tenant) => {
						return (
							<Grid item xs={6} align="center" key={tenant}>
								{tenant}
							</Grid>
						);
					})}
				</Grid> */}
			</Grid>
		</Grid>
	);
};

export default Property;
