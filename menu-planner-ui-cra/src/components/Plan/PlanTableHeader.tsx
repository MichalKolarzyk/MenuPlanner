import React from "react";
import { useContext } from "react";
import PlanContext from "./context/PlanContext";

const PlanTableHeader = (props : any) => {
  const planContext = useContext(PlanContext);

  const thStandard = "p-3 text-sm font-semibold tracking-wide text-left";
  
  return (
      <thead className="bg-red-400 border-b">
        <tr>
          <th className={thStandard}></th>
          {true && <th className={thStandard}>Użytkownik</th>}
          {planContext.dishTypes.map((dt  : any, i : number) => (
            <th key={i} className={thStandard}>
              {dt.name}
            </th>
          ))}
        </tr>
      </thead>
  );
};

export default PlanTableHeader;
