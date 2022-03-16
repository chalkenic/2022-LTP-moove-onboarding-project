import { Button, Dialog, DialogTitle, Grid, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import * as LandlordTexts from '../../assets/texts/LandlordTexts';

const PropertyModal = ({modalOpen, state}) => {

    // const [open, setOpen] = useState(modalOpen);
    const [scroll, setScroll] = useState("paper");

    const handleOpen = (scrollType)=>()=>{
        setOpen(true);
        setScroll(scrollType);
    }

    const handleClose = ()=>{
        setOpen(false);
        state(false);
        console.log('close');
        }

    const descriptionElementRef = useRef(null);

    useEffect(()=> {
        if(open) {
            const {current: descriptionElement } = descriptionElementRef;

            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
        }, [open]);
    


    return(
        <div>    
            <Dialog open={modalOpen} 
            onClose = {handleClose  }
            scroll={scroll}
            aria-labelledby="scrolled-dialog-title"
            aria-describedby="scroll-dialog-description">

                <DialogTitle id="scroll-dialog-title" component="div">
                    Test
                </DialogTitle>
            </Dialog>

        </div>);
}

export default PropertyModal;