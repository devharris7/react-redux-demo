import { delay, put, takeEvery, all } from "redux-saga/effects";
import { addOne } from "./actions/counter";
import { ASYNC_INCREMENT } from "./actionType";
function* helloSaga() {
  console.log("Hello saga!");
}

function* incrementAsync() {
  // 延迟1s
  yield delay(1000);

  yield put(addOne() /* action: {type, payload}*/);
}

function* watchIncrementAsync() {
  yield takeEvery(ASYNC_INCREMENT, incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
