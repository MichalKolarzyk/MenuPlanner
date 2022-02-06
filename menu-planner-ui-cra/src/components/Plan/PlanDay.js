import PlanUser from "./PlanUser";

const PlanDay = (props) => {
  const date = props.date;
  const dishes = props.dishes;
  const users = props.users;
  const dishTypes = props.dishTypes;

  const className = "p-3 text-sm text-gray-700 whitespace-nowrap";
  const view = users.map((u, index) => (
    <>
      {index === 0 && <td rowspan={users.length} className={className}>{date.toDateString()}</td>}
      <PlanUser
        key={u}
        user={u}
        dishTypes={dishTypes}
        dishes={dishes.filter((d) => d.userId === u)}
      />
    </>
  ));
  return (
    <tr className="bg-gray-50">
      {view}
    </tr>
  );
};

export default PlanDay;
