class StepRequestGetById {
    methodName : string;
    url : string;

    constructor(recipeId : number, stepId : number){
        this.methodName = "GET";
        this.url = `/api/recipe/${recipeId}/step/${stepId}`;
    }
}

export default StepRequestGetById;