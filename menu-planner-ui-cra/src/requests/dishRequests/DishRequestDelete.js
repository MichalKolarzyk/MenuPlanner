class DishRequestDelete {
    constructor(dishId){
        this.methodName = "Delete"
        this.url = `/api/dish/${dishId}`
    }
}

export default DishRequestDelete;