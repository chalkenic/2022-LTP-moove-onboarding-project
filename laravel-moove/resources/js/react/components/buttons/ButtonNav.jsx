import axios from 'axios';
import React from 'react';
import { Button } from '@mui/material';
import AppTheme from '../../assets/theme/theme';
import { ThemeProvider } from '@emotion/react';
import { styled, useTheme } from '@mui/system';
import { HashRouter, Route, Link } from 'react-router-dom';

// Handles all buttons that appear within navigation bar.

// Custom Mui button that contains overrides depending on color prop provided on declaration.
const ButtonNav = styled(Button, {
	shouldForwardProp: (props) =>
		props !== 'color' &&
		props !== 'variant' &&
		props !== 'sx' &&
		props !== 'href' &&
		props !== 'to' &&
		props !== 'type' &&
		props !== 'key',
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
				// href={props.page.link}
				disabled={props.disabled}
				type={props.page.type}
				to={props.page.to}
				key={props.page.key}
			>
				{props.children}
			</ButtonNav>
		</ThemeProvider>
	);
};
export default ButtonNavCustom;
