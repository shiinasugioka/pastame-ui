import React, { useState } from 'react';
import HamburgerIcon from '../assets/PastaBurger.svg';
import './NavBar.css';



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h1>PastaMe</h1>
            </div>
            {isOpen && (
                <div className={`navbar__menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li>About Us</li>
                        <li>Our Mission</li>
                    </ul>
                </div>
            )}
            <div className="navbar__hamburger" onClick={toggleMenu}>
                <img src={HamburgerIcon} alt="Hamburger Icon" />
            </div>
        </nav>
    );
};

export default NavBar;
