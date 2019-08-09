import { createActions } from 'redux-actions'

import ActionTypes from '../contants/action-types'

export const {
  clearStateAuth
} = createActions({
  [ActionTypes.CLEAR_STATE_AUTH]: payload => payload
})
