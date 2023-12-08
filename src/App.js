import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { SignIn, SignUp } from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ResetPassword from './pages/ResetPassword';
import Statistics from './pages/Statistics';
import Transactions from './pages/Transactions';
import * as ROUTES from './routes';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Switch>
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
          <ProtectedRoute>
            <Route path={ROUTES.PROFILE} component={Profile} />
            <Route path={ROUTES.STATISTICS} component={Statistics} />
            <Route path={ROUTES.TRANSACTIONS} component={Transactions} />
            <Route path={ROUTES.HOME} component={Dashboard} exact />
          </ProtectedRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
