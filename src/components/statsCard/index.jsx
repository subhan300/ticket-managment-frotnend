import { Card, Chip, Typography } from "@mui/material";
import React from "react";

const StatsCard = ({title,description,amount}) => {
  return (
    <Card sx={{ p: 4, width: "300px" }}>
      <Typography variant="h6" sx={{ color: "var(--gray-color)" }}>
      {title}
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: "16px", marginTop: "3px" }}>
      {amount}
        <Chip
          label="59.3 %"
          size="small"
          color="primary"
          sx={{
            marginLeft: "8px",
            borderRadius: "4px",
            background: "rgb(230, 244, 255)",
            color: "rgb(105, 177, 255)",
            fontFamily: "",
            fontSize:"12px",
            marginTop:"-4px"
          }}
        />
      </Typography>
      {/* <Typography
        variant="caption"
        sx={{ color: "var(--gray-color)", marginTop: "18px" }}
      > */}
       {description}
      {/* </Typography> */}
    </Card>
  );
};

export default StatsCard;
