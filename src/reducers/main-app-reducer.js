import { handleActions } from 'redux-actions'

import { setDashModeView } from 'actions/main-app-action'

export const initialState = {
  dashboardModeView: "list-thumb" // list-thumb && list
};

export default handleActions({
  [setDashModeView]: (_state, action) => ({ dashboardModeView: action.payload }),
}, initialState);
