import { combineReducers } from "redux";
// reducers
import userReducer from "./users/userReducer";

const rootReducers = combineReducers({
    user: userReducer// {userName: 'hello'}
})

export default rootReducers