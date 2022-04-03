import { combineReducers } from 'redux';
import cityReducer from "./city/cityReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  city: cityReducer,
  user: userReducer,
});

export default rootReducer;