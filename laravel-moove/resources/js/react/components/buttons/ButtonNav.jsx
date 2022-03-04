import axios from 'axios';
import React from 'react';
import { Button } from '@mui/material';
import AppTheme from '../../assets/theme/theme';
import { ThemeProvider } from '@emotion/react';
import { styled, useTheme } from '@mui/system';
import { Link } from 'react-router-dom';

// Handles all buttons that appear within navigation bar.

// Custom Mui button that contains overrides depending on color prop provided on declaration.
const ButtonNav = styled(Button, {
	shouldForwardProp: (prop) =>
		prop !== 'color' && prop !== 'variant' && prop !== 'sx' && prop !== 'href' && prop !== 'to' && prop !== 'type',
	name: 'ButtonNav',
	slot: 'Root',
	// Colours sourced from App's main theme.
	overridesResolver: (props, styles) => [
		styles.root,
		props.color === 'ADMIN' && styles.admin,
		props.color === 'LANDLORD' && styles.landlord
	]
})(({ theme }) => ({
	// Default colours (Moove Yellow) if no colour provided.
	padding: '10px 25px',
	borderRadius: '12px !important',
	marginRight: '5px !important',
	fontSize: '11px !important',
	'&:hover': {
		backgroundColor: theme.palette.primary.dark
	},
	backgroundColor: theme.palette.primary.main
}));

const ButtonNavCustom = (props) => {
	const theme = useTheme(AppTheme);
	return (
		<ThemeProvider theme={theme}>
			<ButtonNav
				color={props.navColor}
				href={props.href}
				disabled={props.disabled}
				type={props.type}
				onClick={props.onClick}
			>
				{props.children}
			</ButtonNav>
		</ThemeProvider>
	);
};
export default ButtonNavCustom;
