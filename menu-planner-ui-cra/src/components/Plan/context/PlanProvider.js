import React, { useState } from "react";
import LocalStorageWrapper from "../../../browser/LocalStorageWrapper";
import PlanContext from "./PlanContext";

const PlanProvider = (props) => {
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
    LocalStorageWrapper.setDate("startDate", value)
  }

  const [users, setUsers] = useState(LocalStorageWrapper.getArray("users"));
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
