import { handleActions } from 'redux-actions'

import { updateDashboardState } from 'actions/dashboard-action'

export const initialState = {
  list: [],
  recent_templates: []
};

export default handleActions({
  [updateDashboardState]: (state, action) => {
    return {
      ...state, ...action.payload
    }
  }
}, initialState);
