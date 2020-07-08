import React from 'react'

const Register = (props) => {
    return (
        <div>
            <form>
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
                    <input type="text" name="username" placeholder="Username" />
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