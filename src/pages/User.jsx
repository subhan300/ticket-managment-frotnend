// import React from 'react';
import Layout from "../components/GlobalComponents/layout/Layout";
import { Alert, Box, Button, Typography } from "@mui/material";
import { OrdersData, userSideBar } from "../data/sidebar";
import StatsCard from "../components/statsCard";
import { useState } from "react";
import { flexBetween } from "../styles-components/global-styles/styles";
import {CreateTicket,TicketTable} from "../features/ticketModule";
import Comments from "../components/comments/Comments.jsx";
import useStore from "../store/index.js";
// import WriteComment from "../features/comment/components/WriteComment.jsx";
const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useStore((state) => state.user);

  const handleTicketDialog = (value) => {
    setIsOpen(value);
  };
  return (
    <>
 
      <CreateTicket isOpen={isOpen} handleTicketDialog={handleTicketDialog} />
   
      <Layout sideBarData={userSideBar()}>
        <Box
          sx={{
            marginTop: "2rem",
            mx: "0",
            border: "1px  yellow",
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {OrdersData.map((val) => {
            return <StatsCard key={val.title} {...val} />;
          })}
        </Box>
        <Box sx={{ my: "2.5rem", width: "98%", border: "1px  yellow" }}>
          <Box sx={{ ...flexBetween, mb: "1rem" }}>
            <Typography variant="h3" sx={{color:"var(--primary-color)"}}>All Tickets</Typography>
            <Button
              variant="contained"
              onClick={() => {
                handleTicketDialog(true);
              }}
            >
              Create Tickets
            </Button>
          </Box>

          <TicketTable />
        </Box>
      </Layout>
    </>
  );
};

export default User;
