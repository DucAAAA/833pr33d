import { handleActions } from 'redux-actions'

import { updateDashboardState, resetDashboardState } from 'actions/dashboard-action'

export const initialState = {
  list: [],
  recent_templates: [],
  firstRender: true
};

export default handleActions({
  [updateDashboardState]: (state, action) => {
    return {
      ...state,
      list: state.list.concat(action.payload.list),
      recent_templates: [...action.payload.recent_templates],
      firstRender: false
    }
  },
  [resetDashboardState]: () => ({ ...initialState })
}, initialState);
