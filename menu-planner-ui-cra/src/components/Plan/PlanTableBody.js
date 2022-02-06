import PlanDay from "./PlanDay";

const PlanTableBody = (props) => {
  const dates = props.dates;
  const dishTypes = props.dishTypes;
  const dishes = props.dishes;
  const users = props.users;

  const dishesFilterHandler = (day) => {
    if (!dishes) {
      return [];
    }
    return dishes.filter((d) => new Date(d.date).getTime() === day.getTime())
  };

  return (
    <tbody className="divide-y divide-gray-100">
      {dates.map((day) => (
        <PlanDay
          key={day.getDate()}
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
