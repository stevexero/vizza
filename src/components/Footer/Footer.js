import { Link } from 'react-router-dom';
import {
  BsFillPinMapFill,
  BsFillTelephoneFill,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsPinterest,
} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';

import Map from '../../assets/map.png';

import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer mb-4'>
      <div className='Footer-container'>
        <div className='Footer-left'>
          <img src={Map} alt='map' className='Footer-map' />
        </div>
        <div className='Footer-right'>
          <h2 className='text-white-smoke med-heading'>Vizza Vegan Pizzaria</h2>
          <div className='Footer-details mt-1'>
            <div className='Footer-details-left text-white-smoke'>
              <h4 className='mt-1'>
                <BsFillPinMapFill />
                &nbsp;&nbsp;Address
              </h4>
              <h4 className='mt-1'>
                <BsFillTelephoneFill />
                &nbsp;&nbsp;Phone
              </h4>
              <h4 className='mt-1'>
                <MdEmail />
                &nbsp;&nbsp;Email
              </h4>
            </div>
            <div className='Footer-details-right text-white-smoke ml-2'>
              <h4 className='mt-1'>
                975 Seven Hills Dr • Henderson, NV • 89052
              </h4>
              <h4 className='mt-1'>+1 (702) 940 - 7779</h4>
              <h4 className='mt-1'>contact@vizza.com</h4>
            </div>
          </div>
          <div className='Footer-social text-white-smoke mt-4'>
            <span className='social-item mr-2'>
              <BsInstagram size='2rem' />
            </span>
            <span className='social-item mr-2'>
              <BsTwitter size='2rem' />
            </span>
            <span className='social-item mr-2'>
              <BsFacebook size='2rem' />
            </span>
            <span className='social-item mr-2'>
              <BsPinterest size='2rem' />
            </span>
          </div>
        </div>
      </div>
      <div className='attribution mt-4 text-white-smoke text-center'>
        Site developed by{' '}
        <a href='https://steve.cx' className='text-white-smoke'>
          steve.cx
        </a>
      </div>
      <div className='admin mt-4 text-center'>
        <Link to='/admin' className='text-white-smoke'>
          <RiAdminLine />
        </Link>
      </div>
    </div>
  );
};
export default Footer;
