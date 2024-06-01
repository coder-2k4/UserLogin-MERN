 import React, { useState } from 'react'
import './Style.css'
import axios from 'axios'
import { Link, useNavigate  } from 'react-router-dom'

//UseNavigate is used to jump to the other page after an action is triggered.

function Signup() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

  const handleclick = async (e) => {
    try {
      e.preventDefault();
      console.log("Button clicked");
        axios.post('http://localhost:3000/signup', {
            name,
            email,
            password
        });
       navigate('/')
    } catch (error) {
        console.log("Error:", error.message);
    }
};
  return (
      <div className='body1'>
     
          <form className='form' onSubmit={handleclick}>
         <h2>Signup</h2>
            <div className="mailbox ">
        <span className='nameText'>Name</span>
          <input
              name="name"
              type="text"
              className="form-control name"
              id="name"
              placeholder="name"
              onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="mailbox">
     <span className='emailText'>Email</span>
          <input
            name="email"
            type="text"
            className="form-control email"
            id="email"
            placeholder="email"
            onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    <div className="mailbox">
     <span className='passwordText'>Password</span>
          <input
            name="password"
            type="password"
            className="form-control password"
            id="password"
            placeholder="Password"
            onChange={(e)=> setPassword(e.target.value)}
      />
    </div>
    <div className=" d-grid gap-2 col-2 ">
        <button className="btn" type="submit" >
        Sign-up
        </button>
      <span className='or'>OR</span>
        <Link className="link" to="/">
        Login
        </Link>
                      </div>
                      
                  </form>
                 
         
          
    </div>
  )
}

export default Signup

