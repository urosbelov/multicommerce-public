import { OPEN_HELP_DRAWER, CLOSE_HELP_DRAWER } from "../actions/types";

const helpDrawerReducer = (state = false, action) => {
  switch (action.type) {
    case OPEN_HELP_DRAWER:
      return true;
    case CLOSE_HELP_DRAWER:
      return false;
    default:
      return state;
  }
};

export default helpDrawerReducer;
