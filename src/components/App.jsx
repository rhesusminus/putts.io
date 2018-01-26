import React from 'react';
import { Route } from 'react-router-dom';
import { Signin, PrivateRoute, Register, DashboardLayout } from './';

const App = () => (
  <div className="App">
    <Route exact path="/" component={Signin} />
    <Route path="/register" component={Register} />
    <PrivateRoute path="/dashboard" component={DashboardLayout} />
  </div>
);

export default App;
