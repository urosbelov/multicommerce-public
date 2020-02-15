import { put, call, takeLatest, delay } from "redux-saga/effects";
import { message } from "antd";
import {
  HANDLE_AUTHENTICATION,
  CLOSE_LOGIN_MODAL,
  AUTH_SUCCESS,
  START_CHANNEL,
  RECIEVE_USER_DATA
} from "../actions/types";
import { login } from "../services/API";

function* handleLogin(action) {
  const key = "updatable";

  //SEND REQUEST
  message.loading({ content: "Ucitavanje...", key });
  try {
    const response = yield call(login, action.userData);
    console.log("Response: ", response);

    //BAD REQUEST
    if (response.status === 400) {
      throw response.data.error;
    }

    yield put({ type: RECIEVE_USER_DATA, payload: response.data.user });
    yield put({ type: START_CHANNEL });

    yield put({ type: CLOSE_LOGIN_MODAL });
    message.success({
      content: `Dobrodosli ${response.data.user.firstname}`,
      key
    });
    //DESIGN
    yield delay(100);

    yield put({ type: AUTH_SUCCESS });
  } catch (e) {
    console.log("Login Saga Error: ", e);
    message.warning({ content: e, key });
  }
}

export default function* watchLogin() {
  yield takeLatest(HANDLE_AUTHENTICATION, handleLogin);
}
