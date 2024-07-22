import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
const DrawerHeader = ({handleTicketDialog,title,children}) => {
    return (
            <AppBar sx={{ position: 'relative',background:"var(--primary-color)" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={()=>{handleTicketDialog(false)}}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="div">
              {title}
            </Typography>
            {children}
          </Toolbar>
        </AppBar>
    );
}

export default DrawerHeader;
