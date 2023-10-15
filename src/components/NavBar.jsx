import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../assets/PastaBurger.svg';
import logo from '../assets/logo.svg';
import HomeIcon from '../assets/home.svg';
import AboutUsIcon from '../assets/about.svg';
import MissionIcon from '../assets/mission.svg';
import GithubIcon from '../assets/github.svg';
import './NavBar.css';


const NavBar = ({ onMenuOpen, onMenuClose }) => { 
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
      setIsOpen(true);
      onMenuOpen(); // Call the function passed as a prop
    };
  
    const closeMenu = () => {
      setIsOpen(false);
      onMenuClose(); // Call the function passed as a prop
    };
    console.log(isOpen)
  
    return (
        <nav className="navbar">
            {!isOpen && (
                <div className="navbar__hamburger" onClick={openMenu}>
                    <img src={HamburgerIcon} alt="Hamburger Icon" />
                </div>
            )}
          
            <div className={`navbar__logo ${isOpen ? 'move-left' : ''}`} onClick={closeMenu}>PastaMe</div>
            
            {isOpen && (
                <div className={`navbar__menu ${isOpen ? 'open' : ''}`} >
                    <ul onClick={closeMenu}>
                        <li><img src={HomeIcon} alt="Home Icon" /><Link to="/">Home</Link></li>
                        <li><img src={AboutUsIcon} alt="About Us Icon" /><Link to="/about">About Us</Link></li>
                        <li><img src={MissionIcon} alt="Mission Icon" /><Link to="/mission">Mission</Link></li>
                        <li><img src={GithubIcon} alt="Github Icon" /><Link to="/github">Github</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;

