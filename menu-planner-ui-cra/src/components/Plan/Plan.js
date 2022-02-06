import React, { useState, useEffect, useContext } from "react";
import useDishController from "../../hooks/Controllers/useDishController";
import PlanCell from "./PlanCell";
import PlanDay from "./PlanDay";
import PlanUser from "./PlanUser";

const Plan = () => {
  //const [days, setDays] = useState([]);
  // const fetchData = () => {
  //   fetch('http://localhost:3000/data/dummyAPI.json')
  //     .then(response => response.json())
  //     .then(data => setDays(data))
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])



  const [users, setUsers] = useState([6,7]);
  const [dishes, setDishes] = useState([]);
  const [days, setDays] = useState(3);
  const [startDate, setStartDate] = useState(new Date("2021-12-22T00:00:00"));
  const [dishTypes, setDishTypes] = useState([1, 2, 3, 4, 5]);

  const dishController = useDishController();
  const numbersOfDays = [...Array(days).keys()];

  const dates = numbersOfDays.map((i) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return date;
  });

  useEffect(async () => {
    const dishesItems = await dishController.getDishList({
      from: new Date(2021, 11, 22),
      days: days,
      usersIds: users,
    });
    setDishes(dishesItems.dishesDto);
  }, []);

  const tdStandard ="p-3 text-sm text-gray-700 whitespace-nowrap"
  const tdBold = "p-3 text-sm text-gray-700 whitespace-nowrap font-bold"
  const thStandard = "p-3 text-sm font-semibold tracking-wide text-left"

  return (
    <div className="bg-gray-100">
      <div className="overflow-auto rounded-lg border border-black shadow">
      <table className="w-full">
          <thead className="bg-red-400 border-b-2 border-black">
            <tr >
            <th className={thStandard}></th>
              <th className={thStandard}>Użytkownik</th>
              {dishTypes.map(dt => <th className={thStandard}>{dt}</th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {dates.map(day => (
              users.map((user, index) => (
              <tr className="bg-gray-50" key={day.day}>
                {index === 0 && <td rowspan={users.length} className={tdStandard}>{day.toDateString()}</td>}
                {<PlanUser dishTypes={dishTypes} user={user} dishes={dishes.filter(d => d.userId === user && new Date(d.date).getTime() === day.getTime())}/>}
              </tr>
            ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Plan;