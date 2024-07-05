import PhotoFilterOutlinedIcon from "@mui/icons-material/PhotoFilterOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { MANAGER, TECHNICIAN } from "../../helper/constants";
import { Typography } from "@mui/material";
export const managerSideBar = () => {
  return [
    { icon: AppsOutlinedIcon, title: "Home", path: "/" },
    {
      icon: PhotoFilterOutlinedIcon,
      title: "Tickets",
      path: `/${MANAGER.toLowerCase()}/tickets`,
    },
    {
      icon: AppsOutlinedIcon,
      title: "Users",
      path: `/${MANAGER.toLowerCase()}/users`,
    },
  ];
};

export const TechnicianSideBar = () => {
  return [
    { icon: "", title: "Home", path: "/" },
    {
      icon: "",
      title: "Tickets",
      path: `/${TECHNICIAN.toLowerCase()}/tickets`,
    },
  ];
};

export const adminSideBar = () => {
  return [
    { icon: AppsOutlinedIcon, title: "Home" },
    { icon: PhotoFilterOutlinedIcon, title: "Home" },
    { icon: AppsOutlinedIcon, title: "Home" },
  ];
};

export const userSideBar = () => {
  return [
    { icon: AppsOutlinedIcon, title: "Home",path:"/" },
    { icon: PhotoFilterOutlinedIcon, title: "Company",path:"/user/company" },
  ];
};

export const OrdersData = [
  {
    title: "Inventory",
    description: (
      <Typography
        variant="caption"
        sx={{ color: "var(--gray-color)", marginTop: "18px" }}
      >
        Inventory available for next {" "}
        <span style={{ color: "var(--blue-color)" }}>2 months</span>
      </Typography>
    ),
    amount: "400 pieces",
  },
  {
    title: "Tickets",
    description: (
      <Typography
        variant="caption"
        sx={{ color: "var(--gray-color)", marginTop: "18px" }}
      >
        increase in Tickets{" "}
        <span style={{ color: "var(--blue-color)" }}>2%</span>
      </Typography>
    ),
    amount: "60,030",
  },
  {
    title: "Employees",
    description: (
      <Typography
        variant="caption"
        sx={{ color: "var(--gray-color)", marginTop: "18px" }}
      >
        Total Employees in Company{" "}
        {/* <span style={{ color: "var(--blue-color)" }}>5%</span> */}
      </Typography>
    ),
    amount: "1200",
  },
  {
    title: "Orders",
    description: (
      <Typography
        variant="caption"
        sx={{ color: "var(--gray-color)", marginTop: "18px" }}
      >
        increase in orders{" "}
        <span style={{ color: "var(--blue-color)" }}>6.3%</span>
      </Typography>
    ),
    amount: "400,30K",
  },
];
