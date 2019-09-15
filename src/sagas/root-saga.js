import { all, fork } from 'redux-saga/effects';

import authSaga from './auth-saga'
import dashbroadSaga from "./dashboard-saga"

export default function*() {
  yield all([
    fork(authSaga),
    fork(dashbroadSaga)
  ])
}
