import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar"> 
        <ul>
            <img src='/ham-menu.svg' alt="Menu icon" className="logo" />
            <li>Movie Heist</li>
        </ul>
    </div>
  )
}

export default Navbar;
