import DishAddPage from "../Dish/DishAddPage";
import PlanSingleDish from "./PlanSingleDish";
import classes from "./PlanCell.module.css";
import useMessageLayer from "../../store/messageLayer/useMessageLayer";
import useFormLayer from "../../store/formLayer/useformLayer";

const PlanCell = (props) => {
  const dishType = props.dishType;
  const dishes = props.dishes;
  const user = props.user;
  const date = props.date;

  const messageLayer = useMessageLayer();
  const formLayer = useFormLayer();

  const onClickHandler = () => {
    if (dishes.length > 0) {
      messageLayer.show(
        "Informacja",
        "W obecnej wersji nie mozna dodac 2 posiłków"
      );
      return;
    }

    formLayer.show(<DishAddPage user={user} date={date} dishType={dishType} />);
  };

  const view = dishes.map((d, i) => <PlanSingleDish key={i} dish={d} />);
  return (
    <td onClick={onClickHandler} className={classes.cell}>
      {view}
    </td>
  );
};

export default PlanCell;
