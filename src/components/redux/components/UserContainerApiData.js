import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fectUsers } from '../store/users/userActions';

function UserContainerApiData({ userData, fectUsers }) {
    useEffect(() => {
        fectUsers()
    }, [])
    return userData.loading ? (
        // this is the place where we show loader
        <h2>loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>Users List</h2>
            <div>
                {
                    userData && userData.users &&
                    userData.users.map((user, ind) => {
                        return (<p key={ind}>{user.title}</p>)
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        userData: state.user // {userName: 'hello', count: 0, loading : false, users: [], error: ''}
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fectUsers: () => dispatch(fectUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainerApiData)