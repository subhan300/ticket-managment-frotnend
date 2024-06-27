import React from "react";

import { BottomBarBox, BoxContent, LayoutStyle } from "./style";
import useSidebarStore from "../../../store/sidebarStore";
import SideBar from "../sidebar";
import Navbar from "../navbar";
import BottomBar from "../bottom-bar";
import { Box } from "@mui/material";
import useLayoutWidth from "../../../hooks/useLayoutWidth";

export default function Layout({ children }) {
  const { layoutWidth } = useSidebarStore();
  useLayoutWidth();

  return (
    <Box className="dashboard_container" sx={{ width: "100%" }}>
      <SideBar />
      <BoxContent
        className={`dasboard_content `}
        style={{
          width: `calc(100% - ${layoutWidth.sidebarWidth})`,
          marginLeft: layoutWidth.sidebarWidth,
        }}
      >
        <Navbar />
        <div className="main_content">{children}</div>
      </BoxContent>
      <BottomBarBox className="bottom_bar_div">
        <BottomBar />
      </BottomBarBox>
    </Box>
  );
}
