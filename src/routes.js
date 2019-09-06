import React from 'react'
import { compose } from 'redux'
import { Route, Switch, withRouter } from 'react-router'

import {
  Gallery
} from 'pages'


const routes = () => (
  <Switch>
    <Route exact path="/" component={Gallery} />
  </Switch>
)

export default compose(
  withRouter
)(routes)
