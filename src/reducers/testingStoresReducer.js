import { GET_STORES } from "../actions/types";

const initialState = {
  stores: []
};

const testingStoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORES:
      return action.stores;
    default:
      return state;
  }
};

export default testingStoresReducer;
