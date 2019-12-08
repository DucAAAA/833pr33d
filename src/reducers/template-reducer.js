import { handleActions } from 'redux-actions'

import { updateTemplateState } from 'actions/template.action'

export const initialState = {
  template: {}
};

export default handleActions({
  [updateTemplateState]: (state, action) => {
    return {
      ...state, ...action.payload
    }
  }
}, initialState);
