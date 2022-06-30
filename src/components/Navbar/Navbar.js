import { useState, useEffect } from 'react';

import './Navbar.css';

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 476 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  return (
    <nav
      className={`Navbar ${stickyClass ? null : 'radius-top'} ${stickyClass}`}>
      <ul className='Navbar-container'>
        <li className='Navbar-item'>Introduction</li>
        <li className='Navbar-item'>Ingredients</li>
        <li className='Navbar-item'>Impact</li>
        <li className='Navbar-item'>Menu</li>
        <li className='Navbar-item'>Order Now</li>
      </ul>
    </nav>
  );
};
export default Navbar;
