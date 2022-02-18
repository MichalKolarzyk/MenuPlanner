import { useContext } from "react";
import useFilterInput from "../../hooks/inputs/useFilterInput.js";
import useValidatror from "../../hooks/useValidator";
import Input from "../../ui/inputs/Input";
import MultiCheckboxSelect from "../../ui/selects/MultiCheckboxSelect.js";
import PlanContext from "./context/PlanContext";

const PlanFilterBar = () => {
  const planContext = useContext(PlanContext);
  const daysInput = useFilterInput(
    planContext.dayNumber,
    planContext.setDayNumber,
    [
      useValidatror((value) => value <= 7, "Wartosc musi byc mniejsza niz 7"),
      useValidatror((value) => value > 0, "Wartosc musi byc wieksza niz 0"),
    ]
  );
  return (
    <>
      <Input className="inline-block" placeholder="Days" useInput={daysInput} />
      <MultiCheckboxSelect
        selected={planContext.users}
        setSelected={planContext.setUsers}
        options={[
          { value: 6, label: 6 },
          { value: 8, label: 8 },
        ]}
      />
    </>
  );
};

export default PlanFilterBar;
