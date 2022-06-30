import { useState, useEffect } from 'react';

import PizzaPhoto from '../../assets/pizzaphoto1.jpg';

import './Introduction.css';

const Introduction = () => {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 476 ? setStickyClass('sticky') : setStickyClass('');
    }
  };

  return (
    <div className={`Introduction radius-bottom mb-4 ${stickyClass}`}>
      <div className='Introduction-left mr-4'>
        <h2 className='med-heading'>Not your average vegan delight</h2>
        <div className='rule mt-2'></div>
        <p className='mt-2 text-slate-grey'>
          Discover the healthy, hearty side of pizza with our unique,
          stone-fired vegan pizzas. We don't just deliver quality, we use only
          the freshest ingredients and craft them with care. So go ahead,
          indulge in something delicious tonight!
        </p>
        <button className='button button-white-smoke mt-2'>Order Now</button>
      </div>
      <div className='Introduction-right'>
        <img src={PizzaPhoto} alt='pizza' className='Introduction-photo' />
      </div>
    </div>
  );
};
export default Introduction;
