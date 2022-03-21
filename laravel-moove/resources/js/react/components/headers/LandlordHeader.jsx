import React from "react";
import AppTheme from '../../assets/theme/theme';
import { useTheme } from '@mui/system';
import {  Grid, Typography } from '@mui/material';
import * as LandlordTexts from '../../assets/texts/LandlordTexts';

const LandlordHeader = () => {
	const theme = useTheme(AppTheme);

	return (
		<Grid item xs={12} justifyContent="space-evenly" alignItems="center" style={{ marginTop: 5 }}>
			<Typography
				color={theme.palette.text.dark}
				sx={{ fontWeight: 800, marginTop: 5 }}
				textAlign="center"
				variant="h4"
			>
				{LandlordTexts.LandlordPropsLandingTitle.title}
			</Typography>
		</Grid>
	);
};

export default LandlordHeader;
