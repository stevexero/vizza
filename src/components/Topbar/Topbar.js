import { useState } from 'react';
import Modal from 'react-modal';
import { BiLogInCircle } from 'react-icons/bi';
import { BiLogOutCircle } from 'react-icons/bi';

import LoginForm from '../Auth/LoginForm';
import RegisterForm from '../Auth/RegisterForm';

import FirebaseAuthService from '../../FirebaseAuthService';

import './Topbar.css';
import ForgotPasswordForm from '../Auth/ForgotPasswordForm';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '500px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '2rem',
  },
};

Modal.setAppElement('#root');

const Topbar = ({ existingUser }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const openModal = () => {
    if (!existingUser) {
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const killModal = () => {
    closeModal();
  };

  const resetPassword = () => {
    setIsPasswordReset(true);
  };

  return (
    <>
      <div id='#topbar' className='Topbar'>
        <div className='login-icon text-white-smoke mt-4'>
          {existingUser ? (
            <div onClick={() => FirebaseAuthService.logoutUser()}>
              <p className='text-white-smoke mr-1'>Logout</p>
              <BiLogOutCircle size='2rem' />
            </div>
          ) : (
            <div onClick={openModal}>
              <p className='text-white-smoke mr-1'>Login</p>
              <BiLogInCircle size='2rem' />
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Auth Modal'>
        <div className='Modal-top-bar'>
          <div
            className='login-tab'
            onClick={() => {
              setIsLogin(true);
              setIsPasswordReset(false);
            }}
            style={{
              borderBottom: `2px solid ${
                isLogin && !isPasswordReset ? '#708090' : 'white'
              }`,
              paddingBottom: '0.25rem',
              opacity: isLogin && !isPasswordReset ? 1 : 0.25,
              cursor: 'pointer',
            }}>
            <h3>Login</h3>
          </div>
          <div
            className='register-tab ml-2'
            onClick={() => {
              setIsLogin(false);
              setIsPasswordReset(false);
            }}
            style={{
              borderBottom: `2px solid ${isLogin ? 'white' : '#708090'}`,
              paddingBottom: '0.25rem',
              opacity: isLogin ? 0.25 : 1,
              cursor: 'pointer',
            }}>
            <h3>Register</h3>
          </div>
          <div
            className='password-reset-tab ml-2'
            style={{
              borderBottom: '2px solid #708090',
              paddingBottom: '0.25rem',
              opacity: isPasswordReset ? 1 : 0,
              cursor: isPasswordReset ? 'pointer' : 'default',
            }}>
            <h3>Reset Password</h3>
          </div>
        </div>
        {isLogin ? (
          isPasswordReset ? (
            <ForgotPasswordForm />
          ) : (
            <LoginForm killModal={killModal} resetPassword={resetPassword} />
          )
        ) : (
          <RegisterForm killModal={killModal} />
        )}
      </Modal>
    </>
  );
};
export default Topbar;
