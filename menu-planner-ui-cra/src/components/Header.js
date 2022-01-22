import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ApiContext from '../store/ApiContext';

const isActiveStyle = 'w-full font-bold border-r-2 border-black px-2 my-1';
const isNotActiveStyle = 'w-full border-r-2 border-black px-2 my-1';

const Header = () => {
  return (
    <div className='flex justify-between mx-4'>

      <NavLink
        to='/plan'
        className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
      >
        <span className='block'>Plan</span>
      </NavLink>
      <NavLink
        to='/recipes'
        className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
      >
        <span className='block'>Przepisy</span>
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
      >
        <span className='block'>Produkty</span>
      </NavLink>
      <NavLink
        to='/shopping-list'
        className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
      >
        <span className='block'>Lista zakupów</span>
      </NavLink>
      <NavLink
        to='/tags'
        className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
      >
        <span className='block'>Tagi</span>
      </NavLink>
      <NavLink
        to='/settings'
        className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
      >
        <span className='block'>Ustawienia</span>
      </NavLink>

    </div>
  )
}

export default Header
