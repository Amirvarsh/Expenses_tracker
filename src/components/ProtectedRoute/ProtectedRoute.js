import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import * as ROUTES from '../../routes';

function ProtectedRoute({ ...props }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect to={ROUTES.SIGN_IN} />
  );
}

export default ProtectedRoute;
