// import React, { useState } from 'react';
// import HamburgerIcon from '../assets/PastaBurger.svg';
// import './NavBar.css';

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const openMenu = () => {
//         setIsOpen(true);
//     };

//     const closeMenu = () => {
//         setIsOpen(false);
//     };

//     return (
//         <nav className="navbar">
//             {!isOpen && (
//                 <div className="navbar__hamburger" onClick={openMenu}>
//                     <img src={HamburgerIcon} alt="Hamburger Icon" />
//                 </div>
//             )}
//             <div className={`navbar__logo ${isOpen ? 'move-left' : ''}`} onClick={closeMenu}>PastaMe</div>
//             {isOpen && (
//                 <div className={`navbar__menu ${isOpen ? 'open' : ''}`}>
//                     <ul onClick={closeMenu}>
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default NavBar;


// import React, { useState } from 'react';
// import HamburgerIcon from '../assets/PastaBurger.svg';
// import './NavBar.css';

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const openMenu = () => {
//         setIsOpen(true);
//     };

//     const closeMenu = () => {
//         setIsOpen(false);
//     };

//     return (
//         <nav className="navbar">
//             {!isOpen && (
//                 <div className="navbar__hamburger" onClick={openMenu}>
//                     <img src={HamburgerIcon} alt="Hamburger Icon" />
//                 </div>
//             )}
//             <div className={`navbar__logo ${isOpen ? 'move-left' : ''}`} onClick={closeMenu}>PastaMe</div>
//             {isOpen && (
//                 <div className={`navbar__menu ${isOpen ? 'open' : ''}`}>
//                     <ul onClick={closeMenu}>
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default NavBar;



// import React, { useState } from 'react';
// import HamburgerIcon from '../assets/PastaBurger.svg';
// import './NavBar.css';

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const openMenu = () => {
//         setIsOpen(true);
//     };

//     const closeMenu = () => {
//         setIsOpen(false);
//     };

//     return (
//         <nav className="navbar">
//             {!isOpen && (
//                 <div className="navbar__hamburger" onClick={openMenu}>
//                     <img src={HamburgerIcon} alt="Hamburger Icon" />
//                 </div>
//             )}
//             <div className={`navbar__logo ${isOpen ? 'move-left' : ''}`} onClick={closeMenu}>PastaMe</div>
//             {isOpen && (
//                 <div className={`navbar__menu ${isOpen ? 'open' : ''}`}>
//                     <ul onClick={closeMenu}>
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default NavBar;



// import React, { useState } from 'react';
// import HamburgerIcon from '../assets/PastaBurger.svg';
// import './NavBar.css';

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const openMenu = () => {
//         setIsOpen(true);
//     };

//     const closeMenu = () => {
//         setIsOpen(false);
//     };

//     return (
//          <nav className="navbar">
            
//             {!isOpen && (
//                 <div className="navbar__hamburger" onClick={openMenu}>
//                     <img src={HamburgerIcon} alt="Hamburger Icon" />
//                 </div>
//             )}

//             <div className={`navbar__logo ${isOpen ? 'move-left' : ''}`} onClick={closeMenu}>PastaMe</div>
//             {isOpen && (
//                 <div className={`navbar__menu ${isOpen ? 'open' : ''}`}>
//                     <ul onClick={closeMenu}>
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default NavBar;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../assets/PastaBurger.svg';
import logo from '../assets/logo.svg';
import HomeIcon from '../assets/home.svg';
import AboutUsIcon from '../assets/about.svg';
import MissionIcon from '../assets/mission.svg';
import GithubIcon from '../assets/github.svg';
import './NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className={`navbar__logo ${isOpen ? 'move-left' : ''}`} onClick={closeMenu}>PastaMe</div>
            {!isOpen && (
                <div className="navbar__hamburger" onClick={openMenu}>
                    <img src={HamburgerIcon} alt="Hamburger Icon" />
                </div>
            )}
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

