import React from 'react'
import { FiFacebook, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='mt-2'>
      <div className='text-center font-semibold'>@MenuPlanner</div>
      <div className='flex justify-center'>
        <div><FiFacebook size='1.5rem' /></div>
        <div><FiInstagram size='1.5rem' /></div>
      </div>
    </div>
  )
}

export default Footer
