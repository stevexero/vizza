import {
  GiPlantSeed,
  GiFullPizza,
  GiCakeSlice,
  GiSodaCan,
} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import MenuItems from '../MenuItems/MenuItems';

import './Menu.css';

const Menu = ({ menuItems }) => {
  return (
    <div id='menu' className='Menu radius mb-4'>
      <h2 className='med-heading'>Our Menu, Always Fresh</h2>
      <div className='rule mt-2'></div>
      {/* SALADS */}
      <MenuItems
        menuItems={menuItems}
        icon={<GiPlantSeed size='1.5rem' />}
        heading='Salads'
        category='salads'
      />
      {/* PIZZAS */}
      <MenuItems
        menuItems={menuItems}
        icon={<GiFullPizza size='1.5rem' />}
        heading='Pizza'
        category='pizzas'
      />
      {/* DESSERTS */}
      <MenuItems
        menuItems={menuItems}
        icon={<GiCakeSlice size='1.5rem' />}
        heading='Desserts'
        category='desserts'
      />
      {/* DRINKS */}
      <MenuItems
        menuItems={menuItems}
        icon={<GiSodaCan size='1.5rem' />}
        heading='Drinks'
        category='drinks'
      />
      <Link to='/order-online' className='mt-4'>
        <button className='button button-white-smoke'>Order Online</button>
      </Link>
    </div>
  );
};
export default Menu;
