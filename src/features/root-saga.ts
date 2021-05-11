import { all } from "redux-saga/effects";
import { watchException } from "./exceptions/saga";

export default function* rootSaga() {
  yield all([
    // module
    watchException()
  ]);
}
