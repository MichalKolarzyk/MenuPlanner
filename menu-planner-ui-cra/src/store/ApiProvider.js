import React, { useState } from "react"
import ApiContext from "./ApiContext"

const ApiProvider = (props) => {
    const [token, setToken] = useState("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjgiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4gQWRtaW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsIkRhdGVPZkJpcnRoIjoiMTk5My0xMC0yMyIsIk5hdGlvbmFsaXR5IjoiUG9sYW5kIiwiZXhwIjoxNjUxMDY3NjM5LCJpc3MiOiJodHRwOi8vcmVzdGF1cmFudGFwaS5jb20iLCJhdWQiOiJodHRwOi8vcmVzdGF1cmFudGFwaS5jb20ifQ.USikUaK7O-kKUAJovdLbQ1nxoT3waia6zpHIIX9VweE")
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
        isLoggin: isLogginHandler,
    }

    return <ApiContext.Provider value={apiContext}>
        {props.children}
    </ApiContext.Provider>
}

export default ApiProvider