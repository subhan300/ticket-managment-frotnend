import Layout from "../components/GlobalComponents/layout";
import { ADMIN, HOUSEKEEPING, MANAGER, TECHNICIAN } from "../helper/constants";
import Admin from "../pages/Admin";

export const DashboardSelect = (role) => {
  switch (role) {
    case ADMIN:
      return <Admin />;
    case TECHNICIAN:
      return <h1>TECHNICIAN</h1>;
    case MANAGER:
      return <h1>MANAGER</h1>;
    case HOUSEKEEPING:
      return <h1>hOUSE KEEPING</h1>;
    default:
      return <h1>User</h1>;
  }
};
