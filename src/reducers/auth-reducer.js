import { handleActions } from 'redux-actions'

import { clearStateAuth } from '../actions/auth-action'

export const initialState = {
  isAuth: false
};

export default handleActions({
  [clearStateAuth]: () => ({...initialState})
}, initialState);
