import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Slide from '@mui/material/Slide';
import TicketForm from '../ticketForm';
import { Box } from '@mui/material';
import DrawerHeader from '../drawerHeader';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TicketDialog({isOpen,handleTicketDialog}) {
   console.log("isopen",isOpen)
   const [images, setImages] = React.useState([]);
   

  return (
    <React.Fragment>
      
      <Dialog
        fullScreen
        open={isOpen}
        onClose={()=>{handleTicketDialog(false)}}
        TransitionComponent={Transition}
      >
       <DrawerHeader title={"Create Ticket"} handleTicketDialog={handleTicketDialog}  >
        <Button autoFocus color="inherit" onClick={()=>{handleTicketDialog(true)}}>
              save
            </Button>
        </DrawerHeader>
     <Box sx={{borderBottom:"1px solid red",paddingBottom:"2rem"}}>
     <TicketForm />
     </Box>
      </Dialog>
    </React.Fragment>
  );
}
