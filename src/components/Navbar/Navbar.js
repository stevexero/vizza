import { useState, useEffect } from 'react';
import { Link as ScrollTo } from 'react-scroll';
import { BsBag } from 'react-icons/bs';

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
        <ScrollTo
          to='introduction'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-70}
          duration={250}>
          <li className='Navbar-item'>Introduction</li>
        </ScrollTo>
        <ScrollTo
          to='ingredients'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-70}
          duration={250}>
          <li className='Navbar-item'>Ingredients</li>
        </ScrollTo>
        <ScrollTo
          to='impact'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-70}
          duration={250}>
          <li className='Navbar-item'>Impact</li>
        </ScrollTo>
        <ScrollTo
          to='menu'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-70}
          duration={250}>
          <li className='Navbar-item'>Menu</li>
        </ScrollTo>
        <li className='Navbar-item'>
          <BsBag /> 0
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
