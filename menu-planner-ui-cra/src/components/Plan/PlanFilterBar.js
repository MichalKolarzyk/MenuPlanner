import { useContext } from "react";
import useFilterInput from "../../hooks/inputs/useFilterInput.js";
import useValidatror from "../../hooks/validators/useValidator";
import Input from "../../ui/inputs/Input";
import InputInline from "../../ui/inputs/InputInline.js";
import MultiCheckboxSelect from "../../ui/selects/MultiCheckboxSelect.js";
import RequireCreator from "../Requires/RequireCreator.js";
import PlanContext from "./context/PlanContext";

const PlanFilterBar = () => {
  const planContext = useContext(PlanContext);
  const daysInput = useFilterInput(
    planContext.dayNumber,
    planContext.setDayNumber,
    [useValidatror((value) => value <= 7), useValidatror((value) => value > 0)]
  );

  const dateInput = useFilterInput(
    planContext.startDate,
    planContext.setStartDate
  );
  return (
    <>
      <InputInline type="number" placeholder="Days" useInput={daysInput} />
      <InputInline type="date" placeholder="Start date" useInput={dateInput} />
      <RequireCreator>
        <MultiCheckboxSelect
          selected={planContext.users}
          setSelected={planContext.setUsers}
          options={[
            { value: 6, label: 6 },
            { value: 7, label: 7 },
            { value: 8, label: 8 },
          ]}
        />
      </RequireCreator>
    </>
  );
};

export default PlanFilterBar;
