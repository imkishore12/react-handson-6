import React from 'react'
import { NavLink} from 'react-router-dom'




export default function Navbar() {
  return (
    <header>
      <nav className='navbar'>
      
      
        <NavLink to='/' className="NavLink">Home</NavLink>
        <NavLink to='/student' className="NavLink">Student</NavLink>
        <NavLink to='/contact' className="NavLink">Contact</NavLink>
    </nav>
    
        
      
    </header>
  )
}