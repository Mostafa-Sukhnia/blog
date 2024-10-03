import React from 'react'
import {Outlet} from 'react-router-dom';
//compnents import 
import Header  from '../components/NavBar'
import Footer  from '../components/Footer'
const Root = () => {
  return (
    <>
    <div className='max-container'>
    <Header/>
    <Outlet className="min-h-screen"/>
    </div>
    <Footer/>
    </>
  )
}

export default Root