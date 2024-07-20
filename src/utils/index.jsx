import dayjs from "dayjs";
import { TechnicianSideBar, adminSideBar, managerSideBar, userSideBar } from "../data/sidebar";
import { ADMIN, HOUSEKEEPING, MANAGER, TECHNICIAN, USER } from "../helper/constants";
import Admin from "../pages/Admin";
import LoginPage from "../pages/Login";
import Manager from "../pages/Manager";
import Technician from "../pages/Technician";
import User from "../pages/User";

export const DashboardSelect = (role) => {
  switch (role) {
    case ADMIN:
      return <Admin />;
    case TECHNICIAN:
      return <Technician />;
    case MANAGER:
      return <Manager />;
    case USER:
      return <User />;
    case HOUSEKEEPING:
      return <h1>hOUSE KEEPING</h1>;
    default:
      return <LoginPage />;
  }
};

export const sideBarSelect = (role) => {
  // debugger
  switch (role) {
    case ADMIN:
      return adminSideBar();
    case TECHNICIAN:
      return TechnicianSideBar();
    case MANAGER:
      return managerSideBar();
    // case HOUSEKEEPING:
    //   return hous;
    case USER:
      return userSideBar();
    // default:
    //   return null
  }
};


export const getLocalItem=(key)=>{
  if (!localStorage.getItem(key)) return 
  return JSON.parse(localStorage.getItem(key))
}

export const setLocalItem=(key,data)=>{
  return localStorage.setItem(key,JSON.stringify(data))
}


export const dateFormat=(date)=>{
  return dayjs(date).format("YYYY-MM-DD")
}

export const  dateFormatTime=(date)=>{
  return dayjs(date).format('D MMM, YYYY hh:mm A')
}