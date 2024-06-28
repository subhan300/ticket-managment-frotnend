// import React from 'react';
import Layout from '../components/GlobalComponents/layout';
import { Box} from '@mui/material';
import { userSideBar } from '../data/sidebar';

const User = () => {
  return (
    <Layout sideBarData={userSideBar()}>
      <Box sx={{marginTop:"2rem",border:"1px solid red"}}>
        <h1> User Dashboard</h1>
        
      </Box>

    </Layout>
  );
}

export default User;
