import { combineReducers } from 'redux'

import auth from './auth-reducer'
import dashboard from './dashboard-reducer'
import mainApp from "./main-app-reducer"

export default combineReducers({
  auth,
  dashboard,
  mainApp
})
