import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-between mx-4'>
      <div className='w-full font-bold rounded-t-lg border-2 border-black px-2 py-1'>
        <Link to='/plan'>
          <span className='block'>Plan</span>
        </Link>
      </div>
      <div className='w-full border-r-2 border-black px-2 my-1'>
        <Link to='/recipes'>
          <span className='block'>Przepisy</span>
        </Link>  
      </div>
      <div className='w-full border-r-2 border-black px-2 my-1'>
        <Link to='/products'>
          <span className='block'>Produkty</span>
          </Link>
      </div>
      <div className='w-full border-r-2 border-black px-2 my-1'>
        <Link to='/shopping-list'>
          <span className='block'>Lista zakupów</span>
        </Link>
      </div>
      <div className='w-full border-r-2 border-black px-2 my-1'>
        <Link to='/settings'>
          <span className='block'>Ustawienia</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
