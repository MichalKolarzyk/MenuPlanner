import useLayers from "../../hooks/useLayers";
import DishAddPage from "../Dish/DishAddPage";
import PlanSingleDish from "./PlanSingleDish";

const PlanCell = (props) => {
  const dishType = props.dishType;
  const dishes = props.dishes;
  const user = props.user;
  const date = props.date;
  const className = "p-3 text-sm text-gray-700 whitespace-nowrap";
  const layers = useLayers();

  const onClickHandler = () =>{
    if(dishes.length > 0){
      layers.showMessage("Informacja", "W obecnej wersji nie mozna dodac 2 posiłków")
      return;
    }
    layers.showForm(<DishAddPage user={user} date={date} dishType={dishType}/>)
  }

  const view = dishes.map((d) => <PlanSingleDish key={d} dish={d} />);
  return (
    <td onClick={onClickHandler} className={className}>
      {view}
    </td>
  );
};

export default PlanCell;
