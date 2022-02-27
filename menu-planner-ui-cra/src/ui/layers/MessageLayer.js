import React from "react";
import classes from "./MessageLayer.module.css";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "../../store/messageSlice";
import RequireTrue from "../../components/Requires/RequireTrue";

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
  const messageLayer = useSelector((store) => store.messageLayer);
  const dispatch = useDispatch();

  const title = messageLayer.title;
  const message = messageLayer.message;
  const closeHandle = () => {
    dispatch(messageActions.close());
  };

  return (
    <RequireTrue value={messageLayer.isVisible}>
      {ReactDom.createPortal(<Backdrop onClick={closeHandle} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>
          <div>{title}</div>
          <div>{message}</div>
        </ModalOverlay>,
        portalElement
      )}
    </RequireTrue>
  );
};

export default MessageLayer;
