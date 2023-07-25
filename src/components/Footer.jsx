import React from 'react'
import './Footer.css'

const d = new Date();
export const Footer = () => {
  return (
    <div className='footer'>
        © {d.getFullYear()}.All right reserved
    </div>
  )
}
