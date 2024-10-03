import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Login = () => {
  const [show, setShow] = useState(false);
  const togglePassword = () => {
    setShow(!show);
  };

  const handelform = (e) =>{
    e.preventDefault();
  }

  return (
    <div className='flex justify-center items-center h-[100vh] bg-[#B9E7E8] flex-col'>
        <h1 className='text-4xl font-bold text-center my-4 text-[#207A71]'>Login</h1>
      <div className='w-[350px] border-2 h-fit rounded-lg p-2 bg-white'>
      <div className='w-[85%] m-auto mt-2 rounded-full'>
      <Link to='/' className='font-bold text-[#207A71]'><i className="fa-solid fa-angle-left"></i> Home</Link>
      </div>
        <form className=' w-[85%] m-auto mt-6 h-fit' onSubmit={(e)=>{handelform(e)}}>
          <label htmlFor='user'>User Name:</label>
          <input
            id='user'
            className='border-b-2 rounded-md p-1 w-full mt-2  text-[#207A71] focus:outline-none focus:border-b-[#207A71]'
            type='text'
            placeholder='username'
          />
          <label htmlFor='password' className='block mt-4'>Pass Word:</label>
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
          <button className='w-full bg-[#207A71] mt-8 p-3 text-white font-bold rounded-lg'>Login</button>
          <span className='block text-sm text-gray-400 my-2'>Don`t you have an Account? <Link to='register' className='text-blue-400 underline' >SignUp</Link> </span>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
