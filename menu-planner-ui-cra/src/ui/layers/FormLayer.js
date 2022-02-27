import React from "react";
import classes from "./FormLayer.module.css";
import ReactDom from "react-dom";
import CloseButton from "../buttons/CloseButton";
import RequireTrue from "../../components/Requires/RequireTrue";
import FlexRow from "../flex/FlexRow";
import useFormLayer from "../../store/formLayer/useFormLayer";

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
  const formLayerHook = useFormLayer();

  const closeButtonClickHandler = () => {
    formLayerHook.close();
  };

  return (
    <RequireTrue value={formLayerHook.isVisible}>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>
          <FlexRow>
            <div>{formLayerHook.title}</div>
            <CloseButton onClick={closeButtonClickHandler} />
          </FlexRow>
          {formLayerHook.form}
        </ModalOverlay>,
        portalElement
      )}
    </RequireTrue>
  );
};

export default FormLayer;
