import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import { Router } from '@reach/router'
import { Profile, GameList, GameDetails, Signin, Dashboard } from './components'
import './styles/index.css'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
// import registerServiceWorker from './registerServiceWorker'

render(
  <Provider store={configureStore()}>
    <Router>
      <Signin path="/" />
      <Dashboard path="dashboard">
        <GameList path="/" />
        <Profile path="profile" />
        <GameDetails path="game/:id" />
      </Dashboard>
    </Router>
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()
