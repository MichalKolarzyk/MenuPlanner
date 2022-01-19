import React from "react"

const ApiContext = React.createContext({
    tags: [],
    addTag: (tag) => {},
    removeTag: (id) => {},
    updateTag: (updateTag) => {}
})

export default ApiContext;