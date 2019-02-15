import { combineReducers } from "redux";
import usersReducers from "./usersReducers";
import authReducer from "./authReducer";
import adminsReducers from "./adminsReducers";

export default combineReducers({
  users: usersReducers,
  auth: authReducer,
  admins: adminsReducers
});
