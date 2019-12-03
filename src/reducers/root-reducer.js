import { combineReducers } from 'redux'

import auth from './auth-reducer'
import dashboard from './dashboard-reducer'
import template from './template-reducer'

export default combineReducers({
  auth,
  dashboard,
  template
})
