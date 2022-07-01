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
import Tiramisu from '../../assets/tiramisu.jpg';
import Waffle from '../../assets/waffle.jpg';
import Canoli from '../../assets/canoli.jpg';
import PannaCotta from '../../assets/pannacotta.jpg';
import Soda from '../../assets/soda.png';
import Beer from '../../assets/beer.png';
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
      <div className='Menu-section mt-4'>
        <div className='Menu-section-header'>
          <GiPlantSeed />
          <h3 className='sm-heading ml-1'>Salads</h3>
        </div>
        <div className='rule mt-1'></div>
        <div className='Menu-items-container mt-2'>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img src={HouseSalad} alt='house salad' className='Menu-image' />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>House Salad</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing  mt-1'>
                <p className='Menu-item-description text-slate-grey'>$9.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img src={GreekSalad} alt='greek salad' className='Menu-image' />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>Greek Salad</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing mt-1'>
                <p className='text-slate-grey'>$9.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img
                src={HarvestSalad}
                alt='harvest salad'
                className='Menu-image'
              />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>Harvest Salad</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing mt-1'>
                <p className='text-slate-grey'>$9.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img
                src={CapreseSalad}
                alt='caprese salad'
                className='Menu-image'
              />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>Caprese Salad</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing mt-1'>
                <p className='text-slate-grey'>$9.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PIZZAS */}
      <div className='Menu-section mt-4'>
        <div className='Menu-section-header'>
          <GiFullPizza />
          <h3 className='sm-heading ml-1'>Pizzas</h3>
        </div>
        <div className='rule mt-1'></div>
        <div className='Menu-items-container mt-2'>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img
                src={TraditionalPizza}
                alt='traditional pizza'
                className='Menu-image'
              />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>Traditional Pizza</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing  mt-1'>
                <p className='Menu-item-description text-slate-grey'>$19.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img
                src={MargheritaPizza}
                alt='margherita pizza'
                className='Menu-image'
              />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>Margherita Pizza</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing mt-1'>
                <p className='text-slate-grey'>$19.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img src={PestoPizza} alt='pesto pizza' className='Menu-image' />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>Pesto Pizza</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing mt-1'>
                <p className='text-slate-grey'>$19.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img
                src={WhiteGarlicPizza}
                alt='white garlic pizza'
                className='Menu-image'
              />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>White Garlic Pizza</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing mt-1'>
                <p className='text-slate-grey'>$19.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img
                src={MeatLoversPizza}
                alt='meat lovers pizza'
                className='Menu-image'
              />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>Meat Lovers Pizza</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing mt-1'>
                <p className='text-slate-grey'>$19.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img
                src={SixCheesePizza}
                alt='six cheese pizza'
                className='Menu-image'
              />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>Six Cheese Pizza</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing mt-1'>
                <p className='text-slate-grey'>$19.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='BYO-button mt-4'>
          <button className='button button-white-smoke'>
            or Build Your Own
          </button>
        </div>
      </div>
      {/* DESSERTS */}
      <div className='Menu-section mt-4'>
        <div className='Menu-section-header'>
          <GiCakeSlice />
          <h3 className='sm-heading ml-1'>Desserts</h3>
        </div>
        <div className='rule mt-1'></div>
        <div className='Menu-items-container mt-2'>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img src={Tiramisu} alt='tiramisu' className='Menu-image' />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>Tiramisu</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing  mt-1'>
                <p className='Menu-item-description text-slate-grey'>$9.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img src={Waffle} alt='waffle' className='Menu-image' />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>Waffle and Berries</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing mt-1'>
                <p className='text-slate-grey'>$9.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img src={PannaCotta} alt='pannacotta' className='Menu-image' />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>Panna Cotta</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing mt-1'>
                <p className='text-slate-grey'>$9.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img src={Canoli} alt='canoli' className='Menu-image' />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>Canoli</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing mt-1'>
                <p className='text-slate-grey'>$9.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* DRINKS */}
      <div className='Menu-section mt-4'>
        <div className='Menu-section-header'>
          <GiSodaCan />
          <h3 className='sm-heading ml-1'>Drinks</h3>
        </div>
        <div className='rule mt-1'></div>
        <div className='Menu-items-container mt-2'>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img src={Soda} alt='soda' className='Menu-image' />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>Soda</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing  mt-1'>
                <p className='Menu-item-description text-slate-grey'>$2.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className='Menu-item'>
            <div className='Menu-item-left'>
              <img src={Beer} alt='beer' className='Menu-image' />
            </div>
            <div className='Menu-item-right ml-2'>
              <h4 className='sm-heading'>Beer</h4>
              <p className='Menu-item-description text-slate-grey mt-1'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='Menu-pricing mt-1'>
                <p className='text-slate-grey'>$4.95</p>
                <div className='counter'>
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
