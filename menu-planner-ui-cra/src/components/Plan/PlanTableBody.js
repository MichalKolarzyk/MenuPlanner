import useDateExtension from "../../hooks/extensions/useDateExtension";
import PlanDay from "./PlanDay";

const PlanTableBody = (props) => {
  const dateExtension = useDateExtension();

  const dates = props.dates;
  const dishTypes = props.dishTypes;
  const dishes = props.dishes;
  const users = props.users;

  const dishesFilterHandler = (day) => {
    if (!dishes) {
      return [];
    }
    return dishes.filter((d) => dateExtension.isEquas(new Date(d.date), day))
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
