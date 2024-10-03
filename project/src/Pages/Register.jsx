import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Login = () => {
  const [show, setShow] = useState(false);
  const togglePassword = () => {
    setShow(!show);
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className='flex justify-center items-center h-[100vh] bg-[#B9E7E8] flex-col'>
      <h1 className='text-4xl font-bold text-center my-4 text-[#207A71]'>Sign Up</h1>
      <div className='w-[350px] border-2 h-fit rounded-lg p-2 bg-white'>
      
        <form className='w-[85%] m-auto mt-6 h-fit' onSubmit={handleForm}>
          <label htmlFor='name'>Your Name</label>
          <input
            id='name'
            className='border-b-2 rounded-md p-1 w-full mt-2 text-[#207A71] focus:outline-none focus:border-[#207A71] my-4'
            type='text'
            placeholder='Name'
          />
          <label htmlFor='user'>User Name</label>
          <input
            id='user'
            className='border-b-2 rounded-md p-1 w-full mt-2 text-[#207A71] focus:outline-none focus:border-[#207A71]'
            type='text'
            placeholder='Username'
          />
          <label htmlFor='password' className='block mt-4'>Password</label>
          <div className='relative'>
            <input
              id='password'
              className='border-b-2 rounded-md p-1 w-full mt-2 text-[#207A71] focus:outline-none focus:border-b-[#207A71]'
              type={show ? 'text' : 'password'}
              placeholder='Password'
            />
            <i
              className={show ? "fa-regular fa-eye-slash" : 'fa-regular fa-eye'}
              onClick={togglePassword}
              style={{ position: 'absolute', top: '17px', right: '15px', cursor: 'pointer',color:' #207A71' }}
            ></i>
          </div>
          <div className='flex justify-center items-center gap-4 mt-4'>
          <input type='checkbox' className='form-checkbox h-4 w-4 text-[#207A71] accent-[#207A71]' />
            <p className='text-[10px] text-[#207A71]'>
            allowing you to stay logged in and avoid repeated login
            </p>
          </div>
          <button className='w-full bg-[#207A71] mt-4 p-3 text-white font-bold rounded-lg mb-2'>Sign Up</button>
        <span className='block text-sm text-gray-400 my-2 center'>Do you have an Account? <Link to='/login' className='text-blue-400 underline font-bold' >SignIn</Link> </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
