import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar } from "@mui/material";
import PropTypes from 'prop-types';
import useStore from "../../../store";
import useCustomNavigate from "../../../hooks/useCustomNavigate";


const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})(({ theme, drawerWidth }) => ({
  background: "white",
  // border:"1px solid red",
  boxShadow: "none",
  height: "75px",
  color: "black",
  padding: "0 8px",
 
  borderBottom: "1px solid rgb(240, 240, 240)",
  borderLeft: "1px solid rgb(240, 240, 240)",
width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: `${drawerWidth}px`,
  
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    width: '100%',
  },
}));
export default function Navbar({ drawerWidth, open }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const setLogOut = useStore((state) => state.setLogOut);
  const user=useStore(state=>state.user)
 const navigate=useCustomNavigate()
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleLogOut=()=>{
    // debugger
    setLogOut()
    navigate("/login")

    
  }

  const menuId = "account-menu";
  const id="basic-button"
  const renderMenu = (
    <Menu
    id={menuId}
    anchorEl={anchorEl}
    open={isMenuOpen}
    onClose={handleMenuClose}
    MenuListProps={{
      'aria-labelledby': id,
    }}
  >
    {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem> */}
    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    <MenuItem onClick={handleLogOut}>Logout <LogoutIcon sx={{ml:3}} /></MenuItem>
  </Menu>
  );

  // const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  //         <Badge badgeContent={4} color="error">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton
  //         size="large"
  //         aria-label="show 17 new notifications"
  //         color="inherit"
  //       >
  //         <Badge badgeContent={17} color="error">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         size="large"
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );
  return (
    // <Box sx={{ flexGrow: 1, position: "relative" }}>
    <>
      <AppBarStyled
        drawerWidth={drawerWidth}
        position="fixed"
        open={open}
      // sx={{left:`calc(${layoutWidth} + 0px)`,transition: '0.3s ease-out',  width: `calc(100% - ${layoutWidth})`}}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
         
          <div>
            <img
              style={{ height: "30px" }}
              // src={"https://www.brandbucket.com/images7/head_logo2s.png?"}
              src={"https://229288.fs1.hubspotusercontent-na1.net/hubfs/229288/maintenancecare-theme-2023/images/logo-color.svg"}
            ></img>
            {/* <Typography variant="h2">Admin Dashboard</Typography> */}
          </div>
          <Box sx={{ width: "auto", display: "flex", alignItems: "center" }}>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" ,position:"relative"} }}>
           
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon sx={{color:"var(--primary-color)"}} />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                id={id}
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                sx={{position:"relative",}}
              >
                
                <Avatar
                  sx={{ width: "50px", height: "50px" }}
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGh1bWFufGVufDB8fDB8fHww"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "4px",
                    marginLeft:"6px"
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: "bolder",color:"var(--secondary-color)" }}>
                    {user.name.toUpperCase()}
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: "bolder" ,textTransform:"capitalize",color:"var(--secondary-color)" }}>
                    {user.role.toLowerCase()}
                  </span>
                </Box>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={id}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBarStyled>
      {/* {renderMobileMenu} */}
                 {renderMenu}
    {/* </Box> */}
    </>
  );
}

Navbar.propTypes = {
  drawerWidth: PropTypes.string,
   open: PropTypes.bool
}