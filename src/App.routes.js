import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Chat from 'pages/Chat'

export const ROUTES = {
  home: '/',
  chat: '/chat/:roomId/:userId',
}

const Routes = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.home} component={Home} exact />
      <Route path={ROUTES.chat} component={Chat} exact />
    </Switch>
  </Router>
)

export default Routes
