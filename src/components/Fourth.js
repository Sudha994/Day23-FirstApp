import React from 'react'

const Fourth = () => {
    const isLoggedIn = true;

    let message;
    if(isLoggedIn){
        message = 'You are logged in';
    } else{
        message = 'You are not logged in, Please login to continue';
    }
  return (
    <div>
        <h2>Login Checking</h2>
        <p>{message}</p>
    </div>
  )
}

export default Fourth