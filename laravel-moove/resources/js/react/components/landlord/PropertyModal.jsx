import { Button, Dialog, DialogTitle, Grid, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import * as LandlordTexts from '../../assets/texts/LandlordTexts';

const PropertyModal = (props) => {

    // const [open, setOpen] = useState(modalOpen);
    const [scroll, setScroll] = useState("paper");
    console.log(props.property);
    

    // const handleOpen = (scrollType)=>()=>{
    //     setOpen(true);
    //     setScroll(scrollType);
    // }

    const handleClose = ()=>{
        props.setOpen(false);
        console.log('close');
        }

    const descriptionElementRef = useRef(null);
	useEffect(()=> {
		if(props.modalState) {
            setScroll(props.scrollType);
			const {current: descriptionElement} = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [props.modalState]);


    return(
        <div>    
            <Dialog open={props.modalState} 
            onClose = {handleClose}
            scroll={scroll}
            aria-labelledby="scrolled-dialog-title"
            aria-describedby="scroll-dialog-description">

                <DialogTitle id="scroll-dialog-title" component="div">
                    {props.property.name}
                </DialogTitle>
            </Dialog>

        </div>);
}

export default PropertyModal;