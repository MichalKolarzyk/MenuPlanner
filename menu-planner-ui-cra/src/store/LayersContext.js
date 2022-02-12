import React from "react"

const LayersContext = React.createContext({
    isVisibleFormLayer: false,
    setIsVisibleFormLayer: (value) => {},
    form : null,
    setForm: (formElement) => {},
    isVisibleMessageLayer: false,
    setIsVisibleMessageLayer: (value) => {},
    title : "",
    setTitle: (value) => {},
    message : "",
    setMessage : (value) => {},
})

export default LayersContext;