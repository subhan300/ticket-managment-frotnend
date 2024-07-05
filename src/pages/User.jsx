// import React from 'react';
import Layout from '../components/GlobalComponents/layout';
import { Box, Button, Typography} from '@mui/material';
import { OrdersData, userSideBar } from '../data/sidebar';
import StatsCard from '../components/statsCard';
import DataGridDemo from '../components/customTable';
import TicketDrawer from '../components/ticketDrawer';
import { details } from '../components/customTable/columns';
import { useState } from 'react';
import { flexBetween } from '../styles-components/global-styles/styles';
import TicketDialog from '../components/ticketDialog';

const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("isopen user",isOpen)
  const handleTicketDialog=(value)=>{
    setIsOpen(value)
   
  }
  return (
   <>
    <TicketDialog isOpen={isOpen} handleTicketDialog={handleTicketDialog} />
    {/* {isOpen &&  <TicketDrawer handleDrawer={handleDrawer} isOpen={isOpen} row={details} />} */}
    <Layout sideBarData={userSideBar()}>
      
       <Box sx={{ marginTop: "2rem", mx: "0", border: "1px  yellow",display:"flex",justifyContent:"flex-start",flexWrap:"wrap",gap:"1rem" }}>
        {OrdersData.map((val) => {
          return <StatsCard key={val.title} {...val} />;
        })}
      </Box>
      <Box sx={{my:"2.5rem",width:"98%"}}> 
        <Box sx={{...flexBetween,mb:"1rem"}}>
        <Typography variant="h3" >All Tickets</Typography>
        <Button variant='contained' onClick={()=>{handleTicketDialog(true)}} >Create Tickets</Button>
        </Box>

          <DataGridDemo />
      </Box>

    </Layout>
   </>
  );
}

export default User;
