import { takeLatest, all, put, call } from 'redux-saga/effects';

import { DashboardApi } from 'services/api/dashboard-api'

import { getDashboardAction, updateDashboardState } from "actions/dashboard-action"

function* getDashboardSaga(action) {
  console.log(action)
  const res = yield call([DashboardApi, DashboardApi.getDashboard], {page: action.payload.page})
  console.log(res)
  yield put(updateDashboardState({ recentTemplates: res.data.recentTemplates, list: res.data.list}))
}

export default function*() {
  yield all([
    takeLatest(getDashboardAction, getDashboardSaga)
  ])
}
