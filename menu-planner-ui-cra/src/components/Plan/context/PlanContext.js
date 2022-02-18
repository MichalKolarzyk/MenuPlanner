import React from "react"

const PlanContext = React.createContext({
    startDate: null,
    setStartDate: {},
    dayNumber: 0,
    setDayNumber: {},
})

export default PlanContext;