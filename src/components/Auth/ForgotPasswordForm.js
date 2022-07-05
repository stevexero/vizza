import { useState } from 'react';

import FirebaseAuthService from '../../FirebaseAuthService';

import './ForgotPasswordForm.css';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      console.log('no email');
      //   Handle message
      return;
    }

    try {
      await FirebaseAuthService.sendPasswordResetEmail(email);
      //   Handle message
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='ForgotPasswordForm mt-1'>
      <form onSubmit={onSubmit}>
        <label htmlFor='email' className='mt-1'>
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={onChange}
          placeholder='Enter email'
          required
          className='text-input mt-1'
        />
        <button type='submit' className='button button-white-smoke mt-3 mb-1'>
          Reset Password
        </button>
      </form>
    </div>
  );
};
export default ForgotPasswordForm;
