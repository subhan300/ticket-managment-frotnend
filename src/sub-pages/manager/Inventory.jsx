import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { InventoryTable } from "../../features/managerModule/inventory";
import { CreateInventory } from "../../features/managerModule/inventory";
import { flexBetween } from "@/styles-components";

const Inventory = () => {
  const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isCreateRoute = location.pathname.includes("/create");
  const handleTicketDialog = (value) => {
    navigate(`/manager/inventory/${value || ''}`);  
  };
  return (
    <Box>
      <CreateInventory
        isOpen={isCreateRoute}
        handleTicketDialog={handleTicketDialog}
      />
      <Box sx={{ marginTop: "1rem" }}>
        <Box sx={{ ...flexBetween, mb: "1rem" }}>
          <Typography variant="h3" sx={{ color: "var(--primary-color)" }}>
            Inventories
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              handleTicketDialog("create");
            }}
          >
            Create Inventory
          </Button>
        </Box>
        <InventoryTable />
      </Box>
    </Box>
  );
};

export default Inventory;
