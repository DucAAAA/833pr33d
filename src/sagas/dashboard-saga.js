import { takeLatest, all, put, call } from 'redux-saga/effects';

import { DashboardApi } from 'services/api/dashboard-api'

import { getDashboardAction, updateDashboardState } from "actions/dashboard-action"

function* getDashboardSaga(action) {
  const res = yield call([DashboardApi, DashboardApi.getDashboard], {page: action.payload.page})
  console.log(action.payload.page)
  console.log(res.data.list)

  yield put(updateDashboardState({ recentTemplates: res.data.recentTemplates, list: res.data.list}))
}

export default function*() {
  yield all([
    takeLatest(getDashboardAction, getDashboardSaga)
  ])
}
