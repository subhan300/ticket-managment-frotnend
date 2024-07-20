// import React from 'react';
import Layout from '../components/GlobalComponents/layout/Layout';
import { Box} from '@mui/material';
import { TechnicianSideBar } from '../data/sidebar';
// import Comments from '../components/comments/Comments';
import useStore from '../store';
import { CommentSection } from '../features/comment';

const Technician = () => {
  const user = useStore((state) => state.user);
  return (
    <Layout sideBarData={TechnicianSideBar()}>
      <CommentSection ticketId={"66930b4fd27c53bc169b704b"} userId={user._id} comments={[]} />
      
      <Box sx={{marginTop:"2rem",border:"1px solid red"}}>
        <h1>Technician dashboard</h1>
        
      </Box>

    </Layout>
  );
}

export default Technician;
