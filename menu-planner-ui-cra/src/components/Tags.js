import React, { useContext, useEffect, useState } from 'react'
import ApiContext from '../store/ApiContext';
import TagController from '../controllers/TagController';

const Tags = () => {
  const apiContext = useContext(ApiContext)
  const tagController = new TagController(apiContext);
  
  const [tag, setTag] = useState({})

  useEffect(async () => {
    const tag = await tagController.getTags();
    console.log(tag);
    setTag(tag);
  }, [])
  
  return (
    <div className="bg-gray-100">
    <div className="overflow-auto rounded-lg border border-black shadow">
      <div className='w-full'>
        <div className='p-3 bg-red-400 border-b-2 border-black text-center font-semibold'>Tags</div>
      </div>
      <div className='h-80'></div>
    </div>
  </div>
  )
}

export default Tags;
