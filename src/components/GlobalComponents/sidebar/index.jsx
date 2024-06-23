import React, { useContext, useEffect, useState } from "react";
import { SideBarStyled } from "./style";
import useSidebarStore from "../../../store/sidebarStore";

function SideBar() {
  const { layoutWidth, toggleSidebar, setInitialWidth } = useSidebarStore();
 

  console.log("layoutWidth.sidebarWidth", layoutWidth.sidebarWidth);
  return (
    <SideBarStyled style={{width:layoutWidth.sidebarWidth}} className="sidebar">
      <div onClick={toggleSidebar}>SideBar j</div>
    </SideBarStyled>
  );
}

export default SideBar;
