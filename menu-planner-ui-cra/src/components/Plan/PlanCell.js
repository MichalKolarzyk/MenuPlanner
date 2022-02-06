import PlanSingleDish from "./PlanSingleDish";

const PlanCell = (props) => {
  const dishes = props.dishes;
  const className = "p-3 text-sm text-gray-700 whitespace-nowrap";

  const view = dishes.map((d) => <PlanSingleDish key={d} dish={d} />);
  return <td className={className}>{view}</td>;
};

export default PlanCell;
