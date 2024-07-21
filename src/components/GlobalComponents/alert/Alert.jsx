import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import useStore from "../../../store"; // Replace with your store import
import { Box, Snackbar, Fade, Slide } from "@mui/material";
const RightSlideTransition = React.forwardRef((props, ref) => (
  <Slide {...props} ref={ref} direction="left" />
));
const severityStyles = {
  error: {
    backgroundColor: "#f44336",
    color: "#fff",
  },
  success: {
    backgroundColor: "#4caf50",
    color: "#fff",
  },
};

const Alerts = () => {
  const { open, message, severity, closeAlert } = useStore();

  useEffect(() => {
    if (open) {
      const timeoutId = setTimeout(() => closeAlert(), 1200); // Close after 12 seconds
      return () => clearTimeout(timeoutId); // Cleanup function
    }
  }, [open, closeAlert]);

  if (!open) return null; // Don't render if alert is closed

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      // TransitionComponent={Fade}
      TransitionComponent={RightSlideTransition}
      // autoHideDuration={12000} // Optional: Set auto-hide duration
      message={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding:"0 1rem",
            marginTop:"4px"
          }}
        >
          <AlertTitle >{message} </AlertTitle>
        </Box>
      }
      key={"fade-slide"} // Optional: Key to prevent unnecessary re-renders
      sx={{
     
        "& .MuiPaper-root": {
          padding:"0",
          ...severityStyles[severity],
        },
      }}
    />
  );
};

export default Alerts;
