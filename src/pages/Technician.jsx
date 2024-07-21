// import React from 'react';
import Layout from "../components/GlobalComponents/layout/Layout";
import { Box, Button, Typography } from "@mui/material";
import { OrdersData, TechnicianSideBar } from "../data/sidebar";
// import Comments from '../components/comments/Comments';
import useStore from "../store";
import { CommentSection } from "../features/comment";
import StatsCard from "../components/statsCard";
import { flexBetween } from "../styles-components/global-styles/styles";
import { TicketTable } from "../features/technicianModule";

const Technician = () => {
  const user = useStore((state) => state.user);
  return (
    <Layout sideBarData={TechnicianSideBar()}>
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
          <Typography variant="h3" sx={{ color: "var(--primary-color)" }}>
            All Tickets
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              // handleTicketDialog(true);
            }}
          >
            Create Tickets
          </Button>
        </Box>

        <TicketTable />
      </Box>
    </Layout>
  );
};

export default Technician;
