import {
    ALERT_ACTION, CHANGE_NAME, INCREMENT_ACTION, DECREMENT_ACTION,
    FETCH_USERS_REQUEST, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS
} from './userConstants'


const initailState = {
    userName: 'ramesh', // hyd => vjy
    count: 0,
    // thunk usecase
    loading: false,
    users: [],
    error: ''
}


const userReducer = (state = initailState, action) => {
    switch (action.type) {
        case ALERT_ACTION:
            alert('I am alert')
            return {
                ...state
            }
        case CHANGE_NAME:
            return {
                ...state,
                userName: action.payload
            }
        case INCREMENT_ACTION:
            return {
                ...state,
                count: state.count + action.payload
            }
        case DECREMENT_ACTION:
            return {
                ...state,
                count: state.count - action.payload
            }



            
        // thunk usecase
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer