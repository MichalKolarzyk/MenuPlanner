import React, { useState } from "react"
import ApiContext from "./ApiContext"

const ApiProvider = (props) => {
    const [token, setToken] = useState('');
    const [authorizationMethod, setAuthorizationMethod] = useState('');
    const [baseUrl, setBaseUrl] = useState("http://localhost:5000")


    const isLogginHandler = () => {
        if (token !== "") {
            return true;
        }
        return false;
    }

    const setTokenHandler = (newToken) => setToken(newToken);

    const setBaseUrlHandler = (newUrl) => setBaseUrl(newUrl);

    const apiContext = {
        baseUrl: baseUrl,
        setBaseUrl: setBaseUrlHandler,
        token: token,
        setToken: setTokenHandler,
        authorizationMethod: authorizationMethod,
        setAuthorizationMethod: setAuthorizationMethod,
        isLoggin: isLogginHandler,
    }

    return <ApiContext.Provider value={apiContext}>
        {props.children}
    </ApiContext.Provider>
}

export default ApiProvider