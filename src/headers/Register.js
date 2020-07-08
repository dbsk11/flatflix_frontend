import React from 'react'

const Register = (props) => {
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const user = {
            first_name:e.target.firstname.value,
            last_name:e.target.lastname.value,
            username:e.target.username.value,
            password:e.target.password.value,
        }
        props.handleSubmit(user)
    }
    return (
        <div>
            <form onSubmit={e=>handleFormSubmit(e)}>
            <div className="registrationform">
                <h1>Register</h1>
                <div>
                    <label htmlFor="username">First Name: </label>
                    <input type="text" name="firstname"/>
                </div>
                <div>
                    <label htmlFor="username">Last Name: </label>
                    <input type="text" name="lastname"/>
                </div>
                <div>
                    <label htmlFor="username">Desired Username: </label>
                    <input type="text" name="username"/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password"/>
                </div>
                <input type="submit" value="Register" />
            </div>
            </form>
        </div>
    );
};

export default Register