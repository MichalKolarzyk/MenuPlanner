import DishAddPage from "../Dish/DishAddPage";
import PlanSingleDish from "./PlanSingleDish";
import classes from "./PlanCell.module.css";
import useFormLayer from "../../store/formLayer/useFormLayer";
import { useContext } from "react";
import PlanContext from "./context/PlanContext";
import DateExt from "../../extensions/DateExt";
import React from "react";

const PlanCell = (props : any) => {
  const dishType = props.dishType;
  const user = props.user;
  const date = props.date;

  const planContext = useContext(PlanContext);

  const getDishes = () => {
    if (!planContext.dishes) {
      return [];
    }
    return planContext.dishes.filter(
      (d : any) =>
        DateExt.isEquas(new Date(d.date), date) &&
        d.userId === user &&
        d.dishTypeId === dishType.id
    );
  };

  const cellDishes = getDishes();

  const formLayer = useFormLayer();

  const onClickHandler = () => {
    formLayer.show(
      "Dodaj danie",
      <DishAddPage
        dishes={cellDishes}
        user={user}
        date={date}
        dishType={dishType}
      />
    );
  };

  const view = cellDishes.map((d, i) => <PlanSingleDish key={i} dish={d} />);
  return (
    <td onClick={onClickHandler} className={classes.cell}>
      {view}
    </td>
  );
};

export default PlanCell;
