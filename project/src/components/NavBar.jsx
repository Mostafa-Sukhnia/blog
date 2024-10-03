import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.png';

const NavBar = () => {
  const [bards, setBards] = useState(false);

  const handleBards = () => {
    setBards(!bards);
  };

  return (
    <header className="flex justify-between items-center">
      <NavLink to="/">
        <img src={logo} alt="logo" width={80} height={80} />
      </NavLink>

      <div className="hidden md:flex justify-between items-center gap-6 mr-4">
        <NavLink to="/category/art"        className="hover:text-[#b9e7e8] duration-500 font-bold active:text-[#207a71] text-lg">ART</NavLink>
        <NavLink to="/category/science"    className="hover:text-[#b9e7e8] duration-500 font-bold active:text-[#207a71] text-lg">SCIENCE</NavLink>
        <NavLink to="/category/technology" className="hover:text-[#b9e7e8] duration-500 font-bold active:text-[#207a71] text-lg">TECHNOLOGY</NavLink>
        <NavLink to="/category/cinema"     className="hover:text-[#b9e7e8] duration-500 font-bold active:text-[#207a71] text-lg">CINEMA</NavLink>
        <NavLink to="/category/design"     className="hover:text-[#b9e7e8] duration-500 font-bold active:text-[#207a71] text-lg">DESIGN</NavLink>
        <NavLink to="/category/food"       className="hover:text-[#b9e7e8] duration-500 font-bold active:text-[#2b5a55] text-lg">FOOD</NavLink>

        <div className="flex gap-2 text-lg lg:text-2xl">
          <NavLink to="/login" className="font-bold text-[#207a71] hover:text-[#b9e7e8] duration-500">
            <i className="fa-solid fa-user"></i>
          </NavLink>
          <NavLink to="/write" className='text-[#207a71] hover:text-blue-400 duration-500'>
            <i className="fa-regular fa-pen-to-square"></i>
          </NavLink>
        </div>
      </div>

      <div className="md:hidden cursor-pointer">
        <i
          className="fa-solid fa-bars-staggered"
          onClick={handleBards}
          style={{ fontSize: '24px', color: '#b9e7e8' }}
        ></i>

        {bards && (
          <>
            <div className="bg-[#b9e7e8] fixed top-0 right-0 flex justify-between items-center flex-col h-full w-1/2 gap-8 pt-6 rounded-l-3xl shadow-xl z-[9999] sm:text-lg">
              <div className="flex justify-center items-start flex-col gap-8 w-[85%] mx-auto text-lg text-[#207a71] mt-8">
                <NavLink to="/art" className="font-bold active:text-[#207a71] hover:translate-x-4 duration-500 ease-in-out">
                  <i className="fa-solid fa-palette" style={{ color: 'white', paddingRight: '25px' }}></i> ART
                </NavLink>
                <NavLink to="/science" className="font-bold active:text-[#207a71] hover:translate-x-4 duration-500 ease-in-out">
                  <i className="fa-solid fa-microscope" style={{ color: 'white', paddingRight: '25px' }}></i> SCIENCE
                </NavLink>
                <NavLink to="/technology" className="font-bold active:text-[#207a71] hover:translate-x-4 duration-500 ease-in-out">
                  <i className="fa-solid fa-microchip" style={{ color: 'white', paddingRight: '25px' }}></i> TECHNOLOGY
                </NavLink>
                <NavLink to="/cinema" className="font-bold active:text-[#207a71] hover:translate-x-4 duration-500 ease-in-out">
                  <i className="fa-solid fa-film" style={{ color: 'white', paddingRight: '25px' }}></i> CINEMA
                </NavLink>
                <NavLink to="/design" className="font-bold active:text-[#207a71] hover:translate-x-4 duration-500 ease-in-out">
                  <i className="fa-solid fa-pen-ruler" style={{ color: 'white', paddingRight: '25px' }}></i> DESIGN
                </NavLink>
                <NavLink to="/food" className="font-bold active:text-[#207a71] hover:translate-x-4 duration-500 ease-in-out">
                  <i className="fa-solid fa-utensils" style={{ color: 'white', paddingRight: '25px' }}></i> FOOD
                </NavLink>
              </div>

              <div className="w-full border-t-[1px] border-[#207a71]">
                <div className="flex gap-2 justify-between w-[80%] m-auto pt-6 mb-6 text-[#207a71] text-2xl">
                  <NavLink title="profile" to="/login" className="font-bold active:text-[#207a71] hover:-translate-y-2 duration-500 ease-in-out hover:text-white">
                    <i className="fa-solid fa-user"></i>
                  </NavLink>
                  <div
                    className="text-[#207a71] hover:text-white duration-500 ease-in-out cursor-pointer hover:-translate-y-2 "
                    title="cancel"
                    onClick={handleBards}
                  >
                    <i className="fa-solid fa-door-open"></i>
                  </div>
                  <NavLink className='hover:-translate-y-2 duration-500 ease-in-out hover:text-white' title="write" to="/write">
                    <i className="fa-regular fa-pen-to-square"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default NavBar;
