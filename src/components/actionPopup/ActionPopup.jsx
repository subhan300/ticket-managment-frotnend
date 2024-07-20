import { Box, Popover } from "@mui/material";
import React from "react";

const ActionPopup = ({ open, children }) => {
  return (
    <Popover
      open={Boolean(open)}
      anchorEl={open}
      sx={{position:"absolute",marginTop:"5.5rem",marginLeft:"-.7rem",padding:"1rem"}}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <Box sx={{padding:"6px 10px",BorderRadius:"10px"}}>
      {children}
      </Box>
    </Popover>
  );
};

export default ActionPopup;
