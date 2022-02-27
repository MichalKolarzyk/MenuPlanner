import PlanDay from "./PlanDay";
import DateExt from "../../extensions/DateExt";

const PlanTableBody = (props) => {
  const dates = props.dates;
  const dishTypes = props.dishTypes;
  const dishes = props.dishes;
  const users = props.users;

  const dishesFilterHandler = (day) => {
    if (!dishes) {
      return [];
    }
    return dishes.filter((d) => DateExt.isEquas(new Date(d.date), day))
  };

  return (
    <tbody className="divide-y divide-gray-100">
      {dates.map((day, index) => (
        <PlanDay
          key={index}
          date={day}
          dishTypes={dishTypes}
          users={users}
          dishes={dishesFilterHandler(day)}
        />
      ))}
    </tbody>
  );
};

export default PlanTableBody;
