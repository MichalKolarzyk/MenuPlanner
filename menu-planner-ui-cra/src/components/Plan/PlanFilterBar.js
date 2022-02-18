import { useContext } from "react";
import useBindInput from "../../hooks/useBindInput";
import useValidatror from "../../hooks/useValidator";
import Input from "../../ui/inputs/Input";
import PlanContext from "./context/PlanContext";

const PlanFilterBar = () => {
    const planContext = useContext(PlanContext);
    const daysInput = useBindInput(planContext.dayNumber, planContext.setDayNumber, [
        useValidatror((value) => value <= 7)
    ]);
    return(
        <>
            <Input placeholder="Days" useInput={daysInput}/>
        </>
    )
}

export default PlanFilterBar;