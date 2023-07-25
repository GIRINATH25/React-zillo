import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { ShoppingCart,MagnifyingGlass } from 'phosphor-react';
import i from "../assets/products/zillo logo png.png"

export const Header = () => {
  return (
    <div className="navbar">
        <img src={i} alt="" />
        <input type="search" placeholder='Search' ></input> 
        <div className="lin log"><Link className='link' to='/login' >Login</Link></div>
        <div className="lin  log"><Link className='link' to='/Abo' >About us</Link></div>
        <div className="lin log"><Link className='link' to='/cart' >cart<ShoppingCart /></Link></div>
    </div>
  )
}
