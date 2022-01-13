import React, { useState, useEffect } from 'react';

const Plan = () => {
  const [days, setDays] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:3000/data/dummyAPI.json')
      .then(response => response.json())
      .then(data => setDays(data))
  }

  useEffect(()=>{
    fetchData();
  },[])

  console.log(days);
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
            {days.map((day) => (
              <tr className="bg-gray-50" key={day.day}>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{day.day}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap font-bold">{day.user}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{day.firstMeal}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{day.secondMeal}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{day.lunch}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{day.dessert}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{day.dinner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Plan
