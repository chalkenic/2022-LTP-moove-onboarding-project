import { Grid, Typography } from '@mui/material';
import { property } from 'lodash';
import { useState } from 'react';
import * as LandlordTexts from '../../assets/texts/LandlordTexts';

const Property = (props) => {

	// const tenants = Array.from(props.property.tenants);
	return (
		<Grid container alignItems={'center'} sx={{ paddingTop: '40px !important', paddingLeft: '20px !important', paddingBottom: '20px !important' }}>
			<Grid
				item
				xs={12}
				md={12}
				// justifyContent={'center'}
				align={'center'}
			>
				image goes here
			</Grid>
			<Grid item xs={12} md={12}>
				<Typography variant="h6" align="center" sx={{ fontWeight: 700 }}>
					{props.property.name}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Property;
