import React from "react";
import { Route, Navigate } from "react-router-dom";
import useStore from "../store";
import Layout from "../components/GlobalComponents/layout";
import { sideBarSelect } from "../utils";

const PrivateRoute = ({ children, currentRoute }) => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  console.log("is authenticated",isAuthenticated)
  const userRole = useStore((state) => state.userRole);

  return isAuthenticated && currentRoute===userRole ? <Layout sideBarData={sideBarSelect(userRole)}>{children}</Layout> : <Navigate to="/login" />;
};

export default PrivateRoute;
