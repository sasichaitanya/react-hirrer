import { ALERT_ACTION, CHANGE_NAME, INCREMENT_ACTION , DECREMENT_ACTION} from './userConstants'


const initailState = {
    userName: 'ramesh', // hyd => vjy
    count: 0
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
        default:
            return state;
    }
}

export default userReducer