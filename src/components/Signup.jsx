import React, { useState } from 'react'
import './Style.css'
import axios from 'axios'
import {Link } from 'react-router-dom'
function Signup() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
  const handleclick = (e) => {
        try {
            e.preventDefault();
            axios.post('http://localhost:3000/signup', {
                name, email,password
              })
              return <h5>Successfully!</h5>
          console.log('posted successfully')
        }

        catch(error) {
            console.log(error)
        }
  }
  
  return (
      <div>
          <form className='form' >
         <h2>Signup</h2>
    <div className="mailbox ">
     <span className='nameText'>Name</span>
      <input
        type="text"
        className="form-control name"
        id="name"
        placeholder="name"
         onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="mailbox">
     <span className='emailText'>Email</span>
      <input
        type="email"
        className="form-control email"
        id="email"
        placeholder="email"
        onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    <div className="mailbox">
     <span className='passwordText'>Password</span>
      <input
        type="email"
        className="form-control password"
        id="email"
        placeholder="Password"
        onChange={(e)=> setPassword(e.target.value)}
      />
    </div>
    <div className=" d-grid gap-2 col-2 ">
      <button className="btn btn-primary" type="button" onClick={handleclick}>
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
