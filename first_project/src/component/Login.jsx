import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
    
            <div className="form-box">
                <form className="form">
                    <span className="title">Sign up</span>
                    <span className="subtitle">Create a free account with your email.</span>
                    <div className="form-container">
                        <input type="text" className="input" placeholder="user name" />
                        <input type="password" className="input" placeholder="Password" />
                    </div>
                    <Link to = "/userdetails" className="btn btn-primary">Log In</Link>
                </form>
                <div className="form-section">
                    <p>Have an account? <a href>Log in</a> </p>
                </div>
            </div>

        </>
    )
}

export default Login