import DishAddPage from "../Dish/DishAddPage";
import PlanSingleDish from "./PlanSingleDish";
import classes from "./PlanCell.module.css";
import useFormLayer from "../../store/formLayer/useFormLayer";

const PlanCell = (props) => {
  const dishType = props.dishType;
  const dishes = props.dishes;
  const user = props.user;
  const date = props.date;

  const formLayer = useFormLayer();

  const onClickHandler = () => {
    formLayer.show("Dodaj danie",
      <DishAddPage
        dishes={dishes}
        user={user}
        date={date}
        dishType={dishType}
      />
    );
  };

  const view = dishes.map((d, i) => <PlanSingleDish key={i} dish={d} />);
  return (
    <td onClick={onClickHandler} className={classes.cell}>
      {view}
    </td>
  );
};

export default PlanCell;
