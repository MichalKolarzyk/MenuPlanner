import React, { useState, useEffect, useContext } from "react";
import useDishController from "../../hooks/controllers/useDishController";
import useDishTypeController from "../../hooks/controllers/useDishTypeController";
import useDateExtension from "../../hooks/extensions/useDateExtension";
import PlanContext from "./context/PlanContext";
import PlanTableBody from "./PlanTableBody";
import PlanTableHeader from "./PlanTableHeader";
import PlanFilterBar from './PlanFilterBar'

const Plan = () => {
  const dishTypesController = useDishTypeController();
  const dateExtension = useDateExtension();
  const planContext = useContext(PlanContext);

  const startDate = planContext.startDate;
  const days = planContext.dayNumber;

  const users = planContext.users
  const [dishes, setDishes] = useState([]);
  const [dishTypes, setDishTypes] = useState([1, 3, 5]);

  const dishController = useDishController();
  const numbersOfDays = [...Array(planContext.dayNumber).keys()];

  const dates = numbersOfDays.map((i) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return date;
  });

  useEffect(async () => {
    const dishesItems = await dishController.getDishList({
      from: dateExtension.toDateString(startDate),
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
          <PlanFilterBar/>
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
