import { Box, styled } from "@mui/material";

export const AuthBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
  })(({ theme, open, drawerWidth }) => ({
   display:"flex",
   justifyContent:"center",
   flexDirection:"column",
   alignItems:"center",
  //  border:"1px solid red",
  //  height:"80vh"
  }));