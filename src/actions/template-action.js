import { createActions } from 'redux-actions'

import ActionTypes from '../contants/action-types'

export const {
  getTemplateAction,
  updateTemplateState
} = createActions({
  [ActionTypes.GET_TEMPLATE_ACTION]: payload => payload,
  [ActionTypes.UPDATE_TEMPLATE_STATE]: payload => payload,
})
