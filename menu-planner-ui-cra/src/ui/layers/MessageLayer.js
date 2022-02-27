import React from "react";
import classes from "./MessageLayer.module.css";
import ReactDom from "react-dom";
import RequireTrue from "../../components/Requires/RequireTrue";
import useMessageLayer from "../../store/messageLayer/useMessageLayer";

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
  const messageLayerHook = useMessageLayer();
  const closeHandle = () => {
    messageLayerHook.close();
  };

  return (
    <RequireTrue value={messageLayerHook.isVisible}>
      {ReactDom.createPortal(<Backdrop onClick={closeHandle} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>
          <div>{messageLayerHook.title}</div>
          <div>{messageLayerHook.message}</div>
        </ModalOverlay>,
        portalElement
      )}
    </RequireTrue>
  );
};

export default MessageLayer;
