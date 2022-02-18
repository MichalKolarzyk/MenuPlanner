import { useContext } from "react";
import useFilterInput from "../../hooks/inputs/useFilterInput.js";
import useValidatror from "../../hooks/useValidator";
import Input from "../../ui/inputs/Input";
import PlanContext from "./context/PlanContext";

const PlanFilterBar = () => {
  const planContext = useContext(PlanContext);
  const daysInput = useFilterInput(
    planContext.dayNumber,
    planContext.setDayNumber,
    [useValidatror((value) => value <= 7, "Wartosc musi byc mniejsza niz 7")]
  );
  return (
    <>
      <Input placeholder="Days" useInput={daysInput} />
    </>
  );
};

export default PlanFilterBar;
