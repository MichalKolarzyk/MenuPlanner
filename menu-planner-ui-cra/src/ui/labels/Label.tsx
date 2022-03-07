import React from "react";
import classes from "./Label.module.css";

const Label = (props : any) => {
  const text = props.text;
  const description = props.description;

  return (
    <div className={classes.div}>
      <span className={classes.description}>{description}</span>
      <label
        className={classes.label}
      >{text}</label>
    </div>
  );
};

export default Label;