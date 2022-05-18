import React from 'react'
import { connect } from 'react-redux';
// 


function UserContainer2(props) {
    return (
        <>
            <div>
                <p>Store variable Count in 2nd component :  <b>{props.user.count}</b></p>
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserContainer2)



