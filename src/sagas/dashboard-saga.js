import { takeLatest, all, put, call } from 'redux-saga/effects';

import { DashboardApi } from 'services/api/dashboard-api'

import { getDashboardAction, updateDashboardState } from "actions/dashboard-action"

function* getDashboardSaga(action) {
  console.log(action)
  const res = yield call([DashboardApi, DashboardApi.getDashboard], action.payload.page)
  console.log(res)
  yield put(updateDashboardState({ recent_templates: res.data.recent_templates, list: res.data.list}))
}

export default function*() {
  yield all([
    takeLatest(getDashboardAction, getDashboardSaga)
  ])
}
