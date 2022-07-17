import PizzaLogo from '../../assets/pizzalogo.png';

import './Hero.css';

const Hero = () => {
  return (
    <div className='Hero'>
      <img src={PizzaLogo} alt='logo' className='Hero-logo' />
      <h1 className='Hero-title text-slate-grey large-heading mt-1'>Vizza</h1>
      <h3 className='Hero-subtitle text-slate-grey sm-heading mt-1'>
        Stone-fired Vegan pizza that feeds your soul and health.
      </h3>
      <button className='button button-white-smoke mt-3'>View Menu</button>
    </div>
  );
};
export default Hero;
