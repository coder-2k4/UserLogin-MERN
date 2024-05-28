import React from 'react'
import {Link} from 'react-router-dom'
import './Style.css'
function Login() {
  return (
    <form className="form">
    <h2>Login</h2>
    <div className="mailbox ">
     <span className='emailText'>Email</span> 
      <input
        type="email"
        className="form-control email"
        id="email"
        placeholder="email"
      />
    </div>
    <div className="mailbox">
     <span className='passwordText'>Password</span> 
     
      <input
        type="email"
        className="form-control password"
        id="email"
        placeholder="Password"
      />
    </div>
    <div className=" d-grid gap-2 col-2 ">
      <button className="btn btn-primary" type="button">
        Login
      </button>
      <span className='or'>OR</span>
      <Link className="link" to="/signup">
        Signup
      </Link>
    </div>
  </form>
  )
}

export default Login