import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Navbar from "../navbar";
import { BottomBarBox } from "./style";
import BottomBar from "../bottom-bar";
import { maxSideWidth, minSideWidth } from "../../../helper/constants";
import PropTypes from "prop-types";
import useCustomNavigate from "../../../hooks/useCustomNavigate";
const minDrawerWidth = minSideWidth;
const maxDrawerWidth = maxSideWidth;

const openedMixin = (theme, drawerWidth) => ({
  width: `${drawerWidth}px`,
   background:"var(--primary-color)",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.easeInOut,
    duration:130,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme, drawerWidth) => ({
  background:"var(--primary-color)",

  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.easeInOut,
    duration:130,
  }),
  overflowX: "hidden",
  width: `${drawerWidth}px`,
});

const DrawerHeader = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: open ? "flex-start" : "center",
  padding: "0 10px",
  height: "74px",
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})(({ theme, open, drawerWidth }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
 
  // border: "1px solid yellow",
  ...(open && {
    ...openedMixin(theme, drawerWidth),
    "& .MuiDrawer-paper": openedMixin(theme, drawerWidth),
  }),
  ...(!open && {
    ...closedMixin(theme, drawerWidth),
    "& .MuiDrawer-paper": closedMixin(theme, drawerWidth),
  }),
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export default function Layout({ children, sideBarData }) {
  const navigate = useCustomNavigate();
  const [open, setOpen] = React.useState(true);
  const [drawerWidth, setDrawerWidth] = React.useState(maxDrawerWidth);
  const handleDrawer = (isOpen, value) => {
    setOpen(isOpen);
    setDrawerWidth(value);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <Navbar drawerWidth={drawerWidth} position="fixed" open={open} />
      <Drawer variant="permanent" drawerWidth={drawerWidth} open={open}>
        <DrawerHeader open={open}>
          <IconButton
            sx={{ position: "relative", color: "var(--icon-color)" }}
            onClick={() => {
              handleDrawer(
                open ? false : true,
                drawerWidth == maxDrawerWidth ? minDrawerWidth : maxDrawerWidth
              );
            }}
          >
            <Typography
              variant="h3"
              sx={{
                marginLeft: "10px",
                color: "var(--icon-color)",
                position: "absolute",
                //  color:"yellow0"
                left: open ? "2rem" : "-1rem",
                opacity: open ? "1" : "0",
                top: "0",
              }}
            >
              TMS
            </Typography>
            {open ? (
              <ChevronLeftIcon
                sx={{ color: "var(--icon-color)", marginTop: "-3px" }}
              />
            ) : (
              <MenuIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ px: 2 ,mt:".7rem"}}>
          {sideBarData.map((val) => (
            <ListItem key={val.title} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(val.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "auto" : "center",
                  // ,border:"1px solid blue",
                  px: 2.5,
                  gap: "1rem",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "var(--icon-color)",
                    minWidth: 0,
                    // mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {<val.icon />}
                </ListItemIcon>
                <ListItemText
                  primary={val.title}
                  sx={{ display: open ? "block" : "none" }}
                  primaryTypographyProps={{
                    sx: { fontWeight: 400 ,color:"var(--icon-color)"},
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider sx={{mt:"6rem"}} /> */}
      </Drawer>
      <Box
        component="main"
        sx={(theme)=>({ 
          // flexGrow: 1, wdth: "100%",
          // flexGrow:1, 
          marginTop: "75px", px: 6,
            width:"100%",
          [theme.breakpoints.up('sm')]: {
           width:`calc(100% - ${drawerWidth}px)`
          },

          
          
          
        })}
      >
        {children}
      </Box>
      <BottomBarBox className="bottom_bar_div">
        <BottomBar />
      </BottomBarBox>
    </Box>
  );
}

// Layout.
Layout.propTypes = {
  children: PropTypes.node,
  sideBarData: PropTypes.array,
};
