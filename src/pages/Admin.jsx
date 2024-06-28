// import React from 'react';
import Layout from '../components/GlobalComponents/layout';
import { Box} from '@mui/material';
import { adminSideBar } from '../data/sidebar';

const Admin = () => {
  return (
    <Layout sideBarData={adminSideBar()}>
      <Box sx={{}}>
        <h1>Admin </h1>
        
      </Box>

    </Layout>
  );
}

export default Admin;
