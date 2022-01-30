import React from "react"

const ApiContext = React.createContext({
    baseUrl: "",
    setBaseUrl: (newUrl) => {},
    token: "",
    setToken: (newToken) => {},
    authorizationMethod: "",
    setAuthorizationMethod: (newAuthorizationMethod) => {},
    isLoggin: () => {},
    logout: () => {},
})

export default ApiContext;