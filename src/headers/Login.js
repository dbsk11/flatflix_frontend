import React from 'react';
import SignedIn from './SignedIn'
 
//renders Log In Form
const Login = (props) => {
  // state:  logged in 
  // onSubmit/handleSubmit
  // update state in NavBar => Change Text
 
  const isSignedIn = props.signedIn;
  if (isSignedIn) {
    return (
      <SignedIn/>
    );
  }
  return  (
    <form>
        <div className="form">
          <h1>Login</h1>
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username"/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password"/>
          </div>
          <input type="submit" value="Login" />
        </div>
      </form>
  )

    
};
 
export default Login;