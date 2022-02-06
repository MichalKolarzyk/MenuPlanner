import PlanUser from "./PlanUser";

const PlanDay = (props) => {
  const date = props.date;
  const dishes = props.dishes;
  const users = props.users;
  const dishTypes = props.dishTypes;

  const view = users.map((u) => (
    <PlanUser
      key={u}
      user={u}
      dishTypes={dishTypes}
      dishes={dishes.filter((d) => d.userId === u)}
    />
  ));
  return (
    <tr>
      <span>{date.toDateString()}</span>
      <span>{view}</span>
    </tr>
  );
};

export default PlanDay;
