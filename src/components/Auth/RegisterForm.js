import { useState } from 'react';
import FirebaseAuthService from '../../FirebaseAuthService';

import './RegisterForm.css';

const RegisterForm = ({ killModal }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
  });

  const { email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      try {
        await FirebaseAuthService.registerUser(email, password);
        killModal();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className='RegisterForm mt-1'>
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
        <label htmlFor='password' className='mt-2'>
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={onChange}
          placeholder='Enter password'
          required
          className='text-input mt-1'
        />
        <label htmlFor='password2' className='mt-2'>
          Password
        </label>
        <input
          type='password'
          id='password2'
          name='password2'
          value={password2}
          onChange={onChange}
          placeholder='Confirm password'
          required
          className='text-input mt-1'
        />
        <button type='submit' className='button button-white-smoke mt-3 mb-1'>
          Register
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;
