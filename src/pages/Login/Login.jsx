import React from 'react';
import { Link } from 'react-router-dom';
import './l.css'

export const Login = () => {
  return (
    <div className='ComBo'>
      <p className='tittle'>Login</p>
      <form>
        <div className='in'>
        <label htmlFor="email">Email</label><br />
        <input type="email" placeholder='example@gmail.com'/>
        </div>
        <div className='in'>
        <label htmlFor="password">Password</label><br />
        <input type="password" placeholder='password' />  
        </div><br />    
        <button className="btn" type='Submit'>Login</button>
      </form>
      <p>Don't have an account? <Link to='/Sign'>Signup</Link></p>
    </div>
  )
}
