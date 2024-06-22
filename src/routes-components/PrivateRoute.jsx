import React from 'react';
import { Route,Navigate } from 'react-router-dom';
import useStore from '../store';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const isAuthenticated = useStore(state => state.isAuthenticated);
  const userRole = useStore(state => state.userRole);

  return (
    <Route {...rest} render={(props) => (
      isAuthenticated ? (
        roles && !roles.includes(userRole) ? <Navigate to="/dashboard" /> : <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )} />
  );
};

export default PrivateRoute;
