import PlanDay from "./PlanDay";

const PlanTableBody = (props) => {
  const dates = props.dates;
  const dishTypes = props.dishTypes;
  const dishes = props.dishes;
  const users = props.users;

  return <tbody className="divide-y divide-gray-100">
    {dates.map((day) => (
      <PlanDay
        key={day.getDate()}
        date={day}
        dishTypes={dishTypes}
        users={users}
        dishes={dishes.filter(
          (d) => new Date(d.date).getTime() === day.getTime()
        )}
      />
    ))}
  </tbody>;
};

export default PlanTableBody;
