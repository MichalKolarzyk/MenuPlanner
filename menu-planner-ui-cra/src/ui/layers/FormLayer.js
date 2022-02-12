import React, { useContext, useState } from "react";
import classes from "./FormLayer.module.css";
import ReactDom from "react-dom";
import LayersContext from "../../store/LayersContext";
import { FiXCircle } from "react-icons/fi";

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
  const layerContext = useContext(LayersContext);

  let children = null;
  if (layerContext.form) children = layerContext.form;
  const onBackdropClick = () => {
    layerContext.setIsVisibleFormLayer(false);
  };

  let result = null;

  if (layerContext.isVisibleFormLayer) {
    result = (
      <React.Fragment>
        {ReactDom.createPortal(
          <Backdrop />,
          portalElement
        )}
        {ReactDom.createPortal(
          <ModalOverlay>
            <div>
              <FiXCircle
                className="text-gray-300"
                size="1.5rem"
                onClick={onBackdropClick}
              />
            </div>
            {children}
          </ModalOverlay>,
          portalElement
        )}
      </React.Fragment>
    );
  }

  return result;
};

export default FormLayer;