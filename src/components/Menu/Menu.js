import HouseSalad from '../../assets/saladhouse.jpg';
import GreekSalad from '../../assets/saladgreek.jpeg';
import HarvestSalad from '../../assets/saladharvest.jpeg';
import CapreseSalad from '../../assets/saladcaprese.jpg';
import TraditionalPizza from '../../assets/pizzatraditional.png';
import MargheritaPizza from '../../assets/pizzamargherita.png';
import PestoPizza from '../../assets/pizzapesto.png';
import WhiteGarlicPizza from '../../assets/pizzagarlicwhite.png';
import MeatLoversPizza from '../../assets/pizzameatlovers.png';
import SixCheesePizza from '../../assets/pizzasixcheese.png';
import {
  GiPlantSeed,
  GiFullPizza,
  GiCakeSlice,
  GiSodaCan,
} from 'react-icons/gi';

import './Menu.css';

const Menu = () => {
  return (
    <div id='menu' className='Menu radius mb-4'>
      <h2 className='med-heading'>Our Menu, Always Fresh</h2>
      <div className='rule mt-2'></div>
      <div className='Menu-section mt-2'>
        <div className='Menu-section-header'>
          <GiPlantSeed />
          <h3 className='sm-heading ml-1'>Salads</h3>
        </div>
        <div className='rule mt-1'></div>
        <div className='Menu-items-container mt-2'>
          <div className='Menu-item'>
            <img src={HouseSalad} alt='house salad' className='Menu-image' />
            <div className='Menu-item-info ml-2'>
              <h4 className='sm-heading'>House Salad</h4>
              <p className='mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className='Menu-item'>
            <img src={GreekSalad} alt='greek salad' className='Menu-image' />
            <div className='Menu-item-info ml-2'>
              <h4 className='sm-heading'>Greek Salad</h4>
              <p className='mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className='Menu-item'>
            <img
              src={HarvestSalad}
              alt='harvest salad'
              className='Menu-image'
            />
            <div className='Menu-item-info ml-2'>
              <h4 className='sm-heading'>Harvest Salad</h4>
              <p className='mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className='Menu-item'>
            <img
              src={CapreseSalad}
              alt='caprese salad'
              className='Menu-image'
            />
            <div className='Menu-item-info ml-2'>
              <h4 className='sm-heading'>Caprese Salad</h4>
              <p className='mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='Menu-section mt-2'>
        <div className='Menu-section-header'>
          <GiFullPizza />
          <h3 className='sm-heading ml-1'>Pizzas</h3>
        </div>
      </div>
      <div className='Menu-section mt-2'>
        <div className='Menu-section-header'>
          <GiCakeSlice />
          <h3 className='sm-heading ml-1'>Desserts</h3>
        </div>
      </div>
      <div className='Menu-section mt-2'>
        <div className='Menu-section-header'>
          <GiSodaCan />
          <h3 className='sm-heading ml-1'>Drinks</h3>
        </div>
      </div>
    </div>
  );
};
export default Menu;
