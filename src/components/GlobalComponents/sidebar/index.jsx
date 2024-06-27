import React, { useContext, useEffect, useState } from "react";
import { SideBarStyled } from "./style";
import useSidebarStore from "../../../store/sidebarStore";
import { Box, Typography } from "@mui/material";

function SideBar() {
  const { layoutWidth, toggleSidebar, setInitialWidth } = useSidebarStore();
 

  console.log("layoutWidth.sidebarWidth", layoutWidth.sidebarWidth);
  return (
    <SideBarStyled style={{width:layoutWidth.sidebarWidth}} className="sidebar">
      <Box sx={{borderBottom:'1px solid rgb(240, 240, 240)',display:"flex",justifyContent:"center",px:4,py:0,height:'73.5px',alignItems:"center"}} onClick={toggleSidebar}>
           {/* <Typography variant="h4"> Man Admin</Typography> */}
           <div>
             <img style={{height:"30px"}} src={"https://www.brandbucket.com/images7/head_logo2s.png?"}></img>
          </div>
      </Box >
    </SideBarStyled>
  );
}

export default SideBar;
