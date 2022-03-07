class DishRequestDelete {
    methodName : string;
    url : string;

    constructor(dishId : number){
        this.methodName = "Delete"
        this.url = `/api/dish/${dishId}`
    }
}

export default DishRequestDelete;