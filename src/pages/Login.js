import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleQuestions from '../ToggleQuestions.js';
import { useGlobalContext } from '../context';

const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const { closeSubmenu } = useGlobalContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email);
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate('/dashboard');
  };
  //onMouseOver={closeSubmenu} inside section //

  return (
    <section className='section' onMouseOver={closeSubmenu}>
       
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
       <div >
        <ToggleQuestions/>
       </div>
    </section>
  );
};
export default Login;
