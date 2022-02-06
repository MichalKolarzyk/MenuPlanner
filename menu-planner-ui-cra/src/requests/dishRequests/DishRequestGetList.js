class DishRequestGetList {
    constructor(dishBody){
        this.methodName = "Post"
        this.url = "/api/dish/getlist"
        this.body = dishBody
    }
}

export default DishRequestGetList;