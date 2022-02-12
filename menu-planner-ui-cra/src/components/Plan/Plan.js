import React, { useState, useEffect } from "react";
import useDishController from "../../hooks/Controllers/useDishController";
import useDishTypeController from "../../hooks/Controllers/useDishTypeController";
import PlanTableBody from "./PlanTableBody";
import PlanTableHeader from "./PlanTableHeader";

const Plan = () => {
  const dishTypesController = useDishTypeController();

  const [users, setUsers] = useState([8, 6]);
  const [dishes, setDishes] = useState([]);
  const [days, setDays] = useState(7);
  const [startDate, setStartDate] = useState(new Date("2021-12-22T00:00:00"));
  const [dishTypes, setDishTypes] = useState([1, 3, 5]);

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
    const dishTypes = await dishTypesController.getAllDishTypes();
    setDishTypes(dishTypes);
  }, []);


  return (
    <div className="bg-gray-100 rounded-2xl">
      <div className="overflow-auto rounded-xl shadow-xl">
        <table className="w-full">
          <PlanTableHeader dishTypes={dishTypes} />
          <PlanTableBody
            dates={dates}
            dishTypes={dishTypes}
            users={users}
            dishes={dishes}
          />
        </table>
      </div>
    </div>
  );
};

export default Plan;
