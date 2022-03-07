class DishRequestGetList {
    methodName : string;
    url : string;
    body : any;

    constructor(dishBody : any){
        this.methodName = "Post"
        this.url = "/api/dish/getlist"
        this.body = dishBody
    }
}

export default DishRequestGetList;