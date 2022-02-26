import useLayers from "../../hooks/useLayers";
import DishAddPage from "../Dish/DishAddPage";
import PlanSingleDish from "./PlanSingleDish";
import classes from "./PlanCell.module.css";
import { useDispatch } from "react-redux";
import { layerActions } from "../../store/layerSlice";

const PlanCell = (props) => {
  const dishType = props.dishType;
  const dishes = props.dishes;
  const user = props.user;
  const date = props.date;
  const layers = useLayers();

  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (dishes.length > 0) {
      dispatch(layerActions.showMessage({title: "Informacja", message: "test"}));
      // layers.showMessage(
      //   "Informacja",
      //   "W obecnej wersji nie mozna dodac 2 posiłków"
      // );
      return;
    }
    layers.showForm(
      <DishAddPage user={user} date={date} dishType={dishType} />
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
