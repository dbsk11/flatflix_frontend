import React, {useEffect} from 'react';
 

//renders Log In Form
const Login = (props) => {
  // state:  logged in 
  // onSubmit/handleSubmit
  // update state in NavBar => Change Text
 const handleFormSubmit=(e)=>{
   e.preventDefault();
   const user={
     username:e.target.username.value,
     password:e.target.password.value,
   }
   props.handleLogin(user)
 }
  return  (
    <form onSubmit={e=>handleFormSubmit(e)}>
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