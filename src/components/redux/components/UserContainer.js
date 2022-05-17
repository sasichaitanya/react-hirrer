import React from 'react'
import { connect } from 'react-redux';
// 
import { callAlert , changeName} from '../store/users/userActions';


function UserContainer(props) {
    return (
        <>
            <div>
                <p>UserContainer <b>{props.user.userName}</b></p>
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
        user: state.user // {userName: 'hello'}
    }
}
// state
// {
//   user:  {
//       userName: 'hello'
//   }
// }

// to update store via actions
// mapping global actions to the local props obj
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        callAlert: () => dispatch(callAlert()),
        changeName: () => dispatch(changeName('vijayawada'))
    }
}

// predefined HOC
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)


