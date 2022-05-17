import { ALERT_ACTION, CHANGE_NAME } from './userConstants'


const initailState = {
    userName: 'hyderabad' // hyd => vjy
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
        default:
            return state;
    }
}

export default userReducer