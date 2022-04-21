import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='login-container flex justify-center items-center'>
            <div className='login-form-container flex flex-col items-center' style={{ height: "500px", width: "450px" }}>
                <p>Login</p>
                <div>
                    <input type="text" />
                    <input type="password" />
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;