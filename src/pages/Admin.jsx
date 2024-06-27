import React from 'react';
import Layout from '../components/GlobalComponents/layout';
import { Box, Typography } from '@mui/material';
  
  const Admin = () =>  {
	return (
	  <Layout>
          <Box sx={{padding:"1rem"}}>
          <h1>My content will show here</h1>
          {[1,2,3,4].map(val=><Typography variant="h3">subhan</Typography>)}
          {[1,2,3,4].map(val=><h1>content here there</h1>)}
          {[1,2,3,4].map(val=><h1>content here there</h1>)}
          {[1,2,3,4].map(val=><h1>content here there</h1>)}
          {[1,2,3,4].map(val=><h1>content here there</h1>)}
          {[1,2,3,4].map(val=><h1>content here there</h1>)}
          {[1,2,3,4].map(val=><h1>content here there</h1>)}
          {[1,2,3,4].map(val=><h1>content here there</h1>)}
          {[1,2,3,4].map(val=><h1>content here there</h1>)}
          </Box>
          
      </Layout>
	);
  }
  
  export default Admin;
  