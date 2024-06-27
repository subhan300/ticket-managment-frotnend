import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import PhotoFilterOutlinedIcon from '@mui/icons-material/PhotoFilterOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "../components/GlobalComponents/navbar";
import { BottomBarBox } from "../components/GlobalComponents/layout/style";
import BottomBar from "../components/GlobalComponents/bottom-bar";
import { maxSideWidth, minSideWidth } from "../helper/constants";

const minDrawerWidth = minSideWidth;
const maxDrawerWidth = maxSideWidth;

const openedMixin = (theme, drawerWidth) => ({
  width: `${drawerWidth}px`,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme, drawerWidth) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `${drawerWidth}px`,
  // border:"1px solid yellow"
  // [theme.breakpoints.up("sm")]: {
  //   width: `calc(${drawerWidth}px + 1px)`,
  // },
});

const DrawerHeader = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: open ? "flex-start" : "center",
  // border:"1px solid yellow",
  padding: "0 10px",
  height: "74px",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" || prop !== "drawerWidth",
})(({ theme, open, drawerWidth }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

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

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [drawerWidth, setDrawerWidth] = React.useState(maxDrawerWidth);
  const handleDrawer = (isOpen, value) => {
    setOpen(isOpen);
    setDrawerWidth(value);
  };

  const handleDrawerClose = () => {
    setDrawerWidth(minDrawerWidth);
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar drawerWidth={drawerWidth} position="fixed" open={open} />
      <Drawer variant="permanent" drawerWidth={drawerWidth} open={open}>
        <DrawerHeader open={open}>
          <IconButton
            sx={{ position: "relative" ,color: 'var(--icon-color)',}}
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
                color:'var(--icon-color)',
                position: "absolute",
                //  color:"yellow0"
                left: open ? "2rem" : "-1rem",
                opacity: open ? "1" : "0",
                top:"0"
              }}
            >
              TMS
            </Typography>
            {open ? <ChevronLeftIcon sx={{color:'var(--icon-color)',marginTop:"-3px"}} /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ px: 2 }}>
          {["Add Ticket", "Assign", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
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
                   color: 'var(--icon-color)',
                    minWidth: 0,
                    // mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <AppsOutlinedIcon /> : <PhotoFilterOutlinedIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ display: open ? "block" : "none",}}
                  primaryTypographyProps={{
                    sx: { fontWeight: 400,  },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 4, marginTop: "90px" }}>
        {/* <DrawerHeader /> */}
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
      <BottomBarBox className="bottom_bar_div">
        <BottomBar />
      </BottomBarBox>
    </Box>
  );
}
