import React from 'react';
 

const Logout = (props) => {
    const clearUser=()=>{
        localStorage.clear()
        props.setUser({
            user:{
                id:0,
                first_name:'',
                last_name:'',
                username:'',
                user_videos:'',
            },
            token:'',
        })
    }

  return  (
    <div>
        {clearUser()}
        {props.history.push('/login')}
    </div>

  )

    
};
 
export default Logout;