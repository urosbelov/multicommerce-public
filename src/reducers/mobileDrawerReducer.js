import { OPEN_MOBILE_DRAWER, CLOSE_MOBILE_DRAWER } from "../actions/types";

const mobileDrawerReducer = (state = false, action) => {
  switch (action.type) {
    case OPEN_MOBILE_DRAWER:
      return true;
    case CLOSE_MOBILE_DRAWER:
      return false;
    default:
      return state;
  }
};

export default mobileDrawerReducer;
