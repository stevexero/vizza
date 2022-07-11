import { GiFarmTractor } from 'react-icons/gi';
import { FaSmog } from 'react-icons/fa';
import { IoIosWater } from 'react-icons/io';
import { GiChemicalTank } from 'react-icons/gi';
import { FaTrashAlt } from 'react-icons/fa';

import './Impact.css';
import { Link } from 'react-router-dom';

const Impact = () => {
  return (
    <div id='impact' className='Impact radius mb-4'>
      <h2 className='med-heading'>
        Friendly to the environment AND the dinner table!
      </h2>
      <div className='rule mt-2'></div>
      <div className='Impact-subheading'>
        <p className='mt-2 text-slate-grey text-center'>
          Our goal at Vizza is to make the world a safer place for future
          generations by reducing emissions and supporting family-run farms
          while maintaining the deliciousness of our number one go-to food,
          pizza!
        </p>
      </div>
      <div className='Impact-stats mt-4'>
        <div className='Impact-item text-white-smoke text-center'>
          <GiFarmTractor size='3rem' />
          <p className='med-heading mt-1'>3,216</p>
          <h6 className='mt-1'>sq. acres</h6>
          <h5 className='mt-1'>Family Farms Supported</h5>
        </div>
        <div className='Impact-item text-white-smoke text-center'>
          <FaSmog size='3rem' />
          <p className='med-heading mt-1'>4,524</p>
          <h6 className='mt-1'>tons</h6>
          <h5 className='mt-1'>Carbon Removed</h5>
        </div>
        <div className='Impact-item text-white-smoke text-center'>
          <IoIosWater size='3rem' />
          <p className='med-heading mt-1'>2,625</p>
          <h6 className='mt-1'>gallons</h6>
          <h5 className='mt-1'>Water Saved</h5>
        </div>
        <div className='Impact-item text-white-smoke text-center'>
          <GiChemicalTank size='3rem' />
          <p className='med-heading mt-1'>1,962</p>
          <h6 className='mt-1'>tons</h6>
          <h5 className='mt-1'>Pesticides Removed</h5>
        </div>
        <div className='Impact-item text-white-smoke text-center'>
          <FaTrashAlt size='3rem' />
          <p className='med-heading mt-1'>5,237</p>
          <h6 className='mt-1'>tons</h6>
          <h5 className='mt-1'>Waste Reduced</h5>
        </div>
      </div>
      <Link to='/blog'>
        <button className='button button-white-smoke mt-4'>Learn More</button>
      </Link>
    </div>
  );
};
export default Impact;
