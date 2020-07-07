import React from 'react';
 
//renders Log In Form
const Login = (props) => {
  // state:  logged in 
  // onSubmit/handleSubmit
  // update state in NavBar => Change Text
    return (
      <form>
        <h1>Login</h1>
        <div className="form">
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    );
};
 
export default Login;