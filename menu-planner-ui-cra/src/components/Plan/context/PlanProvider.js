import React, { useState } from "react";
import LocalStorageWrapper from "../../../browser/LocalStorageWrapper";
import useUser from "../../../store/user/useUser";
import PlanContext from "./PlanContext";

const PlanProvider = (props) => {
  const userHook = useUser();
  console.log(userHook.user.id);

  let initDayNumber = localStorage.getItem("dayNumber");
  if(!initDayNumber){
    initDayNumber = 7
  }

  const [dayNumber, setDayNumber] = useState(Number(initDayNumber));
  const setDatNumberHandler = (value) => {
    setDayNumber(Number(value));
    localStorage.setItem("dayNumber", value);
  }

  const [startDate, setStartDate] = useState(LocalStorageWrapper.getDate("startDate"));
  const setStartDateHandler = (value) => {
    setStartDate(value)
    LocalStorageWrapper.setObject("startDate", value)
  }

  const [users, setUsers] = useState(LocalStorageWrapper.getNotEmptyArrayOrDefault("users", [userHook.user.id]));
  const setUsersHandler = (value) => {
    setUsers(value);
    LocalStorageWrapper.setArray("users", value);
  }



  const provider = {
    startDate,
    setStartDate: setStartDateHandler,
    dayNumber,
    setDayNumber: setDatNumberHandler,
    users,
    setUsers: setUsersHandler,
  };

  return (
    <PlanContext.Provider value={provider}>
      {props.children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;
