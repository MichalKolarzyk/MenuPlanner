import React, { useState, useEffect } from 'react';

const Plan = () => {
  
  return (
    <div className="bg-gray-100">
      <div className="overflow-auto rounded-lg border border-black shadow">
        <table className="w-full">
          <thead className="bg-red-400 border-b-2 border-black">
            <tr >
              <th className="p-3 text-sm font-semibold tracking-wide text-left"></th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Użytkownik</th>
              <th className="p-3 text-sm font-semibold whitespace-nowrap tracking-wide text-left">I Śniadanie</th>
              <th className="p-3 text-sm font-semibold whitespace-nowrap tracking-wide text-left">II Śniadanie</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Obiad</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Podwieczorek</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Kolacja</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="bg-gray-50">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Poniedziałek</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-bold">Michał</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Omlet</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Hummus</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Kebab</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Lekki deser</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Pizza</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Plan
