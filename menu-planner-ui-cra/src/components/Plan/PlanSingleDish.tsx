import React from "react";
import { useState } from "react";
import { FiXCircle } from "react-icons/fi";

const PlanSingleDish = (props : any) => {
  const dish = props.dish;

  const [isHovered, setIsHovered] = useState(false);

  let view = <div></div>;
  if (view) {
    view = (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>{dish.recipeName}</span>
        <span>, </span>
        <span>{dish.portions}</span>
      </div>
    );
  }

  return view;
};

export default PlanSingleDish;
