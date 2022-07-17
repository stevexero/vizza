import { Link } from 'react-router-dom';
import {
  BsFillPinMapFill,
  BsFillTelephoneFill,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsPinterest,
  BsClockFill,
  BsCalendar2WeekFill,
} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';

import Map from '../../assets/map.png';

import './Footer.css';

const Footer = ({ existingUser, isAdmin }) => {
  return (
    <div className='Footer mb-4'>
      <div className='Footer-container'>
        <div className='Footer-left'>
          <img src={Map} alt='map' className='Footer-map' />
        </div>
        <div className='Footer-right'>
          <h2 className='text-slate-grey med-heading'>Vizza Vegan Pizzaria</h2>
          <div className='Footer-details mt-1'>
            <div className='Footer-details-left text-slate-grey'>
              <h4 className='mt-1'>
                <BsClockFill />
                &nbsp;&nbsp;Hours
              </h4>
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
              <h4 className='mt-1'>
                <BsCalendar2WeekFill />
                &nbsp;&nbsp;
                <Link to='/careers' className='text-slate-grey'>
                  Careers
                </Link>
              </h4>
            </div>
            <div className='Footer-details-right text-slate-grey ml-2'>
              <h4 className='mt-1'>10:30am - 11:00pm daily</h4>
              <h4 className='mt-1'>
                975 Seven Hills Dr • Henderson, NV • 89052
              </h4>
              <h4 className='mt-1'>+1 (702) 940 - 7779</h4>
              <h4 className='mt-1'>contact@vizza.com</h4>
              <div style={{ marginTop: '2.25rem' }}></div>
            </div>
          </div>
          <div className='Footer-social text-slate-grey mt-3'>
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
      <div className='attribution mt-4 text-slate-grey text-center'>
        Site developed by{' '}
        <a href='https://steve.cx' className='text-slate-grey'>
          steve.cx
        </a>
      </div>
      {existingUser && isAdmin && (
        <div className='admin mt-4'>
          <Link to='/admin' className='text-slate-grey'>
            <RiAdminLine size='1.5rem' />
            &nbsp;&nbsp;Admin Panel
          </Link>
        </div>
      )}
    </div>
  );
};
export default Footer;
