import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-black text-[rgb(185,231,232)] pt-8'>
    <h1 className='max-container text-6xl text-white font-bold mb-8'>Welcom in Error</h1>
      <div className=' max-container mx-auto grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 text-sm overflow-hidden font-bold'>
        <NavLink to="/art" className="hover:text-[rgb(185,231,232)] duration-500 active:text-[#207a71] text-lg">
          ART
        </NavLink>
        <NavLink to="/science" className="hover:text-[#b9e7e8] duration-500 active:text-[#207a71]">
          SCIENCE
        </NavLink>
        <NavLink to="/technology" className="hover:text-[#b9e7e8] duration-500 active:text-[#699490]">
          TECHNOLOGY
        </NavLink>
        <NavLink to="/cinema" className="hover:text-[#b9e7e8] duration-500 active:text-[#207a71]">
          CINEMA
        </NavLink>
        <NavLink to="/design" className="hover:text-[#b9e7e8] duration-500 active:text-[#207a71]">
          DESIGN
        </NavLink>
        <NavLink to="/food" className="hover:text-[#b9e7e8] duration-500 active:text-[#2b5a55]">
          FOOD
        </NavLink>
        <NavLink to="/write" className="hover:text-[#b9e7e8] duration-500">
          Write
        </NavLink>
        <NavLink to="/login" className="hover:text-[#b9e7e8] duration-500">
          LogIn
        </NavLink>
      </div>
    <h1 className='max-container text-md text-white font-bold  text-center p-2'>&copy; Error 2024</h1>
    </footer>
  );
}

export default Footer;
