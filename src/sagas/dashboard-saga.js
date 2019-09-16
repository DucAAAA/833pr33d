import { takeLatest, all, put, call } from 'redux-saga/effects';

import { DashboardApi } from 'services/api/dashboard-api'

import { getDashboardAction, updateDashboardState } from "actions/dashboard-action"

function* getDashboardSaga(action) {
  const res = yield call([DashboardApi, DashboardApi.getDashboard])
  yield put(updateDashboardState({ recent_templates: res.data.recent_templates}))
  console.log(res)
}

export default function*() {
  yield all([
    takeLatest(getDashboardAction, getDashboardSaga)
  ])
}
