import React from "react";
import RequireTrue from "../Requires/RequireTrue";
import DishItem from "./DishItem";
import classes from './DishList.module.css'

const DishList = (props : any) => {
  const dishes = props.dishes;

  return (
    <RequireTrue value={dishes && dishes.length > 0}>
      <ul className={classes.list}>
        {dishes.map((d : any) => (
          <DishItem dish={d} />
        ))}
      </ul>
    </RequireTrue>
  );
};

export default DishList;
