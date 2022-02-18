import React, { useState } from "react";
import PlanContext from "./PlanContext";

const PlanProvider = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  let initDayNumber = localStorage.getItem("dayNumber");
  if(!initDayNumber){
    initDayNumber = 7
  }
  const [dayNumber, setDayNumber] = useState(Number(initDayNumber));

  const setDatNumberHandler = (value) => {
    setDayNumber(Number(value));
    localStorage.setItem("dayNumber", value);
  }

  const provider = {
    startDate,
    setStartDate,
    dayNumber,
    setDayNumber: setDatNumberHandler,
  };

  return (
    <PlanContext.Provider value={provider}>
      {props.children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;
