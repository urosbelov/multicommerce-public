import { put, call, takeLatest, delay } from "redux-saga/effects";
import { message } from "antd";
import {
  AUTH_SUCCESS,
  RECIEVE_USER_DATA,
  HANDLE_REGISTRATION,
  CLOSE_REGISTER_MODAL
} from "../actions/types";
import { register } from "../services/API";

function* handleRegister(action) {
  const key = "updatable";

  //SEND POST REQUEST
  message.loading({ content: "Ucitavanje...", key });
  try {
    const response = yield call(register, action.payload);

    //BAD REQUEST
    yield delay(200);
    if (response.status === 400) {
      throw response.data.error;
    }

    //SET USER STATE
    yield put({ type: RECIEVE_USER_DATA, payload: response.data.user });
    yield put({ type: CLOSE_REGISTER_MODAL });
    message.success({
      content: `Dobrodosli ${response.data.user.firstname}`,
      key
    });
    //DESIGN DELAY
    yield delay(100);

    yield put({ type: AUTH_SUCCESS });
  } catch (e) {
    console.log("Register Saga Error: ", e);
    // message.warning({ content: e, key });
  }
}

export default function* watchRegistration() {
  yield takeLatest(HANDLE_REGISTRATION, handleRegister);
}
