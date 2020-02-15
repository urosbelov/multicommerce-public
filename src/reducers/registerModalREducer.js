import { OPEN_REGISTER_MODAL, CLOSE_REGISTER_MODAL } from "../actions/types";

const loginModalReducer = (state = false, action) => {
  switch (action.type) {
    case OPEN_REGISTER_MODAL:
      return true;
    case CLOSE_REGISTER_MODAL:
      return false;
    default:
      return state;
  }
};

export default loginModalReducer;
