// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
import {  MANAGER, TECHNICIAN } from "./helper/constants";
import {AllUsers} from "./sub-pages/manager";
import {ManagerTickets} from "./sub-pages/manager";
import { CompanyInfo } from "./sub-pages/common";
import {Tickets} from "./sub-pages/technician";

const App = () => {
  const userLoggedIn = true;

  return (
    <Router>
      <Routes>
      
        <Route component={<NotFound />} path="*" />
        <Route
          element={userLoggedIn ?DashboardSelect(MANAGER) : <Login />}
          path="/"
        />
         <Route
          element={<PrivateRoute currentRoute={MANAGER}><AllUsers /></PrivateRoute>}
          path={`/${MANAGER.toLowerCase()}/users`}
        />
          <Route
          element={<PrivateRoute currentRoute={MANAGER}><Tickets /></PrivateRoute>}
          path={`/${MANAGER.toLowerCase()}/tickets`}
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
          element={<PrivateRoute currentRoute={TECHNICIAN}><Tickets /></PrivateRoute>}
          path={`/${TECHNICIAN.toLowerCase()}/tickets`}
        />

        <Route element={<Signup />} path="/signup" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </Router>
  );
};

export default App;
