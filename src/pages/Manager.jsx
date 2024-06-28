// import React from 'react';
import Layout from '../components/GlobalComponents/layout';
import { Box, Typography} from '@mui/material';
import { managerSideBar } from '../data/sidebar';

const Manager = () => {
  return (
    <Layout sideBarData={managerSideBar()}>
      <Box sx={{py:3,m:0,border:"1px  yellow"}}>
        <Typography variant='h1'>Manager dashboard</Typography>
        
      </Box>

    </Layout>
  );
}

export default Manager;
