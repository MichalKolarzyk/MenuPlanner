import React, { useContext } from "react";
import classes from "./MessageLayer.module.css";
import ReactDom from "react-dom";
import LayersContext from "../../store/LayersContext";

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

const portalElement = document.getElementById("message");

const MessageLayer = () => {
  const layerContext = useContext(LayersContext);


  const title = layerContext.title;
  const message = layerContext.message;
  const closeHandle = () => {
    layerContext.setIsVisibleMessageLayer(false);
  }

  let result = null;

  if (layerContext.isVisibleMessageLayer) {
    result = (
      <React.Fragment>
        {ReactDom.createPortal(
          <Backdrop onClick={closeHandle} />,
          portalElement
        )}
        {ReactDom.createPortal(
          <ModalOverlay>
            <div>{title}</div>
            <div>{message}</div>
          </ModalOverlay>,
          portalElement
        )}
      </React.Fragment>
    );
  }

  return result;
};

export default MessageLayer;
