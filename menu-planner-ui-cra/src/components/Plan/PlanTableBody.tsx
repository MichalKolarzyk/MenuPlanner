import PlanDay from "./PlanDay";
import { useContext } from "react";
import PlanContext from './context/PlanContext'
import React from "react";

const PlanTableBody = () => {
  const planContext = useContext(PlanContext);

  return (
    <tbody className="divide-y divide-gray-100">
      {planContext.dates.map((day : any, index : number) => (
        <PlanDay
          key={index}
          date={day}
        />
      ))}
    </tbody>
  );
};

export default PlanTableBody;
