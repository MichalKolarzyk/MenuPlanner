import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='flex justify-between items-center px-4 pb-4 mb-4 border-b border-black'> 
      <Link to='/plan' className='font-semibold text-xl'>
        MenuPlannerApp
      </Link>
      <div className='cursor-pointer'>
        Wyloguj
      </div>
    </div>
  )
}

export default Nav;
