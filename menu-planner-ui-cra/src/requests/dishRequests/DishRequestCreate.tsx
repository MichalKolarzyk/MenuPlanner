class DishRequestCreate {
    methodName : string;
    url : string;
    body : any;
    
    constructor(dishBody : any){
        this.methodName = "Post"
        this.url = "/api/dish"
        this.body = dishBody
    }
}

export default DishRequestCreate;