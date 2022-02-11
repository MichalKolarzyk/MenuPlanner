import PlanCell from "./PlanCell";

const PlanUser = (props) => {
  const dishes = props.dishes;
  const user = props.user;
  const dishTypes = props.dishTypes;

  const className = "p-3 text-sm text-gray-700 whitespace-nowrap"; 

  const view = dishTypes.map((dt) => (
    <PlanCell key={dt.id} dishes={dishes.filter((d) => d.dishTypeId === dt.id)} />
  ));

  return (
    <>
      {true && <td className={className}>{user}</td>}
      {view}
    </>
  );
};

export default PlanUser;
