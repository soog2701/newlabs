import { takeEvery, put, delay } from "redux-saga/effects";
import { exceptionAction } from "./reducer";
import { PayloadAction } from "@reduxjs/toolkit";

function* alertView(payload: PayloadAction<object>) {
  const { openSync } = exceptionAction;
  yield delay(500);
  yield put(openSync(payload.payload));
}
function* exceptionAsync() {
  const { closeSync } = exceptionAction;
  yield delay(500);
  yield put(closeSync());
}
export function* watchException() {
  const { open, close } = exceptionAction;
  yield takeEvery(open, alertView);
  yield takeEvery(close, exceptionAsync);
}
