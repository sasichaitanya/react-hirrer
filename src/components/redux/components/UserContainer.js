import React from 'react'
import { connect } from 'react-redux';
// 
import { callAlert } from '../store/users/userActions';


function UserContainer(props) {
    return (
        <>
            <div>
                <p>UserContainer {props.user.userName}</p>
                <button onClick={props.callAlert}>Click to alert</button>
            </div>
        </>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user // {userName: 'hello'}
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        callAlert: () => dispatch(callAlert())
    }
}

// predefined HOC
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
