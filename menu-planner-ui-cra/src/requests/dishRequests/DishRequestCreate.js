class DishRequestCreate {
    constructor(dishBody){
        this.methodName = "Post"
        this.url = "/api/dish"
        this.body = dishBody
    }
}

export default DishRequestCreate;