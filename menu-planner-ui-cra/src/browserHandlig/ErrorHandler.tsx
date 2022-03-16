import React from "react";
import { useEffect } from "react";
import useMessageLayer from "../store/messageLayer/useMessageLayer";

const ErrorHandler = (props: any) => {
  const messageLayer = useMessageLayer();

  useEffect(() => {
    window.onerror = (msg, url, line, col, error) => {
      console.log(msg);
      messageLayer.show("Error", msg.toString());
    };

    window.onunhandledrejection = (e: PromiseRejectionEvent) => {
      console.log(e);
      messageLayer.show("Error", e.reason.message);
    };
  }, []);

  return <>{props.children}</>;
};

export default ErrorHandler;
