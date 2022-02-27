import React, { useState, useEffect, useContext } from "react";
import useDishController from "../../controllers/useDishController";
import useDishTypeController from "../../controllers/useDishTypeController";
import PlanContext from "./context/PlanContext";
import PlanTableBody from "./PlanTableBody";
import PlanTableHeader from "./PlanTableHeader";
import PlanFilterBar from "./PlanFilterBar";
import Table from "../../ui/tables/Table";
import RoundedCanvas from "../../ui/canvases/RoundedCanvas";
import DateExt from "../../extensions/DateExt";

const Plan = () => {
  const dishTypesController = useDishTypeController();
  const planContext = useContext(PlanContext);

  const startDate = planContext.startDate;
  const days = planContext.dayNumber;

  const users = planContext.users;
  const [dishes, setDishes] = useState([]);
  const [dishTypes, setDishTypes] = useState([1, 3, 5]);

  const dishController = useDishController();
  const numbersOfDays = [...Array(planContext.dayNumber).keys()];

  const dates = numbersOfDays.map((i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    return date;
  });

  useEffect(async () => {
    const dishesItems = await dishController.getDishList({
      from: DateExt.toDateString(new Date(startDate)),
      days: days,
      usersIds: users,
    });
    setDishes(dishesItems.dishesDto);

    const dishTypes = await dishTypesController.getAllDishTypes();
    setDishTypes(dishTypes);
  }, [days, startDate, users]);

  return (
    <RoundedCanvas>
      <PlanFilterBar />
      <Table>
        <PlanTableHeader dishTypes={dishTypes} />
        <PlanTableBody
          dates={dates}
          dishTypes={dishTypes}
          users={users}
          dishes={dishes}
        />
      </Table>
    </RoundedCanvas>
  );
};

export default Plan;
