 import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Style.css'
function Login() {
  
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handleclick = async(e) => {
   
    try {
      e.preventDefault();
      console.log("Button Clicked")
        axios.post('http://localhost:3000/login', {
        email,
        password,
      });
      navigate('/home');
 
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='body1'>
    <form className="form" onSubmit={handleclick} >
    <h2>Login</h2>
    <div className="mailbox ">
     <span className='emailText'>Email</span>
      <input
        type="email"
        className="form-control email"
        id="email"
          placeholder="email" autoComplete='off'
          onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    <div className="mailbox">
     <span className='passwordText'>Password</span>
     
      <input
        type="password"
        className="form-control password"
        id="password"
          placeholder="Password" autoComplete='off'
          onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
    <div className=" d-grid gap-2 col-2 ">
      <button className="btn " type="submit">
        Login
      </button>
      <span className='or'>OR</span>
      <Link className="link" to="/signup">
        Signup
      </Link>
    </div>
      </form>
      </div>
  )
}

export default Login






