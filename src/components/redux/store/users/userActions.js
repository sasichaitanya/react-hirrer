import { ALERT_ACTION, INCREMENT_ACTION ,DECREMENT_ACTION,  CHANGE_NAME} from './userConstants'

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