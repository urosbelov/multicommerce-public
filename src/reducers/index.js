import { combineReducers } from "redux";
import { responsiveStateReducer } from "redux-responsive";

//TESTING
import testingStoresReducer from "./testingStoresReducer";

///REDUCERS
import mobileDrawerReducer from "./mobileDrawerReducer";
import helpDrawerReducer from "./helpDrawerReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import websocketReducer from "./websocketReducer";
import connectionsReducer from "./connectionsReducer";
import messagesReducer from "./messagesReducer";

const allReducers = combineReducers({
  auth: loginReducer,
  websocket: websocketReducer,
  connections: connectionsReducer,
  messages: messagesReducer,
  cart: shoppingCartReducer,
  mobileDrawer: mobileDrawerReducer,
  registration: registerReducer,
  helpDrawer: helpDrawerReducer,
  stores: testingStoresReducer,
  isMobile: responsiveStateReducer
});

export default allReducers;
