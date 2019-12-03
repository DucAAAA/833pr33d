import { all, fork } from 'redux-saga/effects';

import authSaga from './auth-saga'
import dashbroadSaga from "./dashboard-saga"
import templateSaga from "./template-saga"

export default function*() {
  yield all([
    fork(authSaga),
    fork(dashbroadSaga),
    fork(templateSaga)
  ])
}
