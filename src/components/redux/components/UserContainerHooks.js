import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { callAlert, increment, decrement } from '../store/users/userActions';


function UserContainer3(props) {
    // it does samne as mapStateToProps 
    const user = useSelector(state => state.user)

    // the below is the state object 
    // {
    //     user: {
    //         userName: 'hello', count: 0
    //     }
    // }

    // it does samne as mapDispatchToProps 
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <p><b>{user.userName}</b> Store variable Count in 3nd hooks component :
                    <b>{user.count}</b></p>
                <button onClick={() => dispatch(callAlert())}>Click to alert</button>
                <button onClick={() => dispatch(increment(1))}>Increment state variable 'Count'</button>
                <button onClick={() => dispatch(decrement(2))}>Decrement state variable 'Count'</button>
            </div>
        </>
    )
}



export default UserContainer3



