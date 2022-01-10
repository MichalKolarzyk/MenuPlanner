import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between mx-4'>
      <div className='w-full font-bold rounded-t-lg border-2 border-black px-2 py-1'>
        <span>Plan</span>
      </div>
      <div className='w-full border-r-2 border-black px-2 my-1'>
        <span>Przepisy</span>
      </div>
      <div className='w-full border-r-2 border-black px-2 my-1'>
        <span>Produkty</span>
      </div>
      <div className='w-full border-r-2 border-black px-2 my-1'>
        <span>Lista zakupów</span>
      </div>
      <div className='w-full border-r-2 border-black px-2 my-1'>
        <span>Ustawienia</span>
      </div>
    </div>
  )
}

export default Header
