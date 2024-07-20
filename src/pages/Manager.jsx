// import React from 'react';
import Layout from "../components/GlobalComponents/layout/Layout";
import { Box, Typography } from "@mui/material";
import { OrdersData, managerSideBar } from "../data/sidebar";
import StatsCard from "../components/statsCard";
import { Title } from "@mui/icons-material";
import { TicketTable } from "../features/ticketModule";

const Manager = () => {
  return (
    <Layout sideBarData={managerSideBar()}>
      <Box sx={{ marginTop: "2rem", mx: "0", border: "1px  yellow",display:"flex",justifyContent:"flex-start",flexWrap:"wrap",gap:"1rem" }}>
        {OrdersData.map((val) => {
          return <StatsCard key={val.title} {...val} />;
        })}
      </Box>
      <Box sx={{my:"2.5rem",width:"98%"}}>
         <Typography variant="h3" sx={{mb:"1rem"}}>All Tickets</Typography>
         < TicketTable />
      </Box>
    </Layout>
  );
};

export default Manager;
