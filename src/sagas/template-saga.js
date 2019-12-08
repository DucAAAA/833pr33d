import { takeLatest, all, put, call } from 'redux-saga/effects';

import { TemplateApi } from 'services/api/template-api'

import { getTemplateAction, updateTemplateState } from "actions/template.action"

function* getTemplateSaga(action) {
  const res = yield call([TemplateApi, TemplateApi.getTemplate], action.payload)
  console.log(res)
  yield put(updateTemplateState({ template: res.data.template}))
}

export default function*() {
  yield all([
    takeLatest(getTemplateAction, getTemplateSaga)
  ])
}
