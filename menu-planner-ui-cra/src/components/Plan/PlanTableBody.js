import PlanDay from "./PlanDay";
import DateExt from "../../extensions/DateExt";
import { useContext } from "react";
import PlanContext from './context/PlanContext'

const PlanTableBody = () => {
  const planContext = useContext(PlanContext);

  return (
    <tbody className="divide-y divide-gray-100">
      {planContext.dates.map((day, index) => (
        <PlanDay
          key={index}
          date={day}
        />
      ))}
    </tbody>
  );
};

export default PlanTableBody;
