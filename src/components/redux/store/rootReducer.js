import { combineReducers } from "redux";
// reducers
import userReducer from "./users/userReducer";

const rootReducers = combineReducers({
    user: userReducer// {userName: 'hello', count: 0}
})

export default rootReducers