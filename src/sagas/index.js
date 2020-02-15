import { all } from "redux-saga/effects";
import "../actions/types";

//SAGAS
import watchLogin from "./loginSaga";
import watchRegistration from "./registerSaga";
import watchCheckSession from "./checkSessionSaga";
import watchGetConnections from "./connectionsSaga";
import watchSelectMessage from "./selectMessagesSaga";
import { messagesChannel, watchSendMessage } from "./socketSaga";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchRegistration(),
    watchCheckSession(),
    messagesChannel(),
    watchSendMessage(),
    watchGetConnections(),
    watchSelectMessage()
  ]);
}
