// import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// import Dashboard from '../components/Dashboard';
// import ManagerDashboard from '../components/ManagerDashboard';
// import TechnicianDashboard from '../components/TechnicianDashboard';
// import UserDashboard from '../components/UserDashboard';
// import PublicRoute from "./routes-components/PublicRoute";
import PrivateRoute from "./routes-components/PrivateRoute";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { DashboardSelect } from "./utils";
import {  MANAGER, TECHNICIAN, USER } from "./helper/constants";
import {ManagerTickets,AllUsers,Inventory} from "./sub-pages/manager";
import { CompanyInfo } from "./sub-pages/common";
import {Tickets} from "./sub-pages/technician";
import useStore from "./store";
import Alert from "./components/GlobalComponents/alert/Alert";

const App = () => {

  const {isAuthenticated,user,openAlert,message}=useStore(state=>state)

  // useEffect(()=>{
  //   openAlert(`New INR amount`, 'info');
  // },[])
  return (
  <>
  <Alert />
 
    <Router>

      <Routes>
       
        <Route component={<NotFound />} path="*" />
        <Route
          element={isAuthenticated ?<Navigate to="/home" /> : <Login />}
          path="/"

        />
         <Route
          element={isAuthenticated ?DashboardSelect(user?.role) : <Login />}
          path="/home"

        />

        
         <Route
          element={<PrivateRoute currentRoute={USER}><Tickets /></PrivateRoute>}
          path={`/${USER.toLowerCase()}/tickets`}
        />
         <Route
          element={<PrivateRoute currentRoute={user?.role}><CompanyInfo /></PrivateRoute>}
          path={`/${USER.toLowerCase()}/company`}
        />
        
          <Route
          element={<PrivateRoute currentRoute={MANAGER}><CompanyInfo /></PrivateRoute>}
          path={`/${MANAGER.toLowerCase()}/company`}
        />
          <Route
          element={<PrivateRoute currentRoute={MANAGER}><ManagerTickets /></PrivateRoute>}
          path={`/${MANAGER.toLowerCase()}/tickets`}
        />
           <Route
          element={<PrivateRoute currentRoute={MANAGER}><AllUsers /></PrivateRoute>}
          path={`/${MANAGER.toLowerCase()}/users`}
        />
         <Route
          element={<PrivateRoute currentRoute={MANAGER}><Inventory /></PrivateRoute>}
          path={`/${MANAGER.toLowerCase()}/inventory`}
        />
          <Route
          element={<PrivateRoute currentRoute={MANAGER}><Inventory /></PrivateRoute>}
          path={`/${MANAGER.toLowerCase()}/inventory/create/:data`}
        />
         <Route
          element={<PrivateRoute currentRoute={MANAGER}><Inventory /></PrivateRoute>}
          path={`/${MANAGER.toLowerCase()}/inventory/create/`}
        />
         <Route
          element={<PrivateRoute currentRoute={TECHNICIAN}><Tickets /></PrivateRoute>}
          path={`/${TECHNICIAN.toLowerCase()}/tickets`}
        />

        <Route element={<Signup />} path="/signup" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </Router>
  </>
  );
};

export default App;
