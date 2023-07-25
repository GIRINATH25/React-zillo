import React from 'react';
import { Link } from 'react-router-dom';
import "./l.css"

export const Sign = () => {
  return (
    <div  className='ComBo'>
      <p className='tittle'>Signup</p>
      <form>
        <div className='in'>
        <label htmlFor="name">Name</label><br />
        <input type="text" placeholder='Name'/>
        </div>
        <div className='in'>
        <label htmlFor="email">Email</label><br />
        <input type="email" placeholder='example@gmail.com'/>
        </div>
        <div className='in'>
        <label htmlFor="password">Password</label><br />
        <input type="password" placeholder='password' />  
        </div>    
        <button className='btn' type='Submit'>Signup</button>
      </form>
      <p>Already have an account? <Link to='/Login'>Sign up</Link></p>
    </div>
  )
}
