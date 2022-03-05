import React, { useEffect, useState } from "react";
import useDishController from "../../../controllers/useDishController";
import useDishTypeController from "../../../controllers/useDishTypeController";
import DateExt from "../../../extensions/DateExt";
import LocalStorageExt from "../../../extensions/LocalStorageExt";
import useUser from "../../../store/user/useUser";
import PlanContext from "./PlanContext";

const PlanProvider = (props) => {
  const userHook = useUser();

  let initDayNumber = localStorage.getItem("dayNumber");
  if (!initDayNumber) {
    initDayNumber = 7;
  }

  const [dayNumber, setDayNumber] = useState(Number(initDayNumber));
  const setDatNumberHandler = (value) => {
    setDayNumber(Number(value));
    localStorage.setItem("dayNumber", value);
  };

  const [startDate, setStartDate] = useState(
    LocalStorageExt.getDate("startDate")
  );
  const setStartDateHandler = (value) => {
    setStartDate(value);
    LocalStorageExt.setObject("startDate", value);
  };

  const [users, setUsers] = useState(
    LocalStorageExt.getNotEmptyArrayOrDefault("users", [userHook.user.id])
  );
  const setUsersHandler = (value) => {
    setUsers(value);
    LocalStorageExt.setArray("users", value);
  };

  const dishTypesController = useDishTypeController();
  const dishController = useDishController();

  const [dishes, setDishes] = useState([]);
  const [dish, setDish] = useState({});
  const [dishTypes, setDishTypes] = useState([1, 3, 5]);
  const [dates, setDates] = useState([])

  const refresh = async () => {
    const numbersOfDays = [...Array(dayNumber).keys()];
    const currentDates = numbersOfDays.map((i) => {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      return date;
    });

    setDates(currentDates);
    const currentDishes = await dishController.getDishList({
      from: DateExt.toDateString(new Date(startDate)),
      days: dayNumber,
      usersIds: users,
    });
    setDishes(currentDishes.dishesDto);

    const dtypes = await dishTypesController.getAllDishTypes();
    setDishTypes(dtypes);
  };


  useEffect(() => refresh(), [users, dayNumber, startDate]);

  const provider = {
    startDate,
    setStartDate: setStartDateHandler,
    dayNumber,
    setDayNumber: setDatNumberHandler,
    users,
    setUsers: setUsersHandler,
    dishTypes,
    setDishTypes,
    dishes,
    setDishes,
    dish,
    setDish,
    dates,
  };

  return (
    <PlanContext.Provider value={provider}>
      {props.children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;
