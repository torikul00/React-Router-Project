import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div className='main-container'>
        
            <form className='form-container' action="">
            <h1 className='login-title'>Please Log in Here</h1>
                <p>First Name : </p>
                <input type="text" placeholder='First Name' />
                <p>Last Name : </p>
                <input type="text" placeholder='Last Name' />
                <p>Enter Your Email : </p>
                <input type="email" placeholder='Enter Email' />
                <p>Password: </p>
                <input type="password" placeholder='Password' />
                <br /> <br />
                <button>Log In</button>
             

           </form>
           
        </div>
    );
};

export default Login;