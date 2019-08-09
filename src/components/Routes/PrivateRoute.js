import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

import { authSelector } from '../../selectors/auth-selector'

const PrivateRoute = ({component: Component, isAuth, ...rest }) => {
  if(isAuth) return <Route {...rest} render={Component} />

  return <Redirect to='/login' />
}

export default connect(authSelector, null)(PrivateRoute)
