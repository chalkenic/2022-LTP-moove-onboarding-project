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
	const [scroll, setScroll] = useState("paper");
	const [property, setProperty] = useState({});
	const [tenants, setTenants] = useState();


	// const setModalState = (props) =>{
	// 	setOpen(props);
	// }

	const handleOpen = (property)=> {
		setProperty(property);
		console.log("test", property.name);
		setOpen(true);
		
	}

	const handleClose =() => {
		setOpen(false);
		setProperty({});
	}
 
	useEffect(() => {
		console.log(property);

	}, [property]);


	

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
								
								<PropertyCard onClick={()=> handleOpen(property)}>															
										<Property property={property} tenants ={tenants} />		
								</PropertyCard>
							</Grid>
						);
					})}
					
				</Grid>
			</Grid>
			{open && <PropertyModal modalState={open} setOpen={setOpen} onClose={handleClose} scrolltype={scroll} property={property}/>}
		</div>
	);
};

export default LandlordProperties;
