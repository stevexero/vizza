import { useState } from 'react';
import Modal from 'react-modal';
import { BiLogInCircle } from 'react-icons/bi';

import './Topbar.css';
import LoginForm from '../Auth/LoginForm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const Topbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div id='#topbar' className='Topbar'>
        <div className='login-icon text-white-smoke mt-4' onClick={openModal}>
          <BiLogInCircle size='2rem' />
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'>
        {/* <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
        <LoginForm />
      </Modal>
    </>
  );
};
export default Topbar;
