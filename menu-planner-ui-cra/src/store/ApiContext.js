import React from "react"

const ApiContext = React.createContext({
    baseUrl: "",
    setBaseUrl: (newUrl) => {},
    token: "",
    setToken: (newToken) => {},
    isLoggin: () => {},
})

export default ApiContext;