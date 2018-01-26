import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, Profile , GameList } from './';

const DashboardLayout = () => (
  <div className="Dashboard">
    <Header />
    <main>
      <Switch>
        <Route path="/dashboard" exact component={GameList} />
        <Route path="/dashboard/profile" exact component={Profile} />
        <Redirect to="/dashboard" />
      </Switch>
    </main>
  </div>
);

export default DashboardLayout;
