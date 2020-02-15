import { put, takeLatest, call, delay } from "redux-saga/effects";
import {
  CHECK_SESSION,
  AUTH_SUCCESS,
  AUTH_FAILED,
  RECIEVE_USER_DATA,
  START_CHANNEL
} from "../actions/types";
import { getUser } from "../services/API";

/// CHECK IF THERE IS A SESSION
function* checkSession() {
  try {
    //CALL SERVER
    const response = yield call(getUser);
    //DESIGN DELAY
    yield delay(300);

    //PUT USER TO STATE
    yield put({ type: RECIEVE_USER_DATA, payload: response.data });

    //START WEBSOCKET
    yield put({ type: START_CHANNEL });
    //SUCCESS
    yield put({ type: AUTH_SUCCESS });
  } catch (e) {
    yield put({ type: AUTH_FAILED });
  }
}

export default function* watchCheckSession() {
  yield takeLatest(CHECK_SESSION, checkSession);
}
