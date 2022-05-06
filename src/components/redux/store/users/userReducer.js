import { ALERT_ACTION } from './userConstants'


const initailState = {
  userName: 'hello', // hyd => vjy
}


const userReducer = (state = initailState, action) => {
    switch (action.type) {
        case ALERT_ACTION:
            
            alert('I am alert')
            return {
                ...state
            }
        default:
            return state;
    }
}

export default userReducer