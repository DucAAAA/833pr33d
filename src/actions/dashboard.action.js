import { createActions } from 'redux-actions'

import ActionTypes from '../contants/action-types'

export const {
  updateDashboardState,
  getDashboardAction,
  resetDashboardState
} = createActions({
  [ActionTypes.UPDATE_DASHBOARD_STATE]: payload => payload,
  [ActionTypes.GET_DASHBOARD_ACTION]: payload => payload,
  [ActionTypes.RESET_DASHBOARD_STATE]: payload => payload,
})
