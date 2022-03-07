import React from "react"

const PlanContext = React.createContext({
    startDate: null,
    setStartDate: {},
    dayNumber: 0,
    setDayNumber: {},
    users: [],
    setUsers: {},
    dishTypes: [],
    setDishTypes: {},
    dishes: [],
    setDishes: {},
    dish: {},
    setDish: {},
    dates: [],
})

export default PlanContext;