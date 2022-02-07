import React from 'react'
import { FiFacebook, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='mt-4'>
      <div className='text-center text-white font-semibold'>@MenuPlanner</div>
      <div className='flex justify-center'>
        <div><FiFacebook className='text-white' size='1.5rem' /></div>
        <div><FiInstagram className='text-white' size='1.5rem' /></div>
      </div>
    </div>
  )
}

export default Footer
