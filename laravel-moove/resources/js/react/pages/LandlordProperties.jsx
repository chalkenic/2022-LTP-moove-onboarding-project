import { CardActionArea, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { DUMMY_PROPERTIES } from '../assets/texts/LandlordTexts';
import LandlordHeader from '../components/headers/LandlordHeader';
import PropertyCard from '../cards/PropertyCard';
import Property from '../components/landlord/Property';
import { useState, useEffect, useRef } from 'react';
import PropertyModal from '../components/landlord/PropertyModal';

const LandlordProperties = (props) => {

	const properties = window.properties;
	const [open, setOpen] = useState(false);

	const [tenants, setTenants] = useState(null);
	const [scroll, setScroll] = useState('paper');

	const setModalState = (props) =>{
		setOpen(props);
	}

	const handleOpen = (scrollType, key)=>()=> {
		console.log(key);
		setOpen(true);
		setScroll(scrollType)
	}

	const handleClose = () => {
		setOpen(false);
	}

	const descriptionElementRef = useRef(null);
	useEffect(()=> {
		if(open) {
			const {current: descriptionElement} = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [open])

	useEffect(() => {

	}, [tenants]);
	

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
					{properties.map((property, key) => {
						return (
							<Grid key={key} item container md={4} sm={6} xs={12} spacing={2} justifyContent="center" alignItems={'center'}>
								
								<PropertyCard>
									<CardActionArea onClick={handleOpen("paper", key)}>
									{open && <PropertyModal open={open} onClose={handleClose} scroll = {scroll} state = {setModalState()}/>}
										<Property property={property} />
									</CardActionArea>
									
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
