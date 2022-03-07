import PlanUser from "./PlanUser";
import DateExt from "../../extensions/DateExt";
import { useContext } from "react";
import PlanContext from "./context/PlanContext";
import React from "react";

const PlanDay = (props: any) => {
  const date = props.date;

  const planContext = useContext(PlanContext);
  const className = "p-3 text-sm text-gray-700 whitespace-nowrap";

  const view = planContext.users.map((u, index) => (
    <tr className="bg-gray-50" key={u}>
      {index === 0 && (
        <td rowSpan={planContext.users.length} className={className}>
          <div>{DateExt.getDayName(date)}</div>
          <div>({DateExt.toDateString(date)})</div>
        </td>
      )}
      {<PlanUser key={index} date={date} user={u} />}
    </tr>
  ));

  return <>{view}</>;
};

export default PlanDay;
