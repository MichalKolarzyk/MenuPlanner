import React from 'react';
import { Link } from 'react-router-dom';
import useAccountController from '../hooks/Controllers/useAccountController';

const Nav = () => {
  const accountController = useAccountController();
  
  const logoutHandler = () => {
    accountController.logout();
  }

  return (
    <div className='flex justify-between items-center px-4 pb-4 mb-4 border-b border-black'> 
      <Link to='/plan' className='font-semibold text-xl'>
        MenuPlannerApp
      </Link>
      <div onClick={logoutHandler} className='cursor-pointer'>
        Wyloguj
      </div>
    </div>
  )
}

export default Nav;
