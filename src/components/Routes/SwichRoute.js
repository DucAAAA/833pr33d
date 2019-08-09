import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { authSelector } from '../../selectors/auth-selector'

const SwichRoute = ({component: Component, isAuth, ...rest }) => {
  if(isAuth) return <Redirect to='/templates' />

  return <Redirect to='/home' />
}

export default connect(authSelector, null)(SwichRoute)
