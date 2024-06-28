// import React from 'react';
import Layout from '../components/GlobalComponents/layout';
import { Box} from '@mui/material';
import { TechnicianSideBar } from '../data/sidebar';

const Technician = () => {
  return (
    <Layout sideBarData={TechnicianSideBar()}>
      <Box sx={{marginTop:"2rem",border:"1px solid red"}}>
        <h1>Technician dashboard</h1>
        
      </Box>

    </Layout>
  );
}

export default Technician;
