import React from 'react';

const Recipes = () => {
  return (
  <div className="bg-gray-100 rounded-2xl">
    <div className="rounded-xl shadow-xl">
      <div className='w-full'>
        <div className='p-3 bg-red-400 rounded-t-xl border-b text-center font-semibold'>Przepisy</div>
      </div>
      <div className='min-h-screen'>
        <div className="p-6 mx-2 border-b border-black flex justify-between">
          <div className="h-max w-96">
            <img
              src="https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/salatka-z-bobem-i-fasola-szparagowa63208.jpg"
              alt="fasolka"
              className="block w-full h-full object-cover rounded-xl"
            />
            </div>
            <div>
              <div className="mx-4 px-4 py-2 tracking-wider font-semibold">
                 Bób z fasolką szparagową
              </div>
              <div className="mx-4 px-4 py-2 text-sm tracking-wider">
                8 składników
              </div>
              <div className="mx-4 px-4 py-2 text-sm tracking-wider">
                 Czas przygotowania: 20 minut
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Recipes;
