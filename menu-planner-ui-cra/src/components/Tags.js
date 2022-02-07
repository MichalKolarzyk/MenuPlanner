import React, { useEffect, useState } from 'react'
import useTagController from '../hooks/Controllers/useTagController';

const Tags = () => {
  const tagController = useTagController();
  
  const [tag, setTag] = useState({})

  useEffect(async () => {
    const tag = await tagController.getTags();
    console.log(tag);
    setTag(tag);
  }, [])
  
  return (
    <div className="bg-gray-100 rounded-2xl">
    <div className="overflow-auto rounded-xl shadow-xl">
      <div className='w-full'>
        <div className='p-3 bg-red-400 border-b text-center font-semibold'>Tags</div>
      </div>
      <div className='min-h-screen'></div>
    </div>
  </div>
  )
}

export default Tags;
