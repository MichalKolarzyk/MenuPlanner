import React, { useState } from "react";
import LayersContext from "./LayersContext";

const LayersProvider = (props) => {
  const [isVisibleFormLayer, setIsVisibleFormLayer] = useState(false);
  const [form, setForm] = useState(null);

  const [isVisibleMessageLayer, setIsVisibleMessageLayer] = useState(false);
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")

  const layersContext = {
    isVisibleFormLayer,
    setIsVisibleFormLayer,
    form,
    setForm,
    isVisibleMessageLayer,
    setIsVisibleMessageLayer,
    title,
    setTitle,
    message,
    setMessage,
  };

  return (
    <LayersContext.Provider value={layersContext}>
      {props.children}
    </LayersContext.Provider>
  );
};

export default LayersProvider;