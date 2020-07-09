import React from 'react';

const Profile = (props) => {
    return (
        <div className="profile">
            <h1>My Profile</h1>
            <h4>Name:</h4> 
            <p>{`${props.user.user.first_name} ${props.user.user.last_name}`} </p>
            <h4>Username:</h4>
            <p>{`${props.user.user.username}`}</p>
        </div>
    );
};

export default Profile;