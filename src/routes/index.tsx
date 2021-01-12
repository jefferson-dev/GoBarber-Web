import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import {
  SignIn,
  SignUp,
  Dashboard,
  Profile,
  ForgotPassword,
  ResetPassword,
} from '../pages';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/singup" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
