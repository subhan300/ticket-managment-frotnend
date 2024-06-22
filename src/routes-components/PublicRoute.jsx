// PublicRoute.jsx (example using React Router v6)
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useStore from '../store';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthenticated = useStore(state => state.isAuthenticated);

  return (
    <Route {...rest} element={isAuthenticated && restricted ? <Navigate to="/dashboard" /> : <Component />} />
  );
};

export default PublicRoute;
