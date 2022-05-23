import {
    ALERT_ACTION, INCREMENT_ACTION, DECREMENT_ACTION, CHANGE_NAME,
    FETCH_USERS_REQUEST, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS
} from './userConstants'
import axios from "axios";


export const callAlert = () => {
    return {
        type: ALERT_ACTION
    }
}

export const changeName = (newName) => {
    return {
        type: CHANGE_NAME,
        payload: newName
    }
}

export const increment = (val) => {
    return {
        type: INCREMENT_ACTION,
        payload: val
    }
}

export const decrement = (val) => {
    return {
        type: DECREMENT_ACTION,
        payload: val
    }
}








// thunk use case below 
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// we included thunk so able to return a function instead of an object 
export const fectUsers = () => {
    return (dispatch) => {
        // enables loader
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(err => {
                const errMsg = err.message
                dispatch(fetchUsersFailure(errMsg))
            })
    }
}