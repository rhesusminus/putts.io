import React from 'react'
import { Route } from 'react-router-dom'
import { Signin, PrivateRoute, Register, DashboardLayout, PasswordRecovery } from './'

const App = () => (
  <div className="App">
    <Route exact path="/" component={Signin} />
    <Route path="/register" component={Register} />
    <Route path="/password-recovery" component={PasswordRecovery} />
    <PrivateRoute path="/dashboard" component={DashboardLayout} />
  </div>
)

export default App
