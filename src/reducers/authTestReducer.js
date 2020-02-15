import { LOGIN_TEST_AUTH, LOGOUT_TEST_AUTH } from "../actions/types";

const authTestReducer = (state = false, action) => {
  switch (action.type) {
    case LOGIN_TEST_AUTH:
      return true;
    case LOGOUT_TEST_AUTH:
      return false;
    default:
      return state;
  }
};

export default authTestReducer;
