import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">Pasta ME</a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link">About Us</a>
                </li>
                <li className="nav-item">
                    <a href="/mission" className="nav-link">Our Mission</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
