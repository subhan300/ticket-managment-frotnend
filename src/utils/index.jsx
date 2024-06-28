import { TechnicianSideBar, adminSideBar, managerSideBar, userSideBar } from "../data/sidebar";
import { ADMIN, HOUSEKEEPING, MANAGER, TECHNICIAN } from "../helper/constants";
import Admin from "../pages/Admin";
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
    case HOUSEKEEPING:
      return <h1>hOUSE KEEPING</h1>;
    default:
      return <User />;
  }
};

export const sideBarSelect = (role) => {
  switch (role) {
    case ADMIN:
      return adminSideBar();
    case TECHNICIAN:
      return TechnicianSideBar();
    case MANAGER:
      return managerSideBar();
    // case HOUSEKEEPING:
    //   return hous;
    default:
      return userSideBar();
  }
};
