import Meats from '../../assets/meats.jpeg';
import Cheeses from '../../assets/chez.jpeg';
import Veggies from '../../assets/veggies.jpeg';

import './Ingredients.css';

const Ingredients = () => {
  return (
    <div id='ingredients' className='Ingredients radius mb-4'>
      <div className='Ingredients-top'>
        <h2 className='med-heading'>Real ingredients, real delicious</h2>
        <div className='rule mt-2'></div>
      </div>
      <div className='Ingredients-middle mt-4'>
        <div className='Ingredients-card'>
          <img src={Meats} alt='meats' className='Ingredients-photo' />
          <h3 className='sm-heading mt-2'>Meats</h3>
          <p className='mt-2 text-slate-grey text-center'>
            ...or so you'll think. Our vegan meats are hand-crafted to
            perfection and will trick your tastebuds into believing it's the
            real thing!
          </p>
        </div>
        <div className='Ingredients-card'>
          <img src={Cheeses} alt='Cheeses' className='Ingredients-photo' />
          <h3 className='sm-heading mt-2'>Cheeses</h3>
          <p className='mt-2 text-slate-grey text-center'>
            Ooey, gooey, stretchy, hot, and melty! It's the perfect mix between
            science and nature and will have you never wanting animal-based
            cheeses again!
          </p>
        </div>
        <div className='Ingredients-card'>
          <img src={Veggies} alt='Veggies' className='Ingredients-photo' />
          <h3 className='sm-heading mt-2'>Veggies</h3>
          <p className='mt-2 text-slate-grey text-center'>
            Locally and ethically-sourced, organic, and quality-inspected daily
            to be sure your Vizza had the freshest, all-around ingredients!
          </p>
        </div>
      </div>
      <div className='Ingredients-bottom'>
        <button className='button button-white-smoke mt-4'>View Menu</button>
      </div>
    </div>
  );
};
export default Ingredients;
