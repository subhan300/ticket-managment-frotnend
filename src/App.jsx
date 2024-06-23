import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Dashboard from '../components/Dashboard';
// import ManagerDashboard from '../components/ManagerDashboard';
// import TechnicianDashboard from '../components/TechnicianDashboard';
// import UserDashboard from '../components/UserDashboard';
import PublicRoute from "./routes-components/PublicRoute";
import PrivateRoute from "./routes-components/PrivateRoute";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { DashboardSelect } from "./utils";
import { ADMIN } from "./helper/constants";

const App = () => {
  const userLoggedIn = true;

  return (
    <Router>
      <Routes>
        {/* <PublicRoute restricted={false} component={Login} path="/login" exact />
        <PublicRoute restricted={false} component={Signup} path="/signup" exact />
        <PublicRoute restricted={false} component={Login} path="/" exact /> */}

        {/* {/* <PrivateRoute component={Dashboard} path="/dashboard" exact /> */}
        {/* <PrivateRoute component={ManagerDashboard} path="/manager-dashboard" roles={['manager']} />
        <PrivateRoute component={TechnicianDashboard} path="/technician-dashboard" roles={['technician']} />
        <PrivateRoute component={UserDashboard} path="/user-dashboard" roles={['user']} />  */}

        {/* Add a default route for handling 404 errors */}
        <Route component={<NotFound />} path="*" />
        <Route
          element={userLoggedIn ?DashboardSelect(ADMIN) : <Login />}
          path="/"
        />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </Router>
  );
};

export default App;
