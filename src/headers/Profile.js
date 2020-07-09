import React from 'react'

const Profile = (props) => {
    // console.log(props)
    return (
        <div className="profile">
            <h1>My Profile</h1>
            <h4>Name:{`${props.user.user.first_name} ${props.user.user.last_name}`} </h4>
            <h4>Username: {`${props.user.user.username}`}</h4>
        </div>
    )
}

export default Profile