import React from 'react'
import { connect } from 'react-redux';
// 
import { callAlert , changeName, increment, decrement} from '../store/users/userActions';


function UserContainer(props) {
    return (
        <>
            <div>
                <p>Username <b>{props.user.userName}</b></p>
                <p>Count is :  <b>{props.user.count}</b></p>
                <button onClick={props.increment}>Increment state variable 'Count'</button>
                <button onClick={props.decrement}>Decrement state variable 'Count'</button>
                <br/>
                <button onClick={props.changeName}>Change Name variable in store</button>
                <br/>
                <button onClick={props.callAlert}>Click to alert</button>
            </div>
        </>
    )
}

// to access variables in store
// mapping global state variables to the local props obj
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user // {userName: 'hello', count: 0}
    }
}
// state
// {
//   user:  {
//       userName: 'hello',
//       count : 0
//   }
// }

// to update store via actions
// mapping global actions to the local props obj
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        callAlert: () => dispatch(callAlert()),
        changeName: () => dispatch(changeName('suresh')),
        increment: () => dispatch(increment(1)),
        decrement: () => dispatch(decrement(2))
    }
}

// predefined HOC
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)

// without mapStateToProps
// export default connect(null, mapDispatchToProps)(UserContainer)

// without mapDispatchToProps
// export default connect(mapStateToProps)(UserContainer)


