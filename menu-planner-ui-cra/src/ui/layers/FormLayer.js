import React from "react";
import classes from "./FormLayer.module.css";
import ReactDom from "react-dom";
import CloseButton from "../buttons/CloseButton";
import RequireTrue from "../../components/Requires/RequireTrue";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../store/formSlice";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("form");

const FormLayer = () => {
  const dispach = useDispatch();
  const formLayer = useSelector(store => store.formLayer)

  const closeButtonClickHandler = () => {
    dispach(formActions.close());
  };

  return (
    <RequireTrue value={formLayer.isVisible && formLayer.form}>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>
          <CloseButton onClick={closeButtonClickHandler} />
          {formLayer.form}
        </ModalOverlay>,
        portalElement
      )}
    </RequireTrue>
  );
};

export default FormLayer;
