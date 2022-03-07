import classes from './DishItem.module.css'
import RemoveButton from "../../ui/buttons/RemoveButton";
import useDishController from "../../controllers/useDishController";
import { useState } from "react";
import RequireTrue from "../Requires/RequireTrue";
import React from "react";

const DishItem = (props : any) => {
  const dishController = useDishController();
  const dish = props.dish;

  const [isVisible, setIsVisible] = useState(true);

  const deleteHandler = () => {
    dishController.deleteDish(dish.id);
    setIsVisible(false);
  };

  return (
    <RequireTrue value={isVisible}>
      <li className={classes.row}>
        <div>{dish.recipeName}</div>
        <div>
          <span>ilość: </span>
          <span>{dish.portions}</span>
        </div>
        <RemoveButton onClick={deleteHandler} />
      </li>
    </RequireTrue>
  );
};

export default DishItem;
