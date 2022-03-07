class StepRequestGet {
    methodName : string;
    url : string;

    constructor(recipeId : number){
        this.methodName = "GET";
        this.url = `/api/recipe/${recipeId}/step`;
    }
}

export default StepRequestGet;