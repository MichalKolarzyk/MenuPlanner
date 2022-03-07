import React from "react";
import { useContext } from "react";
import PlanContext from "./context/PlanContext";
import PlanCell from "./PlanCell";

const PlanUser = (props : any) => {
  const user = props.user;
  const day = props.date;

  const planContext = useContext(PlanContext);
  const className = "p-3 text-sm text-gray-700 whitespace-nowrap";

  const view = planContext.dishTypes.map((dt, inedx) => (
    <PlanCell
      key={inedx}
      dishType={dt}
      date={day}
      user={user}
    />
  ));

  return (
    <>
      {true && <td className={className}>{user}</td>}
      {view}
    </>
  );
};

export default PlanUser;
