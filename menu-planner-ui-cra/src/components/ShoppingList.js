import React from 'react';

const ShoppingList = () => {
  return (
    <div className="bg-gray-100">
      <div className="overflow-auto rounded-lg border border-black shadow">
        <div className='w-full'>
          <div className='p-3 bg-red-400 border-b-2 border-black text-center font-semibold'>Lista zakupów</div>
        </div>
        <div className='h-80'></div>
      </div>
    </div>
  );
};

export default ShoppingList;
