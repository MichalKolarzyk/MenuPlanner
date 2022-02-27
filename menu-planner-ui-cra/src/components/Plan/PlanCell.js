import DishAddPage from "../Dish/DishAddPage";
import PlanSingleDish from "./PlanSingleDish";
import classes from "./PlanCell.module.css";
import { useDispatch } from "react-redux";
import { messageActions } from "../../store/messageSlice";
import { formActions } from "../../store/formSlice";

const PlanCell = (props) => {
  const dishType = props.dishType;
  const dishes = props.dishes;
  const user = props.user;
  const date = props.date;

  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (dishes.length > 0) {
      dispatch(
        messageActions.show({
          title: "Informacja",
          message: "W obecnej wersji nie mozna dodac 2 posiłków",
        })
      );
      return;
    }
    dispatch(
      formActions.show(
        <DishAddPage user={user} date={date} dishType={dishType} />
      )
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
