import {
  OPEN_LOGIN_MODAL,
  CLOSE_LOGIN_MODAL,
  RECIEVE_USER_DATA,
  AUTH_SUCCESS,
  CHECK_SESSION,
  AUTH_FAILED
} from "../actions/types";

const initialState = {
  isLogged: false,
  user: {},
  isLoading: false,
  modal: false,
  error: {}
};

const loginModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      return { ...state, modal: true };
    case CHECK_SESSION:
      return { ...state, isLoading: true };
    case RECIEVE_USER_DATA:
      return { ...state, user: action.payload };
    case AUTH_SUCCESS:
      return { ...state, isLoading: false, isLogged: true };
    case AUTH_FAILED:
      return { ...state, isLoading: false, isLogged: false };
    case CLOSE_LOGIN_MODAL:
      return { ...state, modal: false };
    default:
      return state;
  }
};

export default loginModalReducer;
