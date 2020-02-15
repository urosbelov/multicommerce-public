import { OPEN_REGISTER_MODAL, CLOSE_REGISTER_MODAL } from "../actions/types";

const initialState = {
  modal: false,
  error: {}
};

const loginModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_REGISTER_MODAL:
      return { ...state, modal: true };
    case CLOSE_REGISTER_MODAL:
      return { ...state, modal: false };
    default:
      return state;
  }
};

export default loginModalReducer;
