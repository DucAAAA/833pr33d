import { createActions } from 'redux-actions'

import ActionTypes from 'contants/action-types'

export const {
  setDashModeView,
} = createActions({
  [ActionTypes.SET_DASH_MODE_VIEW]: payload => payload
})
